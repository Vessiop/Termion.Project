# Thèmes persistants de Termion

**Objectif :** appliquer le thème choisi sur l’accueil à chaque page, au rechargement et au retour arrière, sans effet en double ni affichage initial du thème Base.

**Architecture :** conserver les quatre systèmes météo de `Index.JS` et les charger une seule fois sur chaque document. Un petit script synchrone restaure le thème sur `<html>` avant les styles ; une feuille commune définit les arrière-plans et place la météo derrière le contenu. Les panneaux propres aux fiches gardent leurs palettes pour préserver leur contraste.

**Contraintes :** site HTML statique, chemins relatifs compatibles GitHub Pages et sous-répertoires ; cinq thèmes existants ; conserver la clé `termion-theme` ; tolérer un stockage refusé ou une valeur invalide ; aucun changement de contenu des fiches.

- [x] Ajouter des tests navigateur qui constatent la perte actuelle du thème lors de la navigation et du rechargement.
- [x] Ajouter la restauration avant affichage et les styles d’arrière-plan partagés. Mutualiser le moteur météo, ses boutons et son cycle de vie. Intégrer les ressources à tous les documents HTML/HTM.
- [x] Vérifier les cinq thèmes sur ordinateur et mobile : navigation, actualisation, retour arrière, changement répété, stockage indisponible/invalide, arrière-plan avant chargement du moteur, absence de doublons, interactions et captures visuelles.

**Points de vigilance :** palettes sombres des classes ; chemins accentués et profonds ; graphiques canvas existants ; cache de navigation ; événements entre onglets et arrêt des animations des pages masquées.

**Exécution :** dans le dossier existant demandé par l’utilisateur ; aucune publication ni modification de branche nécessaire.

**Validation finale :** `npm test` : 40 tests réussis (Edge sans interface, vue ordinateur 1440 × 900 et émulation mobile Pixel 7). Les 65 documents sont parcourus dans chaque configuration, sans erreur JavaScript. Captures contrôlées pour les fiches et l’accueil. Syntaxe des deux scripts et `git diff --check` valides.

**Revue indépendante :** aucun problème critique ou important ; un problème de redessin après rotation avec mouvements réduits a été reproduit par trois tests en échec, corrigé, puis validé par la suite complète. Les 17 documents initialement vides reçoivent uniquement la structure du thème. Les contenus de jeu et les dispositions préexistantes restent hors du périmètre de la modification.
