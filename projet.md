# Suivi du projet — Site du haras

## Objectif

Site vitrine statique (HTML/CSS/JS) pour un haras (élevage/pension/dressage/vente de
chevaux), maintenu par le propriétaire lui-même via Git/GitHub, hébergé gratuitement
sur GitHub Pages.

## État actuel

- [x] Git installé (`winget install Git.Git`) et configuré (user.name `Dyloush`,
      user.email `pikidylanf@gmail.com`)
- [x] GitHub CLI (`gh`) installé et authentifié en tant que `Dyloush`
- [x] Dossier local du projet : `C:\Users\pikid\Projects\haras-site`
- [x] Dépôt GitHub créé (public) : https://github.com/Dyloush/haras-site
- [x] GitHub Pages activé, branche `main`, dossier `/`
- [x] Site en ligne : https://dyloush.github.io/haras-site/
- [x] Structure de base générée : `index.html`, `css/style.css`, `js/script.js`,
      dossier `images/`, `README.md`
- [x] Page unique avec sections : Accueil (hero), Présentation, Nos offres
      (pension / élevage-poulinière / dressage-débourrage / vente), Galerie, Contact
- [x] Nom réel : **Écurie de Quinfromel** (titre, meta, logo, textes, footer) — 2026-11-11
- [x] Photos intégrées (2026-11-11) : shooting pro Namari Studio (Anaïs Marie),
      originaux dans `Bureau\Photos_Ecuries` (zip). 14 photos en galerie
      (`images/galerie/photo-XX.jpg` 1600px + `-min.jpg` 600px), `hero.jpg`, `presentation.jpg`.
      Galerie avec agrandissement au clic (lightbox, flèches clavier).
- [x] **Condition de la photographe** : mention visible de `@namari_studio_equestre`
      sur toute utilisation → crédit sous la galerie + dans le footer. Ne pas retirer.
- [x] Restructuration (2026-11-11) d'après une comparaison avec d'autres sites d'écuries/haras :
      sections L'écurie (+ Nollan Renault, cavalier et moniteur diplômé, dirigeant),
      Installations, Prestations (pension avec 3 formules tarifaires, dressage & débourrage,
      valorisation, élevage, vente), Chevaux à vendre (fiches), Galerie, Contact & accès
      (carte Google Maps sur Pleumeleuc, choix du type de demande dans le formulaire).
      Ajout balises Open Graph + données schema.org LocalBusiness (Pleumeleuc 35137).
