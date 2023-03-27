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
    *@Route("/categories", name="homeCategories")
    */
    public function homeCategories(ProductRepository $productRepository, CategoryRepository $categoryRepository)
    {
        $products = $productRepository->findAll();
        $categories = $categoryRepository->findAll();
    
    
    
    
    return $this->render('home/categories.html.twig', [
        'products' => $products,
        'categories' => $categories
    ]);
    }

    /**
    *@Route("/category/{id}", name="homeCategory")
    */
    public function homeCategory(ProductRepository $productRepository, Category $category, CategoryRepository $categoryRepository)
    {
        
        $products = $productRepository->findBy(['category' => $category]);
        $categories = $categoryRepository->findAll();

        // dd($products);
    
    return $this->render('home/category.html.twig', [
        'products' => $products,
        'category' => $category,
        'categories' => $categories
    ]);
    }

    
}
