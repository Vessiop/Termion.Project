// Catégories de filtrage des talents non évolutifs.
const categories = {
    'caracteristiques': {
        name: '📊 Caractéristiques & Croissance',
        icon: '📊',
        description: 'Stats de base, traits, gains par niveau, bonus permanents'
    },
    'combat': {
        name: '⚔️ Combat & Guerre',
        icon: '⚔️',
        description: 'Combat martial, techniques d\'armes, initiative, tactiques'
    },
    'defense': {
        name: '🛡️ Défense & Résistance',
        icon: '🛡️',
        description: 'Défense physique/magique, armures, résistances élémentaires'
    },
    'magie': {
        name: '✨ Magie & Arcanes',
        icon: '✨',
        description: 'Éveil magique, sorts, incantation, pouvoirs mystiques'
    },
    'social-savoir': {
        name: '💬 Social & Savoir',
        icon: '💬',
        description: 'Dialectes, interactions, connaissance, analyse, déduction'
    },
    'exploration-competences': {
        name: '🗺️ Exploration & Compétences',
        icon: '🗺️',
        description: 'Survie, terrain, orientation, métier, initiations, fondations'
    },
    'special': {
        name: '⭐ Spéciaux & Uniques',
        icon: '⭐',
        description: 'Potentiel, ressources, intuition, faveurs'
    }
};

