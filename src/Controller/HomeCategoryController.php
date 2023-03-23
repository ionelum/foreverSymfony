<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\ProductRepository;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeCategoryController extends AbstractController
{
    /**
    *@Route("/home_category", name="homeCategories")
    */
    public function homeCategories(ProductRepository $productRepository, CategoryRepository $categoryRepository)
    {
        $products = $productRepository->findAll();
        $categories = $categoryRepository->findAll();
    
    
    
    
    return $this->render('home_category/homeCategories.html.twig', [
        'products' => $products,
        'categories' => $categories
    ]);
    }

    /**
    *@Route("/home_category/{id}", name="homeCategory")
    */
    public function homeCategory(ProductRepository $productRepository, Category $category)
    {
        
        $products = $productRepository->findBy(['category' => $category]);
    
    return $this->render('home_category/homeCategory.html.twig', [
        'products' => $products,
        'category' => $category
    ]);
    }

    
}
