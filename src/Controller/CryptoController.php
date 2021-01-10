<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CryptoRepository;

/**
     * @Route("/api/crypto", name="crypto")
     */
class CryptoController extends AbstractController
{
    private $em;
    private $cryptoRepository;

    public function __construct(EntityManagerInterface $em, CryptoRepository $cryptoRepository)
    {
        $this->entityManager = $em;
        $this->cryptoRepository = $cryptoRepository;
    }

    /**
     * @Route("/read", name="crypto")
     */
    public function index(): Response
    {
        $cryptos = $this->cryptoRepository->findAll();

        $arrayOfCryptos = [];
        foreach($cryptos as $crypto) {
            $arrayOfCryptos[] = $crypto->toArray();
        }
        return $this->json($arrayOfCryptos);
    }
}
