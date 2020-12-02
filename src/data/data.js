const data = [
  {
    id: 0,
    pageName: "Présentation",
    path: "/",
    infoBulle: {
      head: "Covid 19",
      paragraph1: "Le cabinet sera désinfecté entre chaque patient.",
      paragraph2:
        "Des mesures seront mises en place afin que nous puissions respecter la distanciation sociale.",
      paragraph3:
        "Dans la mesure du possible, nous demandons à tous nos patients de venir avec un masque.",
    },
  },
  {
    id: 1,
    pageName: "Horaires",
    path: "/horaires",
    infoBulle: {
      head: "Prise de Rendez-vous",
      paragraph1:
        "La prise de rendez-vous s'effectue par téléphone ou sur place.",
    },
    content: {
      part1: {
        title: "Horaires de Carole Richou",
        paragraph: ``,
      },
      part2: {
        title: "Horaires de Carine Da Costa",
        reasons: [],
      },
    },
  },
  {
    id: 2,
    pageName: "Contact",
    path: "/contact",
    infoBulle: {
      head: "Prise de Rendez-vous",
      paragraph1:
        "La prise de rendez-vous s'effectue par téléphone ou sur place.",
    },
    info: {
      num: "05 34 57 10 41",
      adress: {
        spe: "Les commerces de Diane,",
        name: "151 route de Toulouse",
        city: "Cugnaux",
        postalCode: "31270",
      },
      acces: {
        info: "En rez-de-chaussée",
        handicap: true,
        parking: "Facile et gratuit",
        transport: "Bus Ligne 87 - Arrêt Diane",
      },
    },
  },
  {
    id: 3,
    pageName: "Podologie",
    path: "/podologie",
    infoBulle: {
      head: "En consultation",
      paragraph1:
        "Veuillez à ne pas oublier vos radiographies, IRM ou scanners (pied, genou, bassin, rachis) ainsi que vos chaussures de sport ou de ville afin de pouvoir adapter au mieux vos semelles orthopédiques.",
      paragraph2:
        "Les semelles orthopédiques sont réalisées sur mesure au cabinet.",
    },

    content: {
      part1: {
        title: "",
        paragraph: `La podologie étudie l'ensemble des troubles statiques et dynamiques du
        pied ainsi que les pathologies sus-jacentes.`,
      },
      part2: {
        title: "Pourquoi consulter ?",
        reasons: [
          "- Troubles de la marche",
          "- Troubles de la posture",
          "- Douleur mécanique",
          "- Malformation",
          "- Prise en charge post traumatique",
          "- Prise en charge post chirurgicale",
        ],
        reasons: [
          {
            primary: "- Troubles de la marche",
          },
          {
            primary: "- Troubles de la posture",
          },
          {
            primary: "- Douleur mécanique",
          },
          {
            primary: "- Malformation",
          },
          {
            primary: "- Prise en charge post traumatique",
          },
          {
            primary: "- Prise en charge post chirurgicale",
          },
        ],
      },
    },
  },
  {
    id: 4,
    pageName: "Posturologie",
    path: "/posturologie",
    content: {
      part1: {
        title: "",
        paragraph: `La posturologie est une discipline qui étudie la position et l’équilibre
        de l’être humain dans l’espace, à l’état statique et en mouvement. Pour
        se tenir debout, l'être humain doit lutter contre la gravité et adapter
        continuellement sa position afin de garder l’équilibre. Cette adaptation
        se fait grâce aux informations reçues par les capteurs posturaux qui
        sont : la peau, les articulations, la plante des pieds, les yeux,
        l’oreille interne et les dents. Le cerveau reçoit toutes ces
        informations et adapte la posture du corps à tout moment. La
        posturologie est un outil diagnostic qui permet d’analyser et traiter
        les causes d’une dysfonction posturale fonctionnelle (contrairement à la
        podologie classique qui elle analyse et traite les causes d'une
        dysfonction organique) au moyen de semelles dites de posture.`,
      },
      part2: {
        title: "Pourquoi consulter ?",
        reasons: [
          {
            primary: "Perte d'équilibre",
            secondary: "sclérose en plaques, de diabète ou de cancer",
          },
          {
            primary: "Douleurs diverses",
            secondary: "accompagnée ou non de nausées, vertiges…",
          },
          {
            primary: "Blocages et/ou raideurs",
            secondary: "lumbago, tour de reins, torticolis...",
          },
        ],
      },
    },
  },
  {
    id: 5,
    pageName: "Pédicurie",
    path: "/pedicurie",
    content: {
      part1: {
        title: "",
        paragraph:
          "La pédicurie concerne le soin et le traitement des affections de la peau et des ongles de vos pieds.",
      },
      part2: {
        title: "Pourquoi consulter ?",
        reasons: [
          {
            primary: "- Durillons, cors",
          },
          {
            primary: "- Oeil de perdrix",
          },
          {
            primary: "- Mycose cutanées et ungéales",
          },
          {
            primary: "- Ongle incarné",
          },
          {
            primary: "- Verrue plantaire",
          },
          {
            primary: "- Hématomes sous unguéaux",
          },
        ],
      },
    },
  },
  {
    id: 6,
    pageName: "Diabétologie",
    path: "/diabetologie",
    infoBulle: {
      head: "Conventionnées par la sécurité sociale",
      paragraph1:
        "Sous prescription médicale, prise en charge intégrale par la sécurité sociale des soins de pédicurie chez le patient diabétique de grade 2 et 3.",
    },
    content: {
      part1: {
        title: "",
        paragraph: `La prise en charge du pied du patient diabétique par le pédicure-podologue s’inscrit dans une prise en charge médicale globale et pluridisciplinaire (médecin généraliste, diabétologue, infirmier, pédicure-podologue, dermatologue, infectiologue).
          Elle comporte l’examen du pied et la gradation du risque podologique, les soins de pédicurie-podologie, l’éducation du patient, l’évaluation du chaussage et la mise en place d’un traitement orthétique (semelles) et d’un chaussage adapté, si nécessaire.`,
      },
      part2: {
        title: "Pourquoi consulter ?",
        reasons: [
          {
            primary:
              "Parmi les nombreuses complications du diabète (insuffisance rénale, infarctus, accident vasculaire cérébral, rétinopathie, etc.), le pied n’est pas épargné. Les complications podologiques sont fréquentes chez le diabétique ; des lésions graves pouvant même, dans les cas les plus sévères, conduire à des amputations.",
          },
        ],
      },
    },
  },
  {
    id: 7,
    pageName: "Réflexologie",
    path: "/reflexologie",
    content: {
      part1: {
        title: "",
        paragraph: `C'est une méthode thérapeutique qui utilise le processus d’autoguérison
        naturel du corps. Le pied est une représentation miniature du corps
        humain où chaque zone du pied correspond à un organe ou une partie de
        corps humain. La réflexologie soulage le corps par le pied. En stimulant
        manuellement ces zones réflexes, il est donc possible d’agir sur les
        organes ou les fonctions qu’elles représentent.`,
      },
      part2: {
        title: "Pourquoi consulter ?",
        reasons: [
          {
            primary:
              "Améliore la qualité de vie de patients atteints de maladie chronique",
            secondary: "sclérose en plaques, de diabète ou de cancer",
          },
          {
            primary: "Diminue les maux du quotidien",
            secondary:
              "douleurs dorsales, cervicales, maux de tête, syndrome prémenstruel",
          },
          {
            primary: "Agi sur le stress",
          },
        ],
      },
    },
  },
];

export default data;
