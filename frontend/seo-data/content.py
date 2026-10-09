# -*- coding: utf-8 -*-
"""Textes et données métier du site Les Jardiniers Normands / Pro Élagage 14.
Tout ce qui est affirmé ici vient du client ou de données publiques vérifiées.
"""

DOMAIN = "https://lesjardiniers.fr"   # un seul endroit à changer si le domaine change
BRAND = "Les Jardiniers Normands"
BRAND2 = "Pro Élagage 14"
PHONE_DISPLAY = "07 80 04 43 90"
PHONE_TEL = "+33780044390"
EMAIL = "schmittantony4@gmail.com"
ADDRESS = {"street": "13 rue des Quatre Vents", "zip": "14000", "city": "Caen"}
SIRET = "891 548 802 00026"
MANAGER = "Antony Schmitt"
GBP_MAIN = "https://www.google.com/maps/place/?q=place_id:ChIJT3aLzJpS6QwRcdAARNmjOvE"
GBP_ELAG = "https://www.google.com/maps/place/?q=place_id:ChIJt1gPdTigaQoRM3upIZQ0Ow4"
HOURS = "Du lundi au samedi, de 8 h à 20 h (fermé le dimanche)"
DELAY = "24 h"

PRICE_NOTE = ("Prix indicatifs constatés sur le marché français, hors cas particuliers (accès difficile, "
              "évacuation, grande hauteur). Le prix exact est toujours donné dans un devis gratuit.")

PRICES = {
    "elagage": [
        ("Élagage d'un arbre de moins de 5 m", "65 à 115 €"),
        ("Élagage d'un arbre de 5 à 10 m", "100 à 160 €"),
        ("Élagage d'un arbre de 10 à 15 m", "155 à 265 €"),
        ("Élagage d'un arbre de plus de 20 m", "340 à 490 €"),
        ("Abattage d'un arbre de moins de 5 m", "100 à 250 €"),
        ("Abattage d'un arbre de 5 à 10 m", "250 à 500 €"),
        ("Abattage d'un arbre de 10 à 15 m", "500 à 850 €"),
        ("Dessouchage (souche de moins de 30 cm)", "50 à 100 €"),
    ],
    "jardinier": [
        ("Entretien de jardin, à l'heure", "25 à 45 €"),
        ("Tonte de pelouse, au m²", "0,20 à 0,50 €"),
        ("Taille de haie, au mètre linéaire", "2 à 15 € (environ 5 € en moyenne)"),
        ("Entretien complet d'un jardin (passage)", "150 à 300 €"),
        ("Contrat d'entretien annuel", "400 à 2 500 € selon la surface"),
    ],
    "paysagiste": [
        ("Paysagiste, à l'heure", "20 à 50 € (environ 35 € en moyenne)"),
        ("Création ou remise en état d'une pelouse, au m²", "3 à 7 €"),
        ("Entretien complet d'un jardin (passage)", "150 à 300 €"),
        ("Contrat d'entretien annuel", "400 à 2 500 € selon la surface"),
    ],
}

# Ce que le client NE fait PAS : ne jamais le promettre sur le site.
NOT_DONE = ["clôtures", "pavage", "maçonnerie", "hydroseeding"]

