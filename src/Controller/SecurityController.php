<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationType;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    /**
     *
     * @Route("/register", name="register")
     */
    public function register(Request $request, EntityManagerInterface $manager, UserPasswordHasherInterface $hasher, CategoryRepository $categoryRepository, MailerInterface $mailer)
    {
        // dd($request);

        $user=new User();

        $form=$this->createForm(RegistrationType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){

            $user->setPassword($hasher->hashPassword($user,$user->getPassword()));

            $manager->persist($user);

            $manager->flush();

            $userMail = $user->getEmail();

            $email = (new Email())
            ->from('ionel.moglan@gmail.com')
            ->to($userMail)
            //->cc('cc@example.com')
            //->bcc('bcc@example.com')
            //->replyTo('fabien@example.com')
            //->priority(Email::PRIORITY_HIGH)
            ->subject('Inscription sur Violeta\'s Forever!')
            ->text('Merci pour votre inscription!')
            ->html('<p>Merci pour votre inscription</p>');

            $mailer->send($email);

            $this->addFlash('success', 'Félicitation, vous êtes inscrit, connectez vous à présent');

            return $this->redirectToRoute('login');

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
