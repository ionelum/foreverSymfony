<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use App\Entity\Review;
use App\Entity\User;
use App\Form\ReviewType;
use App\Repository\CarouselRepository;
use App\Repository\ProductRepository;
use App\Repository\CategoryRepository;
use App\Repository\ReviewRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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

    /**
    *@Route("/product/{id}", name="homeProduct")
    */
    public function homeProduct(CategoryRepository $categoryRepository, Product $product, ProductRepository $productRepository, $id = null, Request $request, EntityManagerInterface $manager, ReviewRepository $reviewRepository)
    {
        
        $product = $productRepository->find($id);

        $categories = $categoryRepository->findAll();

        $reviews = $product->getReviews();

        // $reviews = $reviewRepository->findBy(['product' => $id]);

        $review = new Review();

        $form = $this->createForm(ReviewType::class, $review);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $review->setDate(new \DateTime());

            $review->setUser($this->getUser());
    
            $review->setProduct($product);
            
            $manager->persist($review);

            $manager->flush();
            
            $this->addFlash('success', 'Avis ajouté');
            
        }

        // dd($reviews);
    
    return $this->render('home/product.html.twig', [
        'product' => $product,
        'categories' => $categories,
        'reviews' => $reviews,
        'form' => $form->createView()

    ]);
    }
    

    
}