SERVICES = {
    "jardinier": {
        "label": "Jardinier", "h": "Jardinier",
        "items": [
            ("Tonte de pelouse", "Tonte régulière ou ponctuelle, bordures nettes, ramassage ou mulching selon votre choix."),
            ("Taille de haies", "Taille au cordeau de haies de laurier, thuya, photinia ou charmille, avec évacuation des déchets verts."),
            ("Entretien de jardin", "Désherbage, taille des arbustes, travail des massifs et remise en ordre au fil des saisons."),
            ("Débroussaillage", "Remise en état de terrains envahis, talus et abords, avant travaux ou pour la sécurité."),
            ("Contrat d'entretien", "Passages réguliers au même tarif annoncé à l'avance, pour un jardin toujours soigné sans y penser."),
        ],
    },
    "paysagiste": {
        "label": "Paysagiste", "h": "Paysagiste",
        "items": [
            ("Création de jardin", "Plan d'ensemble, choix des végétaux adaptés au sol et à l'exposition, plantation."),
            ("Plantation d'arbres et d'arbustes", "Sélection d'essences adaptées au climat normand et préparation soignée de la fosse de plantation."),
            ("Massifs et structure du jardin", "Création de massifs, de bordures et de zones de plantation pour un jardin lisible toute l'année."),
            ("Création et remise en état de pelouse", "Préparation du sol, semis ou placage selon la situation, premières tontes."),
            ("Entretien d'espaces verts", "Entretien régulier des jardins de particuliers, de copropriétés et de professionnels."),
        ],
    },
    "elagage": {
        "label": "Élagage", "h": "Élagueur",
        "items": [
            ("Élagage et taille d'arbres", "Taille de formation, d'entretien ou de sécurisation, au sol ou en grimpe selon l'arbre."),
            ("Abattage d'arbres", "Abattage direct ou par démontage pièce par pièce quand l'espace est restreint."),
            ("Dessouchage", "Retrait ou rognage de la souche pour retrouver un terrain exploitable."),
            ("Taille de haies hautes", "Haies difficiles d'accès ou de grande hauteur, traitées avec le bon matériel."),
            ("Évacuation des déchets verts", "Branches, troncs et feuillages évacués ou broyés : le chantier est laissé propre."),
        ],
    },
}

REGION_LABEL = {
    "ville": "agglomération caennaise",
    "plaine": "plaine de Caen",
    "littoral": "littoral normand",
    "auge": "Pays d'Auge",
    "bocage": "bocage normand",
    "sud": "sud du Calvados",
}

