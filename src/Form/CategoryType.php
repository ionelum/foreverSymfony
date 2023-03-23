<?php

namespace App\Form;

use App\Entity\Category;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;

class CategoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        if ($options['add']==true){

        $builder
            ->add('title', TextType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez le titre de la catégorie'
                ],
                'label'=>'Titre'
            ])
            ->add('alias', TextType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez un alias court pour de la catégorie'
                ],
                'label'=>'Alias'
            ])
            ->add('picture_normal', FileType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Chargez une photo format 7x4 (Example: 700x400 px)',
                    'onChange'=>'loadFile1(event)'
                ],
                'label'=>'Photo du produit format 7x4',
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
            ->add('picture_wide', FileType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Chargez une photo format 16x7 (Example: 1920x800 px)',
                    'onChange'=>'loadFile2(event)'
                ],
                'label'=>'Photo du produit format 16x7',
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
            ->add('title', TextType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez le titre de la catégorie'
                ],
                'label'=>'Titre'
            ])
            ->add('alias', TextType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Saisissez un alias court pour de la catégorie'
                ],
                'label'=>'Alias'
            ])
            ->add('picture_edit_normal', FileType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Chargez une photo format 7x4 (Example: 700x400 px)',
                    'onChange'=>'loadFile1(event)'
                ],
                'label'=>'Photo du produit format 7x4',
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
            ->add('picture_edit_wide', FileType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Chargez une photo format 16x7 (Example: 1920x800 px)',
                    'onChange'=>'loadFile2(event)'
                ],
                'label'=>'Photo du produit format 16x7',
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
            'data_class' => Category::class,
            'add'=>false,
            'edit'=>false
        ]);
    }
}
