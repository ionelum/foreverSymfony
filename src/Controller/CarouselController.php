<?php

namespace App\Controller;

use App\Entity\Carousel;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CarouselController extends AbstractController
{
        /**
    *@Route("/add", name="addCarousel")
    */
    public function addCarousel(Request $request, EntityManagerInterface $manager)
    {
    
        $carousel = new Carousel;
        
        $form = $this->createForm(CarouselType::class, $carousel);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid())
        {

            $pictureFile = $form->get('picture')->getData();

            $picture_bdd = date("Y-m-d-H-i-s") . "-" . $pictureFile->getClientOriginalName();

            try {
                
                $pictureFile->move($this->getParameter('upload_directory'), $picture_bdd);

            } catch (FileException $e) {
                dd($e);
            }

            
            $carousel->setPicture($picture_bdd);
            
            $manager->persist($carousel);
            $manager->flush();

            $this->addFlash('success', 'Photo ajouté au carousel');

            return $this->redirectToRoute("addCarousel");


        }


        
        return $this->render('admin/addCarousel.html.twig', [
            'form' => $form->createView()

        ]);
    }
}