// Catalogue remplacé intégralement depuis « Talent non évolutif.odt ».
// Les conditions sont séparées des effets ; les paragraphes du document sont conservés.
const allTalents = [
    {
        "nom": "Vivacité",
        "effet": "Tu gagnes un bonus permanent de +10 à ta Réactivité",
        "cout": 1,
        "id": "vivacite",
        "condition": null,
        "categories": [
            "caracteristiques"
        ]
    },
    {
        "nom": "Bonne vitalité",
        "effet": "À chaque montée de niveau, lorsque tu lances le dé de gain de PV, augmente le résultat final de +1",
        "cout": 2,
        "id": "bonne-vitalite",
        "condition": null,
        "categories": [
            "caracteristiques"
        ]
    },
    {
        "nom": "Barrière mental endurcie",
        "effet": "Tu gagnes un bonus permanent de +12 à ta Résistance mentale.",
        "cout": 1,
        "id": "barriere-mental-endurcie",
        "condition": null,
        "categories": [
            "caracteristiques",
            "defense"
        ]
    },
    {
        "nom": "Endurant",
        "effet": "À chaque montée de niveau, lorsque tu lances le dé de gain de PE, ajoute +1 au résultat obtenu.",
        "cout": 2,
        "id": "endurant",
        "condition": null,
        "categories": [
            "caracteristiques"
        ]
    },
    {
        "nom": "Sprinteur émérite",
        "effet": "Tu gagnes un bonus permanent de +6 à ton Mouvement de déplacement de base.",
        "cout": 1,
        "id": "sprinteur-emerite",
        "condition": null,
        "categories": [
            "caracteristiques"
        ]
    },
    {
        "nom": "Jeune potentielle magique",
        "effet": "À chaque montée de niveau, lorsque tu lances le dé de gain de PM, augmente le résultat de +1.",
        "cout": 2,
        "id": "jeune-potentielle-magique",
        "condition": null,
        "categories": [
            "caracteristiques",
            "magie"
        ]
    },
    {
        "nom": "Volonté de Chair",
        "effet": "Tu encaisses mieux les épreuves physiques comme mentales : fatigue, douleur, pression, conditions dures. Cette solidité te rend plus difficile à briser quand la situation s’étire ou devient brutale. Gain : Résilience +2.",
        "cout": 2,
        "id": "volonte-de-chair",
        "condition": null,
        "categories": [
            "caracteristiques"
        ]
    },
    {
        "nom": "Esprit Érudit",
        "effet": "Tu assimiles plus vite, tu retiens mieux, et tu sais surtout exploiter l’info au bon moment. Notes, manuels, récits, détails techniques : tu transformes la connaissance en avantage concret. Gain : Savoir +2.",
        "cout": 2,
        "id": "esprit-erudit",
        "condition": null,
        "categories": [
            "caracteristiques",
            "social-savoir"
        ]
    },
    {
        "nom": "Coordination Affûtée",
        "effet": "Tes gestes sont plus propres, précis et contrôlés, même sous stress ou en mouvement. Tu rattrapes mieux les petites erreurs et perds moins d’efficacité sur les actions délicates. Gain : Finesse +2.",
        "cout": 2,
        "id": "coordination-affutee",
        "condition": null,
        "categories": [
            "caracteristiques"
        ]
    },
    {
        "nom": "Réflexes Primitifs",
        "effet": "Tu sens mieux le danger et tu réagis plus vite aux signaux faibles : intention, mouvement, changement d’ambiance. Même sans réfléchir longtemps, tu choisis plus souvent la bonne action au bon timing. Gain : Instinct +2.",
        "cout": 2,
        "id": "reflexes-primitifs",
        "condition": null,
        "categories": [
            "caracteristiques"
        ]
    },
    {
        "nom": "Force Ancrée",
        "effet": "Ta force brute dépasse la norme : frappes plus lourdes, poussées plus nettes, prises plus difficiles à rompre. Tu convertis mieux ton effort en impact réel, sans te “vider” inutilement. Gain : Puissance +2.",
        "cout": 2,
        "id": "force-ancree",
        "condition": null,
        "categories": [
            "caracteristiques"
        ]
    },
    {
        "nom": "Aisance Relationnelle",
        "effet": "Tu lis mieux les gens et tu adaptes naturellement ton ton, tes mots et ta posture selon le contexte. Tu obtiens plus facilement coopération, informations ou ouverture, sans forcer. Gain : Social +2.",
        "cout": 2,
        "id": "aisance-relationnelle",
        "condition": null,
        "categories": [
            "caracteristiques",
            "social-savoir"
        ]
    },
    {
        "nom": "Nerfs d’Acier",
        "effet": "Tu gardes la tête froide quand ça crie, quand ça saigne, ou quand tout part en vrille. La panique te prend moins et tes décisions restent plus propres sous pression. Gain : Sang-froid +2.",
        "cout": 2,
        "id": "nerfs-dacier",
        "condition": null,
        "categories": [
            "caracteristiques"
        ]
    },
    {
        "nom": "Savoir-Faire Polyvalent",
        "effet": "Tu as entraîné ton savoir-faire global à travers différentes tâches et outils, en affinant tes automatismes et ta manière de t’adapter aux contraintes. Tu gagnes en efficacité dès qu’il faut improviser, réparer, produire ou exécuter une procédure proprement, même hors de ta spécialité exacte. Gain : Trait spécifique Métier +2.",
        "cout": 2,
        "id": "savoir-faire-polyvalent",
        "condition": null,
        "categories": [
            "caracteristiques",
            "exploration-competences"
        ]
    },
    {
        "nom": "Réveil du Potentiel Physique",
        "effet": "Tu éveilles ton corps au combat : pour les styles basés sur le corps, tu supprimes la division des dégâts liée aux caractéristiques de corps (tu appliques les dégâts “plein” selon ta règle d’éveil). À l’acquisition du talent, tu lances immédiatement 2 dés de gain de PE (comme lors d’une montée de niveau) et ajoutes le résultat à tes PE.",
        "cout": 3,
        "id": "reveil-du-potentiel-physique",
        "condition": null,
        "categories": [
            "caracteristiques",
            "combat",
            "special"
        ]
    },
    {
        "nom": "Éveil Magique",
        "effet": "Tu débloques ton potentiel mystique : la magie devient accessible au personnage. Si ton dé de base de PM était inférieur à 1d12, il passe à 1d12. À l’acquisition du talent, tu lances immédiatement 2 dés de gain de PM (comme lors d’une montée de niveau) et ajoutes le résultat à tes PM.",
        "cout": 3,
        "id": "eveil-magique",
        "condition": null,
        "categories": [
            "caracteristiques",
            "magie",
            "special"
        ]
    },
    {
        "nom": "Corps de rock",
        "effet": "Ton corps encaisse mieux les chocs et les impacts : posture plus stable, muscles plus denses, réflexes de verrouillage plus efficaces. Tu gagnes +3 en Mode de Défense Physique de façon permanente",
        "cout": 2,
        "id": "corps-de-rock",
        "condition": null,
        "categories": [
            "defense"
        ]
    },
    {
        "nom": "Corps magique",
        "effet": "Ton organisme et ton aura deviennent plus résistants aux pressions magique : meilleure tenue du flux, esprit plus “ancré” face aux attaques mystiques. Tu gagnes +3 en Mode de Défense Magique de façon permanente",
        "cout": 2,
        "id": "corps-magique",
        "condition": null,
        "categories": [
            "defense",
            "magie"
        ]
    },
    {
        "nom": "Dialecte des Rues",
        "effet": "Tu connais l’argot commun des quartiers populaires : formules, menaces voilées, humour, codes de respect. Tu évites les maladresses qui te feraient passer pour un pigeon et tu sais poser des questions sans “sonner officiel”.Offre compétence trait spécifique : Dialecte rue +2",
        "cout": 1,
        "id": "dialecte-des-rues",
        "condition": null,
        "categories": [
            "social-savoir"
        ]
    },
    {
        "nom": "Dialecte Noble",
        "effet": "Tu maîtrises les tournures de politesse, les implicites et la façon de parler “sans dire”. Tu sais quand flatter, quand rester vague et comment éviter l’impair qui ferme une porte.Offre compétence trait spécifique : Dialecte Noble +2",
        "cout": 1,
        "id": "dialecte-noble",
        "condition": null,
        "categories": [
            "social-savoir"
        ]
    },
    {
        "nom": "Dialecte Criminel",
        "effet": "Tu connais les codes de prudence : phrases à double sens, règles d’accès, façons de tester un inconnu. Tu sais parler sans t’auto-incriminer et obtenir une info sans déclencher une alarme. Offre compétence trait spécifique : Dialecte criminel +2",
        "cout": 1,
        "id": "dialecte-criminel",
        "condition": null,
        "categories": [
            "social-savoir"
        ]
    },
    {
        "nom": "Dialecte Religieux",
        "effet": "Tu connais les tournures de foi, les références morales, et la manière de demander sans paraître blasphématoire. Tu sais quand parler d’humilité, de devoir, de “preuve”, et comment éviter de heurter un dogme.Offre la compétence de trait spécifique : Dialecte Religieux +2",
        "cout": 1,
        "id": "dialecte-religieux",
        "condition": null,
        "categories": [
            "social-savoir"
        ]
    },
    {
        "nom": "Vigueur martiale",
        "effet": "Grâce à sa maîtrise du combat et à sa puissance musculaire, le personnage améliore l'efficacité de ses offensives physiques.\nLe personnage bénéficie d'un bonus permanent de +3 à son Mode d'Attaque Physique.",
        "cout": 2,
        "id": "vigueur-martiale",
        "condition": null,
        "categories": [
            "caracteristiques",
            "combat"
        ]
    },
    {
        "nom": "Ascendance arcanique",
        "effet": "Grâce à une meilleure maîtrise de ses énergies magiques, le personnage renforce sa capacité à mener des offensives surnaturelles.\nLe personnage bénéficie d'un bonus permanent de +3 à son Mode d'Attaque Magique.",
        "cout": 2,
        "id": "ascendance-arcanique",
        "condition": null,
        "categories": [
            "caracteristiques",
            "magie"
        ]
    },
    {
        "nom": "Érudition linguistique",
        "effet": "Grâce à ses connaissances linguistiques, le personnage développe une maîtrise de nouvelles langues. Lors de l'acquisition de ce talent, il choisit l'un des avantages suivants :\nDeux langues basiques : le personnage apprend deux langues de niveau basique de son choix.\nou\nUne langue supérieure : le personnage apprend une langue de niveau supérieur de son choix",
        "cout": 2,
        "id": "erudition-linguistique",
        "condition": null,
        "categories": [
            "social-savoir"
        ]
    },
    {
        "nom": "Instinct d'Avant-Garde",
        "effet": "Toujours sur le qui-vive et prêt à réagir à la moindre menace, le personnage possède des réflexes aiguisés lui permettant de prendre l'avantage dès les premiers instants d'un affrontement. Il bénéficie d'un bonus permanent de +6 en Initiative. Et gagne un bonus de +1 par 5 niveau du lanceur",
        "cout": 2,
        "id": "instinct-d-avant-garde",
        "condition": null,
        "categories": [
            "caracteristiques",
            "combat"
        ]
    },
    {
        "nom": "Acuité Anatomique",
        "effet": "Grâce à son sens aigu de l'observation, le personnage peut examiner les blessures, les postures et les anomalies physiques d'une entité. Il bénéficie de +10 aux jets d'analyse physique et débloque la compétence « Analyse corporelle approfondie » (N.A +10). Pour cette compétence, son taux de succès critique augmente de son MOD de PER.",
        "cout": 2,
        "id": "acuite-anatomique",
        "condition": "avoir 45 PER minimum",
        "categories": [
            "social-savoir",
            "exploration-competences"
        ]
    },
    {
        "nom": "Perception des Arcanes",
        "effet": "Grâce à sa sensibilité aux énergies magiques, le personnage peut examiner les auras, enchantements et autres manifestations surnaturelles. Il bénéficie de +10 aux jets d'analyse magique et débloque la compétence « Analyse magique approfondie » (N.A +10). Pour cette compétence, son taux de succès critique augmente de son MOD de PER ou d'INT, selon la caractéristique utilisée.",
        "cout": 2,
        "id": "perception-des-arcanes",
        "condition": "avoir 45 PER minimum et maîtriser la magie",
        "categories": [
            "magie",
            "social-savoir"
        ]
    },
    {
        "nom": "Ambidextrie",
        "effet": "Permet d’utiliser deux armes sans malus ni réduction de dégâts.",
        "cout": 3,
        "id": "ambidextrie",
        "condition": null,
        "categories": [
            "combat"
        ]
    },
    {
        "nom": "Yeux dans le dos",
        "effet": "Tu as pris l’habitude de verrouiller tes appuis et ton dos : les coups “dans le dos” te surprennent moins. Les dégâts bonus de Sournoiserie d’une attaque sournoise subie dans le dos sont réduits de moitié. Une fois par combat/scène , une attaque fait en avantage du a l’effet de surprise subit est fait pet son avantage du a cette effet .",
        "cout": 2,
        "id": "yeux-dans-le-dos",
        "condition": null,
        "categories": [
            "combat",
            "defense"
        ]
    },
    {
        "nom": "Instinct d'Embuscade",
        "effet": "Lorsqu’une embuscade est subie, tu gardes ton sang-froid : tu ne lances pas ton jet en désavantage, et ton jet de Perception pour éviter l’effet « Surpris » se fait avec Avantage.Lorsque c’est toi qui produis l’embuscade, tu désignes une cible : cette cible fait son jet pour éviter « Surpris » en Désavantage.",
        "cout": 2,
        "id": "instinct-d-embuscade",
        "condition": null,
        "categories": [
            "combat"
        ]
    },
    {
        "nom": "Sentinelle Aguerrie",
        "effet": "Habitué à surveiller et sécuriser les zones qui lui sont confiées, le personnage développe une vigilance accrue. Il débloque la compétence « Vigilance territoriale » (N.A +10), lui accordant +10 aux jets d'observation, de surveillance et de détection des menaces dans une zone surveillée, ainsi qu'un bonus de +5 % à son taux de succès critique pour ces jets.",
        "cout": 2,
        "id": "sentinelle-aguerrie",
        "condition": null,
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Concentration Inébranlable",
        "effet": "Habitué à maintenir ses incantations malgré la douleur, le personnage résiste mieux aux interruptions magiques. Lorsqu'il subit des dégâts et doit effectuer un jet de Résilience pour maintenir sa concentration sur un sort, il bénéficie de l'Avantage. Il débloque également la compétence « Concentration magique » (+1), accompagnée d'un bonus d'Expertise.",
        "cout": 2,
        "id": "concentration-inebranlable",
        "condition": null,
        "categories": [
            "magie"
        ]
    },
    {
        "nom": "Excellence Athlétique",
        "effet": "Grâce à une excellente coordination physique, le personnage maîtrise parfaitement ses mouvements et peut accomplir certaines prouesses normalement réservées aux personnes entraînées. Il débloque la compétence « Athlétisme » (+2), accompagnée d'un bonus de +1 au taux de succès critique de cette compétence. De plus, une fois par session, il peut réduire de 2 la difficulté (DD) d'un jet faisant intervenir l'Athlétisme.",
        "cout": 2,
        "id": "excellence-athletique",
        "condition": "Posséder au minimum 5 en Puissance ou en Finesse.",
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Sanguinaire",
        "effet": "Grâce à sa connaissance des points vulnérables du corps, le personnage sait provoquer des blessures particulièrement sanglantes. Lorsqu'il tente d'infliger un Saignement avec une arme non magique, il bénéficie de +15 % au taux de réussite de l'application et augmente de +1 le niveau de Saignement infligé. Ce talent ne s'applique pas aux effets magiques.",
        "cout": 2,
        "id": "sanguinaire",
        "condition": null,
        "categories": [
            "combat"
        ]
    },
    {
        "nom": "Rencontres Providentielles",
        "effet": "Grâce à son aisance sociale, le personnage sait nouer rapidement des relations utiles dans les lieux fréquentés. Une fois par session et par lieu suffisamment peuplé, il peut dépenser 1 point de Faveur pour effectuer un jet social (DD minimum 10) et établir un contact temporaire dans un domaine de son choix. Ce contact peut fournir des renseignements ou des services simples, sans être ajouté à son répertoire permanent. Si aucun contact du domaine souhaité n'est disponible, il peut conserver son point de Faveur ou choisir un autre domaine. En atteignant la DD maximale, il peut transformer cette rencontre en véritable contact permanent.\nPrécision : Le MJ peut imposer un délai avant une nouvelle utilisation dans un même lieu, même lors d'une session ultérieure.",
        "cout": 2,
        "id": "rencontres-providentielles",
        "condition": null,
        "categories": [
            "social-savoir",
            "special"
        ]
    },
    {
        "nom": "Empoisonneur",
        "effet": "Expert dans l'application des substances toxiques, le personnage sait exploiter les blessures pour faciliter leur propagation. Lorsqu'il tente d'infliger un Empoisonnement avec une arme non magique, il bénéficie de +15 % au taux de réussite de l'application. La difficulté des jets de Résilience pour résister à l'infection et aux effets du poison augmente également de +2. Ce talent ne s'applique pas aux effets magiques.",
        "cout": 2,
        "id": "empoisonneur",
        "condition": null,
        "categories": [
            "combat"
        ]
    },
    {
        "nom": "Maîtrise du Duel",
        "effet": "Rompu aux affrontements singuliers, le personnage sait exploiter les failles de son adversaire lors d'une confrontation. Il débloque la compétence « Duel martial » (N.A +10), lui accordant +10 aux jets de duel effectués avec une arme maîtrisée.\nDe plus, lorsqu'il réalise une action de confrontation contre un adversaire isolé avec cette arme, la difficulté de base des jets de caractéristique imposés à l'adversaire augmente de +10.",
        "cout": 2,
        "id": "maitrise-du-duel",
        "condition": "avoir une Maîtrise moyen d’une art d’arme ou pratique martial",
        "categories": [
            "combat"
        ]
    },
    {
        "nom": "Transmission de statistique",
        "effet": "Permet de transférer des points de dés de base entre PV, PM ou PE jusqu’à Max 4 (en une fois) (ex. réduire 1d16 PV → 1d14 PV pour augmenter 1d10 PE → 1d12 PE).",
        "cout": 2,
        "id": "transmission-de-statistique",
        "condition": "uniquement 2 fois max par personnage",
        "categories": [
            "caracteristiques",
            "special"
        ]
    },
    {
        "nom": "Gestion Optimisée de l'Effort",
        "effet": "Grâce à une meilleure organisation de ses efforts, le personnage exploite plus efficacement ses ressources lors des activités d'interlude. Il bénéficie d'un bonus permanent de +2 PAct (Points d'Activité), augmentant les ressources disponibles pour réaliser ses activités d'interlude.",
        "cout": 2,
        "id": "gestion-optimisee-de-l-effort",
        "condition": null,
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Sens de l'Orientation Cartographique",
        "effet": "Habitué à étudier les cartes et à interpréter les reliefs, le personnage sait identifier les itinéraires les plus adaptés à ses déplacements. Lorsqu'il dispose d'une carte fiable de la région, il bénéficie de l'Avantage aux jets de repérage cartographique et de planification de trajet ou de voyage. Ce bénéfice ne s'applique pas aux cartes erronées, trompeuses ou ne correspondant pas à la zone concernée.",
        "cout": 1,
        "id": "sens-de-l-orientation-cartographique",
        "condition": null,
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Repos Réparateur",
        "effet": "Grâce à un rythme de sommeil équilibré et à sa capacité d'adaptation, le personnage parvient à récupérer efficacement, même dans des conditions difficiles. Il bénéficie d'un bonus de +10 aux jets de repos court et long. De plus, une fois par jour ou par session, il peut dépenser 1 point de Faveur du Destin pour augmenter de 1 niveau la qualité de son sommeil.",
        "cout": 2,
        "id": "repos-reparateur",
        "condition": null,
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Mélodiste Autodidacte",
        "effet": "Grâce à sa curiosité et à sa pratique personnelle, le personnage a appris à jouer d'un instrument de musique simple durant son temps libre. Il débloque la compétence « Instrument au choix » (+5) et acquiert une Connaissance mineure dans le domaine musical. Ce talent ne peut pas être acquis si le personnage possède déjà une maîtrise musicale équivalente.",
        "cout": 2,
        "id": "melodiste-autodidacte",
        "condition": null,
        "categories": [
            "social-savoir",
            "exploration-competences"
        ]
    },
    {
        "nom": "Pêcheur de Rumeurs",
        "effet": "En ville, tu peux “pêcher” l’info une fois par jour : soit en discutant (jet de Charisme), soit en écoutant et observant (jet de Perception), . Pour chaque tranche de 10 MR sur ton jet, tu obtiens une catégorie d’info (10 : mineure, 20 : spéciale, 30 : importante/quête, 40 : clé) ; si tu dois rester discret pour enquêter, tu fais aussi un jet de Discrétion (Finesse) DD 10 minimum. (Les infos ne sont pas “farmables” : une zone a un stock logique par période.)",
        "cout": 2,
        "id": "pecheur-de-rumeurs",
        "condition": "avoir « Récolteur d’informations » au rang Modéré",
        "categories": [
            "social-savoir",
            "exploration-competences"
        ]
    },
    {
        "nom": "Assise Inébranlable",
        "effet": "Tu as travaillé ta posture, ton gainage et tes réflexes pour rester “collé” à la selle même quand ça secoue. Tu obtiens Avantage sur tous les jets de Constitution (ou équivalent) liés au fait de te maintenir en selle / éviter la chute / encaisser les secousses. En plus, tout jet de Conduite de monture que tu effectues voit sa Difficulté réduite de -2.",
        "cout": 2,
        "id": "assise-inebranlable",
        "condition": "Avoir le talent « Savoir-faire : Conduite de monture »",
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Grimpeur Accroche-Mur",
        "effet": "Tout jet de grimpette visant une DD 10 ou moins est automatiquement réussi. Quand tu grimpes en action, si tu subis une attaque non-zone pendant cette action, l’attaque contre toi est faite en Désavantage, et tu ne perds pas la première fois par tour ton mouvement lors d’une progression de grimpe “raisonnable” sur une structure.",
        "cout": 2,
        "id": "grimpeur-accroche-mur",
        "condition": "avoir le talent « Grimpeur » et Finesse 6",
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Pointe de Charge",
        "effet": "Tu sais aligner vitesse, distance et timing pour frapper au moment où la charge “porte” le plus. Quand tu attaques en charge / mouvement avec une arme d’hast (lance, hallebarde, arme similaire), tu gagnes un bonus au taux de critique égal à la moitié de ta statistique Métier (arrondie à l’inférieur).",
        "cout": 2,
        "id": "pointe-de-charge",
        "condition": "Avoir le talent : « Savoir-faire : Conduite de monture »",
        "categories": [
            "combat",
            "exploration-competences"
        ]
    },
    {
        "nom": "Ingéniosité Pratique",
        "effet": "Grâce à son ingéniosité et à sa capacité d'adaptation, le personnage sait exploiter efficacement ses connaissances pratiques. Il bénéficie d'une réduction de -2 à la DD des jets liés aux compétences des talents de « Savoir-faire ». De plus, lorsqu'un talent de Savoir-faire atteint le rang Avancé, la compétence associée à son trait spécifique bénéficie d'un bonus de +1 au taux de succès critique.",
        "cout": 2,
        "id": "ingeniosite-pratique",
        "condition": null,
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Pouvoir du Patron",
        "effet": "Le lanceur peut d’utiliser la Caractéristique de Charisme (CHA) à la place de l’Intelligence (INT) pour le lancement de ses sorts lier au maîtrise de classe . Tous les tests de magie et d’incantation sont désormais basés sur CHA au lieu d’INT\n(Mod INT remplacer par MOD CHA sur les dgts)",
        "cout": 2,
        "id": "pouvoir-du-patron",
        "condition": "Classe de Sorcier Occulte/Éclat du Cirque/Classe Magique Non Conventionnelle (spécifique)/Mage pactisant/Barde/Danseur de combat",
        "categories": [
            "magie"
        ]
    },
    {
        "nom": "Forteresse d’Acier (Armure lourde)",
        "effet": "Tant que tu portes une armure lourde, tu en exploites la protection à plein : tu ignores totalement le malus de déplacement imposé par l’armure lourde. De plus, tous tes jets de Résilience visant à résister à une application non magique de Saignement, Empoisonnement ou Altération d’état provoquée par une arme tranchante sont effectués avec Avantage.",
        "cout": 2,
        "id": "forteresse-dacier-armure-lourde",
        "condition": "Avoir une Constitution de 55 minimum",
        "categories": [
            "defense"
        ]
    },
    {
        "nom": "Réactivité Supérieure",
        "effet": "Tu augmentes ta capacité à enchaîner les réactions en situation critique. Gain : +1 Point de Réaction (PR) permanent.",
        "cout": 2,
        "id": "reactivite-superieure",
        "condition": null,
        "categories": [
            "caracteristiques",
            "combat"
        ]
    },
    {
        "nom": "Garde de Velours (Armure légère)",
        "effet": "Tant que tu portes une armure légère, 1 fois par tour, tu peux dépenser 1 Point de Réaction (PR) pour déclencher une posture défensive instantanée. Tu gagnes alors un bonus de MD égal à ta Finesse (X = valeur du trait spécifique Finesse) jusqu’à la fin de l’action ennemie en cours (ou jusqu’au début de ton prochain tour, selon ton timing de règles).",
        "cout": 2,
        "id": "garde-de-velours-armure-legere",
        "condition": "Avoir une finesse de 5 minimum",
        "categories": [
            "defense"
        ]
    },
    {
        "nom": "Fondations Musicales",
        "effet": "Tu as acquis les bases “propres” de performance : tempo, justesse, présence et gestion du public. Même sans être un virtuose, tu peux produire une prestation stable et exploitable en scène, cérémonie ou diversion.\nOffre : Compétence : Prestation musicale N.A +10 (bonus uniquement sur les compétences N.A)",
        "cout": 1,
        "id": "fondations-musicales",
        "condition": "Avoir un talent lier a un instrument musical",
        "categories": [
            "social-savoir",
            "exploration-competences"
        ]
    },
    {
        "nom": "Maîtrise des Arts du Cirque",
        "effet": "Grâce à sa maîtrise des techniques de spectacle, le personnage sait organiser et exécuter des numéros avec précision, même dans des conditions difficiles. Il débloque la compétence « Prestation de cirque » (N.A +10), applicable uniquement aux jets relevant de cette compétence N.A.",
        "cout": 1,
        "id": "maitrise-des-arts-du-cirque",
        "condition": "Posséder un talent lié aux arts de la scène (cirque, comédie, acrobatie scénique, etc.).",
        "categories": [
            "social-savoir",
            "exploration-competences"
        ]
    },
    {
        "nom": "Maîtrise Vocale",
        "effet": "Ta voix est entraînée : souffle, projection, tenue des notes et contrôle émotionnel. Tes chants deviennent plus crédibles, plus réguliers, et nettement plus efficaces pour porter une ambiance ou attirer l’attention.\nOffre : Compétence : Prestation de chant N.A +10 (bonus uniquement sur les compétences N.A)",
        "cout": 1,
        "id": "maitrise-vocale",
        "condition": "Avoir un talent lier a l’art de la voie musical en Moyen",
        "categories": [
            "social-savoir",
            "exploration-competences"
        ]
    },
    {
        "nom": "Initiation du Porte-Bouclier",
        "effet": "Tu as appris les fondamentaux du bouclier : angles, appuis, protection et usage offensif simple. Tu ne subis plus le désavantage / malus lié à l’absence de maîtrise lorsqu’un personnage utilise un bouclier “de base”.En plus, tu obtiens la compétence : Bouclier (N.A) +5.",
        "cout": 1,
        "id": "initiation-du-porte-bouclier",
        "condition": null,
        "categories": [
            "combat",
            "exploration-competences"
        ]
    },
    {
        "nom": "Initiation aux Armes à Feu",
        "effet": "Grâce à une formation aux techniques de tir, le personnage maîtrise les fondamentaux du maniement des armes à feu : visée, stabilité, contrôle du recul et sécurité. Il peut utiliser les armes à feu courtes et longues sans subir les malus d'incompétence et débloque les compétences « Tir – Arme à feu courte » (N.A +5) et « Tir – Arme à feu longue » (N.A +5).",
        "cout": 1,
        "id": "initiation-aux-armes-a-feu",
        "condition": null,
        "categories": [
            "combat",
            "exploration-competences"
        ]
    },
    {
        "nom": "Fondations de l’Archerie",
        "effet": "Tu connais les bases qui évitent les erreurs classiques : posture, traction, ancrage, et lecture rapide de distance. Tu peux utiliser l’arc sans subir les malus d’incompétence, car tes gestes sont déjà structurés. Gain : Compétence “Tir à l’arc” (N.A) +5.",
        "cout": 1,
        "id": "fondations-de-larcherie",
        "condition": null,
        "categories": [
            "combat",
            "exploration-competences"
        ]
    },
    {
        "nom": "Initiation Martiale : Arme X",
        "effet": "Tu as reçu une formation basique sur une arme de corps-à-corps commune (non exotique/spéciale). Tant que tu utilises l’arme choisie, tu ne subis pas le malus lié au fait de ne pas posséder sa maîtrise (uniquement pour les armes de mêlée “basiques”).En plus, tu gagnes la compétence « Arme X » N.A +5 (X = arme choisie). Ce talent peut être repris une fois par arme. (uniquement sur les armes non maîtriser)",
        "cout": 1,
        "id": "initiation-martiale-arme-x",
        "condition": null,
        "categories": [
            "combat",
            "exploration-competences"
        ]
    },
    {
        "nom": "Fondations de l’Arbalète",
        "effet": "Tu as appris le tir “mécanique” : rechargement efficace, placement, sécurité et timing du tir. Tu peux utiliser l’arbalète sans subir les malus d’incompétence, car tu sais gérer son rythme et ses contraintes. Gain : Compétence “Tir à l’arbalète” (N.A) +5.",
        "cout": 1,
        "id": "fondations-de-larbalete",
        "condition": null,
        "categories": [
            "combat",
            "exploration-competences"
        ]
    },
    {
        "nom": "Soigneur des Compagnons",
        "effet": "Tu as l’habitude de traiter griffures, morsures, fractures et états de panique chez les bêtes. Tous les soins réalisés sur un animal (soins animaliers / premiers soins appliqués à une bête) sont effectués avec Avantage. Si le soin demandé est DD 10 ou moins, il est automatiquement réussi.En combat, tu peux tenter de stabiliser/soigner un animal en utilisant 1 PR (intervention rapide). Si tu rates ce jet, tu peux le relancer, mais cela consomme ton Action et te coûte 8 PE (effort intense + geste complet).",
        "cout": 2,
        "id": "soigneur-des-compagnons",
        "condition": "avoir Savoir-faire : Premiers soins ou être Chasseur / Liant / Chaman",
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Lecteur Méthodique",
        "effet": "Ton cerveau sait organiser l’info : tu relies les concepts, tu vérifies les détails et tu évites les raccourcis faciles. Quand tu fais un jet de Savoir sur une connaissance Intermédiaire ou plus, le test est effectué avec Avantage.",
        "cout": 2,
        "id": "lecteur-methodique",
        "condition": null,
        "categories": [
            "social-savoir"
        ]
    },
    {
        "nom": "Pratique du Rite",
        "effet": "Tu maîtrises les réflexes de préparation : matériaux, séquence, gestes propres et vérifications qui évitent les erreurs bêtes. Tant que le rituel se fait hors combat (ou sans menace immédiate), tu exécutes la procédure avec une stabilité supérieure.\nEffet : Tous les jets liés à un rituel/préparation de rituel hors combat sont en Avantage",
        "cout": 2,
        "id": "pratique-du-rite",
        "condition": null,
        "categories": [
            "magie",
            "exploration-competences"
        ]
    },
    {
        "nom": "Affinité Martiale D’arme",
        "effet": "Tu as une compréhension instinctive d’une catégorie d’armes : prises, angles, rythme et sécurité d’utilisation. Choisis 1 classe/catégorie d’arme : elle est augmentée d’un cran (quel que soit ton niveau), comme si ton maniement était naturellement plus abouti.",
        "cout": 2,
        "id": "affinite-martiale-darme",
        "condition": null,
        "categories": [
            "combat"
        ]
    },
    {
        "nom": "Réserves du Sanctuaire",
        "effet": "Ton lien au culte te donne accès à des ressources mieux fournies : bénédictions, charges, points de dévotion ou équivalents de faction. Cela n’augmente pas tes pouvoirs “hors ordre”, seulement ce que ta faction te fournit comme base.\nEffet : +6 points sur le total de ressources passives de faction sacrée (uniquement les passifs de base)",
        "cout": 2,
        "id": "reserves-du-sanctuaire",
        "condition": "uniquement lier a un ordre religieux",
        "categories": [
            "magie",
            "special"
        ]
    },
    {
        "nom": "Fléau des Arcanes",
        "effet": "Grâce à son expérience face aux différentes créatures, le personnage sait adapter ses facultés magiques pour exploiter leurs vulnérabilités. Il choisit une catégorie de créatures parmi : Humanoïde, Bête, Monstre, Maudit, Démon, Élémentaire, Spirituel, Artificiel ou Abyssal. Toutes ses facultés magiques infligeant des dégâts directs bénéficient de l'effet « Fléau ciblé » contre la catégorie choisie.",
        "cout": 3,
        "id": "fleau-des-arcanes",
        "condition": "Maîtriser le style magique de Modulation au rang Avancé.",
        "categories": [
            "magie"
        ]
    },
    {
        "nom": "Érudition Techno-Arcanique",
        "effet": "Grâce à ses connaissances des mécanismes mêlant technologie et magie, le personnage comprend les principes fondamentaux des dispositifs techno-arcaniques.\nIl acquiert la « Connaissance du domaine techno-arcanique » au rang Mineur et débloque la compétence de caractérique « Analyse techno-arcanique » (+5), lui permettant d'examiner et de comprendre les machines et dispositifs de cette nature.",
        "cout": 2,
        "id": "erudition-techno-arcanique",
        "condition": null,
        "categories": [
            "magie",
            "social-savoir"
        ]
    },
    {
        "nom": "Virtuose Aquatique",
        "effet": "Grâce à sa maîtrise de la nage et à son adaptation au milieu aquatique, le personnage bénéficie d'un bonus d'Expertise aux jets de nage et de +10 % de résistance à la magie de l'Eau. Lorsque son talent « Expertise du Nageur » atteint le rang Avancé, la difficulté (DD) de ses jets de nage est également réduite de 2.",
        "cout": 2,
        "id": "virtuose-aquatique",
        "condition": "Posséder le talent « Expertise du Nageur » au rang Moyen.",
        "categories": [
            "defense",
            "exploration-competences"
        ]
    },
    {
        "nom": "Ancrage Implacable",
        "effet": "Grâce à sa force et à sa stabilité, le personnage devient particulièrement difficile à repousser ou à déplacer. Il débloque la compétence « Confrontation musculaire » (+1) et réduit la distance des déplacements forcés subis d'une valeur égale à sa Puissance, dans l'unité de déplacement utilisée par l'effet.",
        "cout": 2,
        "id": "ancrage-implacable",
        "condition": "Posséder au minimum 6 en Puissance.",
        "categories": [
            "combat",
            "defense"
        ]
    },
    {
        "nom": "Sang-Froid Inébranlable",
        "effet": "Grâce à sa maîtrise émotionnelle, le personnage résiste mieux à la peur et aux pressions psychologiques. La durée des effets de Peur, Frayeur et autres afflictions reposant sur un jet de Sang-froid est réduite de 1 tour (minimum 0). De plus, les dégâts nécessitant un jet de résistance basé sur le Sang-froid sont réduits d'une valeur égale à son Sang-froid.",
        "cout": 2,
        "id": "sang-froid-inebranlable",
        "condition": "Posséder au minimum 6 en Sang-froid.",
        "categories": [
            "caracteristiques",
            "defense"
        ]
    },
    {
        "nom": "Souris sans fil",
        "effet": "Grâce à son agilité et à ses mouvements imprévisibles, le personnage sait atténuer les attaques qui le touchent. X fois par jour (X = moitié de sa Finesse, arrondie à l'inférieur), il peut réduire de moitié les dégâts d'une attaque subie. Chaque activation nécessite de dépenser 1 point de Finesse et de réussir un jet de Finesse (DD 12 minimum), dont la difficulté peut augmenter selon la situation.",
        "cout": 3,
        "id": "souris-sans-fil",
        "condition": "Posséder au minimum 6 en Finesse.",
        "categories": [
            "defense",
            "special"
        ]
    },
    {
        "nom": "Résilience Éprouvée",
        "effet": "Endurci par les épreuves physiques, le personnage supporte mieux les afflictions et les blessures persistantes. Il réduit les dégâts continus nécessitant un jet de Résilience d'une valeur égale à la moitié de sa Résilience (arrondie à l'inférieur). De plus, une fois par jour, il peut relancer un jet de Résilience destiné à résister à une affliction.",
        "cout": 2,
        "id": "resilience-eprouvee",
        "condition": "Posséder au minimum 6 en Résilience.",
        "categories": [
            "caracteristiques",
            "defense"
        ]
    },
    {
        "nom": "Intuition Prémonitoire",
        "effet": "Grâce à son intuition aiguisée, le personnage peut pressentir les choix, directions ou situations qui lui seraient favorables. Une fois par session, il peut effectuer un jet d'Instinct (DD 10 minimum) pour obtenir du MJ une indication vague concernant une décision ou un danger potentiel. La difficulté augmente selon la complexité de la situation. Cette intuition peut également percevoir des phénomènes magiques ou surnaturels, même sans maîtrise de la magie, sans nécessairement en révéler la nature exacte.",
        "cout": 2,
        "id": "intuition-premonitoire",
        "condition": "Posséder au minimum 6 en Instinct.",
        "categories": [
            "special"
        ]
    },
    {
        "nom": "L'Art de la Première Impression",
        "effet": "Grâce à son charisme et à sa capacité à cerner rapidement ses interlocuteurs, le personnage sait adopter l'attitude idéale pour établir une relation favorable. Une fois par scène sociale, après avoir échangé quelques paroles avec une personne, il peut effectuer un jet de Social (DD 10 minimum). En cas de réussite, il choisit l'un des avantages suivants pour la durée de la scène : réduire de 2 la DD de ses prochains jets sociaux envers cette personne, ou annuler un Désavantage social lié à une mauvaise première impression. Ce talent ne permet pas de supprimer une hostilité profonde ou une méfiance justifiée.",
        "cout": 2,
        "id": "l-art-de-la-premiere-impression",
        "condition": "Avoir 6 en social",
        "categories": [
            "social-savoir"
        ]
    },
    {
        "nom": "Polyvalence du Praticien",
        "effet": "Grâce à son expérience pratique et à sa débrouillardise, le personnage sait adapter son savoir-faire à différentes situations. Lorsque cela est justifié, il peut utiliser son Métier à la place d'un autre trait spécifique, avec une réduction de -2 à la DD du jet. De plus, une fois par scène, il peut apporter son aide à un allié en lui accordant un bonus égal à la moitié de son Métier (arrondie à l'inférieur) sur un jet lié à une tâche appropriée. Ce soutien ne s'applique pas aux confrontations directes.",
        "cout": 2,
        "id": "polyvalence-du-praticien",
        "condition": "Posséder au minimum 6 en Métier.",
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Discernement du Savant",
        "effet": "Grâce à ses connaissances, le personnage peut étudier une entité pour identifier ses caractéristiques et ses vulnérabilités. Une fois par tour, au prix d'une action, il effectue un jet de Savoir contre une MR fixée par le MJ, à condition de posséder des connaissances suffisantes sur la cible.\nEn cas de réussite, il peut obtenir l'une des informations suivantes :\nVitalité : connaître la tranche de PV de la cible (dizaine, centaine ou millier).\nRésistances et faiblesses : identifier leur nature, sans connaître leurs valeurs exactes.\nValeurs de résistance : connaître la tranche de 10 % d'une résistance ou d'une faiblesse.\nComparaison : comparer une caractéristique ou un trait spécifique entre la cible et un allié.\nPour les résistances et faiblesses, le nombre d'informations révélées dépend de la MR excédant le seuil fixé par le MJ, à raison d'une information supplémentaire par point de MR excédentaire.\nLe personnage débloque également la compétence de trait spécifique « Analyse savante » (+1).",
        "cout": 2,
        "id": "discernement-du-savant",
        "condition": "Posséder au minimum 6 en Savoir.",
        "categories": [
            "social-savoir"
        ]
    },
    {
        "nom": "Mobilité Cuirassée",
        "effet": "Habitué au poids et aux contraintes des protections corporelles, le personnage conserve une mobilité remarquable malgré son équipement. Il réduit les malus de déplacement imposés par les armures lourdes et peut utiliser les effets de talents liés à la Finesse normalement interdits par le port d'une armure moyenne ou lourde. Cette exception concerne uniquement les restrictions d'armure imposées par ces talents.",
        "cout": 2,
        "id": "mobilite-cuirassee",
        "condition": null,
        "categories": [
            "defense"
        ]
    },
    {
        "nom": "Endurcissement Physique",
        "effet": "À force de subir des blessures, le corps du personnage s'est progressivement endurci, tandis que sa source arcanique s'est adaptée aux agressions physiques répétées. Lors de l'acquisition de ce talent, il choisit une nature de dégâts parmi Perforant, Tranchant ou Contondant et bénéficie d'un bonus permanent de +10 % de résistance contre les dégâts de cette nature.",
        "cout": 2,
        "id": "endurcissement-physique",
        "condition": "Être au minimum niveau 15.",
        "categories": [
            "defense"
        ]
    },
    {
        "nom": "Doigts de fée",
        "effet": "Grâce à son habileté manuelle et à la précision de ses mouvements, le personnage excelle dans les manipulations délicates ou complexes nécessitant un contrôle minutieux de ses mains ou d'autres membres. Il débloque la compétence de trait spécifique « Doigts de fée » (+1) et bénéficie d'une réduction de -2 à la DD de tous les jets relevant de cette compétence.",
        "cout": 2,
        "id": "doigts-de-fee",
        "condition": null,
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Familiarité Sylvestre",
        "effet": "Habitué à évoluer dans les forêts et les milieux boisés, le personnage sait exploiter les particularités de ces environnements pour s'orienter, se déplacer et repérer les dangers. Il débloque la compétence de trait spécifique « Connaissance forestière » (+1) et bénéficie d'une réduction de -2 à la DD des jets utilisant cette compétence en milieu forestier. De plus, une fois par session, il peut effectuer un jet de repérage des lieux avec Avantage dans cet environnement.",
        "cout": 2,
        "id": "familiarite-sylvestre",
        "condition": null,
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Sens entraînée : X",
        "effet": "Grâce à un entraînement approfondi, le personnage a développé une sensibilité exceptionnelle dans l'un de ses sens. Lors de l'acquisition de ce talent, il choisit un sens (Vue, Ouïe, Odorat, Goût ou Toucher) et débloque la compétence « Perception sensorielle — Sens X » (N.A +10), accompagnée d'un bonus de +5 % au taux de succès critique des jets associés.\nPrécision : Ce talent peut être acquis plusieurs fois, à condition de choisir un sens différent à chaque acquisition.",
        "cout": 2,
        "id": "sens-entrainee-x",
        "condition": null,
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Familiarité des Hautes Terres",
        "effet": "Grâce à son expérience des régions montagneuses et souterraines, le personnage sait évoluer sur les reliefs escarpés, reconnaître les passages naturels et s'orienter dans les grottes. Il débloque la compétence de trait spécifique « Connaissance montagneuse et souterraine » (+1) et bénéficie d'une réduction de -2 à la DD des jets utilisant cette compétence en montagne ou dans les grottes. De plus, une fois par session, il peut effectuer un jet de repérage des lieux avec Avantage dans ces environnements.",
        "cout": 2,
        "id": "familiarite-des-hautes-terres",
        "condition": null,
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Discernement Linguistique",
        "effet": "Grâce à ses connaissances linguistiques, le personnage peut reconnaître les langues basiques à partir de leur écriture, même sans en comprendre le contenu. Il débloque également la compétence de trait spécifique « Compréhension linguistique » (+1), applicable aux jets de Savoir visant à déchiffrer ou interpréter une langue écrite. Cette reconnaissance ne permet pas automatiquement de lire ou de traduire le texte.",
        "cout": 2,
        "id": "discernement-linguistique",
        "condition": "Posséder au minimum 5 en Savoir de base.",
        "categories": [
            "social-savoir"
        ]
    },
    {
        "nom": "Familiarité Urbaine",
        "effet": "Habitué à la vie dans les villes et les zones habitées, le personnage sait exploiter les rues, les quartiers et les infrastructures pour se déplacer et s'orienter efficacement. Il débloque la compétence de trait spécifique « Connaissance urbaine » (+1) et bénéficie d'une réduction de -2 à la DD des jets utilisant cette compétence en milieu urbain ou dans les zones habitées. De plus, une fois par session, il peut effectuer un jet de repérage des lieux avec Avantage dans cet environnement.",
        "cout": 2,
        "id": "familiarite-urbaine",
        "condition": null,
        "categories": [
            "exploration-competences"
        ]
    },
    {
        "nom": "Maîtrise de la Perforation",
        "effet": "Grâce à sa maîtrise des attaques perforantes, le personnage sait concentrer la force de ses coups pour traverser les protections adverses. Il augmente son bonus de diminution des dégâts perforants d'une valeur égale à la moitié de sa Puissance (arrondie à l'inférieur). De plus, il bénéficie d'un bonus au taux de réussite des effets liés aux dégâts perforants égal à sa Puissance, exprimée en pourcentage.",
        "cout": 2,
        "id": "maitrise-de-la-perforation",
        "condition": "Maîtriser au rang Avancé une arme infligeant des dégâts perforants.",
        "categories": [
            "combat"
        ]
    },
    {
        "nom": "Ombre Insaisissable",
        "effet": "Grâce à sa maîtrise des déplacements silencieux, le personnage devient particulièrement difficile à détecter. Toute créature tentant de le repérer doit atteindre une MR minimale de 10 + Finesse + MOD de DEX. Lorsque le personnage subit un Désavantage à ses actions de discrétion, ce seuil de détection est réduit de moitié (arrondi à l'inférieur).",
        "cout": 2,
        "id": "ombre-insaisissable",
        "condition": "Posséder le talent « Furtivité silencieuse » au rang Moyen.",
        "categories": [
            "combat",
            "exploration-competences"
        ]
    },
    {
        "nom": "Lame de l'Ombre",
        "effet": "Grâce à sa précision mortelle, le personnage exploite les ouvertures adverses pour infliger des blessures particulièrement dangereuses. Ses attaques sournoises infligent 1d8 + la moitié de sa Finesse (arrondie à l'inférieur) en dégâts supplémentaires. Toutes les armes tranchantes ou perforantes, y compris les armes improvisées, peuvent désormais servir à effectuer une attaque sournoise et bénéficier de ce bonus.",
        "cout": 2,
        "id": "lame-de-l-ombre",
        "condition": "Posséder « Maîtrise des attaques sournoises » et « Furtivité silencieuse » au rang Avancé.",
        "categories": [
            "combat"
        ]
    },
    {
        "nom": "Dure a cuire",
        "effet": "Habitué à encaisser des blessures particulièrement violentes, le personnage possède une résistance accrue aux traumatismes physiques. Il bénéficie d'un bonus permanent de +10 à son Seuil de Traumatisme (ST).",
        "cout": 2,
        "id": "dure-a-cuire",
        "condition": null,
        "categories": [
            "caracteristiques",
            "defense"
        ]
    },
    {
        "nom": "Symbiose du Dresseur",
        "effet": "Grâce à la confiance et à la complicité développées avec ses compagnons animaux, le personnage améliore leur capacité à se défendre. Tant qu'ils se trouvent en sa compagnie, ses animaux dressés bénéficient d'un bonus à leur Mode de Défense (MD) égal à 10 + son Instinct.",
        "cout": 2,
        "id": "symbiose-du-dresseur",
        "condition": "Posséder le talent « Ami des Bêtes » au rang Moyen.",
        "categories": [
            "defense",
            "exploration-competences"
        ]
    },
    {
        "nom": "Vigilance Partagée",
        "effet": "Grâce à son attention constante et à ses réflexes aiguisés, le personnage sait anticiper les dangers et prévenir ses compagnons. Il bénéficie de l'Avantage à tous ses jets de Perception (PER) visant à éviter l'effet « Surpris ». En cas de réussite, il peut également accorder cet Avantage à un allié proche effectuant un jet pour éviter le même effet.",
        "cout": 2,
        "id": "vigilance-partagee",
        "condition": null,
        "categories": [
            "combat",
            "exploration-competences"
        ]
    }
];

