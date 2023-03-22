const allProducts = [
    {
        ref: 61,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Gelée Aloès",
        price: 23.46,
        description:
            "Particulièrement riche en Aloe Vera, ce gel transparent non gras possède toutes les vertus de la plante. Il hydrate*, apaise et régénère l'épiderme. Il est idéal contre les irritations superficielles de la peau et les agressions extérieures. Hydratation des couches supérieures de l'épiderme",
        volume: "118 ml",
        content: "84.46 % de gel d'aloès",
        use: "Appliquer généreusement sur une peau parfaitement nettoyée.",
    },
    {
        ref: 51,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Aloe Propolis Creme",
        price: 31.25,
        description:
            "L'aloès associé à la propolis, font de cette crème à la texture riche, un véritable soin anti-bactérien et réparateur, qui apaise les irritations cutanées. La camomille, l'allantoïne et les vitamines A et E apportent à la peau douceur et souplesse. Elle peut être utilisée sur les peaux sèches et rugueuses.",
        volume: "113 g",
        content: "74.17 % de gel d'aloès, 0.55 % de propolis",
        use: "Appliquer sur une peau parfaitement nettoyée.",
    },
    {
        ref: 3,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Instant Hand Cleanser",
        price: 16.07,
        description:
            "Une formule gel pour nettoyer vos mains en toute sécurité où que vous soyez. Enrichie en Aloe vera, sa formule parfume délicatement les mains sans les dessécher.",
        volume: "250ml",
        content: "Aloe Vera, miel, alcool à friction , glycérine.",
        use: "Verser une noisette de gel dans le creux de la main et frotter les mains l’une contre l’autre jusqu’à ce qu’elles soient sèches. Utiliser régulièrement.",
    },
    {
        ref: 633,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Aloe Liquid Soap",
        price: 22.94,
        description:
            "L'Aloe Liquid Soap est un savon pour le visage, le corps et les cheveux à destination de toute la famille (à partir de 3 ans). Sa formule très douce nettoie délicatement, respecte la peau et les cheveux, hydrate et préserve du dessèchement, apaise, adoucit tout en laissant la peau souple.",
        volume: "473 ml",
        content:
            "39% de gel d'Aloe vera Agents lavants issus d’acides gras de noix de coco Extrait de concombre et de jojoba Huile d’Argan Glycérine végétale Extraits de fleur d'Arnica",
        use: " Appliquer sur les mains, le visage, le corps ou les cheveux. Faire mousser. Rincer soigneusement.",
    },
    {
        ref: 955,
        category: "Les Pack",
        cat: "packs",
        name: "Pack V3 Vitalite",
        price: 145.06,
        description:
            "Vous êtes sportif, quel que soit votre âge, le pack Vitalité soutient vos défenses naturelles et vous accompagne dans la préparation et récupération de votre activité sportive.",
        volume: "3 Produits",
        content: "Forever Aloe Vera Gel, Forever Activ Pro-B, Forever ARGI+",
        use: "En commandant l'un de nos packs produits proposés ou environ 250€ de produits de votre choix vous allez devenir client privilégié et bénéficier d'une remise permanente de -15% sur toutes vos prochaines commandes. ",
    },
    {
        ref: 950,
        category: "Les Pack",
        cat: "packs",
        name: "Pack V3 Bien-Etre",
        price: 112.13,
        description:
            "Vous êtes sédentaire, quelque soit votre âge cette association de produits est parfaite pour optimiser vos défenses immunitaires, conserver des fonctions cognitives et cardiaques au top !",
        volume: "3 Produits",
        content:
            "Forever Aloe Vera Gel, Forever Activ Pro-B, Forever Arctic Sea",
        use: "En commandant l'un de nos packs produits proposés ou environ 250€ de produits de votre choix vous allez devenir client privilégié et bénéficier d'une remise permanente de -15% sur toutes vos prochaines commandes.",
    },
    {
        ref: 1055,
        category: "Les Pack",
        cat: "packs",
        name: "Pack Privilège #1",
        price: 57.89,
        description:
            "Découvrez nos produits grâce au Pack Privilège #1. Ce pack contient 3 soins essentiels parmi nos indispensables pour avoir le meilleur de Forever à portée de main à savoir : Le Shampoing Aloe Jojoba pour des cheveux souples, doux et brillants. L’Aloe Body Lotion, l’indispensable pour une peau souple, douce et hydratée. L’Aloe Liquid Soap, le savon Corps, Cheveux, pour tous les épidermes et pour toute la famille. ",
        volume: "3 Produits",
        content: "Shampoing Aloe-Jojoba, Aloe Body Lotion, Aloe Liquid Soap.",
        use: "",
    },
    {
        ref: 1060,
        category: "Les Pack",
        cat: "packs",
        name: "Pack Privilège #2",
        price: 57.89,
        description:
            "Découvrez nos produits grâce au Pack Privilège #1. Ce pack contient 3 soins essentiels parmi nos indispensables pour avoir le meilleur de Forever à portée de main à savoir : Le Shampoing Aloe Jojoba pour des cheveux souples, doux et brillants. L’Aloe Body Lotion, l’indispensable pour une peau souple, douce et hydratée. L’Aloe Liquid Soap, le savon Corps, Cheveux, pour tous les épidermes et pour toute la famille. ",
        volume: "3 Produits",
        content: "Aloe Cooling Lotion, Gelée Aloès, Aloe Propolis Crème.",
        use: "",
    },
    {
        ref: 634,
        category: "Les Pack",
        cat: "packs",
        name: "Start Your Journey Pack",
        price: 393.97,
        description:
            "C’est un pack de 13 produits parmi nos meilleures ventes : Il contient la Mini Pulpe / Pro B , la gelée d’Aloes, le Bright et la propolis mais également pour tous ceux qui souhaitent expérimenter une détox et perdre du poids, notre programme phare le Programme C9 qui vous permettra de vous reprendre en main, de perdre quelques kilos et de faire une détox complète.Et pour les actifs ou sportifs ou tout ceux qui aiment bouger : vous aurez l’Argi+ et la Thermogène. Ce programme est vendu avec son livret de conseils et de suivi journalier, son mètre ruban et son shaker.",
        volume: "13 Produits",
        content:
            "Forever Vanille ou Chocolat, Mini Tripack Pulpes Mixte, Forever ARGI+, Aloe Vera Gelly, Aloe Propolis Crème, Aloe Heat Lotion, Stick Déodorant Aloes, Forever Bright Toothgel, Forever Activ Pro-B, Stick Aloe Lèvres.",
        use: "En commandant l'un de nos packs produits proposés ou environ 250€ de produits de votre choix vous allez devenir client privilégié et bénéficier d'une remise permanente de -15% sur toutes vos prochaines commandes.",
    },
    {
        ref: 1,
        category: "Les Pack",
        cat: "packs",
        name: "Pack Start Your Personal Use",
        price: 447.86,
        description:
            "Obtenir 30% de remise et devenir entrepreneur Forever avec des produits pour toute la famille! C’est un pack de 17 produits qui couvrent tous les besoins de la famille. En effet, l’offre de produits de ce pack est très large et couvre les besoins quotidiens en matière d’hygiène et de soins pour les femmes et les hommes. Elle s’accompagne également des indispensables Pulpes d’Aloe vera, Berry Nectar et Aloe Pêche, de l’Argi plus et du Pro B.",
        volume: "17 Produits",
        content:
            "Forever Aloe Gel, Aloe Berry Nectar, Forever Aloe Pêche, Aloe Vera Gelly, Aloe Propolis Crème, Aloe Heat Lotion, Stick Déodorant Aloès, Forever Bright Toothgel, Aloe Jojoba Shampoo, Aloe Jojoba Conditioning, Aloe Liquid Soap, Aloe First, Aloe Activ Pro-B, Forever ARGI+, Soin Hydratant Intense SONYA, Gentleman's Pride, Stick Aloe Lèvre.",
        use: "En commandant l'un de nos packs produits proposés ou environ 397€ de produits de votre choix vous allez devenir client privilégié et bénéficier d'une remise permanente de -30% sur toutes vos prochaines commandes.",
    },
    {
        ref: 830,
        category: "Les Pack",
        cat: "packs",
        name: "Pack Go2FBO",
        price: 416.85,
        description:
            "Profitez de -30% sur tous vos produits ! Démarrez votre activité Forever dans les meilleurs conditions possibles avec ce pack conçu et proposé par Forever France ! Ces 18 produits phares de la gamme Forever seront utiles à votre consommation personnelle & revente mais vont vous surtout permettre d'écquérirer de la connaissance sur les produits Forever pour ainsi mieux les partager autour de vous et apporter du bien-être à votre entourage.",
        volume: "18 Produits",
        content:
            "Forever Aloe Vera Gel, Aloe Berry Nectar, Forever Aloe Vera Pêche, Forever Freedom, Absorbant-C, Forever Arctic Sea, Forever Kids, Aloe Vera Gelly, Aloe Propolis Crème, Aloe Heat Lotion, Stick Déodorant Aloès, Forever Bright Toothgel, Aloe Jojoba Conditioning, Aloe Liquid Soap, Aloe First, Forever Be-Pollen, Forever Active Pro-B, Forever Aloe Scrub, Stick Aloe Lèvres.",
        use: "En commandant l'un de nos packs produits proposés ou environ 397€ de produits de votre choix vous allez devenir client privilégié et bénéficier d'une remise permanente de -30% sur toutes vos prochaines commandes.",
    },
    {
        ref: 196,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Forever Freedom",
        price: 48.93,
        description:
            "Délicieusement aromatisé à l’orange, Forever Freedom est une formule unique et originale qui, grâce à la vitamine C, contribue à la formation normale du collagène ainsi qu’à la fonction normale des os et des cartilages.",
        volume: "1L",
        content:
            "88.99 % de pulpe d'Aloe Vera stabilisée, 1.25 % de sulfate de glucosamine, 1.17 % de sulfate de chondroïtine, 0.6 % de Méthyl Sulfonyl Méthane (MSM). Contient des traces de crustacés ",
        use: "40 ml, 2 fois par jour, soit 80 ml. Secouer légèrement avant de servir. Déconseillé aux enfants de moins de 12 ans, aux femmes enceintes et allaitantes. L'usage prolongé est déconseillé.",
    },
    {
        ref: 3715,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Tripack - Pulpe d'Aloe vera ",
        price: 106.51,
        description:
            "Délicieusement aromatisé à l’orange, Forever Freedom est une formule unique et originale qui, grâce à la vitamine C, contribue à la formation normale du collagène ainsi qu’à la fonction normale des os et des cartilages.",
        volume: "3 x 1 litre",
        content:
            "88.99 % de pulpe d'Aloe Vera stabilisée, 1.25 % de sulfate de glucosamine, 1.17 % de sulfate de chondroïtine, 0.6 % de Méthyl Sulfonyl Méthane (MSM). Contient des traces de crustacés.",
        use: "40 ml, 2 fois par jour, soit 80 ml. Secouer légèrement avant de servir. Déconseillé aux enfants de moins de 12 ans, aux femmes enceintes et allaitantes. L'usage prolongé est déconseillé.",
    },
    {
        ref: 3734,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Tripack - Aloe Berry Nectar",
        price: 106.51,
        description:
            "Une large dose (90,7%) de pulpe d'Aloe vera, un soupçon de jus de pomme et de canneberge, de la vitamine C, aucun conservateur et un emballage 100% recyclable. Et voilà le secret de la toute nouvelle formule de l'Aloe Berry Nectar. Retrouvez toutes les vertus de l'Aloe vera au coeur d'une formule au goût acidulé, pour un plaisir sain et toujours autant de bien-être. 3 x 1 litre.",
        volume: "3 x 1 litre",
        content:
            "90,7% de pulpe d'Aloe vera, jus concentré de pomme, jus concentré de canneberge.",
        use: "30 à 40 ml 3 fois par jour.",
    },
    {
        ref: 3777,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Tripack - Aloe Peche",
        price: 106.51,
        description:
            "La nouvelle formule de l'Aloe Pêche associe de l'Aloe vera (84,5%), de la purée de pêche et du jus concentré de raisin blanc pour une saveur douce et savoureuse, ainsi qu'une dose synergique de vitamine C. Le packaging, quant à lui, est 100% recyclable. Retrouvez la toute nouvelle version de l'Aloe Pêche pour une pause saine et gourmande ! 3 x 1 litre.",
        volume: "3 x 1 litre",
        content:
            "84,5% de pulpe d'Aloe vera, purée de pêche naturelle, jus concentré de raisin blanc, arôme pêche.",
        use: "30 à 40 ml 3 fois par jour.",
    },
    {
        ref: 7333,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Tripack mix - Pulpe d'Aoe vera - Berry - Peche",
        price: 106.51,
        description:
            "L'Aloe vera Forever fait peau neuve ! Riche d'un savoir-faire de 40ans, Forever a revisité son produit signature et a créé une toute nouvelle version sans conservateur et riche en vitamine C, dans un emballage 100% recyclable. Cette formule optimisée vous apportera toujours plus de bien-être. Le secret, 99,7% de gel d'Aloe vera, la plante aux milles vertus et une dose synergique de vitamine C, molécule antioxydante aux nombreux bienfaits. 3 x 1 Litre.",
        volume: "3 x 1 litre",
        content:
            "1 litre de Pulpe d'Aloe Vera - réf. 715 1 litre d'Aloe Berry Nectar - réf. 734 1 litre d'Aloe Peaches (Pêches) - réf. 777.",
        use: "30 à 40 ml 3 fois par jour.",
    },
    {
        ref: 71612,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Forever Aloe vera 330 ml x 12",
        price: 147.61,
        description:
            "La famille Forever s'agrandit! Découvrez la version mini aloe de 330 ml! En vente par lot de 12 mini aloe.",
        volume: "330 ml x 12",
        content: "99,7% de gel d'Aloe vera.",
        use: "30 à 40 ml 3 fois par jour.",
    },
    {
        ref: 73512,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Forever Aloe Berry Nectar 330 ml x 12",
        price: 147.61,
        description:
            "Une large dose (90,7%) de pulpe d'Aloe vera, un soupçon de jus de pomme et de canneberge, de la vitamine C, aucun conservateur et un emballage 100% recyclable. Et voilà le secret de la toute nouvelle formule de l'Aloe Berry Nectar. Retrouvez toutes les vertus de l'Aloe vera au coeur d'une formule au goût acidulé, pour un plaisir sain et toujours autant de bien-être. ",
        volume: "330 ml x 12",
        content:
            "90,7% de pulpe d'Aloe vera, jus concentré de pomme, jus concentré de canneberge.",
        use: "30 à 40 ml 3 fois par jour.",
    },
    {
        ref: 77812,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Aloe Peche 330 ml x 12",
        price: 147.61,
        description:
            "La nouvelle formule de l'Aloe Pêche associe de l'Aloe vera (84,5%), de la purée de pêche et du jus concentré de raisin blanc pour une saveur douce et savoureuse, ainsi qu'une dose synergique de vitamine C. Le packaging, quant à lui, est 100% recyclable. Retrouvez la toute nouvelle version de l'Aloe Pêche pour une pause saine et gourmande !",
        volume: "330 ml x 12",
        content:
            "84,5% de pulpe d'Aloe vera, purée de pêche naturelle, jus concentré de raisin blanc, arôme pêche",
        use: "30 à 40 ml 3 fois par jour.",
    },
    {
        ref: 71633,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Mini Aloe - ARGI +",
        price: 44.9,
        description:
            "Optimisez vos objectifs de mise en forme avec le duo idéal : gel d’Aloe vera et ARGI +. Energie,endurance et récupération! Le nouveau pack combiné de Forever comprend trois mini Aloe (330 ml) et trois sachets d’ARGI +. ",
        volume: "3x330ml+3xArgi",
        content: "3 mini Aloe 330 ml + 3 doses Argi +",
        use: "Prendre un sachet de ARGI+ par jour, dilué dans un verre de pulpe d’Aloe Vera. Agiter avant utilisation.",
    },
    {
        ref: 734,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Aloe Berry Nectar",
        price: 35.86,
        description:
            "Une large dose (90,7%) de pulpe d'Aloe vera, un soupçon de jus de pomme et de canneberge, de la vitamine C, aucun conservateur et un emballage 100% recyclable. Et voilà le secret de la toute nouvelle formule de l'Aloe Berry Nectar. Retrouvez notre Aloe vera au coeur d'une formule au goût acidulé, pour un plaisir sain et toujours autant de bien-être.",
        volume: "1 litre",
        content:
            "90,7% de pulpe d'Aloe vera, jus concentré de pomme, jus concentré de canneberge",
        use: "30 à 40 ml 3 fois par jour",
    },
    {
        ref: 715,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Aloe Vera Gel",
        price: 35.86,
        description:
            "L'Aloe vera Forever fait peau neuve ! Riche d'un savoir-faire de 40ans, Forever a revisité son produit signature et a créé une toute nouvelle version sans conservateur et riche en vitamine C, dans un emballage 100% recyclable. Cette formule optimisée vous apportera toujours plus de bien-être. Le secret, 99,7% de gel d'Aloe vera et d'une dose synergique de vitamine C, molécule antioxydante. ",
        volume: "1 litre",
        content: "99,7% de gel d'Aloe vera",
        use: "30 à 40 ml 3 fois par jour",
    },
    {
        ref: 777,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Aloe Peche",
        price: 35.86,
        description:
            "La nouvelle formule de l'Aloe Pêche associe de l'Aloe vera (84,5%), de la purée de pêche et du jus concentré de raisin blanc pour une saveur douce et savoureuse, ainsi qu'une dose synergique de vitamine C. Le packaging, quant à lui, est 100% recyclable. Retrouvez la toute nouvelle version de l'Aloe Pêche pour une pause saine et gourmande !",
        volume: "1 litre",
        content:
            "84,5% de pulpe d'Aloe vera, purée de pêche naturelle, jus concentré de raisin blanc, arôme pêche",
        use: "30 à 40 ml 3 fois par jour",
    },
    {
        ref: 3736,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Tripack - Aloe Mangue",
        price: 106.51,
        description:
            "La nouvelle formule de l'Aloe Mangue est l'alliance parfaite entre notre Aloe vera (86%) et de la purée de mangue naturelle. Les mangues utilisées sont récoltées à pleine maturité pour garantir leur saveur et leur richesse en nutriments, vitamines et anti-oxydants tels que la vitamine C. L’Aloe vera va aider votre corps à stimuler le métabolisme, à favoriser la digestion et à maintenir le fonctionnement normal de votre système immunitaire.",
        volume: "3 x 1 L",
        content:
            "90,7% de pulpe d'Aloe vera, jus concentré de pomme, jus concentré de canneberge",
        use: "30 à 40 ml 3 fois par jour",
    },
    {
        ref: 736,
        category: "Les bases du bien-être",
        cat: "bienetre",
        name: "Aloe Mangue",
        price: 35.86,
        description:
            "La nouvelle formule de l'Aloe Mangue est l'alliance parfaite entre notre Aloe vera (86%) et de la purée de mangue naturelle. Les mangues utilisées sont récoltées à pleine maturité pour garantir leur saveur et leur richesse en nutriments, vitamines et anti-oxydants tels que la vitamine C. L’Aloe vera va aider votre corps à stimuler le métabolisme, à favoriser la digestion et à maintenir le fonctionnement normal de votre système immunitaire.",
        volume: "1L",
        content:
            "90,7% de pulpe d'Aloe vera, jus concentré de pomme, jus concentré de canneberge",
        use: "30 à 40 ml 3 fois par jour",
    },
    {
        ref: 27,
        category: "Les produits de la ruche",
        cat: "laruche",
        name: "Forever Bee Propolis",
        price: 45.15,
        description:
            "La propolis est une résine collectée et métabolisée par les abeilles mellifères à partir des arbres et utilisée pour protéger la ruche.",
        volume: "60 comprimés",
        content: "Propolis, Miel. Contient du soja.",
        use: "Prendre 2 comprimés par jour. Déconseillé chez les femmes ayant des antécédents personnels ou familiaux de cancer du sein. Les compléments alimentaire doivent être utilisés dans le cadre d’un mode de vie sain et non comme substituts d’une alimentation variée et équilibrée. Ne pas dépasser la dose journalière recommandée. ",
    },
    {
        ref: 207,
        category: "Les produits de la ruche",
        cat: "laruche",
        name: "Forever Miel - Forever Bee Honey",
        price: 23.8,
        description:
            "Le miel aussi appelé “or de la ruche” est produit par les abeilles à partir du nectar des fleurs. Avec sa texture fluide, le Forever Bee Honey™ s'ajoute facilement à l'alimentation. Son flacon est facile à utiliser pour doser.",
        volume: "500 g",
        content: "Miel du nectar des fleurs",
        use: "Utiliser le miel pour sucrer yaourts et boissons en remplacement du sucre. Ne convient pas aux enfants de moins de 12 mois.",
    },
    {
        ref: 26,
        category: "Les produits de la ruche",
        cat: "laruche",
        name: "Forever Bee Pollen",
        price: 21.62,
        description:
            "Collecté sur les fleurs par les abeilles, le pollen améliore leur vitalité et leur résistance tout au long de leurs vies.",
        volume: "100 comprimés",
        content: "86 % de pollen (500 mg par comprimé), 12 % de miel.",
        use: "Prendre jusqu'à 3 comprimés par jour, pendant les repas. Déconseillé aux personnes allergiques aux produits de la ruche. Les compléments alimentaire doivent être utilisés dans le cadre d’un mode de vie sain et non comme substituts d’une alimentation variée et équilibrée. Ne pas dépasser la dose journalière recommandée.",
    },
    {
        ref: 36,
        category: "Les produits de la ruche",
        cat: "laruche",
        name: "Forever Royal Jelly",
        price: 46.75,
        description:
            "La Gelée Royale est le produit le plus précieux de la ruche. Secrétée par les jeunes abeilles, elle transforme en quelques jours une larve en Reine.",
        volume: "60 comprimés",
        content:
            "75.5 mg de gelée royale lyophilisée équivalent à 250 mg de gelée royale fraîche par comprimé.",
        use: "Prendre 1 à 2 comprimés par jour. Précautions d'emploi : Une consommation excessive peut avoir des effets laxatifs. Les compléments alimentaire doivent être utilisés dans le cadre d’un mode de vie sain et non comme substituts d’une alimentation variée et équilibrée. Ne pas dépasser la dose journalière recommandée.",
    },
    {
        ref: 307,
        category: "Pour la maison",
        cat: "maison",
        name: "Forever Aloe MPD 2X",
        price: 38.98,
        description:
            "Détergent multi-usages ultra-concentré, très efficace pour décoller la saleté tenace, dissoudre les graisses et enlever les taches.Très doux, vous pouvez l'utiliser en toute sécurité sur toutes les surfaces lavables de la maison , pour la vaisselle et pour le linge. Utilisation non recommandée en lave-vaisselle en raison de son fort pouvoir moussant. Dangereux. Respecter les précautions d'emploi. Biodégradable.",
        volume: "946 ml",
        content:
            "Tensioactifs anioniques (15 à 30%), Tensioactifs non ioniques (5 à 15%), Aloe MPD est une solution aqueuse qui contient en surface des agents actifs : sodium, alkylaryl, sulfonate et Alkyl, Phenyl, Polyethoxyl, alcools, un conditionneur (Aloe Vera, parfum) et des agents de blanchissement.",
        use: "Pour Linge peu sale: Eau douce - 10 ml,  Dureté Moyenne - 12 ml, Eau dure - 15 ml.<br>Pour Linge sale: Eau douce - 12 ml,  Dureté Moyenne - 15 ml, Eau dure - 18 ml. <br>Pour Linge très sale: Eau douce - 15 ml, Dureté Moyenne - 18 ml, Eau dure - 20 ml.",
    },
    {
        ref: 512,
        category: "Huiles Essentielles",
        cat: "huiles",
        name: "Coffret des huiles essentielles",
        price: 104.63,
        description:
            "Retrouvez nos 4 huiles essentielles dans un pack en édition limitée : Lavande vraie, Citron, Menthe Poivrée et Défense.",
        volume: "4 x 15 ml",
        content: "100% huile essentielle",
        use: "Peut être utilisée dans un diffuseur, sur un tissu ou un morceau de coton ou ajoutée à un produit ménager, un aspirateur sur le filtre ou tout autre support de diffusion. En diffusion, nous conseillons de la diluer dans d’autres huiles essentielles. Précautions d'emploi : Tenir hors de portée des enfants. En cas d'ingestion : appeler immédiatement le centre antipoison ou un médecin. En cas de contact avec les yeux : rincer avec précaution à l'eau pendant plusieurs minutes. Enlever les lentilles de contact si la victime en porte, et si elles peuvent être facilement enlevées. Continuer à rincer. En cas d'irritation ou d'éruption cutanée : consulter un médecin. Eliminer le contenu ou récipient dans les déchets domestiques. Ne pas diffuser en continu dans une pièce fermée.",
    },
    {
        ref: 506,
        category: "Huiles Essentielles",
        cat: "huiles",
        name: "Huile essentielle Lavande Vraie",
        price: 31.75,
        description:
            "L'huile essentielle de Lavande Vraie Forever est issue de la lavande cultivée et récoltée en Bulgarie. Avec son arôme fruité et doux, elle sera l'allié parfait pour un moment de détente.",
        volume: "15 ml",
        content: "100% huile essentielle de lavande",
        use: "Peut être utilisée dans un diffuseur, sur un tissu ou un morceau de coton ou ajoutée à un produit ménager, un aspirateur sur le filtre ou tout autre support de diffusion. En diffusion, nous conseillons de la diluer dans d’autres huiles essentielles. Précautions d'emploi : Tenir hors de portée des enfants. En cas d'ingestion : appeler immédiatement le centre antipoison ou un médecin. En cas de contact avec les yeux : rincer avec précaution à l'eau pendant plusieurs minutes. Enlever les lentilles de contact si la victime en porte, et si elles peuvent être facilement enlevées. Continuer à rincer. En cas d'irritation ou d'éruption cutanée : consulter un médecin. Eliminer le contenu ou récipient dans les déchets domestiques. Ne pas diffuser en continu dans une pièce fermée.",
    },
    {
        ref: 507,
        category: "Huiles Essentielles",
        cat: "huiles",
        name: "Huile essentielle Lavande vraieHuile Essentielle de Citron",
        price: 18.14,
        description:
            "Les citrons utilisés dans L’Huile Essentielle de Citron ont été récoltés à la main, à pleine maturité en Argentine et en Californie. Leur parfaite maturité permet d’obtenir un citron très aromatique qui produit une huile essentielle d’excellente qualité. L’huile essentielle de citron est connue pour son odeur rafraîchissante, énergisante et revitalisante.",
        volume: "15 ml",
        content: "100% huile essentielle de citron",
        use: "Peut être utilisée dans un diffuseur, sur un tissu ou un morceau de coton ou ajoutée à un produit ménager, un aspirateur sur le filtre ou tout autre support de diffusion. En diffusion, nous conseillons de la diluer dans d’autres huiles essentielles. Précautions d'emploi : Tenir hors de portée des enfants. En cas d'ingestion : appeler immédiatement le centre antipoison ou un médecin. En cas de contact avec les yeux : rincer avec précaution à l'eau pendant plusieurs minutes. Enlever les lentilles de contact si la victime en porte, et si elles peuvent être facilement enlevées. Continuer à rincer. En cas d'irritation ou d'éruption cutanée : consulter un médecin. Eliminer le contenu ou récipient dans les déchets domestiques. Ne pas diffuser en continu dans une pièce fermée.",
    },
    {
        ref: 508,
        category: "Huiles Essentielles",
        cat: "huiles",
        name: "Huile essentielle de Menthe Poivree",
        price: 22.08,
        description:
            "La menthe poivrée de chez Forever est fabriquée à partir de feuilles récoltées dans les collines de l’Himalaya en Inde, où le climat et le sol confèrent une menthe poivrée de qualité supérieure. C'est notre huile essentielle la plus stimulante, sa fragrance est fraîche, revigorante et agréable.",
        volume: "15 ml",
        content: "100% huile essentielle Menthe Poivrée",
        use: "Peut être utilisée dans un diffuseur, sur un tissu ou un morceau de coton ou ajoutée à un produit ménager, un aspirateur sur le filtre ou tout autre support de diffusion. En diffusion, nous conseillons de la diluer dans d’autres huiles essentielles. Précautions d'emploi : Tenir hors de portée des enfants. En cas d'ingestion : appeler immédiatement le centre antipoison ou un médecin. En cas de contact avec les yeux : rincer avec précaution à l'eau pendant plusieurs minutes. Enlever les lentilles de contact si la victime en porte, et si elles peuvent être facilement enlevées. Continuer à rincer. En cas d'irritation ou d'éruption cutanée : consulter un médecin. Eliminer le contenu ou récipient dans les déchets domestiques. Ne pas diffuser en continu dans une pièce fermée.",
    },
    {
        ref: 510,
        category: "Huiles Essentielles",
        cat: "huiles",
        name: "Huile essentielle Defense",
        price: 32.66,
        description:
            "L'huile essentielle Défense de Forever est un mélange de sept huiles essentielles de haute qualité issues de six pays à travers le monde. Le clou de girofle et la cannelle de Madagascar, l’orange des États-Unis, l’huile essentielle d’encens de Somalie, le romarin de Hongrie, l’huile d’eucalyptus citronnée d’Australie et les baies de genièvre du Népal agissent en synergie pour maintenir et renforcer la vitalité. ",
        volume: "15 ml",
        content: "Mélange d'huiles essentielles",
        use: "Peut être utilisée dans un diffuseur, sur un tissu ou un morceau de coton ou ajoutée à un produit ménager, un aspirateur sur le filtre ou tout autre support de diffusion. En diffusion, nous conseillons de la diluer dans d’autres huiles essentielles. Précautions d'emploi : Tenir hors de portée des enfants. En cas d'ingestion : appeler immédiatement le centre antipoison ou un médecin. En cas de contact avec les yeux : rincer avec précaution à l'eau pendant plusieurs minutes. Enlever les lentilles de contact si la victime en porte, et si elles peuvent être facilement enlevées. Continuer à rincer. En cas d'irritation ou d'éruption cutanée : consulter un médecin. Eliminer le contenu ou récipient dans les déchets domestiques. Ne pas diffuser en continu dans une pièce fermée.",
    },
    {
        ref: 67,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Stick Déodorant Aloès",
        price: 11.3,
        description:
            "Sans alcool, sans sels d'aluminium et discrètement parfumé, ce déodorant assure une protection efficace sans tacher vos vêtements. Sa formule à l'aloès adoucit et hydrate* la peau. *Hydrate les couches supérieures de l'épiderme.",
        volume: "92.1 g",
        content: "Gel d'aloès.",
        use: "Appliquer le matin ou avant l'effort sur une peau propre et sèche.",
    },
    {
        ref: 1318,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Forever Hand Sanitizer - unite",
        price: 4.97,
        description:
            "Une formule bactéricide pour nettoyer, désinfecter et assainir parfaitement vos mains où que vous soyez. Enrichi en Aloe Vera et en miel, sa formule parfume délicatement les mains sans les dessécher. Dangereux. Respecter les précautions d'emploi.",
        volume: "59 ml",
        content: "Gel d’aloès, miel.",
        use: "Verser une noisette de gel dans le creux de la main et frotter les mains l’une contre l’autre jusqu’à ce qu’elles soient complètement sèches.",
    },
    {
        ref: 284,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Savon Corps et Visage à l'Aloe et à l'Avocat",
        price: 7.88,
        description:
            "Enrichi en ingrédients naturels comme l’huile d’avocat pur et l’Aloe vera, le savon Visage et Corps Aloe Avocado nettoie et hydrate la peau en la laissant plus lisse, plus douce et plus éclatante, même les peaux les plus sensibles. Son léger parfum citronné vous aidera à vous réveiller le matin pour une douceur qui perdurera toute la journée.",
        volume: "142 g",
        content: "Huile d’avocat et Aloe vera.",
        use: "Emulsionner chaque jour sur peau mouillée.",
    },
    {
        ref: 40,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Aloe First",
        price: 31.25,
        description:
            "Aloe First est la brume à utiliser quotidiennement, en toute saison, pour hydrater*, rafraîchir et tonifier l'épiderme du visage et du corps. Elle est tonifiante pour la peau et le cuir chevelu grâce à sa formule exceptionnelle enrichie de 11 extraits de plantes, d'Aloe Vera, de propolis et d'allantoïne. Son pH neutre s'adapte aux peaux les plus sensibles même à celles des enfants. * Hydratation des couches supérieures de l'épiderme.",
        volume: "473 ml",
        content: "80.3 % de gel d'aloès.",
        use: "Avant l'application de soins cosmétiques et à tout moment de la journée pour hydrater* la peau. En été, pour rafraîchir la peau après le soleil.",
    },
    {
        ref: 28,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Forever Bright Toothgel",
        price: 12.0,
        description:
            "Ce gel dentaire, sans fluor et non abrasif, ravive la blancheur de vos dents. Son complexe à la chlorophylle, sans menthol, procure une sensation de fraîcheur naturelle. Sa formule complète à base de propolis et d'aloès aide à préserver votre l'hygiène buccale.",
        volume: "130 g",
        content: "35.5 % de gel d'aloès.",
        use: "Pour un soin complet, se brosser les dents après chaque repas et prendre régulièrement rendez-vous chez le dentiste.",
    },
    {
        ref: 22,
        category: "Les Indispensables Forever",
        cat: "indispensables",
        name: "Aloe Lèvres",
        price: 5.51,
        description:
            "Une formule nourrissante et protectrice pour ce baume lèvres qui associe Aloe Vera, huile de jojoba et cire d'abeille. Il apporte un confort revitalisant pour les lèvres les plus desséchées. * Hydratation des couches supérieures de l'épiderme.",
        volume: "4,5 g",
        content: "27.6 % de gel d'aloès, 20.4 % d'huile de jojoba.",
        use: "Appliquer sur les lèvres dès que le besoin se fait sentir.",
    },
    {
        ref: 617,
        category: "Les Solaires",
        cat: "solaires",
        name: "Aloe Sunscreen",
        price: 25.1,
        description:
            "La Forever Aloe Sunscreen combine le pouvoir apaisant de l'aloès avec de l'oxyde de zinc naturel pour une protection SPF 30 avancée contre les rayons UVA et UVB. Cette crème solaire protège, apaise et hydrate. Adaptée à tous les types de peaux, elle sera votre alliée incontournable cet été.",
        volume: "118 ml",
        content: "Aloe vera, Vitamine E, Oxyde de Zinc.",
        use: "Appliquer uniformément et généreusement sur la peau avant toute exposition au soleil. Renouveler l’application toutes les 2 heures. Il est conseillé d'éviter les expositions aux heures d’ensoleillement maximum, entre 12h et 16h.",
    },
    {
        ref: 205,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Aloe MSM Gel ",
        price: 36.43,
        description:
            "Le methyl sulfonyl méthane (MSM) est une source stable, riche et naturelle de soufre organique. Le soufre est présent en concentration particulièrement élevée dans les articulations où il participe à la production du sulfate de chondroïtine et des glucosamines. Utilisé comme gel de massage, le MSM gel améliore le confort articulaire.",
        volume: "118 ml",
        content: "40 % de gel d'aloès, 15 % MSM.",
        use: "Appliquer en massages généreux sur les zones inconfortables.",
    },
    {
        ref: 640,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Shampoing Aloe-Jojoba",
        price: 25.81,
        description:
            "Le shampoing Aloe-Jojoba a été conçu pour nettoyer en profondeur et hydrater tous les types de cheveux. Vos cheveux seront hydratés, brillants, sains et doux. En associant l’Aloe vera pur (39.7%) à l’huile de jojoba (fortifiante pour les cheveux), Forever vous propose une nouvelle formule du shampooing Forever Aloe-Jojoba qui sera parfaite pour un usage quotidien et fera ressortir le meilleur de vos cheveux. Sans sulfates ajoutés, il aide à maintenir l'équilibre hydrique de votre cuir chevelu tout en le gardant apaisé.",
        volume: "118 ml",
        content:
            "39.7 % de gel d'aloès Huile de Jojoba Huile d'Argan Huile d'Eglantier",
        use: "Déposer une noix de produit les cheveux et sur le cuir chevelu, masser puis rincer. Répéter l'opération si nécessaire. Pour de meilleurs résultats, utiliser l'Après Shampoing Aloe-Jojoba.",
    },
    {
        ref: 641,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Apres-Shampoing Aloe-Jojoba",
        price: 28.13,
        description:
            "L’après-shampoing est un soin indispensable à associer à sa routine capillaire pour adoucir, démêler, nourrir les cheveux et leur donner de la brillance. La nouvelle formule de l’après-shampoing Aloe-Jojoba stimulera également l'hydratation des cheveux et du cuir chevelu, sans sulfate. Notre formule est parfaite pour un usage quotidien et comprend trois huiles différentes pour retenir l'humidité sans alourdir les cheveux.",
        volume: "118 ml",
        content:
            "40.7 % de gel d'aloès Huile de Jojoba Huile d'Argan Huile d'Eglantier",
        use: "Appliquer une noix de produit sur l'ensemble de la chevelure en insistant sur les pointes. Laisser agir quelques minutes avant de rincer abondamment.",
    },
    {
        ref: 647,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Aloe Body Lotion",
        price: 27.0,
        description:
            "L'Aloe Body Lotion apaise, hydrate* et protège la peau du dessèchement. Grâce à sa texture légère et non grasse, elle pénètre rapidement et laisse la peau souple, douce et d’apparence plus lisse. Un parfum frais et délicat. Sans silicone. Convient aux peaux sensibles. Peut être utilisée en après solaire. *Hydratation des couches supérieures de l'épiderme ",
        volume: "118 ml",
        content: "66% de gel d'aloes.",
        use: "Appliquer quotidiennement sur une peau propre et sèche sur l'ensemble du corps, en insistant sur les zones sèches. Masser jusqu'à complète absorption de l'émulsion.",
    },
    {
        ref: 646,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Aloe Body Wash",
        price: 27.22,
        description:
            "Grâce à sa formule très douce, L’Aloe Body Wash nettoie et revitalise la peau délicatement tout en respectant son équilibre. Sa texture émulsion-gel fraîche fond sur la peau pour y laisser un parfum envoutant. Votre peau est propre, douce et rafraichie. Formule pH neutre. Sans sulfates. Convient aux peaux sensibles.",
        volume: "118 ml",
        content:
            "Aloe Barbadensis Leaf Juice (Stabilized* Aloe Vera Gel/gel d’aloès officinal stabilisé*), Water (Aqua/Eau), Cocamidopropyl Betaine, Cocamidopropyl Hydroxysultaine, Propanediol, Sodium Methyl 2-Sulfolaurate, Sodium Cocoyl Glycinate, Sodium Cocoamphoacetate, Polyacrylate Crosspolymer-6, Disodium 2-Sulfolaurate, Lauryl Glucoside, Hydrolyzed Jojoba Esters, Chondrus Crispus Extract",
        use: "Appliquer sur une houppette de douche, un luffa ou une éponge et savonner délicatement tout le corps en effectuant des mouvements circulaires. Bien rincer.",
    },
    {
        ref: 564,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Aloe Cooling Lotion",
        price: 17.28,
        description:
            "Relax and recharge with the refreshing feel of aloe, menthol, eucalyptus and other soothing ingredients. Perfect to massage into muscles and joints / affected areas after a long day or a challenging workout. ",
        volume: "118 ml",
        content: "Gel Aloe Vera 42,9%, Huile d'Eucalyptus, Menthol, Camphre",
        use: "Appliquer généreusement sur les zones nécessaires et masser pour faire pénétrer.",
    },
    {
        ref: 522,
        category: "Corps & Cheveux",
        cat: "corps",
        name: "Aloe Jojoba Conditioning",
        price: 24.94,
        description:
            "Non disponible en France. L'Après Shampoing Aloe-Jojoba, formulé avec de l'Aloe Vera stabilisée, est enrichi avec un complexe de pro vitamines B, trois huiles naturelles, ainsi qu'une touche d'huile essentielle de Lavande vraie, pour un parfum délicat. Cet après shampoing a été formulé pour agir en synergie avec le Shampoing Aloe Jojoba. Il laisse les cheveux doux et brillants. Non vendu en metropole.",
        volume: "296 ml",
        content: "Aloe Vera (37,3%) ",
        use: "Laver les cheveux à l'aide du Shampoing Aloe Jojoba puis appliquer l'Après Shampoing Aloe Jojoba et laisser poser 2 à 3 minutes. Rincer soigneusement et sécher les cheveux.",
    },
    {
        ref: 376,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Arctic Sea",
        price: 42.44,
        description:
            "La recrudescence des fast-foods et les repas pris rapidement sur le pouce ne nous encouragent pas à entretenir une alimentation saine et équilibrée. Forever Arctic-Sea se compose d’acides gras insaturés, l’EPA (acide eicosapentaénoïque) et le DHA (acide docosahexaénoïque) présents dans les huiles de poissons et de calamar, et qui font partie de la famille des Oméga-3. Ces acides gras sont dits « essentiels » car l’organisme ne sait pas les synthétiser. Il est nécessaire d’en consommer car le DHA contribue au fonctionnement normal du cerveau aide à maintenir une vision normale. L’EPA et le DHA contribuent à une fonction normale du cœur.",
        volume: "120 capsules, poids net 78g",
        content:
            "45.91 % d’huile de poissons, 16.69 % d’huile de calamar, 11.31% d’huile d’olive extra vierge.",
        use: "Prendre 2 capsules 3 fois par jour de préférence pendant les repas, soit 6 capsules par jour. Déconseillé aux femmes enceintes et allaitantes et aux enfants de moins de 6 ans.",
    },
    {
        ref: 206,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Calcium",
        price: 34.23,
        description:
            "Forever Calcium ™ apporte la dose quotidienne de calcium dont le corps a besoin. Ce complément alimentaire contient du calcium, du magnésium et de la vitamine D qui contribuent au maintien d’une ossature normale. Cette alliance contribue également au maintien d'une fonction musculaire normale. La vitamine C contribue à la formation du collagène pour assurer la fonction normale des cartilages.",
        volume: "90 comprimés",
        content:
            "Calcium, magnésium, zinc, manganèse, cuivre, vitamines C et D.",
        use: "Prendre 4 comprimés par jour. Les compléments alimentaire doivent être utilisés dans le cadre d’un mode de vie sain et non comme substituts d’une alimentation variée et équilibrée. Ne pas dépasser la dose journalière recommandée.",
    },
    {
        ref: 610,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Active Pro-B",
        price: 38.26,
        description:
            "La flore intestinale est composée de plusieurs milliards de bactéries, qui participent au bon fonctionnement de l’organisme. Lorsque cette flore est déséquilibrée, inconforts intestinaux et perte d’énergie se font ressentir.",
        volume: "30 gélules",
        content:
            "8 milliards d’UFC de 6 ferments lactiques (Lactobacillus et Bifidobacterium).",
        use: "Prendre 1 gélule par jour avec un verre d’eau 30 minutes avant le repas.",
    },
    {
        ref: 355,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever ImmuBlend",
        price: 23.8,
        description:
            "Forever ImmuBlend ™ est une association de champignons traditionnellement utilisés en Chine, de vitamine C, D3 et de zinc. La vitamine C, D3 et le zinc contribuent au fonctionnement normal du système immunitaire. La vitamine C et le zinc participent à la protection des cellules contre le stress oxydatif. Poids net : 39.2 G",
        volume: "60 comprimés",
        content: "Vitamines C et D3, zinc.",
        use: "Prendre 1 comprimé par jour.",
    },
    {
        ref: 621,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Supergreens™",
        price: 40.94,
        description:
            "Forever Supergreens™ contient plus de 20 variétés de fruits et légumes, de l'Aloe vera, de la vitamine C et du magnésium. Ce mélange exclusif à Forever, association de superfoods, vitamines et minéraux. La vitamine C qu’il contient contribue au fonctionnement normal du système immunitaire. La vitamine E contribue, elle, à la protection des cellules contre le stress oxydatif et le magnésium au maintien du métabolisme énergétique, à la réduction de la fatigue, à l’équilibre électrolyte et à des fonctions psychologiques normales.",
        volume: "30 sticks de 4.4 g",
        content:
            "Épinards, brocolis, Aloe vera, chou Kale, thé vert, baies de Goji",
        use: "Verser un stick dans votre boisson à l'Aloe vera préférée, dans de l'eau, dans votre Ultra Lite, mélanger et et boire. Possibilité également de verser un stick dans un yaourt. Précautions d'emploi : La prise en dehors des repas, ainsi que la consommation par les enfants, les adolescents, les femmes enceintes et allaitantes et les personnes sous traitement anticoagulant est déconseillé. L'usage prolongé est déconseillé. Pour les personnes en hypothyroïdie ou ayant un traitement de la thyroïde, consultez un médecin.",
    },
    {
        ref: 200,
        category: "Nutrition",
        cat: "nutrition",
        name: "Infusion Fleur d'Aloes - Aloe Blossom Herbal Tea",
        price: 40.94,
        description:
            "Cette boisson, au subtil et délicat arôme de fleur d'aloès, associe les goûts fruités et acidulés de l'écorce d'orange et du zeste de citron, les saveurs épicées de la cannelle et du clou de girofle et la fraîcheur parfumée du poivre de Jamaïque et du gingembre. L'Infusion Fleur d'Aloès, réhydrate en douceur l’organisme. Chaude ou froide, elle peut être consommée à tout moment de la journée.",
        volume: "25 sachets",
        content:
            "Fleur d'aloès, cannelle, racine de gingembre, graine de cardamome, zeste de citron, fleurs de camomille.",
        use: "Pour une infusion chaude : Utiliser 1 sachet par litre.Verser l'eau bouillante et laisser infuser 3 à 5 minutes avant de retirer le sachet. Pour une infusion glacée (1 tasse) : Verser 2 tasses d'eau bouillante pour 4 sachets et laisser infuser 5 minutes. Retirer les sachets, ajouter 2 tasses d'eau froide. Servir frais.",
    },
    {
        ref: 312,
        category: "Nutrition",
        cat: "nutrition",
        name: "Nutra Q10",
        price: 34.13,
        description:
            "Forever NutraQ10™ est un complément alimentaire qui associe des vitamines (B6, B9, B12, C et E), des minéraux (magnésium et chrome) et des plantes. L’action combinée des 3 vitamines du groupe B permet une normalisation du taux d’homocystéine. Les vitamines C et E sont de puissants antioxydants qui protègent les cellules contre le stress oxydatif. L’ensemble de ces ingrédients favorisent le bon fonctionnement du système cardiovasculaire.",
        volume: "30 sachets de 3.5g",
        content:
            "Vitamines B (B6, B9 et B12), C et E, magnésium, chrome, coenzyme Q10, plantes. Contient du soja.",
        use: "Diluer 1 sachet dans 90 ml de Pulpe d’Aloès Stabilisée ou dans un verre d’eau. L'emploi chez les personnes sous anticoagulants est déconseillé.",
    },
    {
        ref: 551,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Move",
        price: 66.31,
        description:
            "Restez dynamique! Forever Move est l’alliance unique de membrane de coquille d’œuf NEM® et de curcuma BioCurc®. Contient des œufs, soja et poisson.",
        volume: "90 capsules",
        content:
            "Membrane de coquille d’œuf NEM®, extrait de rhizome de curcuma BioCurc®",
        use: "Prendre 3 capsules par jour. L'emploi chez les personnes sous anticoagulants est déconseillé.",
    },
    {
        ref: 622,
        category: "Nutrition",
        cat: "nutrition",
        name: "FOREVER FOCUS",
        price: 88.8,
        description:
            "FOREVER FOCUS associe le Cognizin®, une forme brevetée de citicoline, à des plantes traditionnelles, des vitamines B6 et B12 et du zinc. Les vitamines B6, B12 et l'acide pantothénique contribuent à réduire la fatigue. La Rhodiole soutient l'activité intellectuelle et le Brahmi aide à accroître la concentration. L'acide pantothénique contribue également à des performances intellectuelles normales et le zinc à une fonction cognitive normale.",
        volume: "120 gélules",
        content:
            "Extrait de feuilles de thé vert, Bacopa, L-Tyrosine , Citicoline*, Rhodiole, Zinc, Guarana, Acide pantothénique, Vitamine B6 et B12",
        use: "Prendre 4 gélules par jour au moment des repas en évitant le repas du soir. Contient de la caféine (50 mg par dose journalière). La prise en dehors des repas, ainsi que la consommation par les enfants, les adolescents, les femmes enceintes et allaitantes est déconseillé. Consultez votre médecin en cas de prise simultanée d'anticoagulants. L'emploi chez les personnes sous traitement antidépresseurs est déconseillé.",
    },
    {
        ref: 613,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Marine Collagen",
        price: 85.28,
        description:
            "Formulé avec 3000 mg de collagène marin hautement assimibable par l'organisme, des antioxydants, de l'extrait de poivre noir, de la vitamine A et C de la biotine et du zinc, le Forever Marine Collagen est un véritable cocktail de nutriments précieux et essentiels pour la jeunesse de votre peau, de vos cheveux et de vos ongles.* *Riche en vitamines A,C et en zinc, lutte contre le stress oxydatif et pour une action protectrice des cellules. *Contient du zinc qui contribue au maintien normal de la peau, des ongles, des cheveux et des os. *Contient de la biotine qui contribue au maintien normal de la peau et des cheveux.",
        volume: "30 x 15 ml",
        content:
            "Eau, jus de fruits [pomme (Malus domestica), acérola (Malpighia glabra)] concentré (19,6 %), collagène de poisson (18,6 %), épaississant (gomme d'acacia, pectine), régulateur d'acidité (acide citrique), édulcorant (érythritol) , glycosides de stéviol), vitamine C (ascorbate de sodium), vitamine A (beta-carotène), L-isoleucine, concentré de jus de carotte (Daucus carota L.), arôme (raisin muscat, avocat), Extrait de fruit de lyciet de barbarie (Lycium barbarum L.), extrait de feuille de théier vert (Camellia sinensis L.), zinc (gluconate de zinc), émulsifiant (lécithine), coenzyme Q10, conservateur (sorbate de potassium), extrait de fruit de poivre noir (Piper nigrum), biotine (D-biotine). Conseils d'allergie : Pour les allergènes, voir les ingrédients en gras.",
        use: "Boire 1 sachet par jour. Ne pas dépasser la dose journalière recommandée. Bien refermer le sachet et le conserver dans un endroit sec et frais. Ne pas utiliser si l’emballage n’est pas hermétiquement fermé ou est endommagé. Tenir hors de portée des jeunes enfants.",
    },
    {
        ref: 464,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Fiber",
        price: 26.3,
        description:
            "Forever Fiber™ apporte quotidiennement un mélange de 5 g de fibres solubles dans l'eau.",
        volume: "30 sachets de 6.1g",
        content: "Fibres",
        use: "Prendre 1 sachet par jour à diluer. Verser le contenu d'un sachet dans un verre, ajouter de la Pulpe Stabilisée d'Aloès, de l’eau ou une autre boisson et mélanger.",
    },
    {
        ref: 659,
        category: "Nutrition",
        cat: "nutrition",
        name: "Programme Forever Equilibre et Bien-Etre DX4",
        price: 146.04,
        description:
            "Le DX4™ est un programme de quatre jours qui a pour objectif de vous aider à retrouver votre bien-être intérieur grâce à une association de compléments alimentaires qui contribuent au bon fonctionnement du métabolisme*, à l'hydratation** et à la satiété***. Les sept produits du DX4™ agissent en synergie pour retrouver un meilleur équilibre physique et émotionnel.",
        volume: "7 produits",
        content:
            "4 mini pulpe d’Aloe Vera (330 mL), 1 poche de Forever Plant Protein™, 4 sachets de Forever LemonBlast™, 32 comprimés à croquer de Forever Sensatiable™, 4 comprimés effervescents de Forever Multi Fizz™, 8 comprimés de Forever DuoPure™, 12 comprimés de Forever Therm Plus™.",
        use: "Voir Livret d’accompagnement DX4.",
    },
    {
        ref: 624,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever iVision",
        price: 37.22,
        description:
            "Adaptez vos yeux à un style de vie connecté ! Très sollicités par les écrans, il est important de protéger nos yeux contre les dommages à long terme. Forever iVision™ est le complément alimentaire pour notre vision avec un apport de vitamine A et de zinc.",
        volume: "60 capsules",
        content: "Vitamines A, C, E, zinc et Lutemax 2020®",
        use: "Prendre 2 capsules par jour avec un demi-verre d'eau. iVision est déconseillé aux fumeurs (Beta carotène).",
    },
    {
        ref: 439,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Daily",
        price: 22.28,
        description:
            "Formule exclusive de 55 ingrédients qui associe les nutriments du Complexe AOS (Aloe OligoSaccharides) à des vitamines du groupe B (B2, B5, B6, B9, B12) et de la vitamine C qui participent à la réduction de la fatigue, minéraux dont le cuivre, le fer et le manganèse qui contribuent à un métabolisme énergétique normal et des minéraux et des phytonutriments d’extraits de fruits et légumes. L’AOS permet une assimilation optimale des nutriments pour chaque cellule de l’organisme.",
        volume: "60 comprimés",
        content:
            "Complexe AOS (mélange de nutriments), 12 vitamines (A, B1, B2, B3, B5, B6, B8, B9, B12, C, D et E) et 8 minéraux essentiels (fer, zinc, cuivre, chrome, iode, manganèse, molybdène et sélénium), Forever FVX20 (mélange de 20 extraits de fruits et légumes).",
        use: "Prendre 2 comprimés tous les matins. Déconseillé aux enfants de moins de 12 ans, aux femmes enceintes ou allaitantes et en cas de traitement antihypertenseur. Consulter un médecin en cas d’hypothyroïdie ou de traitement de la thyroïde..",
    },
    {
        ref: 321,
        category: "Nutrition",
        cat: "nutrition",
        name: "FAB Forever Active Boost - Pack x12",
        price: 42.28,
        description:
            "// PRIX UNITAIRE : 3.35€ // FAB Forever Active Boost est une boisson énergisante spécialement formulée pour vous apporter le surplus d'énergie dont vous avez besoin. Les vitamines B3, B5, B6 et B12 contribuent à un métabolisme énergétique normal.",
        volume: "250 ml",
        content: "Caféine, taurine, L-glutamine, pulpe d'Aloe Vera stabilisée.",
        use: "Agiter doucement avant l'ouverture de la canette. Servir très frais. A consommer avec modération. Déconseillé chez les personnes sensibles, les enfants et les femmes enceintes ou allaitantes. Ne pas mélanger avec des boissons alcoolisées.",
    },
    {
        ref: 354,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Kids",
        price: 19.69,
        description:
            "La nouvelle formule de Forever Kids renferme un meilleur dosage en vitamines (A, complexe de vitamines B, C, D, E) et minéraux (fer, zinc). : La vitamine D est nécessaire à la croissance et à un développement osseux normaux. Le fer contribue au développement cognitif normal de l’enfant. Les comprimés (à sucer ou à croquer) seront très appréciés pour leur bon goût de fraise.",
        volume: "120 comprimés",
        content: "12 vitamines, fer, zinc",
        use: "Enfants à partir de 4 ans et jeunes adultes. 4 comprimés par jour. Précautions d'emploi : Déconseillé aux femmes enceintes ou désireuses de l'être, aux femmes ménopausées, aux personnes sous anticoagulants et aux personnes souffrant de maladies ayant pour conséquence une accumulation anormale de fer. Une consommation excessive de polyols peut avoir des effets laxatifs. Consulter un médecin en cas d’hypothyroïdie ou de traitement de la thyroïde. Demander conseil à un professionnel de santé avant la prise de ce complément.",
    },
    {
        ref: 65,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Ail et Thym",
        price: 25.74,
        description:
            "Forever Ail et Thym est une combinaison unique de 2 extraits de plantes. Capsule équivalent à 1000 mg d’ail frais.",
        volume: "100 capsules",
        content:
            "38.5 % d'huile de canola, 3 % d'extrait de bulbe d'ail, 15.4 % de poudre de feuilles de thym. Contient du soja.",
        use: "Prendre 1 capsule 3 fois par jour ou plus, de préférence pendant les repas. Déconseillé aux enfants de moins de 12 ans, aux femmes enceintes et allaitantes et chez les personnes sous traitement anticoagulant. Les compléments alimentaire doivent être utilisés dans le cadre d’un mode de vie sain et non comme substituts d’une alimentation variée et équilibrée. Ne pas dépasser la dose journalière recommandée.",
    },
    {
        ref: 48,
        category: "Nutrition",
        cat: "nutrition",
        name: "Absorbent-C",
        price: 24.91,
        description:
            "La vitamine C est la vitamine à consommer pour éliminer la fatigue et retrouver tonus et énergie. Elle est indispensable pour renforcer la résistance de l'organisme et faciliter les efforts physiques.",
        volume: "100 comprimés",
        content:
            "42 % fibres naturelles d'avoine, 5.2 % acide ascorbique (vitamine C), 9.5 % miel, Contient de l'avoine.",
        use: "Prendre 3 comprimé par jour. Une consommation excessive de polyols peut avoir des effets laxatifs. Déconseillé aux enfants, aux femmes enceintes et allaitantes et en cas de traitement anti-hypertenseur. Les compléments alimentaire doivent être utilisés dans le cadre d’un mode de vie sain et non comme substituts d’une alimentation variée et équilibrée. Ne pas dépasser la dose journalière recommandée.",
    },
    {
        ref: 215,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Multi-Maca",
        price: 37.38,
        description:
            "Forever Multi-maca™ associe le légendaire Maca péruvien, connu sous le nom de “ginseng péruvien”, à d’autres plantes telles que le Pygeum, le Tribulus et le Muira Puama. La maca est un actif adaptogène dont les tubercules possèdent de nombreuses propriétés qui soutiennent les performances physiques et intellectuelles et également qui stimulent le tonus et la libido des hommes et des femmes.",
        volume: "60 comprimés",
        content:
            "Racines de Maca, fruits de Tribulus terrestris, écorces de Muira Puama, baies de Sabal, écorces de Pygeum, L-Arginine. Contient du soja.",
        use: "Prendre 6 comprimés par jour. Demander l'avis de de votre médecin et/ ou pharmacien. Déconseillé chez les femmes ayant des antécédents personnels ou familiaux de cancer du sein. L'emploi chez les femmes enceintes et allaitantes, chez les enfants et adolescentes, ou en cas de traitement anti-hypertenseur ou antidiabétique est déconseillé. Les compléments alimentaire doivent être utilisés dans le cadre d’un mode de vie sain et non comme substituts d’une alimentation variée et équilibrée. Ne pas dépasser la dose journalière recommandée.",
    },
    {
        ref: 264,
        category: "Nutrition",
        cat: "nutrition",
        name: "Forever Multi-Maca",
        price: 42.73,
        description:
            "Forever Active Ha est un complément alimentaire à base d'acide hyaluronique, de gingembre, de curcuma et de zinc. L'acide hyaluronique (HA) est notamment présent dans le cartilage des articulations. Jusqu'à récemment, en raison de sa grande taille, l'HA ne pouvait être administré que par injection. Désormais, grâce à une technologie de fractionnement enzymatique (dite injuv®) les molécules d'HA sont fractionnées en fragments assimilables par voie orale.",
        volume: "60 capsules",
        content:
            "8.3 % d'acide hyaluronique Injuv®, 5% de poudre de racines de curcuma, 5 % d'huile de gingembre. Contient du soja.",
        use: "Prendre 2 capsules par jour avec un grand verre d'eau. Déconseillé chez les femmes enceintes. L'emploi chez les personnes sous anticoagulants est déconseillé. Les compléments alimentaire doivent être utilisés dans le cadre d’un mode de vie sain et non comme substituts d’une alimentation variée et équilibrée. Ne pas dépasser la dose journalière recommandée.",
    },
    {
        ref: 374,
        category: "Nutrition",
        cat: "nutrition",
        name: "Vitolize Hommes - Vitolize Men",
        price: 36.6,
        description:
            "Vitolize Hommes contient des vitamines et des minéraux, ainsi que des phytostérols issus de l’huile de pépins de courge pour conserver un bon fonctionnement de la prostate. Le zinc présent dans Vitolize Hommes contribue au maintien normal de la fertilité, de la reproduction et du taux de testostérone dans le sang. La vitamine B6 qu’il renferme permet de réguler l’activité hormonale et le sélénium favorise une spermatogénèse normale.",
        volume: "60 capsules",
        content:
            "Huile de pépins de citrouille, vitamines B6, C, D et E, zinc et sélénium.",
        use: "Prendre 2 capsules par jour.",
    },
    {
        ref: 68,
        category: "Nutrition",
        cat: "nutrition",
        name: "Fields of Greens",
        price: 17.08,
        description:
            "Fields of Greens est une association unique de feuille d'orge, de blé, de luzerne et d'une pincée de piment de Cayenne.",
        volume: "80 comprimés (51g)",
        content:
            "19.65 % de poudre de feuilles d'orge, 19.65 % de poudre de feuilles de blé, 19.65 % de poudre de feuilles de luzerne, 0,27 % de poudre de piments de Cayenne.",
        use: "Prendre 2 comprimés par jour.",
    },
    {
        ref: 71,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "Forever Garcinia Plus",
        price: 46.8,
        description:
            "Forever Garcinia Plus™ est formulé à partir de garcinia dosé en acide hydroxycitrique qui favorise la régulation de l'appétit et bloque la transformation des sucres en graisses. Forever Garcinia Plus contient également du chrome qui favorise la stabilisation et la normalisation des taux de sucres et d'insuline dans le sang. Nouvelle formule sans dioxyde de titane",
        volume: "70 capsules",
        content:
            "Extrait de fruit de garcinia cambogia, huile de carthame et chrome. Contient du soja.",
        use: "Prendre 1 capsule 2 fois par jour avec un grand verre d'eau, de préférence 30 à 60 minutes avant le repas. Déconseillé aux femmes enceintes ou allaitantes.",
    },
    {
        ref: 520,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "Forever Fast Break",
        price: 56.51,
        description:
            "Forever Fast Break™ est une barre énergétique à la délicieuse saveur beurre de cacahuète. Source de glucides, mais aussi de vitamines et de minéraux, ce concentré de nutriments sera l’allié idéal des sportifs. En effet, sa composition unique permet une libération d’énergie en deux temps : tout d’abord immédiate puis graduelle. Effet coup de fouet assuré ! Elle sera tout aussi utile dans un sac à main ou le tiroir du bureau pour éviter les fringales et surmonter les coups de barre.",
        volume: "Boîte de 12 barres de 56 g",
        content: "Glucides et protéines",
        use: "Consommer 1 barre Fast Break par jour.",
    },
    {
        ref: 289,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "Forever Lean",
        price: 42.78,
        description:
            "Forever Lean est un complément alimentaire à base de feuilles de Neopuntia, de graines de haricot sec et de chrome. Ce dernier contribue à maintenir un taux normal de glucose sanguin et participe au métabolisme normal des macronutriments. Les feuilles de Neopuntia contiennent des fibres qui capturent les sucres et les graisses, et les transforment en un gel qui est évacué par voies naturelles. Forever Lean aide donc à réduire l'apport calorique journalier pour un meilleur contrôle du poids.",
        volume: "120 capsules",
        content: "Neopuntia, extrait de graines de haricot sec, chrome.",
        use: "Prendre 1 capsule avec de l'eau avant le repas. Jusqu'à 4 capsules par jour. Déconseillé aux femmes enceintes ou allaitantes.",
    },
    {
        ref: 463,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "Forever Therm",
        price: 40.63,
        description:
            "Forever Therm™ est formulé à partir d'extraits de plantes (thé vert, café vert, guarana) associés à des vitamines. Le thé vert aide à maintenir et à contrôler le poids, à accroître l’oxydation des graisses et à réduire les corps gras. La caféine contenue dans le guarana aide à améliorer la concentration et la vitamine C contribue à réduire la fatigue.",
        volume: "60 comprimés",
        content:
            "Thé vert, guarana, café vert, 8 vitamines (B1, B2, B3, B5, B6, B9, B12 et C)",
        use: "Prendre 2 comprimés par jour. Contient de la caféine, déconseillé aux enfants, adolescents et aux femmes enceintes et allaitantes (93 mg de caféine pour 2 comprimés). Déconseillé en dehors des repas.",
    },
    {
        ref: 473,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "Forever ARGI+",
        price: 76.19,
        description:
            "Vitalité, force, endurance, sport extrême, Forever Argi + est un complément à base de L-arginine, ribose, vitamines et plantes avec sucres et édulcorants, pour un accompagnement efficace pendant et après l'effort. Les vitamines C, B6 et B9 contribuent à un rendement normal du métabolisme énergétique et du glycogène. Elles aident également à combattre la fatigue.",
        volume: "Sachet de 300 g (30 doses de 10 g)",
        content:
            "Thé vert, guarana, café vert, 8 vitamines (B1, B2, B3, B5, B6, B9, B12 et C)",
        use: "51 % de L- Arginine, mélange d' extraits de fruits rouges.",
    },
    {
        ref: 470,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "Forever Lite Ultra Vanille",
        price: 29.32,
        description:
            "Pour garder la ligne, cet en-cas nutritif savoureux, riche en protéines, peut compléter un repas léger en apportant vitamines, minéraux, protéines et glucides. Forever Ultra Lite Plus Vanille contribue au maintien de la masse musculaire et participe au rendement normal du métabolisme énergétique.",
        volume: "375 g",
        content:
            "Vitamines B1, B2, B3, B5, B6, B8, B9, B12, C, D et E, protéines. Contient du soja.",
        use: "Mélanger 1 cuillère doseur de 25 g dans 100 à 150 ml de lait de soja ou autre boisson (lait écrémé, eau). Il convient de maintenir une consommation de liquide suffisante.",
    },
    {
        ref: 471,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "Forever Lite Ultra Chocolat",
        price: 29.32,
        description:
            "Pour garder la ligne, cet en-cas nutritif et savoureux, peut compléter un repas léger en apportant vitamines, minéraux protéines et carbo-hydrates. Forever ultra Lite Plus Chocolat contribue au maintien de la masse musculaire et participe au rendement normal du métabolisme énergétique.",
        volume: "375 g",
        content:
            "Vitamines B1, B2, B3, B5, B6, B8, B9, B12, C, D et E, protéines. Contient du soja.",
        use: "Mélanger 1 cuillère doseur de 26g dans 150 à 300 ml de lait écrémé ou une autre boisson (lait de soja, eau). Bien agiter avant utilisation. Il convient de maintenir une consommation de liquide suffisante.",
    },
    {
        ref: 656,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "Forever Plant Protein",
        price: 59.28,
        description:
            "Forever Plant Protein™ est une formule végétalienne, sans produits laitiers et sans soja, contenant 17g de protéines de haute qualité par portion. Ce shake à la délicieuse saveur de vanille est formulé à base de protéines de pois et de citrouille qui contribuent au fonctionnement normal des os, à la croissance et au maintien de la masse musculaire.",
        volume: "390g",
        content:
            "Isolat de protéine de pois (Pisum sativum L.) (59 %), poudre de protéine de citrouille (Cucurbita pepo L.) (26 %), arôme (vanille), inuline de chicorée, triglycérides à chaîne moyenne, épaississant (gomme guar), arôme, anti-agglomérant (oxyde de magnésium), édulcorant (glycosides de stéviol), poudre de jus d’aloe vera (Aloe barbadensis).",
        use: "Versez 1 cuillère rase à 240 ml d’eau ou d’une autre boisson et mélangez bien. Conserver hermétiquement fermé dans un endroit sombre. Tenir hors de portée des jeunes enfants. Ne pas dépasser la dose journalière recommandée. Ne pas administrer aux enfants de moins de 12 ans. Les femmes enceintes ou qui allaitent doivent consulter un médecin avant utilisation. Pas de consommation prolongée sans avis médical.",
    },
    {
        ref: 10282,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "FIT Shaker 350ml",
        price: 4.38,
        description:
            "Un FIT shaker très pratique en 2 parties qui se vissent : un flacon avec une échelle graduée de 350 ml pour doser le liquide choisi, eau ou lait et un récipient supplémentaire de 100ml pour emporter le Lite. Le mélange avec de l’eau ou du lait peut se faire à la dernière minute. Le bouchon à vis assure que le liquide ne s'échappe pas et le tamis assure une consistance parfaite de la boisson. Praticité et fraîcheur garanties ",
        volume: "390 g",
        content: "",
        use: "",
    },
    {
        ref: 532,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "F15 Intermediaire Vanille",
        price: 174.75,
        description:
            "NOUVEAU ! C'est le nouveau programme qui vous permettra de changer totalement l'apparence de votre corps ! Corps svelte et musclé garanti ! Forme éblouissante ! Ces deux références 532 et 533 (Vanille et Chocolat) s'adressent aux niveaux sportifs intermédiaires.",
        volume: "6 produits",
        content:
            "2 Pulpes d’Aloès Stabilisées - Forever Therm™ x 30 comprimés - Forever Garcinia Plus™ x 90 capsules - Forever Fiber™ x 15 sachets - 1 poche de Forever Lite Ultra™ x 15 doses Vanille ou Chocolat - 1 Livret d’accompagnement F15 Intermédiaire.",
        use: "Suivez le programme nutritionnel et d’activité sur deux phases de 15 jours. La brochure contenue dans le pack est un véritable journal de bord qui vous permettra de suivre au jour le jour le Programme F15 Intermédiaire. Apprentissage nutritionnel, activité physique légère à modérée et planning rigoureux seront les maîtres-mots. Des recettes et des conseils vous aideront à atteindre vos objectifs.",
    },
    {
        ref: 533,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "F15 Intermediaire Chocolat",
        price: 174.75,
        description:
            "NOUVEAU ! C'est le nouveau programme qui vous permettra de changer totalement l'apparence de votre corps ! Corps svelte et musclé garanti ! Forme éblouissante ! Ces deux références 532 et 533 (Vanille et Chocolat) s'adressent aux niveaux sportifs intermédiaires.",
        volume: "6 produits",
        content:
            "2 Pulpes d’Aloès Stabilisées - Forever Therm™ x 30 comprimés - Forever Garcinia Plus™ x 90 capsules - Forever Fiber™ x 15 sachets - 1 poche de Forever Lite Ultra™ x 15 doses Vanille ou Chocolat - 1 Livret d’accompagnement F15 Intermédiaire.",
        use: "Suivez le programme nutritionnel et d’activité sur deux phases de 15 jours. La brochure contenue dans le pack est un véritable journal de bord qui vous permettra de suivre au jour le jour le Programme F15 Intermédiaire. Apprentissage nutritionnel, activité physique légère à modérée et planning rigoureux seront les maîtres-mots. Des recettes et des conseils vous aideront à atteindre vos objectifs.",
    },
    {
        ref: 536,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "F15 Avance Vanille",
        price: 174.75,
        description:
            "C'est le nouveau programme qui vous permettra de changer totalement l'apparence de votre corps ! Corps svelte et musclé garanti ! Forme éblouissante ! Ces deux références 536 et 537 (Vanille et Chocolat) s'adressent aux niveaux sportifs confirmés. ",
        volume: "6 produits",
        content:
            "2 Pulpes d’Aloès Stabilisées - Forever Therm™ x 30 comprimés - Forever Garcinia Plus™ x 90 capsules - Forever Fiber™ x 15 sachets - 1 poche de Forever Lite Ultra™ x 15 doses Vanille ou Chocolat - 1 Livret d’accompagnement F15 Avancé.",
        use: "Suivez le programme nutritionnel et d’activité sur deux phases de 15 jours. La brochure contenue dans le pack est un véritable journal de bord qui vous permettra de suivre au jour le jour le Programme F15 Débutant. Apprentissage nutritionnel, activité physique légère à modérée et planning rigoureux seront les maîtres-mots. Des recettes et des conseils vous aideront à atteindre vos objectifs.",
    },
    {
        ref: 475,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "C9 Pulpe Vanille",
        price: 146.55,
        description:
            "Saveur Vanille ou chocolat au choix selon la référence. Le C9 est la première phase du programme Forever F.I.T., programme Minceur & Fitness. Il s’effectue sur 9 JOURS pour purifier son organisme en éliminant les toxines. Les résultats apparaissent dès les premiers jours : perte de poids, sensation de légèreté et énergie retrouvée. ",
        volume: "5 produits",
        content:
            "2 Forever Pulpe D'aloe Vera, 18 comprimés de Forever Therm™, 54 capsules de Forever Garcinia Plus™, 9 sticks de Forever Fiber™, 1 poche de Forever Lite Ultra™ Vanille ou Chocolat, 1 Livret d’accompagnement C9, 1 mètre-ruban",
        use: "Voir Livret d’accompagnement C9",
    },
    {
        ref: 476,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "C9 Pulpe Chocolat",
        price: 146.55,
        description:
            "Saveur Vanille ou chocolat au choix selon la référence. Le C9 est la première phase du programme Forever F.I.T., programme Minceur & Fitness. Il s’effectue sur 9 JOURS pour purifier son organisme en éliminant les toxines. Les résultats apparaissent dès les premiers jours : perte de poids, sensation de légèreté et énergie retrouvée. ",
        volume: "5 produits",
        content:
            "2 Forever Pulpe D'aloe Vera, 18 comprimés de Forever Therm™, 54 capsules de Forever Garcinia Plus™, 9 sticks de Forever Fiber™, 1 poche de Forever Lite Ultra™ Vanille ou Chocolat, 1 Livret d’accompagnement C9, 1 mètre-ruban",
        use: "Voir Livret d’accompagnement C9",
    },
    {
        ref: 528,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "F15 Debutant Vanille",
        price: 174.75,
        description:
            "NOUVEAU ! C'est le nouveau programme qui vous permettra de changer totalement l'apparence de votre corps ! Corps svelte et musclé garanti ! Forme éblouissante ! Les deux références 528 et 529 (Vanille ou Chocolat) s'adressent aux débutants.",
        volume: "6 produits",
        content:
            "2 Pulpes d’Aloès Stabilisées - Forever Therm™ x 30 comprimés - Forever Garcinia Plus™ x 90 capsules - Forever Fiber™ x 15 sachets - 1 poche de Forever Lite Ultra™ x 15 doses Vanille ou Chocolat - 1 Livret d’accompagnement F15 Débutant.",
        use: "Suivez le programme nutritionnel et d’activité sur 2 phases de 15 jours. La brochure contenue dans le pack est un véritable journal de bord qui vous permettra de suivre au jour le jour le Programme F15 Débutant. Apprentissage nutritionnel, activité physique légère à modérée et planning rigoureux seront les maîtres-mots. Des recettes et des conseils vous aideront à atteindre vos objectifs.",
    },
    {
        ref: 529,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "F15 Debutant Chocolat",
        price: 174.75,
        description:
            "NOUVEAU ! C'est le nouveau programme qui vous permettra de changer totalement l'apparence de votre corps ! Corps svelte et musclé garanti ! Forme éblouissante ! Les deux références 528 et 529 (Vanille ou Chocolat) s'adressent aux débutants.",
        volume: "6 produits",
        content:
            "2 Pulpes d’Aloès Stabilisées - Forever Therm™ x 30 comprimés - Forever Garcinia Plus™ x 90 capsules - Forever Fiber™ x 15 sachets - 1 poche de Forever Lite Ultra™ x 15 doses Vanille ou Chocolat - 1 Livret d’accompagnement F15 Débutant.",
        use: "Suivez le programme nutritionnel et d’activité sur 2 phases de 15 jours. La brochure contenue dans le pack est un véritable journal de bord qui vous permettra de suivre au jour le jour le Programme F15 Débutant. Apprentissage nutritionnel, activité physique légère à modérée et planning rigoureux seront les maîtres-mots. Des recettes et des conseils vous aideront à atteindre vos objectifs.",
    },
    {
        ref: 456,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "Vital 5 ™ Pulpe d'aloe Stabilise",
        price: 317.74,
        description:
            "Vital5™ contient les 5 produits essentiels de Forever pour garantir un bien-être au quotidien. Les actifs de ces produits agissent en synergie pour rétablir l’équilibre de la flore intestinale. Ainsi l’absorption des nutriments est optimisée ainsi que l’élimination des toxines.",
        volume: "5 produits",
        content:
            "Le pack contient 4 Pulpes d’Aloès Stabilisée ou Aloe Berry Nectar, 1 flacon de Forever Daily™, 1 boîte de Forever Active Pro B™, 1 flacon de ForeverArctic Sea™, 1 boîte de ForeverArgi+™.",
        use: "Consulter les conseils d’utilisation dans la documentation fournie dans le pack.",
    },
    {
        ref: 457,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "Vital 5 Aloe Berry Nectar",
        price: 317.74,
        description:
            "Vital5™ contient les 5 produits essentiels de Forever pour garantir un bien-être au quotidien. Les actifs de ces produits agissent en synergie pour rétablir l’équilibre de la flore intestinale. Ainsi l’absorption des nutriments est optimisée ainsi que l’élimination des toxines.",
        volume: "5 produits",
        content:
            "Le pack contient 4 Pulpes d’Aloès Stabilisée ou Aloe Berry Nectar, 1 flacon de Forever Daily™, 1 boîte de Forever Active Pro B™, 1 flacon de ForeverArctic Sea™, 1 boîte de ForeverArgi+™.",
        use: "Consulter les conseils d’utilisation dans la documentation fournie dans le pack.",
    },
    {
        ref: 625,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "C9 Berry Vanille",
        price: 146.55,
        description:
            "Le C9 est la première phase du programme Forever F.I.T., programme Minceur & Fitness. Il s’effectue sur 9 JOURS pour purifier son organisme en éliminant les toxines. Les résultats apparaissent dès les premiers jours : perte de poids, sensation de légèreté et énergie retrouvée.",
        volume: "5 produits",
        content:
            "2 Forever Aloe Berry Nectar, 18 comprimés de Forever Therm™, 54 capsules de Forever Garcinia Plus™, 9 sticks de Forever Fiber™, 1 poche de Forever Lite Ultra™ Vanille ou Chocolat, 1 Livret d’accompagnement C9, 1 mètre-ruban",
        use: "Voir Livret d’accompagnement C9",
    },
    {
        ref: 626,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "C9 Berry Chocolat",
        price: 146.55,
        description:
            "Le C9 est la première phase du programme Forever F.I.T., programme Minceur & Fitness. Il s’effectue sur 9 JOURS pour purifier son organisme en éliminant les toxines. Les résultats apparaissent dès les premiers jours : perte de poids, sensation de légèreté et énergie retrouvée.",
        volume: "5 produits",
        content:
            "2 Forever Aloe Berry Nectar, 18 comprimés de Forever Therm™, 54 capsules de Forever Garcinia Plus™, 9 sticks de Forever Fiber™, 1 poche de Forever Lite Ultra™ Vanille ou Chocolat, 1 Livret d’accompagnement C9, 1 mètre-ruban",
        use: "Voir Livret d’accompagnement C9",
    },
    {
        ref: 629,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "C9 Peche Vanille",
        price: 146.55,
        description:
            "Le C9 est la première phase du programme Forever F.I.T., programme Minceur & Fitness. Il s’effectue sur 9 JOURS pour purifier son organisme en éliminant les toxines. Les résultats apparaissent dès les premiers jours : perte de poids, sensation de légèreté et énergie retrouvée.",
        volume: "5 produits",
        content:
            "2 Forever Aloe Berry Nectar, 18 comprimés de Forever Therm™, 54 capsules de Forever Garcinia Plus™, 9 sticks de Forever Fiber™, 1 poche de Forever Lite Ultra™ Vanille ou Chocolat, 1 Livret d’accompagnement C9, 1 mètre-ruban",
        use: "Voir Livret d’accompagnement C9",
    },
    {
        ref: 630,
        category: "Fitness & Minceur",
        cat: "fitness",
        name: "C9 Peche Chocolat",
        price: 146.55,
        description:
            "Le C9 est la première phase du programme Forever F.I.T., programme Minceur & Fitness. Il s’effectue sur 9 JOURS pour purifier son organisme en éliminant les toxines. Les résultats apparaissent dès les premiers jours : perte de poids, sensation de légèreté et énergie retrouvée.",
        volume: "5 produits",
        content:
            "2 Forever Aloe Berry Nectar, 18 comprimés de Forever Therm™, 54 capsules de Forever Garcinia Plus™, 9 sticks de Forever Fiber™, 1 poche de Forever Lite Ultra™ Vanille ou Chocolat, 1 Livret d’accompagnement C9, 1 mètre-ruban",
        use: "Voir Livret d’accompagnement C9",
    },
    {
        ref: 561,
        category: "Visage",
        cat: "visage",
        name: "Creme Contour des Yeux",
        price: 22.0,
        description:
            "Découvrez le secret d’un regard sublimé ! La Crème Contour des Yeux offre une approche globale du soin du contour de l’œil en liftant visiblement les paupières et réduisant les poches et les cernes grâce à un complexe d’actifs brevetés. De plus, il va plus loin en estompant visiblement les pattes d’oie et ridules. Résultat, un regard défatigué et sublimé !",
        volume: "21 g",
        content: "35,2 % de gel d’Aloe vera",
        use: "Appliquer matin et soir par petites touches autour des yeux en tapotant délicatement.",
    },
    {
        ref: 606,
        category: "Visage",
        cat: "visage",
        name: "Gel Eclat Sonya",
        price: 26.9,
        description:
            "Retrouvez l'éclat naturel de votre teint grâce au Gel Éclat Sonya. Une technologie innovante pour encapsuler un peptide a été utilisée afin de délivrer ses bienfaits au cœur de l'épiderme: gommer les imperfections et uniformiser le teint. L'hydratation cruciale pour les peaux mixtes, est assurée par l'Aloe vera.",
        volume: "28.3 g",
        content: "42.3% de gel d'Aloès",
        use: "Utiliser le matin et le soir, sur une peau préalablement nettoyée.",
    },
    {
        ref: 608,
        category: "Visage",
        cat: "visage",
        name: "Gel Hydratant Sonya",
        price: 31.15,
        description:
            "Le Gel Hydratant Sonya fond sur la peau, l'enveloppe d'un voile de douceur et unifie le teint. Il associe Aloe vera à de nombreux extraits végétaux pour optimiser l'hydratation, gommer les petites imperfections, apporter éclat et fraîcheur au teint.",
        volume: "59 ml",
        content: "37.9% de gel d'Aloès",
        use: "Utiliser le matin et le soir sur une peau préalablement nettoyée.",
    },
    {
        ref: 607,
        category: "Visage",
        cat: "visage",
        name: "Sonya Masque Gel",
        price: 28.45,
        description:
            "Le Masque Gel a été formulé pour optimiser le processus de récupération nocturne naturel de la peau. Il renferme de puissants actifs végétaux pour rééquilibrer l’hydratation de la peau et booster son éclat naturel. Vite absorbé, il permet une peau sublimée et régénérée le matin.",
        volume: "59 ml",
        content: "42.9% de gel Aloès",
        use: "Appliquer avant d'aller se coucher et rincer au réveil. Utiliser 2 à 3 fois par semaine.",
    },
    {
        ref: 616,
        category: "Visage",
        cat: "visage",
        name: "Masque Bio-Cellulose",
        price: 63.5,
        description:
            "Une belle peau lisse, souple et élastique est avant tout une peau bien hydratée. Notre peau est composée à 70% d’eau et son équilibre hydrique est essentiel. Le Masque Forever Bio Cellulose grâce à une toute nouvelle technologie apaise, hydrate et régénère l’épiderme pour une peau repulpée, éclatante et lisse.",
        volume: "5 sachets dans un pack - 1 sachet 25 g",
        content: "Eau, gel d'Aloe vera, thé vert, marronnier d'Inde",
        use: "Notre masque en bio-cellulose est facile à utiliser et ne nécessite aucun rinçage. Utiliser le masque 1 à 2 fois par semaine.",
    },
    {
        ref: 553,
        category: "Visage",
        cat: "visage",
        name: "Coffret Infinite by Forever",
        price: 211.24,
        description:
            "Infinite by Forever est une gamme de soin innovante qui associe l’Aloe vera à un concentré d’actifs anti-âge et des textures uniques pour créer une routine anti-âge aux résultats exceptionnels. Cette nouvelle routine allie 3 produits de soins cosmétiques à un complément alimentaire pour une action synergique au service de la beauté et de la jeunesse de votre peau. Commencez votre routine par le Démaquillant Hydratant, qui nettoie et hydrate la peau en un seul geste. Il laisse la peau propre, douce et soyeuse. Poursuivez avec le Sérum Raffermissant : véritable élixir de jeunesse, il combat les signes de l’âge en intensifiant la puissance de l’Aloe vera. Prenez 2 comprimés par jour du Complexe raffermissant qui lutte de l’intérieur contre les signes apparents de l’âge. Et pour finir, appliquez la Crème réparatrice, un concentré d’actifs anti-âge qui possède une double action hydratante et réparatrice et lutte ainsi contre les signes visibles de l’âge.",
        volume: "4 produits",
        content: "",
        use: "Démaquillant Hydratant (118 ml) : Utiliser le matin et le soir pour nettoyer le visage et le cou / Sérum Raffermissant (30 ml) : Appliquer matin et soir sur le visage et le cou préalablement nettoyés / Complexe Raffermissant (60 comprimés) : Prendre 2 comprimés le matin / Crème Réparatrice (48,2 g) : Utiliser matin et soir après application du sérum raffermissant.",
    },
    {
        ref: 187,
        category: "Visage",
        cat: "visage",
        name: "Serum Alpha-E Factor",
        price: 53.15,
        description:
            "Ce sérum allie des anti-oxydants pour réduire les signes du vieillissement et les signes d'agressions cutanées extérieures (pollution, stress…). Mieux hydratée*, protégée, renforcée, plus dense et plus lumineuse, la peau paraît visiblement plus jeune et éclatante. *Hydratation des couches supérieures de l'épiderme",
        volume: "30 ml",
        content:
            "Vitamines A et E, Bisabolol, huile de bourrache, gel d'aloès.",
        use: "Appliquer seul ou avant votre soin. Peut également être utilisé avec la Poudre Crème pour la fluidifier.",
    },
    {
        ref: 341,
        category: "Visage",
        cat: "visage",
        name: "Masque Poudre Visage",
        price: 24.53,
        description:
            "Mélangé à l'Activateur Aloès, le Masque Poudre Visage est une combinaison unique d'actifs exfoliants et désincrustant qui permet à la peau de retrouver tout son éclat. Il élimine les impuretés et les cellules mortes et affine le grain de peau. Les traits sont lissés et le teint vivifié.",
        volume: "29 g",
        content: "Albumine.",
        use: "Verser une cuillère à café de poudre dans un bol. Ajouter une cuillère à café de l'Activateur Aloès et mélanger jusqu'à obtenir la consistance d'une crème. Appliquer entre 10 et 30 minutes puis rincer délicatement à l'eau tiède.",
    },
    {
        ref: 555,
        category: "Visage",
        cat: "visage",
        name: "Serum Raffermissant",
        price: 62.78,
        description:
            "Le Sérum Raffermissant est un véritable élixir de jeunesse. Il combat les signes visibles de l'âge en intensifiant la puissance de l'Aloe vera grâce à l'utilisation des dernières avancées dans le domaine de la dermatologie. Agissant en synergie avec les 3 autres produits de la gamme infinite by Forever (réf. 553), le Sérum Raffermissant permet de lutter contre les effets visibles de l'âge.",
        volume: "30 ml",
        content: "49% de gel d'Aloe vera",
        use: "Appliquer matin et soir sur le visage et le cou préalablement nettoyés",
    },
    {
        ref: 556,
        category: "Visage",
        cat: "visage",
        name: "Complexe Raffermissant",
        price: 54.9,
        description:
            "Le Complexe Raffermissant est l’un des quatre produits de la gamme infinite by Forever. Ce complément alimentaire à visée nutraceutique lutte de l’intérieur contre les signes apparents de l’âge. Il fournit à l’organisme tous les nutriments nécessaires pour redensifier la peau de l’intérieur en lui apportant flexibilité et hydratation.",
        volume: "60 comprimés",
        content:
            "Collagène de poisson, Phytocéramides de blé, Extrait de melon",
        use: "Prendre 2 comprimés le matin avec un grand verre d’eau",
    },
    {
        ref: 609,
        category: "Visage",
        cat: "visage",
        name: "Daily Skincare",
        price: 103.08,
        description:
            "Retrouvez au sein d'une superbe trousse aux couleurs de la gamme Sonya, vos 4 produits indispensables : le Gel Nettoyant, Gel Éclat, Masque Gel et Gel Hydratant. Cette gamme associe l'Aloe vera à de puissants actifs végétaux pour répondre aux besoins des peaux mixtes. La texture gel unique permet à la peau de bénéficier des actifs là où elle en a directement besoin.",
        volume: "4 produits",
        content: "Gel Nettoyant Gel Éclat Masque Gel Gel Hydratant",
        use: "La routine de soin s’organise en deux parties: une première partie est à effectuer quotidiennement, matin et soir, dans l'ordre : Gel Nettoyant, Gel Éclat et Gel Hydratant la seconde, complète la routine nocturne 2 à 3 fois par semaine avec le Gel Masque",
    },
    {
        ref: 558,
        category: "Visage",
        cat: "visage",
        name: "Creme Reparatrice",
        price: 70.02,
        description:
            "La Crème Réparatrice, d'une texture légère et onctueuse, fera le bonheur de votre peau. Riche en Aloe vera, extraits de plantes, huile de Jojoba et en vitamines B3, cette crème possède une double action hydratante et réparatrice. Le visage est visiblement repulpé. Il retrouve jeunesse et élasticité. Cette crème vient parfaire la gamme de soin anti-âge infinite by Forever",
        volume: "48,2 ml",
        content: "38 % de gel d’Aloe vera Vitamine B3 Huiles essentielles",
        use: "Utiliser matin et soir après application du sérum raffermissant.",
    },
    {
        ref: 70,
        category: "Visage",
        cat: "visage",
        name: "Gentleman's Pride",
        price: 23.92,
        description:
            "Gentleman's Pride est un soin hydratant*, à la texture fluide et légère, qui possède des propriétés apaisantes pour calmer le feu du rasoir et les irritations cutanées. La peau est hydratée*, douce et apaisée. Son parfum subtil apporte une note d'élégance discrète.",
        volume: "118 ml",
        content: "42 % de gel d'aloès.",
        use: "Appliquer après le rasage.",
    },
    {
        ref: 63,
        category: "Visage",
        cat: "visage",
        name: "Creme Visage Aloes",
        price: 23.46,
        description:
            "Ce soin protège, nourrit et réduit les signes du vieillissement cutané. Sa texture fondante, enrichie en collagène et en élastine, hydrate* et raffermit. La peau est souple, douce et apparaît comme liftée. Convient aux peaux sensibles.",
        volume: "118 ml",
        content: "36.5 % de gel d'aloès.",
        use: "Appliquer matin et soir après brumisation de l'Aloe First.",
    },
    {
        ref: 69,
        category: "Visage",
        cat: "visage",
        name: "R3 Facteur Aloes",
        price: 53.15,
        description:
            "Raffermissant et revitalisant, ce soin favorise l'exfoliation naturelle de la peau et diminue l'apparence des pores. Les rides et ridules paraissent réduites, le grain de peau est plus fin, la peau est plus ferme, plus douce et plus uniforme. La peau apparaît comme neuve",
        volume: "56,7 g",
        content: "34.84 % de gel d'aloès.",
        use: "Appliquer matin et soir sur peau nettoyée. Par temps ensoleillé, protéger la peau à l'aide de l'Ecran Solaire.",
    },
    {
        ref: 311,
        category: "Visage",
        cat: "visage",
        name: "Soin Hydratant Intense Sonya",
        price: 38.06,
        description:
            "Ce soin régénérant agit comme un bain d'hydratation* et procure à la peau un confort. La peau est raffermie, paraît visiblement plus jeune et lissée. Les rides et ridules sont visiblement réduites apportant confort et tonus tout au long de la journée. * Hydratation des couches supérieures de l'épiderme. FORMULE OPTIMISÉE",
        volume: "71 g",
        content: "26 % de gel d'aloès.",
        use: "Prendre un peu de crème à l'aide de la cuillère en plastique pour ne pas “polluer” la crème et l'appliquer sur le cou et le visage du bout des doigts en massant jusqu'à absorption complète.",
    },
    {
        ref: 618,
        category: "Visage",
        cat: "visage",
        name: "Serum Hydratant",
        price: 42.34,
        description:
            "Le Sérum hydratant FOREVER repulpe et hydrate parfaitement votre épiderme tout en réduisant l'apparence des ridules et des rides grâce à l’association de 4 acides hyaluroniques qui vont cibler avec précision les différentes couches de la peau.",
        volume: "50 ml",
        content:
            "Aloe Barbadensis Leaf Juice (Stabilized Aloe Vera Gel), Water, Propanediol, Propylheptyl Caprylate, Cocoglycerides, Butyrospermum Parkii (Shea) Butter, C9-12 Alkane, Cetearyl Alcohol, C12-16 Alcohols, Xanthan Gum, Caprylyl Glycol, Palmitic Acid, Hydrogenated Lecithin, Coco-Caprylate/Caprate, Sorbitan Oleate, Sorbitan Palmitate, Cetyl Palmitate, Lauroyl Lysine, Gluconolactone, Tremella Fuciformis (Mushroom) Extract",
        use: "Pour stimuler l'hydratation de la peau, appliquez 1 à 2 pressions sur les doigts et travaillez doucement en mouvements circulaires sur le visage et le cou immédiatement avant d'appliquer votre crème hydratante Forever préférée",
    },
    {
        ref: 605,
        category: "Visage",
        cat: "visage",
        name: "Gel Nettoyant Sonya",
        price: 28.45,
        description:
            "Dès son application, le Gel Nettoyant Sonya offre à votre peau une expérience unique, en fondant littéralement au contact de la peau et en formant une mousse onctueuse. Grâce à sa richesse en Aloe vera et en huile de Baobab, il laisse votre peau douce et hydratée tout en garantissant un nettoyage efficace.",
        volume: "118 ml",
        content: "39.2% de gel d'Aloès",
        use: "Utiliser matin et soir pour nettoyer le visage et le cou.",
    },
    {
        ref: 560,
        category: "Visage",
        cat: "visage",
        name: "Lotion Tonifiante",
        price: 26.23,
        description:
            "La Lotion Tonifiante, riche en gel d’Aloe vera et en actifs hydratants, apporte un véritable coup d’éclat à la peau tout en rééquilibrant son pH. Résultat, un teint frais et éclatant, une peau saine, douce et apaisée, prête à recevoir les soins quotidiens.",
        volume: "130 ml",
        content: "46,3 % de gel d’Aloe vera",
        use: "Utiliser le matin et le soir pour nettoyer le visage et le cou",
    },
    {
        ref: 559,
        category: "Visage",
        cat: "visage",
        name: "Soin Exfoliant - Les Soins Specifiques",
        price: 22.0,
        description:
            "Ce soin allie efficacité et douceur pour vous permettre de faire peau neuve. Il conjugue exfoliation enzymatique et mécanique pour désincruster les impuretés, tout en enveloppant la peau d’un voile protecteur grâce à de puissants actifs hydratants. Résultat un grain de peau affiné, une peau lisse et satinée.",
        volume: "60 ml",
        content: "34 % de gel d’Aloe vera",
        use: "Appliquer une petite quantité sur le visage préalablement mouillé en faisant des mouvements circulaires. Rincer abondamment.",
    },
    {
        ref: 612,
        category: "Visage",
        cat: "visage",
        name: "Activateur Aloes - Les Soins Specifiques",
        price: 18.71,
        description:
            "L'Activateur Aloès revient dans un nouveau packaging et avec une nouvelle formule dans la gamme des Soins spécifiques. Ce soin indispensable est riche en Aloe vera, un actif hydratant exceptionnel. Il s'adapte parfaitement à toutes les routines de soin et à tous les types de peau. Utilisé en base de soin, il optimise la réceptivité de la peau aux actifs de la routine de soins quotidienne. Associé au Masque Poudre, l'Activateur se transforme en un masque détoxifiant unique.",
        volume: "130 ml",
        content: "98,9% Aloe vera, allantoïne",
        use: "Utiliser sur une peau préalablement nettoyée. Appliquer sur le visage et le cou à l’aide d’un coton. Pour un masque à l’Aloès, mélanger une c.à.c. de Masque Poudre et une c.à.c. d’Activateur Aloès. Appliquer une fine couche sur le visage. Laisser poser 30 minutes et rincer à l’eau tiède. Utiliser 2 à 3 fois par semaine.",
    },
    {
        ref: 554,
        category: "Visage",
        cat: "visage",
        name: "Demaquillant Hydratant infinite",
        price: 31.7,
        description:
            "Le Démaquillant Hydratant nettoie et hydrate la peau en un seul geste. L'actif nettoyant utilisé, extrait naturel de noix de coco, est hypoallergénique et non irritant. Associé à l'Aloe vera il élimine les impuretés et traces de maquillage, tout en laissant la peau douce et hydratée.",
        volume: "118 ml",
        content: "35 % de gel d’Aloe vera",
        use: "Utiliser le matin et le soir pour nettoyer le visage et le cou",
    },
    {
        ref: 238,
        category: "Visage",
        cat: "visage",
        name: "Aloe Scrub",
        price: 25.31,
        description:
            "Cette crème onctueuse enrichie de grains de cire de Jojoba élimine en douceur impuretés et cellules mortes. Ce gommage affine le grain de la peau et revigore le teint en lui donnant fraîcheur et éclat. Riche en Aloe Vera, ce soin convient à tous les types de peaux. *Hydratation des couches supérieures de l'épiderme.",
        volume: "99 g",
        content: "31.7 % de gel d'aloès",
        use: "Appliquer généreusement sur peau humide en massages circulaires. Éliminer le gommage avec de l'eau.",
    },
];

const allCategories = [
    {
        cat: "bienetre",
        name: "Les bases du bien-etre",
    },

    {
        cat: "packs",
        name: "Les packs",
    },

    {
        cat: "indispensables",
        name: "Les indispensables",
    },

    {
        cat: "nutrition",
        name: "Nutrition",
    },

    {
        cat: "fitness",
        name: "Fitness & Minceur",
    },

    {
        cat: "visage",
        name: "Visage",
    },

    {
        cat: "solaires",
        name: "Les solaires",
    },

    {
        cat: "laruche",
        name: "Les produits de la ruche",
    },

    {
        cat: "huiles",
        name: "Les huiles essentielles",
    },

    {
        cat: "bienetre",
        name: "Les bases du bien-etre",
    },

    {
        cat: "maison",
        name: "Pour la maison",
    },

    {
        cat: "parfums",
        name: "Les parfums",
    },
];
export { allProducts };
export { allCategories };
