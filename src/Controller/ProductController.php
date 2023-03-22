<?php

namespace App\Controller;

use App\Entity\Product;
use App\Form\ProductType;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/product")
 */
class ProductController extends AbstractController
{
    /**
    *@Route("/add", name="addProduct")
    */
    public function addProduct(Request $request, EntityManagerInterface $manager)
    {
    
        $product = new Product;
        
        $form = $this->createForm(ProductType::class, $product, ['add'=>true]);

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

            
            $product->setPicture($picture_bdd);
            
            $manager->persist($product);
            $manager->flush();

            $this->addFlash('success', 'Produit ajouté');

            return $this->redirectToRoute("listProduct");


        }


        
        return $this->render('product/addProduct.html.twig', [
            'form' => $form->createView()

        ]);
    }
    
    /**
     *
     *
     * @Route("/list", name="listProduct")
     */
    public function listProduct(ProductRepository $productRepository)
    {

        $products = $productRepository->findAll();
        


        return $this->render('product/listProduct.html.twig', [
            'products' => $products

        ]);
    }


    /**
     *
     * @Route("/edit/{id}", name="editProduct")
     */
    public function editProduct(Product $product, Request $request, EntityManagerInterface $manager)
    {

        
        $form=$this->createForm(ProductType::class, $product, ['edit'=>true]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){

            $picture_edit_file=$form->get('picture_edit')->getData();

            
            if ($picture_edit_file){

                $picture_bdd = date("Y-m-d-H-i-s") . "-" . $picture_edit_file->getClientOriginalName();

                unlink($this->getParameter('upload_directory').'/'.$product->getPicture());
                $picture_edit_file->move($this->getParameter('upload_directory'), $picture_bdd);

                $product->setPicture($picture_bdd);

            }

            $manager->persist($product);
            $manager->flush();

            $this->addFlash('success', 'Produit modifié');

            return $this->redirectToRoute('listProduct');

        }

        return $this->render('product/editProduct.html.twig', [
            'form'=>$form->createView(),
            'product'=>$product

        ]);
    }

    /**
     *
     * @Route("/delete/{id}", name="deleteProduct")
     */
    public function deleteProduct(Product $product, EntityManagerInterface $manager)
    {
        
        unlink($this->getParameter('upload_directory').'/'.$product->getPicture());

        $manager->remove($product);
        $manager->flush();

        $this->addFlash('success', 'Produit supprimé');

        return $this->redirectToRoute('listProduct');
    }
}