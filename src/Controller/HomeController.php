<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use App\Entity\Review;
use App\Form\ReviewType;
use App\Repository\CarouselRepository;
use App\Repository\ProductRepository;
use App\Repository\CategoryRepository;
use App\Repository\ReviewRepository;
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

    /**
    *@Route("/product/{id}", name="homeProduct")
    */
    public function homeProduct(CategoryRepository $categoryRepository, Product $product, ProductRepository $productRepository, $id = null, Request $request, EntityManagerInterface $manager, ReviewRepository $reviewRepository)
    {
        
        $product = $productRepository->find($id);

        $categories = $categoryRepository->findAll();

        $reviews = $reviewRepository->findBy(['product' => $id], ['id' => 'DESC']);

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

            return $this->redirectToRoute('homeProduct', ['id' => $id]);
            
        }

        // dd($reviews[0]->getUser()->getId());
    
    return $this->render('home/product.html.twig', [
        'product' => $product,
        'categories' => $categories,
        'reviews' => $reviews,
        'form' => $form->createView()
    ]);
    }
    
    /**
     * @Route("/deleteReview/{id}", name="deleteReview")
     */
    public function deleteReview(Review $review, EntityManagerInterface $manager)
    {
        $idProduct = $review->getProduct()->getId();
        $manager->remove($review);
        $manager->flush();

        $this->addFlash('success', 'Avis supprimé');

        return $this->redirectToRoute('homeProduct', ['id' => $idProduct]);
    }

    
}
