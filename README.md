# Écurie de Quinfromel - Site internet

Site vitrine statique (HTML/CSS/JS) pour le haras : landing page, présentation, offres et contact.

## Structure

```
haras-site/
├── index.html        # Page principale
├── css/style.css      # Styles
├── js/script.js       # Comportements (menu mobile, formulaire, année)
├── images/
│   ├── hero.jpg           # Bandeau d'accueil
│   ├── presentation.jpg   # Photo de la section Présentation
│   └── galerie/           # photo-XX.jpg (grande) + photo-XX-min.jpg (miniature)
└── README.md
```

## Modifier le contenu

- Le texte se modifie directement dans `index.html` (remplacez les `[textes entre crochets]`).
- Les couleurs et la mise en page se modifient dans `css/style.css` (variables en haut du fichier).
- Pour ajouter une photo à la galerie : placez une version grande (~1600 px) `photo-XX.jpg`
  et une miniature (~600 px) `photo-XX-min.jpg` dans `images/galerie/`, puis copiez une ligne
  `<a href=...><img ...></a>` dans la section Galerie de `index.html` (sans oublier le texte `alt`).
  Le clic pour agrandir fonctionne automatiquement.
- Compressez vos photos avant de les ajouter (une photo de smartphone peut faire 5-10 Mo et ralentir le site) : un outil simple et gratuit est [squoosh.app](https://squoosh.app).

## Crédit photo (obligatoire)

Les photos sont de Namari Studio (Anaïs Marie). Condition d'utilisation : mention visible du
compte **@namari_studio_equestre**. Le crédit est affiché sous la galerie et dans le pied de
page : ne pas le retirer.

## Voir le site en local

Ouvrez simplement `index.html` dans votre navigateur, ou lancez un petit serveur local :

```
npx serve .
```

## Mettre le site en ligne avec GitHub Pages

1. Poussez vos changements sur la branche `main` de ce dépôt GitHub.
2. Sur GitHub : Settings > Pages > Source > choisissez la branche `main` et le dossier `/ (root)`.
3. Le site sera accessible à une adresse du type `https://<votre-utilisateur>.github.io/haras-site/`.

## Mettre à jour le site au quotidien

```
git add .
git commit -m "Mise à jour du contenu"
git push
```

Le site se met à jour automatiquement sur GitHub Pages quelques minutes après le push.

## Formulaire de contact

Ce site étant statique, le formulaire ne peut pas envoyer d'email par lui-même.
Pour recevoir les messages, connectez-le à un service gratuit comme
[Formspree](https://formspree.io) ou [EmailJS](https://www.emailjs.com/), en suivant
leur documentation (généralement : créer un compte, remplacer l'`action` du `<form>`
ou adapter `js/script.js`).