# Banques de textes par grande zone. Chaque entrée est vraie à l'échelle de la zone, sans détail inventé sur une commune précise.
CONTEXT = {
    "ville": {
        "garden": "Dans l'agglomération caennaise, les jardins sont souvent de taille modeste, entourés de voisins et parfois accessibles uniquement par la maison ou une ruelle étroite. Cela change la façon de travailler : matériel compact, évacuation anticipée des déchets verts et respect du voisinage.",
        "hedge": "Les haies de laurier, de thuya et de photinia dominent en zone pavillonnaire ; elles demandent deux tailles par an pour rester nettes sans empiéter sur la rue ou le terrain voisin.",
        "tree": "Les arbres de ville (tilleuls, érables, marronniers, conifères de lotissement) ont souvent grandi plus vite que le jardin ne le permet. Un élagage régulier évite les conflits de voisinage et protège toitures et réseaux.",
        "soil": "Les sols de l'agglomération sont limoneux et profonds, faciles à travailler mais sensibles au tassement après les chantiers de construction.",
        "tip": "En copropriété ou en lotissement, vérifiez le règlement avant d'abattre un arbre : un accord du syndic ou du lotisseur peut être nécessaire.",
    },
    "plaine": {
        "garden": "Autour de Caen, les communes de la plaine offrent souvent des terrains plus vastes qu'en ville : grandes pelouses, haies périphériques longues et arbres de belle taille plantés à l'époque du lotissement.",
        "hedge": "Les longues haies de clôture en laurier, en thuya ou en charmille sont le principal poste d'entretien : une taille régulière évite qu'elles ne deviennent hautes et difficiles à reprendre.",
        "tree": "En terrain ouvert, les arbres prennent le vent de plein fouet. Un élagage de sécurisation avant l'automne limite le risque de branches cassées lors des tempêtes.",
        "soil": "La plaine de Caen repose sur des sols limoneux et calcaires, fertiles et profonds : les plantations s'y réussissent bien si l'arrosage est suivi la première année.",
        "tip": "Sur un grand terrain, un contrat d'entretien annuel revient souvent moins cher que des interventions isolées.",
    },
    "littoral": {
        "garden": "Sur la côte, le jardin vit au rythme du vent et des embruns. Les végétaux doivent y résister, et beaucoup de maisons sont des résidences secondaires qu'il faut entretenir en l'absence des propriétaires.",
        "hedge": "Face à la mer, on choisit des haies résistantes au sel et au vent (tamaris, escallonia, griselinia, pittosporum). Leur taille doit être plus douce et plus fréquente pour qu'elles restent denses.",
        "tree": "Les arbres du littoral poussent souvent inclinés par le vent dominant. Un élagage de rééquilibrage et une surveillance après chaque tempête sont recommandés.",
        "soil": "Les sols sableux ou légers retiennent mal l'eau : les pelouses jaunissent vite l'été et demandent un entretien adapté plutôt qu'un arrosage excessif.",
        "tip": "Pour une résidence secondaire, un passage programmé avant l'été et après l'hiver garde le jardin présentable sans que vous ayez à vous déplacer.",
    },
    "auge": {
        "garden": "Dans le Pays d'Auge, les terrains sont souvent étendus, avec des herbages, des vergers de pommiers et des maisons à pans de bois entourées de végétation. L'entretien porte autant sur la pelouse que sur les arbres fruitiers et les haies champêtres.",
        "hedge": "Les haies champêtres (charme, noisetier, aubépine, érable champêtre) se taillent différemment des haies de laurier : on les entretient pour garder leur densité et leur intérêt pour la faune.",
        "tree": "Les pommiers à haute tige et les vieux chênes demandent une taille réfléchie, qui conserve la structure de l'arbre et prolonge sa vie.",
        "soil": "Les sols du Pays d'Auge sont souvent argileux et humides l'hiver : la tonte et les plantations se planifient selon la portance du terrain.",
        "tip": "Les périodes de taille des arbres fruitiers et des haies champêtres s'adaptent à la saison : demandez conseil avant d'intervenir en pleine nidification.",
    },
    "bocage": {
        "garden": "Dans le bocage, les propriétés sont souvent grandes, entourées de talus et de haies anciennes. Le terrain peut être en pente et les abords demandent un débroussaillage régulier.",
        "hedge": "Les haies bocagères, plantées sur talus, structurent le paysage. Leur entretien (recépage, taille latérale) se fait avec un matériel adapté et une attention à la faune.",
        "tree": "Chênes, hêtres et châtaigniers de grande hauteur sont fréquents. Leur élagage ou leur abattage demande une équipe de grimpeurs expérimentée et un plan de chute maîtrisé.",
        "soil": "Les sols du bocage sont plus pauvres et plus humides par endroits : le choix des végétaux et le calendrier d'entretien s'adaptent au terrain.",
        "tip": "Sur un grand terrain en pente, faites évaluer l'accès avant le chantier : il influence le matériel utilisé et la durée de l'intervention.",
    },
    "sud": {
        "garden": "Dans le sud du Calvados, entre plaine de Falaise et Suisse normande, les terrains alternent plateaux ouverts et vallées plus encaissées. Les jardins sont souvent grands et exposés au vent.",
        "hedge": "Les haies de clôture et les brise-vents longs sont courants : une taille annuelle régulière évite d'avoir à les reprendre en profondeur.",
        "tree": "Chênes, frênes et grands conifères demandent des interventions soignées, parfois sur des terrains pentus ou difficiles d'accès.",
        "soil": "Les sols calcaires ou caillouteux de la campagne de Falaise sèchent vite en été : on privilégie des végétaux robustes et un paillage.",
        "tip": "Si votre terrain est éloigné, regroupez plusieurs travaux (haies, arbres, pelouse) sur une même visite pour optimiser le déplacement.",
    },
}

