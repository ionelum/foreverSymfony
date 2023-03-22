<?php

namespace App\Controller;

use App\Entity\Category;
use App\Form\CategoryType;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     *
     * @Route("/category", name="category")
     * @Route("/editCategory/{id}", name="editCategory")
     */
    public function category(Request $request, EntityManagerInterface $manager, CategoryRepository $categoryRepository, $id = null)
    {
        
        $categories = $categoryRepository->findAll();

        
        if ($id) { 
            $category = $categoryRepository->find($id);

        } else {

            $category = new Category();
        }


        $form = $this->createForm(CategoryType::class, $category);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            $pictureFile = $form->get('picture_normal')->getData();
            $picture_bdd = date("Y-m-d-H-i-s") . "-" . $pictureFile->getClientOriginalName();
            try {
                
                $pictureFile->move($this->getParameter('upload_directory'), $picture_bdd);

            } catch (FileException $e) {
                dd($e);
            }

            $category->setPictureNormal($picture_bdd);

            $pictureFile = $form->get('picture_wide')->getData();
            $picture_bdd = date("Y-m-d-H-i-s") . "-" . $pictureFile->getClientOriginalName();
            try {
                
                $pictureFile->move($this->getParameter('upload_directory'), $picture_bdd);

            } catch (FileException $e) {
                dd($e);
            }

            $category->setPictureWide($picture_bdd);

            $manager->persist($category);
            
            $manager->flush();
            
            if ($id) {
                $this->addFlash('success', 'Catégorie modifiée');

            } else {

                $this->addFlash('success', 'Catégorie ajoutée');
            }


            return $this->redirectToRoute('category');

        }

        return $this->render('admin/category.html.twig', [
            'form' => $form->createView(),
            'categories' => $categories

        ]);
    }
}
