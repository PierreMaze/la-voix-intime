migrate(
  // ── UP — Données de test ──────────────────────────────────────────────────
  (app) => {

    // ── Formations ────────────────────────────────────────────────────────────
    const formationsData = [
      {
        title: "Éveiller votre intuition",
        description: "Votre intuition est une boussole intérieure qui ne ment jamais — encore faut-il apprendre à l'entendre. Dans cette formation progressive, vous découvrirez comment distinguer la voix de l'âme de celle de l'ego, comment affiner votre ressenti corporel et comment intégrer cette intelligence subtile dans vos décisions quotidiennes. Idéale pour les débutantes en développement personnel comme pour celles qui souhaitent approfondir leur connexion avec elles-mêmes.",
        price: 49,
        published: true,
      },
      {
        title: "Lecture des cartes divinatoires",
        description: "Le tarot est bien plus qu'un jeu de prédiction : c'est un miroir de l'âme et un outil de guidance profonde. Cette formation complète vous emmène des origines historiques du tarot jusqu'à la pratique de tirages avancés. Vous apprendrez à lire les 78 cartes avec fluidité, à interpréter les associations et à conduire des consultations bienveillantes pour vous-même et vos proches. Aucune expérience préalable requise.",
        price: 79,
        published: true,
      },
      {
        title: "Se reconnecter à soi — Méditation & Guidance",
        description: "Dans le bruit du quotidien, nous perdons souvent le fil de qui nous sommes vraiment. Cette formation vous propose un voyage intérieur structuré en trois actes : le silence, la reconnaissance et l'expression. À travers des méditations guidées, des exercices d'écriture intuitive et des pratiques de pleine conscience, vous retrouverez votre centre et apprendrez à y revenir, même dans la tempête.",
        price: 39,
        published: true,
      },
      {
        title: "Les chakras et l'énergie vitale",
        description: "Le système des chakras est une carte énergétique du corps humain utilisée depuis des millénaires dans les traditions yogiques et tantriques. Cette formation vous guide à travers les 7 centres énergétiques principaux : leur localisation, leurs déséquilibres courants et les pratiques concrètes pour les harmoniser — méditations, sons, cristaux et postures. Une formation complète pour celles qui souhaitent prendre soin de leur corps subtil.",
        price: 59,
        published: false,
      },
      {
        title: "Oracle des anges — Channeling guidé",
        description: "Les anges communiquent avec nous en permanence, à travers des synchronicités, des sensations et des images intérieures. Cette formation vous apprend à ouvrir et sécuriser ce canal de communication, à utiliser les oracles angéliques avec précision et discernement, et à développer votre clair-ressenti pour des lectures profondes et justes. Une approche structurée, bienveillante et ancrée dans une pratique quotidienne.",
        price: 55,
        published: true,
      },
      {
        title: "Voyage chamanique — Les esprits guides",
        description: "Le chamanisme est l'une des plus anciennes formes de spiritualité humaine. Dans cette formation d'initiation, vous apprendrez à effectuer des voyages en conscience guidés par le tambour, à rencontrer votre animal totem et vos esprits guides, et à utiliser ces ressources symboliques pour prendre des décisions, traverser des épreuves ou accompagner vos proches. Une expérience transformatrice et profondément ancrée.",
        price: 75,
        published: true,
      },
    ];

    const formations = [];
    for (const data of formationsData) {
      const collection = app.findCollectionByNameOrId("formations");
      const record = new Record(collection);
      record.set("title",       data.title);
      record.set("description", data.description);
      record.set("price",       data.price);
      record.set("published",   data.published);
      app.save(record);
      formations.push(record);
    }

    // ── Leçons ────────────────────────────────────────────────────────────────
    const lessonsData = [
      // Formation 0 — Éveiller votre intuition
      {
        fi: 0,
        lessons: [
          {
            title: "Qu'est-ce que l'intuition vraiment ?",
            content: "L'intuition n'est pas un don réservé aux voyantes ou aux mystiques. C'est une intelligence naturelle, ancrée dans le corps et dans l'inconscient, que chacune d'entre nous possède. Dans cette leçon, nous explorons ses différentes formes — pressentiment, image intérieure, sensation physique — et comment la distinguer de la peur, du désir ou de la projection mentale. Vous repartirez avec une première clé : apprendre à observer sans juger.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 0,
          },
          {
            title: "Le journal de l'intuition",
            content: "Le journal est l'outil le plus puissant pour développer votre intuition, car il crée une trace de ce que vous ressentez avant de savoir. Dans cette leçon pratique, vous apprendrez comment tenir un journal de ressentis quotidien : structure suggérée, fréquence, relecture hebdomadaire et indicateurs de progression. Prévoyez un carnet et 10 minutes par jour — c'est tout ce qu'il faut.",
            video_url: "",
            order: 1,
          },
          {
            title: "Lire les signaux du corps",
            content: "Votre corps reçoit des informations bien avant que votre esprit conscient n'en prenne acte. Un serrement dans la gorge, une légèreté dans la poitrine, une chaleur dans les mains — ces signaux sont votre boussole. Cette leçon vous propose un protocole de scan corporel en 5 étapes à pratiquer chaque matin, ainsi qu'un dictionnaire personnel des sensations à construire au fil du temps.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 2,
          },
          {
            title: "Méditation : ouvrir le canal intérieur",
            content: "Cette méditation guidée de 20 minutes est conçue pour calmer le mental analytique et créer un espace de réception. Elle combine respiration profonde, visualisation d'un lieu sûr et invitation à la voix intérieure. À pratiquer idéalement le matin à jeun ou en début de soirée, dans un espace où vous ne serez pas dérangée. Après 7 jours consécutifs, notez ce qui a changé dans votre ressenti quotidien.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 3,
          },
          {
            title: "Intégrer l'intuition dans vos décisions",
            content: "Comment utiliser ce que vous avez appris dans les situations concrètes de la vie : choix professionnels, relations, créativité, santé ? Cette leçon vous propose la méthode des 3 temps — Pause, Ressenti, Mouvement — et des exercices de décision intuitive pour les choix du quotidien. Vous apprendrez aussi à reconnaître les blocages les plus courants et comment les traverser avec douceur.",
            video_url: "",
            order: 4,
          },
        ],
      },

      // Formation 1 — Lecture des cartes
      {
        fi: 1,
        lessons: [
          {
            title: "Histoire et naissance du tarot",
            content: "Avant d'apprendre à lire les cartes, comprendre d'où elles viennent. Le tarot est né dans l'Italie de la Renaissance comme jeu de cour, avant d'être adopté par les occultistes du XVIIIe siècle qui y ont vu un système de correspondances universel. Cette leçon retrace ce voyage fascinant et pose les bases d'une pratique éclairée, ni superstitieuse ni naïve.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 0,
          },
          {
            title: "Structure du jeu : arcanes majeurs",
            content: "Les 22 arcanes majeurs sont le cœur du tarot. Chacun représente un archétype universel — Le Mat, Le Bateleur, La Papesse, L'Impératrice… jusqu'au Monde. Dans cette leçon, vous découvrirez la signification profonde de chaque carte, ses nuances selon le contexte et sa place dans le parcours initiatique que représente le jeu dans son ensemble. Des fiches-mémo sont incluses.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 1,
          },
          {
            title: "Structure du jeu : arcanes mineurs",
            content: "Les 56 arcanes mineurs divisés en 4 suites — Coupes, Bâtons, Épées, Pentacles — cartographient les expériences du quotidien. Cette leçon vous enseigne la logique interne de chaque suite, la progression de l'As au Dix et la signification des figures (Valet, Cavalier, Reine, Roi). Vous n'aurez plus besoin de mémoriser : vous comprendrez.",
            video_url: "",
            order: 2,
          },
          {
            title: "Votre premier tirage : la croix celtique",
            content: "Le tirage en croix celtique est l'un des plus riches du tarot : 10 cartes qui décrivent la situation présente, les forces en jeu, les influences passées et futures, les espoirs, les peurs et le résultat probable. Cette leçon vous guide pas à pas dans votre première lecture complète, avec un exemple commenté carte par carte. Préparez votre jeu et un moment de calme.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 3,
          },
          {
            title: "Lire les associations et créer une narration",
            content: "La vraie compétence d'un lecteur de tarot n'est pas de connaître les cartes une par une, mais de tisser entre elles une narration cohérente. Cette leçon avancée vous montre comment les cartes se répondent, se nuancent ou s'amplifient, comment intégrer la position dans la lecture et comment poser les bonnes questions pour guider la consultation vers quelque chose d'utile et de juste.",
            video_url: "",
            order: 4,
          },
          {
            title: "Éthique et limites de la pratique divinatoire",
            content: "Lire les cartes pour soi-même ou pour d'autres implique une responsabilité. Cette dernière leçon aborde les questions essentielles : comment formuler les questions, comment restituer une lecture difficile avec bienveillance, les limites à ne pas franchir, et comment prendre soin de votre propre énergie en tant que lectrice. Une leçon qui fait la différence entre la pratique amateur et la pratique consciente.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 5,
          },
        ],
      },

      // Formation 2 — Méditation & Guidance
      {
        fi: 2,
        lessons: [
          {
            title: "Pourquoi méditer — au-delà des clichés",
            content: "La méditation n'est pas un état de béatitude permanent, une pratique réservée aux moines ou un outil pour vider l'esprit. C'est un entraînement attentionnel qui transforme votre rapport à vous-même et au monde. Cette leçon démêle les idées reçues, présente les bénéfices documentés et vous aide à trouver la forme de méditation la plus adaptée à votre tempérament.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 0,
          },
          {
            title: "La méditation de la respiration",
            content: "La respiration est le seul pont naturel entre le système nerveux autonome et la conscience. En apprenant à l'utiliser délibérément, vous pouvez moduler votre état intérieur en quelques minutes. Cette leçon vous enseigne la cohérence cardiaque, la respiration 4-7-8 et la respiration carrée. Pratiquez cette méditation de 10 minutes chaque matin pendant une semaine et observez.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 1,
          },
          {
            title: "L'écriture automatique comme guidance",
            content: "L'écriture automatique est une technique puissante pour court-circuiter le mental et accéder à une sagesse plus profonde. Cette leçon vous guide pas à pas dans votre première session : préparation de l'espace, intention, durée, posture, et surtout comment relire et interpréter ce qui émerge sans y projeter vos attentes. Un outil à utiliser en complément de la méditation.",
            video_url: "",
            order: 2,
          },
          {
            title: "Créer une pratique quotidienne durable",
            content: "Le défi n'est pas de méditer une fois, c'est de méditer régulièrement. Cette leçon vous donne les outils pour construire une pratique ancrée dans votre vie réelle : routine du matin, micro-pauses dans la journée, rituels du soir. Vous découvrirez aussi comment traverser les périodes de résistance — car elles font partie du chemin — et comment adapter votre pratique à vos cycles de vie.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 3,
          },
        ],
      },

      // Formation 3 — Chakras (brouillon)
      {
        fi: 3,
        lessons: [
          {
            title: "Introduction aux 7 chakras",
            content: "Le mot chakra signifie 'roue' en sanskrit — une roue de lumière en rotation permanente dans votre corps subtil. Cette leçon présente le système complet : localisation anatomique, couleur associée, élément, son-bija et fonction psycho-spirituelle de chacun des 7 centres. Vous repartirez avec une carte visuelle complète et une première compréhension de leur interdépendance.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 0,
          },
          {
            title: "Muladhara — le chakra racine",
            content: "Le chakra racine est le fondement de tout le système énergétique. Situé à la base de la colonne, il gouverne votre sentiment de sécurité, d'appartenance et d'ancrage dans la matière. Un Muladhara déséquilibré se manifeste par l'anxiété chronique, les problèmes financiers récurrents ou la sensation de ne jamais être à sa place. Cette leçon propose des exercices d'ancrage concrets : marche pieds nus, méditation terre, postures yoga.",
            video_url: "",
            order: 1,
          },
          {
            title: "Svadhisthana — le chakra sacré",
            content: "Le chakra sacré est le siège de la créativité, du plaisir et de la fluidité émotionnelle. Situé sous le nombril, il régit votre rapport à l'eau, aux cycles, à la sexualité et à la joie spontanée. Cette leçon explore ses déséquilibres les plus fréquents chez les femmes modernes — hypercontrôle, culpabilité, sécheresse créative — et propose des pratiques de danse, de bain rituel et d'expression artistique libre.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 2,
          },
        ],
      },

      // Formation 4 — Oracle des anges
      {
        fi: 4,
        lessons: [
          {
            title: "Comprendre le monde angélique",
            content: "Les anges ne sont pas des êtres à ailes blanches sortis d'une carte de vœux. Dans les traditions ésotériques sérieuses, ils représentent des fréquences d'énergie pure, des archétypes de qualités divines. Cette leçon pose les bases théologiques et métaphysiques du travail angélique, distingue les différents chœurs, et vous aide à construire une relation personnelle et respectueuse avec ces présences.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 0,
          },
          {
            title: "Sécuriser et préparer l'espace",
            content: "Avant toute communication subtile, il est essentiel de créer un espace protégé — physiquement et énergétiquement. Cette leçon vous enseigne les rituels de purification (encens, son, lumière), les prières d'ouverture et de fermeture, et comment discerner une communication authentique d'une projection mentale. La clarté de l'intention est la clé.",
            video_url: "",
            order: 1,
          },
          {
            title: "Utiliser l'oracle angélique",
            content: "L'oracle angélique fonctionne différemment du tarot : ses messages sont toujours bienveillants, encourageants et orientés vers la croissance. Cette leçon vous apprend à formuler vos questions, à choisir vos cartes en conscience, à interpréter les images et les mots avec votre propre ressenti et à construire une lecture cohérente sur plusieurs cartes.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 2,
          },
          {
            title: "Développer le clair-ressenti",
            content: "Le clair-ressenti — ou clairsentience — est la capacité à recevoir des informations sous forme de sensations émotionnelles ou physiques. C'est souvent la première forme de perception subtile qui s'éveille. Cette leçon propose des exercices quotidiens pour l'affiner : lecture d'objet, scanning d'espace, pratique en miroir. Avec de la constance, vous apprendrez à faire confiance à ce que vous ressentez.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 3,
          },
          {
            title: "Intégrer la guidance angélique au quotidien",
            content: "La pratique angélique n'est pas réservée aux grandes questions. Dans cette dernière leçon, vous apprendrez à recevoir des signes dans le quotidien, à travailler avec l'ange du jour, à construire un autel personnel et à utiliser la guidance pour nourrir votre créativité, vos relations et votre projet de vie. Un art de vivre, pas une pratique occasionnelle.",
            video_url: "",
            order: 4,
          },
        ],
      },

      // Formation 5 — Voyage chamanique
      {
        fi: 5,
        lessons: [
          {
            title: "Introduction au chamanisme contemporain",
            content: "Le chamanisme n'est pas une religion ni un système de croyances figé : c'est une technologie de conscience utilisée sur tous les continents depuis 40 000 ans. Cette leçon présente les principes fondamentaux — les trois mondes, l'état modifié de conscience, la notion de pouvoir personnel — et replace cette pratique dans un contexte moderne respectueux et éthique.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 0,
          },
          {
            title: "Le voyage en tambour — premiers pas",
            content: "Le tambour chamanique induit un état de conscience particulier (entre 4 et 7 Hz) qui facilite le voyage intérieur. Cette leçon vous guide dans votre premier voyage : préparation, intention d'entrée, point de départ visualisé, signal de rappel. Vous y découvrirez le monde du bas — un espace sûr où rencontrer vos alliés. Une expérience à vivre dans la détente et la curiosité.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 1,
          },
          {
            title: "Rencontrer votre animal totem",
            content: "L'animal totem est un allié spirituel qui représente des qualités énergétiques disponibles pour vous. Ce n'est pas une croyance : c'est une métaphore active, un outil symbolique pour accéder à des ressources intérieures. Cette leçon vous guide dans un voyage dédié à la rencontre avec votre animal, et vous apprend à dialoguer avec lui, à comprendre ses messages et à l'intégrer dans votre quotidien.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 2,
          },
          {
            title: "Récupérer son pouvoir personnel",
            content: "Dans la vision chamanique, nos difficultés répétées, nos blocages émotionnels ou notre fatigue chronique sont souvent liés à une 'perte de pouvoir' — une déconnexion d'avec une partie de nous-mêmes. Cette leçon vous enseigne le voyage de récupération de pouvoir : comment identifier ce qui a été perdu, comment le retrouver dans les mondes intérieurs et comment l'intégrer dans votre vie.",
            video_url: "",
            order: 3,
          },
          {
            title: "Créer des rituels chamaniques simples",
            content: "Le chamanisme se vit dans la relation avec le monde vivant. Cette dernière leçon vous apprend à créer des rituels simples et personnels : offrir à la terre, travailler avec les éléments, consulter les oracles naturels, construire un autel de pouvoir. Des pratiques que vous pouvez intégrer dans votre vie sans appartenir à aucune tradition particulière, avec sincérité et humilité.",
            video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 4,
          },
        ],
      },
    ];

    const allLessons = [];
    for (const group of lessonsData) {
      const collection = app.findCollectionByNameOrId("lessons");
      for (const l of group.lessons) {
        const record = new Record(collection);
        record.set("formation_id", formations[group.fi].id);
        record.set("title",        l.title);
        record.set("content",      l.content);
        record.set("video_url",    l.video_url);
        record.set("order",        l.order);
        app.save(record);
        allLessons.push({ record, fi: group.fi });
      }
    }

    // ── Utilisateurs ──────────────────────────────────────────────────────────
    const usersCollection = app.findCollectionByNameOrId("users");

    const adminRecord = new Record(usersCollection);
    adminRecord.set("email",           "admin@lavoixintime.fr");
    adminRecord.set("name",            "Admin");
    adminRecord.set("role",            "admin");
    adminRecord.set("verified",        true);
    adminRecord.set("password",        "Test1234!");
    adminRecord.set("passwordConfirm", "Test1234!");
    app.save(adminRecord);

    const clientsData = [
      { email: "marie.dupont@email.com",   name: "Marie Dupont",   password: "Test1234!" },
      { email: "sophie.martin@email.com",  name: "Sophie Martin",  password: "Test1234!" },
      { email: "claire.bernard@email.com", name: "Claire Bernard", password: "Test1234!" },
      { email: "julie.moreau@email.com",   name: "Julie Moreau",   password: "Test1234!" },
    ];

    const clients = [];
    for (const data of clientsData) {
      const record = new Record(usersCollection);
      record.set("email",           data.email);
      record.set("name",            data.name);
      record.set("role",            "student");
      record.set("verified",        true);
      record.set("password",        data.password);
      record.set("passwordConfirm", data.password);
      app.save(record);
      clients.push(record);
    }

    // ── Achats ────────────────────────────────────────────────────────────────
    const purchasesData = [
      { client: 0, formation: 0, ref: "PAYPAL-001" },
      { client: 0, formation: 1, ref: "PAYPAL-002" },
      { client: 1, formation: 1, ref: "PAYPAL-003" },
      { client: 2, formation: 0, ref: "PAYPAL-004" },
      { client: 2, formation: 2, ref: "PAYPAL-005" },
      { client: 3, formation: 4, ref: "PAYPAL-006" },
    ];

    const purchasesCollection = app.findCollectionByNameOrId("purchases");
    for (const data of purchasesData) {
      const record = new Record(purchasesCollection);
      record.set("user_id",      clients[data.client].id);
      record.set("formation_id", formations[data.formation].id);
      record.set("purchased_at", new Date().toISOString());
      record.set("payment_ref",  data.ref);
      app.save(record);
    }

    // ── Progression ───────────────────────────────────────────────────────────
    const progressCollection = app.findCollectionByNameOrId("progress");

    const lessonsByFormation = {};
    for (const { record, fi } of allLessons) {
      if (!lessonsByFormation[fi]) lessonsByFormation[fi] = [];
      lessonsByFormation[fi].push(record);
    }

    function markComplete(userId, lessonId) {
      const record = new Record(progressCollection);
      record.set("user_id",      userId);
      record.set("lesson_id",    lessonId);
      record.set("completed",    true);
      record.set("completed_at", new Date().toISOString());
      app.save(record);
    }

    // Marie — formation 0 : leçons 0 et 1 vues
    markComplete(clients[0].id, lessonsByFormation[0][0].id);
    markComplete(clients[0].id, lessonsByFormation[0][1].id);

    // Sophie — formation 1 : leçons 0 et 1 vues
    markComplete(clients[1].id, lessonsByFormation[1][0].id);
    markComplete(clients[1].id, lessonsByFormation[1][1].id);

    // Claire — formation 2 : toutes les leçons vues
    for (const lesson of lessonsByFormation[2]) {
      markComplete(clients[2].id, lesson.id);
    }

    // Julie — formation 4 : leçon 0 vue
    markComplete(clients[3].id, lessonsByFormation[4][0].id);
  },

  // ── DOWN ──────────────────────────────────────────────────────────────────
  (app) => {
    for (const col of ["progress", "purchases", "lessons", "formations"]) {
      try {
        const records = app.findAllRecords(col);
        for (const r of records) app.delete(r);
      } catch (_) {}
    }
    try {
      const emails = [
        "admin@lavoixintime.fr",
        "marie.dupont@email.com",
        "sophie.martin@email.com",
        "claire.bernard@email.com",
        "julie.moreau@email.com",
      ];
      for (const email of emails) {
        try {
          const user = app.findFirstRecordByData("users", "email", email);
          app.delete(user);
        } catch (_) {}
      }
    } catch (_) {}
  }
);