// Variables globales
let talents = [...allTalents];
let currentSort = { column: null, direction: null };
let searchTerm = '';
let activeFilters = new Set(); // Filtres de catégorie actifs

// Système de sélection
let selectionMode = false;
let selectedTalents = new Set(); // Stocke les IDs des talents sélectionnés

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    renderTable();
    updateCounts();
    attachEventListeners();
});

// Initialiser les filtres de catégorie
function initializeFilters() {
    const filterGrid = document.getElementById('filterGrid');
    
    // Compter le nombre de talents par catégorie
    const categoryCounts = {};
    Object.keys(categories).forEach(key => {
        categoryCounts[key] = 0;
    });
    
    allTalents.forEach(talent => {
        talent.categories.forEach(cat => {
            categoryCounts[cat]++;
        });
    });
    
    // Créer les boutons de filtre
    Object.entries(categories).forEach(([key, category]) => {
        const count = categoryCounts[key] || 0;
        if (count === 0) return; // Ne pas afficher les catégories vides
        
        const filterDiv = document.createElement('div');
        filterDiv.className = 'filter-category';
        filterDiv.dataset.category = key;
        
        filterDiv.innerHTML = `
            <input type="checkbox" id="filter-${key}">
            <div class="filter-checkbox"></div>
            <div class="filter-category-label">
                <div class="filter-category-name">${category.icon} ${category.name.replace(/^[📊🎯📈🛡️⚔️🎖️✨💬🗺️🎓⚡📚⭐]\s/, '')}</div>
                <div class="filter-category-count">${count} talent${count > 1 ? 's' : ''}</div>
            </div>
        `;
        
        filterDiv.addEventListener('click', () => toggleFilter(key));
        filterGrid.appendChild(filterDiv);
    });
}

