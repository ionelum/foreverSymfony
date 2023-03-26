<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationType;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use function Sodium\add;

class SecurityController extends AbstractController
{

    /**
     *
     * @Route("/register", name="register")
     */
    public function register(Request $request, EntityManagerInterface $manager, UserPasswordHasherInterface $hasher, CategoryRepository $categoryRepository)
    {

        $user=new User();

        $form=$this->createForm(RegistrationType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){

            $user->setPassword($hasher->hashPassword($user,$user->getPassword()));

            $manager->persist($user);
            $manager->flush();
            $this->addFlash('success', 'Félicitation, vous êtes inscrit, connectez vous à présent');

        }


        $categories = $categoryRepository->findAll();

        return $this->render('security/register.html.twig', [
            'form'=>$form->createView(),
            'categories' => $categories

        ]);
    }

    /**
     *
     * @Route("/login", name="login")
     */
    public function login(CategoryRepository $categoryRepository)
    {
        $categories = $categoryRepository->findAll();

        return $this->render('security/login.html.twig', [
            'categories' => $categories

        ]);
    }

    /**
     *
     *
     * @Route("/logout", name="logout")
     */
    public function logout()
    {
        

    }


}
