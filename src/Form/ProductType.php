<?php

namespace App\Form;

use App\Entity\Product;
use App\Entity\Category;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        if ($options['add']==true){

        $builder
            ->add('category', EntityType::class, [
                "class"=>Category::class,
                "choice_label"=>"title",
                "label"=>"Catégorie"
            ])
            ->add('title', TextType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez le nom du produit'
                ],
                'label'=>'Nom du produit'
            ])
            ->add('ref', TextType::class)
            ->add('description', TextareaType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez une description du produit'
                ],
                'label'=>'Description du produit'
            ])
            ->add('volume', TextType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez le volume ou le poids du produit'
                ],
                'label'=>'Volume ou poids du produit'
            ])
            ->add('content', TextareaType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez les composants principaux du produit'
                ],
                'label'=>'Composants principaux du produit'
            ])
            ->add('mode', TextareaType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez les conseils d\'utilisation'
                ],
                'label'=>'Conseils d\'utilisation'
            ])
            ->add('price', NumberType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez le prix du produit'
                ],
                'label'=>'Prix du produit'
            ])
            ->add('picture', FileType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Chargez une photo',
                    'onChange'=>'loadFile(event)'
                ],
                'label'=>'Photo du produit',
                'constraints'=>[
                    new File([
                        'mimeTypes'=>[
                            "image/png",
                            "image/jpg",
                            "image/jpeg",
                            "image/webp",
                            "image/gif"
                        ],
                        'mimeTypesMessage'=>"Extensions autorisées: png, jpg, jpeg, webp et gif"
                        ])
                ]
            ])
            ->add('Enregistrer', SubmitType::class)
        ;

    }else{
        $builder
            ->add('category', EntityType::class, [
                "class"=>Category::class,
                "choice_label"=>"title",
                "label"=>"Catégorie"
            ])
            ->add('title', TextType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez le nom du produit'
                ],
                'label'=>'Nom du produit'
            ])
            ->add('ref', TextType::class)
            ->add('description', TextareaType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez une description du produit'
                ],
                'label'=>'Description du produit'
            ])
            ->add('volume', TextType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez le volume ou le poids du produit'
                ],
                'label'=>'Volume ou poids du produit'
            ])
            ->add('content', TextareaType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez les composants principaux du produit'
                ],
                'label'=>'Composants principaux du produit'
            ])
            ->add('mode', TextareaType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez les conseils d\'utilisation'
                ],
                'label'=>'Conseils d\'utilisation'
            ])
            ->add('price', NumberType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez le prix du produit'
                ],
                'label'=>'Prix du produit'
            ])
            ->add('picture_edit', FileType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez le nom du produit',
                    'onChange'=>'loadFile(event)'
                ],
                'label'=>'Photo du produit',
                'constraints'=>[
                    new File([
                        'mimeTypes'=>[
                            "image/png",
                            "image/jpg",
                            "image/jpeg",
                            "image/webp",
                            "image/gif"
                        ],
                        'mimeTypesMessage'=>"Extensions autorisées: png, jpg, jpeg, webp et gif"
                        ])
                ]
            ])
            ->add('Enregistrer', SubmitType::class)
        ;
    }

    }




    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
            'add'=>false,
            'edit'=>false
        ]);
    }
}
