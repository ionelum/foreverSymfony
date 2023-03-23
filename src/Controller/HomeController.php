<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\ProductRepository;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
    *@Route("/home", name="home")
    */
    public function home(ProductRepository $productRepository, CategoryRepository $categoryRepository)
    {
        $products = $productRepository->findAll();
        $categories = $categoryRepository->findAll();
    
    
    
    
    return $this->render('home/home.html.twig', [
        'products' => $products,
        'categories' => $categories
    ]);
    }
    
    // /**
    // *@Route("/home/category", name="home_category")
    // */
    // public function home(ProductRepository $productRepository, CategoryRepository $categoryRepository)
    // {
    //     $products = $productRepository->findAll();
    //     $categories = $categoryRepository->findAll();
    
    
    
    
    // return $this->render('home/homeCategories.html.twig', [
    //     'products' => $products,
    //     'categories' => $categories
    // ]);

    // /**
    // *@Route("", name="base")
    // */
    // public function base(ProductRepository $productRepository, CategoryRepository $categoryRepository, Category $category)
    // {
    //     $products = $productRepository->findAll();
    //     $categories = $categoryRepository->findAll();
    
    
    
    
    // return $this->render('base.html.twig', [
    //     'products' => $products,
    //     'categories' => $categories
    // ]);
    // }
    
}
