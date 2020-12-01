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
    content: {
      part1: {
        title: "",
        paragraph: `La podologie étudie l'ensemble des troubles statiques et dynamiques du
        pied ainsi que les pathologies sus-jacentes.`,
      },
      part2: {
        title: "Pourquoi consulter ?",
        paragraph: "",
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
        paragraph: "",
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
        paragraph: "",
      },
    },
  },
  {
    id: 6,
    pageName: "Diabétologie",
    path: "/diabetologie",
    // infoBulle: {},
    content: {
      part1: {
        title: "",
        paragraph:
          "Conventionnées par la sécurité sociale. Sous prescription médicale, prise en charge intégrale par la sécurité sociale des soins de pédicurie chez le patient diabétique de grade 2 et 3.",
      },
      part2: {
        title: "Pourquoi consulter ?",
        paragraph: "",
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
        paragraph: "",
      },
    },
  },
];

export default data;
