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
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/category")
 */
class AdminController extends AbstractController
{
    /**
     *
     * @Route("/add", name="addCategory")
     */
    public function addCategory(Request $request, EntityManagerInterface $manager)
    {
        
        $category = new Category();
        
        $form = $this->createForm(CategoryType::class, $category, ['add'=>true]);

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

            $this->addFlash('success', 'Catégorie ajoutée');
            
            return $this->redirectToRoute('listCategory');

        }

        return $this->render('admin/addCategory.html.twig', [
            'form' => $form->createView()

        ]);
    }

    /**
     *
     * @Route("/edit/{id}", name="editCategory")
     */
    public function editCategory(Category $category, Request $request, EntityManagerInterface $manager)
    {
        
        $form = $this->createForm(CategoryType::class, $category, ['edit'=>true]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            $picture_edit_file_normal = $form->get('picture_edit_normal')->getData();

            if ($picture_edit_file_normal){

                $picture_bdd = date("Y-m-d-H-i-s") . "-" . $picture_edit_file_normal->getClientOriginalName();

                unlink($this->getParameter('upload_directory').'/'.$category->getPictureNormal());

                $picture_edit_file_normal->move($this->getParameter('upload_directory'), $picture_bdd);

                $category->setPictureNormal($picture_bdd);

            }

            $picture_edit_file_wide = $form->get('picture_edit_wide')->getData();

            if ($picture_edit_file_wide){

                $picture_bdd = date("Y-m-d-H-i-s") . "-" . $picture_edit_file_wide->getClientOriginalName();

                unlink($this->getParameter('upload_directory').'/'.$category->getPictureWide());

                $picture_edit_file_wide->move($this->getParameter('upload_directory'), $picture_bdd);

                $category->setPictureWide($picture_bdd);

            }

            $manager->persist($category);
            
            $manager->flush();

            $this->addFlash('success', 'Catégorie modifié');
            
            return $this->redirectToRoute('listCategory');

        }

        return $this->render('admin/editCategory.html.twig', [
            'form' => $form->createView(),
            'category'=>$category

        ]);
    }

    /**
     *
     * @Route("/list", name="listCategory")
     */
    public function listProduct(CategoryRepository $categoryRepository)
    {

        $categories = $categoryRepository->findAll();

        return $this->render('admin/listCategory.html.twig', [
            'categories' => $categories

        ]);
    }

    /**
     *
     * @Route("/delete/{id}", name="deleteCategory")
     */
    public function deleteCategory(Category $category, EntityManagerInterface $manager)
    {
        
        unlink($this->getParameter('upload_directory').'/'.$category->getPictureNormal());
        unlink($this->getParameter('upload_directory').'/'.$category->getPictureWide());

        $manager->remove($category);
        $manager->flush();

        $this->addFlash('success', 'Category supprimé');

        return $this->redirectToRoute('listCategory');
    }

}
