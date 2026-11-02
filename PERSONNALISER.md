# Personnaliser le site pour un nouveau couple (formule Signature)

## 1. Un seul fichier : `js/config.js`
Noms, date, photo principale, versets, histoire, heure de la cérémonie,
couleurs du dress code, lieu, galerie, cadeaux, date limite de RSVP,
nombre maximum de personnes par réponse, identifiants EmailJS et URL du tableau Google Sheets.

## 2. Les images
- Remplace les fichiers dans `assets/images/` (mêmes noms, ou mets à jour la galerie dans `config.js`).
- Réduis chaque photo à environ 2000 px de côté avant de l'ajouter.
- La musique est `assets/music/mariage.mp3` (incluse dans Signature).

## 3. Les balises d'aperçu du lien (une seule fois, tout en haut de `index.html`)
Noms, adresse du site et image : les réseaux sociaux les lisent avant le JavaScript,
elles ne peuvent donc pas venir de `config.js`.

## 4. Le tableau des réponses (Google Sheets)
Suis les étapes en commentaire dans `docs/google-apps-script.gs`, puis colle l'URL `/exec`
dans `rsvp.feuilleUrl`. Laisse `""` pour n'avoir que les courriels (formule Essentiel).

## 5. EmailJS
Dans le modèle de courriel, ajoute les variables `{{email}}` (déjà utilisée pour « Reply To »)
et `{{invites}}` (nombre de personnes). Pense à limiter les domaines autorisés
dans les paramètres EmailJS.

## 6. Avant de livrer
- Teste le formulaire RSVP (réponse « oui » et « non »).
- Vérifie la date du compte à rebours.
- Vérifie que la page s'affiche bien sur téléphone.