SEASONS = [
    ("Printemps", "reprise de la tonte, taille des arbustes défleuris, désherbage et préparation des massifs."),
    ("Été", "tonte adaptée à la chaleur, taille légère des haies, arrosage raisonné et surveillance des maladies."),
    ("Automne", "taille des haies avant l'hiver, ramassage des feuilles, élagage des arbres avant les tempêtes."),
    ("Hiver", "élagage et abattage hors végétation, taille des fruitiers, préparation des plantations."),
]

STEPS = [
    ("Vous nous contactez", "Par téléphone au " + PHONE_DISPLAY + " ou par e-mail, avec quelques mots sur votre jardin ou vos arbres."),
    ("Devis gratuit", "Nous évaluons le chantier, vous donnons un prix clair et sans engagement."),
    ("Intervention sous 24 h", "Une fois le devis accepté, nous intervenons rapidement : le délai d'intervention est de 24 h."),
    ("Chantier propre", "Nous évacuons les déchets verts et laissons les lieux nets."),
]

FAQ_COMMON = {
    "elagage": [
        ("Faut-il une autorisation pour abattre un arbre ?",
         "Dans la plupart des cas chez un particulier, non, mais certaines situations l'imposent : arbre classé, espace boisé protégé au plan local d'urbanisme, lotissement ou copropriété. Vérifiez auprès de votre mairie avant le chantier ; nous vous aidons à identifier ces cas lors du devis."),
        ("Quelle est la meilleure période pour élaguer ?",
         "La plupart des arbres se taillent en hiver, hors période de végétation, mais un élagage de sécurité peut se faire toute l'année. Évitez la période de nidification (mars à août) pour les tailles importantes."),
        ("Que devient le bois coupé ?",
         "Nous évacuons les branches et troncs, ou les broyons sur place si vous souhaitez du paillage. L'évacuation est précisée dans le devis."),
    ],
    "jardinier": [
        ("À quelle fréquence tondre et tailler ?",
         "En saison, une tonte toutes les une à deux semaines suffit pour une pelouse soignée. Les haies se taillent une à deux fois par an selon l'essence. Un contrat d'entretien fixe le rythme au plus juste."),
        ("Les travaux de jardin peuvent-ils ouvrir droit à un crédit d'impôt ?",
         "Les travaux de jardinage chez un particulier (tonte, taille de haies, débroussaillage) peuvent ouvrir droit au crédit d'impôt pour services à la personne, dans la limite d'un plafond annuel. Les conditions évoluent : consultez service-public.fr avant de déclarer. L'élagage d'arbres n'est en général pas concerné."),
        ("Évacuez-vous les déchets verts ?",
         "Oui. Les déchets verts sont évacués après chaque intervention, sauf si vous préférez les garder pour du compost ou du paillage."),
    ],
    "paysagiste": [
        ("Peut-on créer un jardin par étapes ?",
         "Oui. Nous définissons un plan d'ensemble puis réalisons les zones dans l'ordre qui vous convient, selon votre budget et la saison de plantation."),
        ("Quelle est la bonne période pour planter ?",
         "L'automne et la fin de l'hiver sont les plus favorables en Normandie : le sol est humide, les racines s'installent avant l'été."),
        ("Faites-vous les clôtures, le pavage ou la maçonnerie ?",
         "Non. Nous nous concentrons sur le jardinage, l'entretien d'espaces verts, la plantation et l'élagage. Pour un mur, un dallage ou une clôture, mieux vaut faire appel à un professionnel de ces métiers."),
    ],
}


