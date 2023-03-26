<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CarouselRepository;
use App\Repository\ProductRepository;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
    *@Route("/", name="accueil")
    */
    public function home(ProductRepository $productRepository, CategoryRepository $categoryRepository, CarouselRepository $carouselRepository)
    {
        $products = $productRepository->findAll();
        $categories = $categoryRepository->findAll();
        $carousels = $carouselRepository->findAll();
    
    
    
    
    return $this->render('home/accueil.html.twig', [
        'products' => $products,
        'categories' => $categories,
        'carousels' => $carousels
    ]);
    }

    // /**
    // *@Route("/accueil", name="accueil")
    // */
    // public function accueil(CategoryRepository $categoryRepository, CarouselRepository $carouselRepository)
    // {
        
    //     $categories = $categoryRepository->findAll();
    //     $carousels = $carouselRepository->findAll();
    
    
    
    
    // return $this->render('home/accueil.html.twig', [
        
    //     'categories' => $categories,
    //     'carousels' => $carousels
    // ]);
    // }
    
    
}
