<?php

namespace App\Controller;

use App\Entity\Carousel;
use App\Entity\Category;
use App\Entity\Product;
use App\Entity\Review;
use App\Entity\User;
use App\Form\CarouselType;
use App\Form\CategoryType;
use App\Form\ProductType;
use App\Form\RegistrationType;
use App\Repository\CarouselRepository;
use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use App\Repository\ReviewRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @IsGranted("ROLE_ADMIN")
 */
class AdminController extends AbstractController
{
    /**
    *@Route("/product/add", name="addProduct")
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

        return $this->render('admin/addProduct.html.twig', [
            'form' => $form->createView()

        ]);
    }
    
    /**
     *
     * @Route("/product/list", name="listProduct")
     */
    public function listProduct(ProductRepository $productRepository)
    {

        $products = $productRepository->findBy([], ['id' => 'DESC']);
        

        return $this->render('admin/listProduct.html.twig', [
            'products' => $products

        ]);
    }


    /**
     *
     * @Route("/product/edit/{id}", name="editProduct")
     */
    public function editProduct(Product $product, Request $request, EntityManagerInterface $manager)
    {

        $form=$this->createForm(ProductType::class, $product);

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

        return $this->render('admin/editProduct.html.twig', [
            'form'=>$form->createView(),
            'product'=>$product

        ]);
    }

    /**
     *
     * @Route("/product/delete/{id}", name="deleteProduct")
     */
    public function deleteProduct(Product $product, EntityManagerInterface $manager)
    {
        
        unlink($this->getParameter('upload_directory').'/'.$product->getPicture());

        $manager->remove($product);
        $manager->flush();

        $this->addFlash('success', 'Produit supprimé');

        return $this->redirectToRoute('listProduct');
    }

