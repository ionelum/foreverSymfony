<?php

namespace App\Form;

use App\Entity\Product;
use App\Entity\Review;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ReviewType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('content', TextareaType::class, [
                'required'=>false,
                'attr'=> [
                    'placeholder'=>'Votre avis ici'
                ],
                'label'=>'Avis du produit'
            ])
            // ->add('date', DateType::class)
            // ->add('user', EntityType::class, [
            //     "class"=>User::class,
            //     "choice_label"=>"email",
            //     "label"=>"Useremail"
            // ])
            // ->add('product', EntityType::class, [
            //     "class"=>Product::class,
            //     "choice_label"=>"title",
            //     "label"=>"Produit"
            // ])
            ->add('Enregistrer', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Review::class,
        ]);
    }
}
