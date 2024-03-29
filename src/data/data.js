const data = [
  {
    page_id: 0,
    pageName: "Accueil",
    path: "/",
    infoTip: {
      head: "Bienvenue",
      paragraph: [
        {
          paragraph_id: 0,
          primary: `Le cabinet sera désinfecté entre chaque patient.`,
        },
        {
          paragraph_id: 1,
          primary: `Nous demandons à tous nos patients de venir avec un masque.`,
        },
      ],
      bottom: "À très bientôt!",
    },
    images: [
      {
        image_id: 0,
        name: "Podologie",
        image: "/podologie.svg",
        path: "/podologie",
      },
      {
        image_id: 1,
        name: "Posturologie",
        image: "/posturologie.svg",
        path: "/posturologie",
      },
      {
        image_id: 2,
        name: "Réflexologie",
        image: "/reflexologie.svg",
        path: "/reflexologie",
      },
    ],
  },
  {
    page_id: 2,
    pageName: "Contact",
    path: "/contact",
    infoTip: {
      head: "Prise de Rendez-vous",
      paragraph: [
        {
          paragraph_id: 0,
          primary:
            "La prise de rendez-vous s'effectue par téléphone ou sur place.",
        },
      ],
      bottom: "À très bientôt!",
    },
    users: [
      {
        user_id: 0,
        name: "Carole Richou",
        avatarPath: "/carole.svg",
        skills: [
          {
            skill_id: 0,
            skill: "Diplomée d'État",
          },
          {
            skill_id: 1,
            skill: "Pédicurie",
          },
          {
            skill_id: 2,
            skill: "Podologie",
          },
          {
            skill_id: 3,
            skill: "Diabétologie",
          },
        ],
        specialities: [
          {
            speciality_id: 0,
            speciality: "réflexologie",
          },
        ],
      },
      {
        user_id: 1,
        name: "Carine Da Costa",
        avatarPath: "/carine.svg",
        skills: [
          {
            skill_id: 0,
            skill: "Diplomée d'État",
          },
          {
            skill_id: 1,
            skill: "Pédicurie",
          },
          {
            skill_id: 2,
            skill: "Podologie",
          },
          {
            skill_id: 3,
            skill: "Diabétologie",
          },
        ],
        specialities: [
          {
            speciality_id: 0,
            speciality: "posturologie",
          },
        ],
      },
    ],
    schedule: [
      {
        column_id: 0,
        day: "lun",
        morning: "Carole",
        afternoon: "Carole",
      },
      {
        column_id: 1,
        day: "mar",
        morning: "Carine",
        afternoon: "Carine",
      },
      {
        column_id: 2,
        day: "mer",
        morning: "Carine",
        afternoon: "Carole",
      },
      {
        column_id: 3,
        day: "jeu",
        morning: "Carole",
        afternoon: "Carole",
      },
      {
        column_id: 4,
        day: "ven",
        morning: "Carine",
        afternoon: "Carine",
      },
    ],
    profil: {
      contact: {
        num: "05 34 57 10 41",
        doctoLib: "",
      },
      adress: {
        name: "Les commerces de Diane,",
        number: "151",
        street: "Route de Toulouse",
        postalCode: "31270",
        city: "Cugnaux",
      },
      acces: {
        info: "En rez-de-chaussée",
        handicap: true,
        parking: "Facile et gratuit",
        transport: "Bus Ligne 87 - Arrêt Diane",
      },
    },
    cards: [
      {
        id: 0,
        name: "Contact",
        lines: ["05 34 57 10 41"],
        link: {
          url: "https://www.doctolib.fr/cabinet-paramedical/cugnaux/cugnaux",
          desc: "Réservez sur Doctolib",
        },
      },
      {
        id: 1,
        name: "Adresse",
        lines: [
          "Les commerces de Diane,",
          "151 Route de Toulouse",
          "31270 Cugnaux",
        ],
        link: {
          url: "https://www.google.com/maps/place/LES+COMMERCES+DE+DIANE/@43.5580539,1.3657896,19z/data=!4m5!3m4!1s0x12aeb0a9ef3f14fd:0x1fab75f5b7a37663!8m2!3d43.5583885!4d1.3654248",
          desc: "Voir sur google maps",
        },
      },
      {
        id: 2,
        name: "Accès",
        lines: [
          "En rez-de-chaussée",
          "Accès handicapé",
          "Parking - Facile et gratuit",
        ],
        link: {
          url: "https://www.tisseo.fr/sites/default/files/ligne87.html",
          desc: "Bus Ligne 87 - Arrêt Diane",
        },
      },
    ],
  },
  {
    page_id: 3,
    pageName: "Pédicurie",
    path: "/pedicurie",
    infoTip: {
      head: "Le saviez-vous ?",
      paragraph: [
        {
          paragraph_id: 0,
          primary:
            "Si vous présentez un hématome sous unguéal douloureux de moins de 48h, il s'agit d'un soin d'urgence.",
        },
        {
          paragraph_id: 1,
          primary:
            "Si possible, contactez nous plutôt qu'aller faire un tour aux urgences :)",
        },
        {
          paragraph_id: 2,
          primary: "Vous pensez avoir un ongle incarné ?",
        },
        {
          paragraph_id: 3,
          primary:
            "Demandez à votre medecin de vous prescrire une crème anesthésiante. Vous pourrez l'appliquer avant le soin pour plus de sérénité.",
        },
      ],
      bottom: "À très bientôt!",
    },
    definition: {
      definition_id: 0,
      title: "Définition",
      subtitle: "",
      paragraph: [
        {
          paragraph_id: 0,
          bold: "La pédicurie",
          primary: ` est un domaine consacré aux soins des pieds. Elle s'occupe donc de toutes les pathologies du pied :`,
        },
        {
          paragraph_id: 1,
          primary: "- l'hygiène des pieds et des ongles",
          secondary: "",
        },
        {
          paragraph_id: 2,
          primary: "- les affections de la peau",
          secondary: "",
        },
        {
          paragraph_id: 3,
          primary: "- les problèmes touchant les ongles",
          secondary: "",
        },
      ],
    },
    content: [
      {
        content_id: 1,
        title: "Pourquoi consulter ?",
        subtitle: "",
        iconPath: "",
        paragraph: [
          {
            paragraph_id: 0,
            primary: "- Durillons, cors, oeil de perdrix, crevasses",
            secondary: "",
          },
          {
            paragraph_id: 1,
            primary: "- Ongle incarné",
            secondary: "",
          },
          {
            paragraph_id: 2,
            primary: "- Mycose cutanées et ungéales",
            secondary: "",
          },
          {
            paragraph_id: 3,
            primary: "- Hématome sous unguéal",
            // secondary:
            // " -> Lié à un choc direct comme un marteau tombé sur l'orteil ou indirect comme une chaussure trop petite",
          },
          {
            paragraph_id: 4,
            primary: "- Verrue plantaire",
            secondary: "",
          },
          {
            paragraph_id: 5,
            primary: "- Transpiration excessive",
            secondary: "",
          },
          {
            paragraph_id: 6,
            primary: `- Hallux valgus ou "oignon"`,
            secondary: "",
          },
          {
            paragraph_id: 7,
            primary: `- Supraductus / Infraductus chez l'enfant"`,
            secondary: "",
          },
        ],
      },
      {
        content_id: 2,
        title: "Quelle prise en charge ?",
        subtitle: "",
        iconPath: "",
        paragraph: [
          {
            paragraph_id: 0,
            primary:
              "Le soin de pédicurie va prendre en charge la plupart des maux cités ci dessus. Nous pouvons également réaliser des prescriptions en complément du soin",
            secondary: "-> Traitement antiseptique, antimycosique...",
          },
          {
            paragraph_id: 1,
            primary: "- L'orthonyxie (en cas d'ongle incarné et récidive)",
            secondary:
              "-> Technique non douloureuse qui consite à poser un fil de titane sur l'ongle afin de corriger la courbure de celui ci, reduisant ainsi la recidive d'ongles incarnés et de cors sous ungéaux",
          },
          {
            paragraph_id: 2,
            primary: "- L'onychoplastie (en cas de totale de l'ongle)",
            secondary:
              "-> Pose d'un faux ongle total ou partiel dans le cas d'une chute de l'ongle liée à un choc direct ou indirect, ou mycose",
          },
          {
            paragraph_id: 3,
            primary: `- Ionophorèse (en cas de transpiration excessive)`,
            secondary:
              "-> Traitement qui consiste à exposer le pied à un courant électrique de faible intensité afin de diminuer efficacement la sudation. Nous louons le materiel pendant une période de 3 semaines, sous réserve du versement d'une caution de 400 euros",
          },
          {
            paragraph_id: 4,
            primary: `- Orthoplastie protectrice`,
            secondary:
              "-> Orthèse en silicone sur mesure visant à soulager un frottement douloureux comme dans le cas d'un oeil de perdrix, cor dorsal, cor pulpaire, hallux valgus...",
          },
          {
            paragraph_id: 5,
            primary: `- Attelle de contention nocturne pour hallux valgus`,
            secondary:
              "-> Attelle réalisée sur mesure afin de limiter l'évolution d'un hallux valgus",
          },
          {
            paragraph_id: 6,
            primary: `- Orthoplastie corrective`,
            secondary:
              "-> Orthèse en silicone sur mesure visant à corriger des déformations telles que le supraductus ou infraductus chez l'enfant",
          },
        ],
      },
    ],
  },
  {
    page_id: 4,
    pageName: "Podologie",
    path: "/podologie",
    infoTip: {
      head: "En consultation",
      paragraph: [
        {
          paragraph_id: 0,
          primary:
            "Lors de nos consultations, veuillez à ne pas oublier vos radiographies, IRM ou scanners (pied, genou, bassin, rachis) ainsi que vos chaussures de sport ou de ville afin de pouvoir adapter au mieux vos semelles orthopédiques.",
        },
        {
          paragraph_id: 1,
          primary:
            "Les semelles orthopédiques sont réalisées sur mesure au cabinet.",
        },
      ],
      bottom: "À très bientôt!",
    },
    definition: {
      definition_id: 0,
      title: "Définition",
      subtitle: "",
      paragraph: [
        {
          paragraph_id: 0,
          bold: "Un bilan podologique",
          primary: `est un examen qui comporte une analyse:`,
        },
        {
          paragraph_id: 1,
          primary: `- de la position des pieds`,
        },
        {
          paragraph_id: 2,
          primary: `- de la marche`,
        },
        {
          paragraph_id: 3,
          primary: `- de la posture (bascule du bassin, genoux en X, scoliose)`,
        },
        {
          paragraph_id: 4,
          primary: `- des pressions statiques et dynamiques (nous disposons d'une plateforme baropodométrique)`,
        },
      ],
    },
    content: [
      {
        content_id: 0,
        title: "Pourquoi consulter ?",
        subtitle: "chez l'adulte",
        iconPath: "",
        paragraph: [
          {
            paragraph_id: 0,
            primary:
              "- douleurs chroniques articulaires ou musclaires (talons, tendons, genoux, dos...)",
            secondary: "",
          },
          {
            paragraph_id: 1,
            primary:
              "- appuis douloureux du pied (durillons, syndrôme de Morton, épine calcanéenne...)",
            secondary: "",
          },
          {
            paragraph_id: 2,
            primary:
              "- prise en charge post traumatique (entorse cheville, rupture du tendon d'Achille...)",
            secondary: "",
          },
          {
            paragraph_id: 3,
            primary:
              "- prise en charge post chirurgicale (hallux valgus ou oignon, prothèse de hanche ou de genou...)",
            secondary: "",
          },
        ],
      },
      {
        content_id: 1,
        title: "",
        subtitle: "chez le jeune enfant",
        iconPath: "",
        paragraph: [
          {
            paragraph_id: 0,
            primary: "- chutes fréquentes",
            secondary: "",
          },
          {
            paragraph_id: 1,
            primary: "- troubles de la posture",
            secondary: "",
          },
          {
            paragraph_id: 2,
            primary: "- genoux en X",
            secondary: "",
          },
          // {
          //   paragraph_id: 3,
          //   primary: "- Malformation",
          //   secondary: "",
          // },
          // {
          //   paragraph_id: 4,
          //   primary: "- Prise en charge post traumatique",
          //   secondary: "",
          // },
          // {
          //   paragraph_id: 5,
          //   primary: "- Prise en charge post chirurgicale",
          //   secondary: "",
          // },
        ],
      },
      {
        content_id: 2,
        title: "",
        subtitle: "chez l'adolescent",
        iconPath: "",
        paragraph: [
          {
            paragraph_id: 0,
            primary: "- douleurs aux talons ou aux genoux",
            secondary: "",
          },
        ],
      },
      {
        content_id: 3,
        title: "",
        subtitle: "chez le sportif",
        iconPath: "",
        paragraph: [
          {
            paragraph_id: 0,
            primary: "- douleurs chroniques pendant ou après l'effort",
            secondary: "",
          },
          {
            paragraph_id: 1,
            primary:
              "- préparation d'un évènement sportif (trail, marathon...)",
            secondary: "",
          },
        ],
      },
      {
        content_id: 4,
        title: "Soins proposés",
        subtitle: "",
        iconPath: "",
        paragraph: [
          {
            paragraph_id: 0,
            primary: "- Apprendre de la marche",
            secondary: "",
          },
          {
            paragraph_id: 1,
            primary: "- Apprendre de la posture",
            secondary: "",
          },
          {
            paragraph_id: 2,
            primary: "- Douleur mécanique",
            secondary: "",
          },
          {
            paragraph_id: 3,
            primary: "- Malformation",
            secondary: "",
          },
          {
            paragraph_id: 4,
            primary: "- Prise en charge post traumatique",
            secondary: "",
          },
          {
            paragraph_id: 5,
            primary: "- Prise en charge post chirurgicale",
            secondary: "",
          },
        ],
      },
    ],
  },
  {
    page_id: 5,
    pageName: "Posturologie",
    path: "/posturologie",
    infoTip: {
      head: "En consultation",
      paragraph: [
        {
          paragraph_id: 0,
          primary:
            "Lors de nos consultations, veuillez à ne pas oublier vos radiographies, IRM ou scanners (pied, genou, bassin, rachis) ainsi que vos chaussures de sport ou de ville afin de pouvoir adapter au mieux vos semelles orthopédiques.",
        },
        {
          paragraph_id: 1,
          primary:
            "Les semelles orthopédiques sont réalisées sur mesure au cabinet.",
        },
      ],
      bottom: "À très bientôt!",
    },
    definition: {
      definition_id: 0,
      title: "Définition",
      paragraph: [
        {
          paragraph_id: 0,
          bold: `Un bilan postural`,
          primary: `permet d’analyser et traiter les causes d’une dysfonction posturale fonctionnelle au moyen de semelles dites de posture.`,
        },
        {
          paragraph_id: 1,
          primary: `(Contrairement à la podologie classique qui elle analyse et traite les causes d'une dysfonction organique)`,
        },
        // {
        //   paragraph_id: 0,
        //   primary: `La posturologie est une discipline qui étudie la position et l’équilibre de l’être humain dans l’espace, à l’état statique et en mouvement.`,
        // },
        // {
        //   paragraph_id: 1,
        //   primary: `Pour se tenir debout, l'être humain doit lutter contre la gravité et adapter continuellement sa position afin de garder l’équilibre.`,
        // },
        // {
        //   paragraph_id: 2,
        //   primary: `Cette adaptation se fait grâce aux informations reçues par les capteurs posturaux qui sont : la peau, les articulations, la plante des pieds, les yeux, l’oreille interne et les dents. Le cerveau reçoit toutes ces informations et adapte la posture du corps à tout moment.`,
        // },
        // {
        //   paragraph_id: 3,
        //   primary: `La posturologie est un outil diagnostic qui permet d’analyser et traiter les causes d’une dysfonction posturale fonctionnelle (contrairement à la podologie classique qui elle analyse et traite les causes d'une dysfonction organique) au moyen de semelles dites de posture.`,
        // },
      ],
    },
    content: [
      {
        content_id: 1,
        title: "Pourquoi consulter ?",
        subtitle: "",
        iconPath: "",
        paragraph: [
          {
            paragraph_id: 0,
            primary: "- Perte d'équilibre",
            secondary: "accompagnée ou non de nausées, vertiges...",
          },
          {
            paragraph_id: 1,
            primary: "- Douleurs diverses",
            secondary: "maux de tête, douleurs musculaires...",
          },
          {
            paragraph_id: 2,
            primary: "- Blocages et/ou raideurs",
            secondary: "lumbago, tour de reins, torticolis...",
          },
        ],
      },
      {
        content_id: 2,
        title: "Soins proposés",
        subtitle: "",
        iconPath: "",
        paragraph: [
          {
            paragraph_id: 0,
            primary: `Les semelles proprioceptives dites "de posture" sont des semelles très fines réalisées sur mesure en fonction d'un examen clinique.`,
          },
          {
            paragraph_id: 1,
            primary: `La correction s'effectue par des micro-reliefs n'excédant que rarement les 3 mm.`,
            //secondary: "accompagnée ou non de nausées, vertiges…",
          },
          {
            paragraph_id: 2,
            primary: `Ces reliefs agissent comme des leurres sensoriels qui stimulent les capteurs de pression sous lesquels ils sont placés.`,
            //secondary: "lumbago, tour de reins, torticolis...",
          },
          {
            paragraph_id: 3,
            primary: `Ils ordonnent au cerveau d'ajuster le tonus musculaire et permet ainsi de rééqulibrer et de recentrer le patient.`,
            //secondary: "lumbago, tour de reins, torticolis...",
          },
        ],
      },
    ],
  },
  {
    page_id: 6,
    pageName: "Réflexologie",
    path: "/reflexologie",
    infoTip: {
      head: "Aide la vie de tous les jours",
      paragraph: [
        {
          paragraph_id: 0,
          primary: "Sous prescription médicale:",
        },
        {
          paragraph_id: 1,
          primary:
            "Prise en charge intégrale par la sécurité sociale des soins de pédicurie chez le patient diabétique de grade 2 et 3.",
        },
      ],
      bottom: "À très bientôt!",
    },
    definition: {
      definition_id: 0,
      title: "Définition",
      subtitle: "",
      paragraph: [
        {
          paragraph_id: 0,
          bold: "La réflexologie",
          primary: `est une méthode thérapeutique qui utilise le processus d’autoguérison naturel du corps.`,
        },
        {
          paragraph_id: 1,
          primary: `Le pied est une représentation miniature du corps humain où chaque zone du pied correspond à un organe ou une partie de corps humain.`,
        },
        {
          paragraph_id: 2,
          primary: `La réflexologie soulage le corps par le pied. En stimulant manuellement ces zones réflexes, il est donc possible d’agir sur les organes ou les fonctions qu’elles représentent.`,
        },
      ],
    },
    content: [
      {
        content_id: 1,
        title: "Pourquoi consulter ?",
        subtitle: "",
        iconPath: "",
        paragraph: [
          {
            paragraph_id: 0,
            primary:
              "- Améliore la qualité de vie de patients atteints de maladie chronique",
            secondary: "sclérose en plaques, de diabète ou de cancer",
          },
          {
            paragraph_id: 1,
            primary: "- Diminue les maux du quotidien",
            secondary:
              "douleurs dorsales, cervicales, maux de tête, syndrome prémenstruel",
          },
          {
            paragraph_id: 2,
            primary: "- Agi sur le stress",
            secondary: "",
          },
        ],
      },
      // {
      //   content_id: 2,
      //   title: "Soins proposés",
      //   subtitle: "",
      //   iconPath: "",
      //   paragraph: [
      //     {
      //       paragraph_id: 0,
      //       primary: "- ",
      //       secondary: "sclérose en plaques, de diabète ou de cancer",
      //     },
      //     {
      //       paragraph_id: 1,
      //       primary: "- ",
      //       secondary: "accompagnée ou non de nausées, vertiges…",
      //     },
      //     {
      //       paragraph_id: 2,
      //       primary: "- ",
      //       secondary: "lumbago, tour de reins, torticolis...",
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   page_id: 7,
  //   pageName: "Diabétologie",
  //   path: "/diabetologie",
  //   infoTip: {
  //     head: "Le saviez-vous ?",
  //     paragraph: [
  //       {
  //         paragraph_id: 0,
  //         primary:
  //           "Il existe 4 grades (allant de 0 à 3) dans le diabète et tous ne sont malheureusement pas pris en charge.",
  //       },
  //       {
  //         paragraph_id: 1,
  //         primary:
  //           "L'Assurance Maladie prend en charge, sur prescription médicale, les soins de pédicurie chez le patient diabétique de grade 2 ou 3.",
  //       },
  //       {
  //         paragraph_id: 2,
  //         primary:
  //           "Le patient diabétique de grade 2 ou 3 a respectivement droit à 4 ou 6 séances de soins de pédicurie par an.",
  //       },
  //       {
  //         paragraph_id: 3,
  //         primary:
  //           "Quelque soit votre grade, il est vivement conseillé de faire un bilan podologique au moins une fois par an. ",
  //       },
  //     ],
  //     bottom: "À très bientôt!",
  //   },
  //   definition: {
  //     definition_id: 0,
  //     title: "Définition",
  //     subtitle: "",
  //     paragraph: [
  //       {
  //         paragraph_id: 0,
  //         primary: `La prise en charge du pied du patient diabétique par le pédicure-podologue s’inscrit dans une prise en charge médicale globale et pluridisciplinaire.`,
  //       },
  //       {
  //         paragraph_id: 1,
  //         primary: `Elle comporte l’examen du pied et la gradation du risque podologique, les soins de pédicurie-podologie, l’éducation du patient, l’évaluation du chaussage et la mise en place d’un traitement orthétique (semelles) et d’un chaussage adapté, si nécessaire.`,
  //       },
  //     ],
  //   },

  //   content: [
  //     {
  //       content_id: 1,
  //       title: "Pourquoi consulter ?",
  //       subtitle: "",
  //       iconPath: "",
  //       paragraph: [
  //         {
  //           paragraph_id: 0,
  //           primary: "- un bilan général de l’état de vos pieds",
  //           secondary: "",
  //         },
  //         {
  //           paragraph_id: 1,
  //           primary: "- des conseils d'entretien & chaussage",
  //           secondary:
  //             "soins de la peau et des ongles, ongles incarnés, corne, plaie...",
  //         },
  //         {
  //           paragraph_id: 1,
  //           primary: "- un soin de pédicurie",
  //           secondary:
  //             "soins de la peau et des ongles, ongles incarnés, corne, plaie...",
  //         },
  //         {
  //           paragraph_id: 2,
  //           primary: "- Réaliser des semelles orthopédiques sur mesure",
  //           secondary: "en préventif ou en curatif",
  //         },
  //       ],
  //     },
  //     {
  //       content_id: 2,
  //       title: "Combien ça coûte ?",
  //       subtitle: "",
  //       iconPath: "",
  //       paragraph: [
  //         {
  //           paragraph_id: 0,
  //           primary: "- 27 euros le soin de pédicurie au cabinet",
  //           secondary: "",
  //         },
  //         {
  //           paragraph_id: 1,
  //           primary: "- 29,50 euros le soin de pédicurie à domicile",
  //           secondary: "",
  //         },
  //         {
  //           paragraph_id: 2,
  //           primary: "",
  //           secondary:
  //             "Entièrement remboursés par la sécurité sociale pour les patients diabétique de grade 2 et 3.",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   page_id: 8,
  //   pageName: "Malformations du pied",
  //   path: "/malformations",
  //   infoTip: {
  //     head: "Conventionnées par la sécurité sociale",
  //     paragraph: [
  //       {
  //         paragraph_id: 0,
  //         primary: "Sous prescription médicale:",
  //       },
  //       {
  //         paragraph_id: 1,
  //         primary:
  //           "Prise en charge intégrale par la sécurité sociale des soins de pédicurie chez le patient diabétique de grade 2 et 3.",
  //       },
  //     ],
  //     bottom: "À très bientôt!",
  //   },
  //   content: [
  //     {
  //       content_id: 0,
  //       title: "Définition",
  //       subtitle: "",
  //       iconPath: "",
  //       paragraph: [
  //         {
  //           paragraph_id: 0,
  //           primary: `La prise en charge du pied du patient diabétique par le pédicure-podologue s’inscrit dans une prise en charge médicale globale et pluridisciplinaire.`,
  //         },
  //         {
  //           paragraph_id: 1,
  //           primary: `Elle comporte l’examen du pied et la gradation du risque podologique, les soins de pédicurie-podologie, l’éducation du patient, l’évaluation du chaussage et la mise en place d’un traitement orthétique (semelles) et d’un chaussage adapté, si nécessaire.`,
  //         },
  //       ],
  //     },
  //     {
  //       content_id: 1,
  //       title: "Pourquoi consulter ?",
  //       subtitle: "",
  //       iconPath: "",
  //       paragraph: [
  //         {
  //           paragraph_id: 0,
  //           primary: "- Diminue les maux du quotidien",
  //           secondary: "sclérose en plaques, de diabète ou de cancer",
  //         },
  //         {
  //           paragraph_id: 1,
  //           primary: "- Aide la vie de tous les jours",
  //           secondary: "accompagnée ou non de nausées, vertiges…",
  //         },
  //         {
  //           paragraph_id: 2,
  //           primary: "- Conventionnées par la sécurité sociale",
  //           secondary: "lumbago, tour de reins, torticolis...",
  //         },
  //       ],
  //     },
  //     {
  //       content_id: 2,
  //       title: "Soins proposés",
  //       subtitle: "",
  //       iconPath: "",
  //       paragraph: [
  //         {
  //           paragraph_id: 0,
  //           primary: "- 27 euros le soin de pédicurie au cabinet",
  //           secondary: "sclérose en plaques, de diabète ou de cancer",
  //         },
  //         {
  //           paragraph_id: 1,
  //           primary: "- 27 euros le soin de pédicurie au cabinet",
  //           secondary: "accompagnée ou non de nausées, vertiges…",
  //         },
  //         {
  //           paragraph_id: 2,
  //           primary: "- 29,50 euros le soin de pédicurie à domicile",
  //           secondary: "lumbago, tour de reins, torticolis...",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   page_id: 9,
  //   pageName: "Enfants",
  //   path: "/kids",
  //   infoTip: {
  //     head: "Conventionnées par la sécurité sociale",
  //     paragraph: [
  //       {
  //         paragraph_id: 0,
  //         primary: "Sous prescription médicale:",
  //       },
  //       {
  //         paragraph_id: 1,
  //         primary:
  //           "Prise en charge intégrale par la sécurité sociale des soins de pédicurie chez le patient diabétique de grade 2 et 3.",
  //       },
  //     ],
  //     bottom: "À très bientôt!",
  //   },
  //   content: [
  //     {
  //       content_id: 0,
  //       title: "Définition",
  //       subtitle: "",
  //       iconPath: "",
  //       paragraph: [
  //         {
  //           paragraph_id: 0,
  //           primary: `La prise en charge du pied du patient diabétique par le pédicure-podologue s’inscrit dans une prise en charge médicale globale et pluridisciplinaire.`,
  //         },
  //         {
  //           paragraph_id: 1,
  //           primary: `Elle comporte l’examen du pied et la gradation du risque podologique, les soins de pédicurie-podologie, l’éducation du patient, l’évaluation du chaussage et la mise en place d’un traitement orthétique (semelles) et d’un chaussage adapté, si nécessaire.`,
  //         },
  //       ],
  //     },
  //     {
  //       content_id: 1,
  //       title: "Pourquoi consulter ?",
  //       subtitle: "",
  //       iconPath: "",
  //       paragraph: [
  //         {
  //           paragraph_id: 0,
  //           primary: "- Diminue les maux du quotidien",
  //           secondary: "sclérose en plaques, de diabète ou de cancer",
  //         },
  //         {
  //           paragraph_id: 1,
  //           primary: "- Aide la vie de tous les jours",
  //           secondary: "accompagnée ou non de nausées, vertiges…",
  //         },
  //         {
  //           paragraph_id: 2,
  //           primary: "- Conventionnées par la sécurité sociale",
  //           secondary: "lumbago, tour de reins, torticolis...",
  //         },
  //       ],
  //     },
  //     {
  //       content_id: 2,
  //       title: "Soins proposés",
  //       subtitle: "",
  //       iconPath: "",
  //       paragraph: [
  //         {
  //           paragraph_id: 0,
  //           primary: "- 27 euros le soin de pédicurie au cabinet",
  //           secondary: "sclérose en plaques, de diabète ou de cancer",
  //         },
  //         {
  //           paragraph_id: 1,
  //           primary: "- 27 euros le soin de pédicurie au cabinet",
  //           secondary: "accompagnée ou non de nausées, vertiges…",
  //         },
  //         {
  //           paragraph_id: 2,
  //           primary: "- 29,50 euros le soin de pédicurie à domicile",
  //           secondary: "lumbago, tour de reins, torticolis...",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    page_id: 10,
    pageName: "Honoraires",
    path: "/honoraires",
    infoTip: {
      head: "Le saviez-vous ?",
      paragraph: [
        {
          paragraph_id: 0,
          primary: "Suivant votre mutuelle:",
        },
        {
          paragraph_id: 1,
          primary:
            "Chaque séance peut être pris en charge partiellement ou totalement.",
        },
        {
          paragraph_id: 2,
          primary:
            "Nous vous invitons à vous rapprocher de votre mutuelle pour connaître les modalités de remboursement.",
        },
      ],
      bottom: "À très bientôt!",
    },
    definition: {
      definition_id: 0,
      title: "Consultation podologie/posturologique",
      subtitle: "",
      paragraph: [
        {
          paragraph_id: 0,
          bold: " - 40 euros ",
          primary: `la séance`,
        },
        {
          paragraph_id: 1,
          bold: `- entre 50 et 100 euros`,
          primary: `pour la paire de semelle sur mesure`,
        },
      ],
    },
    content: [
      {
        content_id: 0,
        title: "Soin de pédicurie",
        subtitle: "",
        iconPath: "",
        paragraph: [
          {
            paragraph_id: 0,
            primary: `- 27 euros pour les patients diabétiques de grade 2 ou 3`,
            //secondary: "(remboursé par la sécurité sociale)",
            primary: `- 35 euros adultes`,
          },
          {
            paragraph_id: 1,
            primary: `- 37 euros à domicile`,
          },
        ],
      },
      // {
      //   content_id: 1,
      //   title: "Consultation podologie",
      //   subtitle: "",
      //   iconPath: "",
      //   paragraph: [
      //     {
      //       paragraph_id: 0,
      //       primary: "- 40 euros la séance",
      //     },
      //     {
      //       paragraph_id: 1,
      //       primary:
      //         "- entre 50 et 100 euros pour la paire de semelle sur mesure",
      //     },
      //   ],
      // },
      // {
      //   content_id: 3,
      //   title: "Consultation posturologique",
      //   subtitle: "",
      //   iconPath: "",
      //   paragraph: [
      //     {
      //       paragraph_id: 0,
      //       primary: "- 40 euros la séance",
      //     },
      //     {
      //       paragraph_id: 1,
      //       primary:
      //         "- entre 50 et 100 euros pour la paire de semelle sur mesure",
      //     },
      //   ],
      // },
      {
        content_id: 2,
        title: "Séance de réflexologie",
        subtitle: "",
        iconPath: "",
        paragraph: [
          {
            paragraph_id: 1,
            primary: "- 35 euros",
          },
        ],
      },
    ],
  },
];

export default data;
