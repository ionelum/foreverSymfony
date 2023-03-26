<?php

namespace App\Form;

use App\Entity\Carousel;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class CarouselType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('title', TextType::class, [
            'required'=>false,
            'attr'=> [
                'placeholder'=>'Saisissez le nom d\'image'
            ],
            'label'=>'Nom d\'image'
        ])
        ->add('picture', FileType::class, [
            'required'=>false,
            'attr'=> [
                'placeholder'=>'Chargez une image format 16x7 (Example: 1920x800px)',
                'onChange'=>'loadFile(event)'
            ],
            'label'=>'Image a afficher',
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

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Carousel::class,
        ]);
    }
}