    /**
     *
     * @Route("/category/add", name="addCategory")
     */
    public function addCategory(Request $request, EntityManagerInterface $manager)
    {
        
        $category = new Category();
        
        $form = $this->createForm(CategoryType::class, $category, ['add'=>true]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            $pictureFile = $form->get('picture_normal')->getData();
            $picture_bdd = date("Y-m-d-H-i-s") . "-normal-" . $pictureFile->getClientOriginalName();
            try {
                
                $pictureFile->move($this->getParameter('upload_directory'), $picture_bdd);

            } catch (FileException $e) {
                dd($e);
            }

            $category->setPictureNormal($picture_bdd);

            $pictureFile = $form->get('picture_wide')->getData();
            $picture_bdd = date("Y-m-d-H-i-s") . "-wide-" . $pictureFile->getClientOriginalName();
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
     * @Route("/category/edit/{id}", name="editCategory")
     */
    public function editCategory(Category $category, Request $request, EntityManagerInterface $manager)
    {
        
        $form = $this->createForm(CategoryType::class, $category, ['edit'=>true]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            $picture_edit_file_normal = $form->get('picture_edit_normal')->getData();

            if ($picture_edit_file_normal){

                $picture_bdd = date("Y-m-d-H-i-s") . "-normal-" . $picture_edit_file_normal->getClientOriginalName();

                unlink($this->getParameter('upload_directory').'/'.$category->getPictureNormal());

                $picture_edit_file_normal->move($this->getParameter('upload_directory'), $picture_bdd);

                $category->setPictureNormal($picture_bdd);

            }

            $picture_edit_file_wide = $form->get('picture_edit_wide')->getData();

            if ($picture_edit_file_wide){

                $picture_bdd = date("Y-m-d-H-i-s") . "-wide-" . $picture_edit_file_wide->getClientOriginalName();

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
     * @Route("/category/list", name="listCategory")
     */
    public function listCategory(CategoryRepository $categoryRepository)
    {

        $categories = $categoryRepository->findAll();

        return $this->render('admin/listCategory.html.twig', [
            'categories' => $categories

        ]);
    }

    /**
     *
     * @Route("/category/delete/{id}", name="deleteCategory")
     */
    public function deleteCategory(Category $category, EntityManagerInterface $manager)
    {
        
        unlink($this->getParameter('upload_directory').'/'.$category->getPictureNormal());
        unlink($this->getParameter('upload_directory').'/'.$category->getPictureWide());

        $manager->remove($category);
        $manager->flush();

        $this->addFlash('success', 'Categorie supprimé');

        return $this->redirectToRoute('listCategory');
    }

    /**
    *@Route("/carousel/add", name="addCarousel")
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

            return $this->redirectToRoute("listCarousel");

        }


        
        return $this->render('admin/addCarousel.html.twig', [
            'form' => $form->createView()

        ]);
    }

    /**
     *
     * @Route("/carousel/list", name="listCarousel")
     */
    public function listCarousel(CarouselRepository $carouselRepository)
    {

        $carousels = $carouselRepository->findAll();
        


        return $this->render('admin/listCarousel.html.twig', [
            'carousels' => $carousels

        ]);
    }

    /**
     *
     * @Route("/carousel/delete/{id}", name="deleteCarousel")
     */
    public function deleteCarousel(Carousel $carousel, EntityManagerInterface $manager)
    {
        
        unlink($this->getParameter('upload_directory').'/'.$carousel->getPicture());

        $manager->remove($carousel);
        $manager->flush();

        $this->addFlash('success', 'Photo supprimé');

        return $this->redirectToRoute('listCarousel');
    }

    /**
     * @Route("/user/list", name="listUsers")
     */
    public function listUsers(UserRepository $userRepository)
    {

        $users = $userRepository->findAll();
        

        return $this->render('admin/listUsers.html.twig', [
            'users' => $users

        ]);
    }

    /**
     *
     * @Route("/user/delete/{id}", name="deleteUser")
     */
    public function deleteUser(User $user, EntityManagerInterface $manager)
    {

        $manager->remove($user);
        $manager->flush();

        $this->addFlash('success', 'Utilisateur supprimé');
        
        return $this->redirectToRoute('listUsers');
    }

    /**
     *
     * @Route("/user/edit/{id}", name="editUser")
     */
    public function editUser(User $user, Request $request, EntityManagerInterface $manager, UserPasswordHasherInterface $hasher)
    {

        $form=$this->createForm(RegistrationType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){

            $user->setPassword($hasher->hashPassword($user,$user->getPassword()));
            $manager->persist($user);
            $manager->flush();

            $this->addFlash('success', 'Utilisateur modifié');

            return $this->redirectToRoute('listUsers');

        }

        return $this->render('admin/editUser.html.twig', [
            'form'=>$form->createView(),
            'user'=>$user

        ]);
    }

    /**
     * @Route("/review/list", name="listReviews")
     */
    public function listReviews(ReviewRepository $reviewRepository)
    {

        $reviews = $reviewRepository->findBy([], ['id' => 'DESC']);
        

        return $this->render('admin/listReviews.html.twig', [
            'reviews' => $reviews

        ]);
    }

    /**
     * @Route("/review/list/{id}", name="listReviewsUser")
     */
    public function listReviewsUser(ReviewRepository $reviewRepository, User $user, UserRepository $userRepository, $id=null)
    {
        $user = $userRepository->find($id);

        $reviews = $reviewRepository->findBy(['user' => $id], ['id' => 'DESC']);
        
        return $this->render('admin/listReviewsUser.html.twig', [
            'reviews' => $reviews,
            'user' => $user

        ]);
    }

    /**
     * @Route("/review/delete/{id}", name="deleteReviewAdmin")
     */
    public function deleteReview(Review $review, EntityManagerInterface $manager)
    {

        $manager->remove($review);
        $manager->flush();

        $this->addFlash('success', 'Avis supprimé');
        
        return $this->redirectToRoute('listReviews');
    }

    /**
     * @Route("/user/makeAdmin/{id}", name="makeAdmin")
     */
    public function makeAdmin(User $user, EntityManagerInterface $manager)
    {

        $user->setRoles(['ROLE_ADMIN']);
        $manager->persist($user);
        $manager->flush();

        $this->addFlash('success', 'Utilisateur promu');
        
        return $this->redirectToRoute('listUsers');
    }

    /**
     * @Route("/user/makeUser/{id}", name="makeUser")
     */
    public function makeUser(User $user, EntityManagerInterface $manager)
    {

        $user->setRoles(['ROLE_USER']);
        $manager->persist($user);
        $manager->flush();

        $this->addFlash('success', 'Utilisateur déclassé');
        
        return $this->redirectToRoute('listUsers');
    }

    /**
     * @Route("/backOffice", name="backOffice")
     */
    public function backOffice()
    {
        return $this->render('backoffice.html.twig');
    }
}