- [x] Commune : **Pleumeleuc (35137)**, Ille-et-Vilaine
- [x] Activités : pension, vente, élevage, valorisation, dressage
- [x] Prix en ligne depuis le 2026-11-12 (validés par l'utilisateur, repris du dossier) : cours 30 min 30 €, pension pré 230 €, box/paddock 400 €,
      travail 500 €, valorisation 600 € + 0,30 €/km de transport, débourrage 650 €.
- [x] Textes entre `[crochets]` remplis (2026-11-12) à partir du dossier de financement
      (`Bureau\Ecurie_Quinfromel\Dossier_Nollan Renault.docx`) : histoire et devise
      « Performance et respect – l'équitation de demain », diplômes et parcours de Nollan
      (BPJEPS équitation, Bac Pro CGEH, certification jeune cheval), installations
      (stabulation libre, 10 boxes, 13 ha de prés, carrière sable 40 × 70 m, sellerie,
      aire de soins, club-house, pas de manège), formules de pension, adresse (lieu-dit
      Quinfromel), temps de trajet. Ajout d'une prestation « Cours & coaching ».
- [x] Travaux (carrière, boxes, stabulation) encore en cours fin 2026, mais l'utilisateur a
      choisi de les présenter comme terminés sur le site.
- [ ] Carte « Élevage » : laissée entre [crochets], l'utilisateur doit en parler avec Nollan.
- [x] Téléphone 06 62 60 53 21 et email nollan.renault@gmail.com (liens cliquables)
- [ ] Fiches chevaux à vendre : photos + infos réelles (2 fiches modèles en place)
- [x] Carte : iframe pointée sur « Quinfromel, 35137 Pleumeleuc »
- [x] Photo de Nollan : `images/galerie/photo-10.jpg` (original 3213 : jeune homme blond,
      doudoune sans manches, seul au pré devant un cheval en couverture) → bloc équipe
      sous la présentation. Nollan apparaît aussi (même tenue, même jour de shooting) sur
      `presentation.jpg` et les photos 04, 05, 06 (à cheval sur le pie), 09, 11, 13 → légendes
      `alt` mises à jour. La cavalière au gilet à zip rouge (01, 02, 03, 14) : nom inconnu.
- [x] Droit à l'image : les personnes visibles sur les photos ont donné leur accord
      (confirmé par l'utilisateur le 2026-11-11)
- [ ] Formulaire de contact — actuellement juste un message factice en JS
      (`js/script.js`), n'envoie aucun email. À connecter à Formspree ou EmailJS,
      ou à défaut un lien `mailto:`
- [ ] Favicon
- [x] Balises Open Graph (aperçu réseaux sociaux)
- [x] Attributs `alt` descriptifs sur les images (SEO/accessibilité)
- [ ] Mentions légales + politique de confidentialité (nécessaire si le formulaire
      de contact collecte des données — obligation RGPD en France)
- [ ] Nom de domaine personnalisé — pas encore de domaine, pourra être ajouté plus
      tard via un fichier `CNAME`
- [ ] Renommage éventuel du dépôt (l'utilisateur a mentionné vouloir changer le nom
      `haras-site` plus tard → l'URL GitHub Pages changera en conséquence)

## Optimisations recommandées

Utile et peu coûteux en effort :

- [x] Photos compressées (1600 px + miniatures 600 px). Pour les prochaines photos, les
      compresser avant de les ajouter dans `images/` — outil simple : https://squoosh.app
- [ ] Créer une fiche Google Business Profile pour le haras (gratuit) — pour
      apparaître sur Google Maps / recherche locale, souvent plus rentable que le
      seul référencement du site pour une activité locale
- [ ] Page 404 personnalisée (`404.html` à la racine, servie automatiquement par
      GitHub Pages) plutôt que la page d'erreur par défaut

Nice-to-have, à faire plus tard (après le lancement) :

- [ ] `sitemap.xml` + `robots.txt` pour aider Google à indexer le site
- [x] Données structurées `schema.org` (type `LocalBusiness`) : adresse, téléphone,
      email, gamme de prix
- [ ] Outil d'analytics léger et respectueux de la vie privée (Plausible ou
      GoatCounter, gratuits en usage léger) pour suivre les visites

Volontairement écarté pour l'instant : pas de build tool ni de CI — complexité
inutile pour un site vitrine statique de cette taille, à maintenir seul.

## Décisions prises

- Site statique simple (pas de framework) : le plus facile à maintenir seul.
- Hébergement : GitHub Pages (gratuit, nécessite un dépôt public sur le plan gratuit).
- Une seule page HTML avec ancres de navigation, plutôt que plusieurs pages —
  suffisant pour la taille du site.

## Comment mettre à jour le site (rappel)

Depuis `C:\Users\pikid\Projects\haras-site` :

```
git add .
git commit -m "Description du changement"
git push
```

Le site se met à jour automatiquement sur GitHub Pages quelques minutes après le push.

## Prochaine session — reprendre ici

État au 2026-11-12 : textes, prix, téléphone et email en ligne (publiés sur `main`).

Avant de faire connaître le site :

1. **Formulaire de contact** — n'envoie rien pour l'instant. Proposition : Formspree
   (gratuit, ~50 messages/mois) vers nollan.renault@gmail.com. Il faut : créer un compte
   sur formspree.io et donner le lien du formulaire.
2. **Mentions légales + politique de confidentialité** (obligatoires). Il faut : numéro
   SIRET et forme juridique (entreprise individuelle d'après le dossier).
3. **Texte « Élevage »** — à voir avec Nollan.
4. **Fiches chevaux à vendre** — infos réelles + photo pour chaque cheval, ou masquer la
   section tant qu'il n'y en a pas.

Rapide, faisable sans infos supplémentaires :

5. Favicon.
6. Page 404 personnalisée.
7. `sitemap.xml` + `robots.txt`.

Plus tard : fiche Google Business Profile (à créer par Nollan avec son compte Google),
GoatCounter, nom de domaine, renommage du dépôt.