// Toggle un filtre de catégorie
function toggleFilter(categoryKey) {
    const filterDiv = document.querySelector(`.filter-category[data-category="${categoryKey}"]`);
    
    if (activeFilters.has(categoryKey)) {
        activeFilters.delete(categoryKey);
        filterDiv.classList.remove('active');
    } else {
        activeFilters.add(categoryKey);
        filterDiv.classList.add('active');
    }
    
    updateFilterBadge();
    renderTable();
}

// Mettre à jour le badge de compteur de filtres
function updateFilterBadge() {
    const clearFiltersBtn = document.getElementById('clearFilters');
    const activeCount = document.getElementById('activeFiltersCount');
    
    if (activeFilters.size > 0) {
        clearFiltersBtn.style.display = 'inline-block';
        activeCount.textContent = activeFilters.size;
    } else {
        clearFiltersBtn.style.display = 'none';
    }
}

// Effacer tous les filtres
function clearAllFilters() {
    activeFilters.clear();
    document.querySelectorAll('.filter-category').forEach(div => {
        div.classList.remove('active');
    });
    updateFilterBadge();
    renderTable();
}

// Toggle l'affichage des filtres
function toggleFiltersDisplay() {
    const filterGrid = document.getElementById('filterGrid');
    const toggleBtn = document.getElementById('toggleFilters');
    
    if (filterGrid.style.display === 'none') {
        filterGrid.style.display = 'grid';
        toggleBtn.textContent = '▲ Masquer les filtres';
        toggleBtn.classList.add('active');
    } else {
        filterGrid.style.display = 'none';
        toggleBtn.textContent = '▼ Afficher les filtres';
        toggleBtn.classList.remove('active');
    }
}