# Deuxième version de chaque paragraphe, pour que deux communes de la même zone ne partagent pas le même texte.
CONTEXT_ALT = {
    "ville": {
        "garden": "Entre pavillons, résidences et petites copropriétés, les jardins urbains se jouent à quelques mètres carrés. Chaque centimètre compte : taille précise, plantations adaptées à l'ombre des immeubles et gestion soignée des déchets verts.",
        "hedge": "Autour des maisons de ville, les haies séparent des terrains très proches. Tailler avant qu'elles ne débordent sur le trottoir évite aussi les désagréments avec les voisins.",
        "tree": "En ville, un arbre mal placé peut soulever un trottoir, toucher une façade ou gêner un éclairage. Une taille de réduction ou de dégagement règle souvent le problème sans abattre.",
        "soil": "Le sol urbain est souvent remanié et compacté par d'anciens chantiers. Un décompactage et un apport de terre végétale améliorent nettement les plantations.",
    },
    "plaine": {
        "garden": "Les communes situées autour de Caen ont grandi avec des lotissements aux grands jardins ouverts. La tonte de surfaces importantes et la gestion des périmètres de haies y sont les premiers besoins.",
        "hedge": "En plaine, une haie sert surtout de brise-vent et de séparation. Les essences persistantes (laurier, photinia, thuya) demandent une taille avant l'été et une reprise à l'automne.",
        "tree": "Beaucoup d'arbres de la plaine ont été plantés il y a vingt ou trente ans : ils ont atteint leur taille adulte et réclament une taille de sécurité ou de réduction.",
        "soil": "Le sol limoneux de la plaine garde bien l'humidité au printemps mais durcit en été : un paillage des massifs limite l'arrosage.",
    },
    "littoral": {
        "garden": "Ici, la mer façonne le jardin : vent salé, lumière vive et sol qui sèche vite. On y réussit les plantations avec des variétés robustes et un entretien régulier plutôt qu'intensif.",
        "hedge": "Pour résister aux embruns, on privilégie des haies denses de tamaris, de pittosporum ou d'escallonia. Taillées à temps, elles protègent le jardin des vents dominants.",
        "tree": "Pins, chênes verts et tamaris du littoral sont souvent déformés par le vent. Une taille d'allègement réduit la prise au vent et le risque de chute.",
        "soil": "Le sable et le sol léger de bord de mer retiennent peu l'eau : arrosez en profondeur et moins souvent, et paillez les massifs.",
    },
    "auge": {
        "garden": "Pays de pommiers, d'herbages et de maisons à colombages, le Pays d'Auge offre de grands jardins vallonnés. L'entretien y mêle tonte de grandes surfaces, haies champêtres et arbres anciens.",
        "hedge": "Les haies vives d'Auge (charme, noisetier, aubépine) se taillent moins sévèrement que du laurier. Une taille latérale annuelle suffit à les garder denses.",
        "tree": "Pommiers à haute tige, vieux chênes et grands tilleuls demandent une taille douce et progressive pour préserver leur silhouette.",
        "soil": "Les terres argileuses d'Auge collent en hiver et fissurent en été : on tond et on plante en fonction de la portance du sol.",
    },
    "bocage": {
        "garden": "Le bocage se reconnaît à ses talus plantés et à ses prairies cloisonnées. Les jardins y sont vastes, parfois en pente, avec des abords à débroussailler plusieurs fois par an.",
        "hedge": "Sur talus, la haie bocagère se taille sur les côtés et se recèpe de temps en temps pour rester dense, sans la dénaturer.",
        "tree": "Les grands chênes, hêtres et châtaigniers du bocage exigent des cordes, des harnais et un plan de démontage soigné, surtout près des bâtiments.",
        "soil": "Sols schisteux ou argileux, plus acides par endroits : les végétaux se choisissent pour leur tolérance, et le paillage aide à conserver l'humidité.",
    },
    "sud": {
        "garden": "Entre la campagne de Falaise et la Suisse normande, les jardins mêlent plateaux ventés et vallons abrités. Les terrains sont généreux et les haies longues.",
        "hedge": "Sur un terrain exposé, la haie fait office de coupe-vent : on la maintient dense par une taille annuelle régulière, avant la repousse de printemps.",
        "tree": "Les grands arbres du sud du Calvados poussent souvent sur terrain pentu ou caillouteux : l'accès conditionne la méthode et le matériel de grimpe.",
        "soil": "Les sols calcaires sèchent vite : privilégiez des végétaux rustiques et un paillage épais dès la plantation.",
    },
}
