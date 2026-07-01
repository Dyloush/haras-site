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
- [ ] Contenu réel (textes) — **en attente, l'utilisateur les prépare de son côté**
- [ ] Photos réelles dans `images/` — **en attente**
- [ ] Titre/meta description à mettre à jour avec le vrai nom du haras
- [ ] Formulaire de contact — actuellement juste un message factice en JS
      (`js/script.js`), n'envoie aucun email. À connecter à Formspree ou EmailJS,
      ou à défaut un lien `mailto:`
- [ ] Favicon
- [ ] Balises Open Graph (aperçu réseaux sociaux)
- [ ] Attributs `alt` descriptifs sur les images (SEO/accessibilité)
- [ ] Mentions légales + politique de confidentialité (nécessaire si le formulaire
      de contact collecte des données — obligation RGPD en France)
- [ ] Nom de domaine personnalisé — pas encore de domaine, pourra être ajouté plus
      tard via un fichier `CNAME`
- [ ] Renommage éventuel du dépôt (l'utilisateur a mentionné vouloir changer le nom
      `haras-site` plus tard → l'URL GitHub Pages changera en conséquence)

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

1. Récupérer le contenu (textes + photos) envoyé par l'utilisateur et l'intégrer
   dans `index.html` / `images/`.
2. Mettre en place le formulaire de contact fonctionnel (Formspree ou EmailJS —
   à décider avec l'utilisateur).
3. Passer en revue le reste de la checklist ci-dessus avant un lancement officiel.