// Rendu du tableau principal
function renderTable() {
    const tbody = document.getElementById('talentsBody');
    const noResults = document.getElementById('noResults');
    tbody.innerHTML = '';
    
    let visibleCount = 0;
    
    talents.forEach(talent => {
        // Filtre par recherche textuelle
        const matchesSearch = searchTerm === '' || 
            talent.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            talent.effet.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (talent.condition && talent.condition.toLowerCase().includes(searchTerm.toLowerCase()));
        
        // Filtre par catégorie
        const matchesCategory = activeFilters.size === 0 || 
            talent.categories.some(cat => activeFilters.has(cat));
        
        if (!matchesSearch || !matchesCategory) {
            return;
        }
        
        visibleCount++;
        
        const row = document.createElement('tr');
        row.dataset.talentId = talent.id;
        
        // Ajouter classe selectable si mode sélection actif
        if (selectionMode) {
            row.classList.add('selectable');
        }
        
        // Ajouter classe selected si déjà sélectionné
        if (selectedTalents.has(talent.id)) {
            row.classList.add('selected');
        }
        
        // Colonne Nom
        const nomCell = document.createElement('td');
        nomCell.className = 'col-nom';
        nomCell.setAttribute('data-label', 'Nom');
        const nomSpan = document.createElement('span');
        nomSpan.className = 'talent-nom';
        nomSpan.innerHTML = highlightText(talent.nom, searchTerm);
        nomCell.appendChild(nomSpan);
        
        // Colonne Condition
        const conditionCell = document.createElement('td');
        conditionCell.className = 'col-condition';
        conditionCell.setAttribute('data-label', 'Condition');
        const conditionSpan = document.createElement('span');
        conditionSpan.className = 'talent-condition' + (talent.condition ? '' : ' aucune');
        conditionSpan.innerHTML = talent.condition ? highlightText(talent.condition, searchTerm) : 'Aucune';
        conditionCell.appendChild(conditionSpan);
        
        // Colonne Effet
        const effetCell = document.createElement('td');
        effetCell.className = 'col-effet';
        effetCell.setAttribute('data-label', 'Effet');
        const effetSpan = document.createElement('span');
        effetSpan.className = 'talent-effet';
        effetSpan.innerHTML = highlightText(talent.effet, searchTerm);
        effetCell.appendChild(effetSpan);
        
        // Colonne Coût
        const coutCell = document.createElement('td');
        coutCell.className = 'col-cout';
        coutCell.setAttribute('data-label', 'Coût');
        const coutSpan = document.createElement('span');
        coutSpan.className = 'talent-cout';
        coutSpan.textContent = talent.cout + ' point' + (talent.cout > 1 ? 's' : '');
        coutCell.appendChild(coutSpan);
        
        row.appendChild(nomCell);
        row.appendChild(conditionCell);
        row.appendChild(effetCell);
        row.appendChild(coutCell);
        
        // Event listener pour sélection
        if (selectionMode) {
            row.addEventListener('click', () => toggleSelection(talent.id));
        }
        
        tbody.appendChild(row);
    });
    
    if (visibleCount === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
    
    updateCounts();
}

// Toggle sélection d'un talent
function toggleSelection(talentId) {
    if (!selectionMode) return;
    
    if (selectedTalents.has(talentId)) {
        selectedTalents.delete(talentId);
    } else {
        selectedTalents.add(talentId);
    }
    
    renderTable();
    updateSelectedSection();
}

// Mettre à jour la section de sélection (en haut)
function updateSelectedSection() {
    const selectedSection = document.getElementById('selectedSection');
    const selectedGrid = document.getElementById('selectedGrid');
    const selectedCount = document.getElementById('selectedCount');
    const selectedTotal = document.getElementById('selectedTotal');
    
    if (selectedTalents.size === 0) {
        selectedSection.style.display = 'none';
        return;
    }
    
    selectedSection.style.display = 'block';
    selectedGrid.innerHTML = '';
    
    let totalPoints = 0;
    
    selectedTalents.forEach(talentId => {
        const talent = allTalents.find(t => t.id === talentId);
        if (!talent) return;
        
        totalPoints += talent.cout;
        
        const card = document.createElement('div');
        card.className = 'selected-talent-card';
        card.addEventListener('click', () => {
            selectedTalents.delete(talentId);
            renderTable();
            updateSelectedSection();
        });
        
        let conditionHTML = '';
        if (talent.condition) {
            conditionHTML = `<div class="selected-talent-condition">Condition : ${talent.condition}</div>`;
        }
        
        card.innerHTML = `
            <div class="selected-talent-name">${talent.nom}</div>
            ${conditionHTML}
            <div class="selected-talent-effet">${talent.effet}</div>
            <div class="selected-talent-cout">${talent.cout} point${talent.cout > 1 ? 's' : ''}</div>
        `;
        
        selectedGrid.appendChild(card);
    });
    
    selectedCount.textContent = selectedTalents.size;
    selectedTotal.textContent = totalPoints;
}

// Toggle mode sélection
function toggleSelectionMode(enabled) {
    selectionMode = enabled;
    const selectedSection = document.getElementById('selectedSection');
    
    if (enabled) {
        updateSelectedSection();
    } else {
        selectedSection.style.display = 'none';
    }
    
    renderTable();
}

// Réinitialiser les sélections
function resetSelection() {
    selectedTalents.clear();
    renderTable();
    updateSelectedSection();
}

// Highlighting du texte recherché
function highlightText(text, term) {
    if (!term) return text;
    
    const regex = new RegExp(`(${escapeRegex(term)})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Échapper les caractères spéciaux pour regex
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Mise à jour des compteurs
function updateCounts() {
    const tbody = document.getElementById('talentsBody');
    const visibleRows = tbody.querySelectorAll('tr').length;
    
    document.getElementById('talentCount').textContent = visibleRows;
    document.getElementById('totalCount').textContent = allTalents.length;
}

// Tri du tableau
function sortTable(column) {
    if (currentSort.column === column) {
        if (currentSort.direction === 'asc') {
            currentSort.direction = 'desc';
        } else if (currentSort.direction === 'desc') {
            currentSort.column = null;
            currentSort.direction = null;
            talents = [...allTalents];
            updateSortIndicators();
            renderTable();
            return;
        }
    } else {
        currentSort.column = column;
        currentSort.direction = 'asc';
    }
    
    talents.sort((a, b) => {
        let valueA, valueB;
        
        if (column === 'nom') {
            valueA = a.nom.toLowerCase();
            valueB = b.nom.toLowerCase();
        } else if (column === 'cout') {
            valueA = a.cout;
            valueB = b.cout;
        }
        
        let comparison = 0;
        if (valueA > valueB) comparison = 1;
        if (valueA < valueB) comparison = -1;
        
        return currentSort.direction === 'asc' ? comparison : -comparison;
    });
    
    updateSortIndicators();
    renderTable();
}

// Mise à jour des indicateurs de tri
function updateSortIndicators() {
    const headers = document.querySelectorAll('.sortable');
    
    headers.forEach(header => {
        const column = header.getAttribute('data-sort');
        header.classList.remove('sorted-asc', 'sorted-desc');
        
        if (column === currentSort.column) {
            if (currentSort.direction === 'asc') {
                header.classList.add('sorted-asc');
            } else if (currentSort.direction === 'desc') {
                header.classList.add('sorted-desc');
            }
        }
    });
}

// Recherche
function handleSearch() {
    searchTerm = document.getElementById('searchInput').value.trim();
    renderTable();
}

// Effacer la recherche
function clearSearch() {
    document.getElementById('searchInput').value = '';
    searchTerm = '';
    renderTable();
}

// Attacher les événements
function attachEventListeners() {
    // Recherche
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('clearSearch').addEventListener('click', clearSearch);
    
    // Filtres
    document.getElementById('toggleFilters').addEventListener('click', toggleFiltersDisplay);
    document.getElementById('clearFilters').addEventListener('click', clearAllFilters);
    
    // Tri
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', () => {
            const column = header.getAttribute('data-sort');
            sortTable(column);
        });
    });
    
    // Mode sélection
    const selectionToggle = document.getElementById('selectionModeToggle');
    selectionToggle.addEventListener('change', (e) => {
        toggleSelectionMode(e.target.checked);
    });
    
    // Bouton de réinitialisation
    document.getElementById('resetSelection').addEventListener('click', resetSelection);
}