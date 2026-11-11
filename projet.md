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
- [ ] Contenu réel (textes : présentation, offres, adresse, téléphone, email) — **en attente**
- [x] Droit à l'image : les personnes visibles sur les photos ont donné leur accord
      (confirmé par l'utilisateur le 2026-11-11)
- [ ] Formulaire de contact — actuellement juste un message factice en JS
      (`js/script.js`), n'envoie aucun email. À connecter à Formspree ou EmailJS,
      ou à défaut un lien `mailto:`
- [ ] Favicon
- [ ] Balises Open Graph (aperçu réseaux sociaux)
- [x] Attributs `alt` descriptifs sur les images (SEO/accessibilité)
- [ ] Mentions légales + politique de confidentialité (nécessaire si le formulaire
      de contact collecte des données — obligation RGPD en France)
- [ ] Nom de domaine personnalisé — pas encore de domaine, pourra être ajouté plus
      tard via un fichier `CNAME`
- [ ] Renommage éventuel du dépôt (l'utilisateur a mentionné vouloir changer le nom
      `haras-site` plus tard → l'URL GitHub Pages changera en conséquence)

## Optimisations recommandées

Utile et peu coûteux en effort :

- [ ] Compresser les photos avant de les ajouter dans `images/` (une photo de cheval
      en pleine résolution peut faire 5-10 Mo et ralentir le chargement) — outil
      simple : https://squoosh.app
- [ ] Créer une fiche Google Business Profile pour le haras (gratuit) — pour
      apparaître sur Google Maps / recherche locale, souvent plus rentable que le
      seul référencement du site pour une activité locale
- [ ] Page 404 personnalisée (`404.html` à la racine, servie automatiquement par
      GitHub Pages) plutôt que la page d'erreur par défaut

Nice-to-have, à faire plus tard (après le lancement) :

- [ ] `sitemap.xml` + `robots.txt` pour aider Google à indexer le site
- [ ] Données structurées `schema.org` (type `LocalBusiness`) pour un meilleur
      affichage dans les résultats Google (adresse, téléphone visibles directement)
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

1. Récupérer les textes (présentation, offres, coordonnées) et les intégrer dans
   `index.html` (remplacer les `[textes entre crochets]`). Photos : fait.
2. Mettre en place le formulaire de contact fonctionnel (Formspree ou EmailJS —
   à décider avec l'utilisateur).
3. Passer en revue le reste de la checklist ci-dessus avant un lancement officiel.
