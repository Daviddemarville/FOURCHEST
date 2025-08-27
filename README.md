# Fourch’Est

Projet de groupe (2 semaines) réalisé par 5 Wilders durant le Bootcamp **Développeur Web Full-Stack** (Wild Code School, 2025).

**But :** prototyper un mini “Uber-Eats like” centré sur la **région Grand Est**, en front-only (**HTML/CSS/Tailwind + JS**).  
Ce projet est **pédagogique** (contenus et données fictifs), il sert à pratiquer l’intégration, la structuration d’un petit front, et le travail en équipe (Git/GitHub).

---

## ✨ Contenu & pages

- **Accueil** : `index.html`
- **À propos** : `about.html`
- **Compte / login** : `account.html`, `log.html`
- **Restaurants** : `restaurant.html` (et scripts associés)
- **Commande** : `order.html`, `final-order.html`

JavaScript “léger” pour les interactions et validations :
`index.js`, `about.js`, `account.js`, `order.js`, `restaurant1.js`, `validation.js`, `src/main.js`

---

## 🧱 Stack

- **HTML** + **Tailwind CSS** + **JavaScript**
- **Vite** (dev server / build)
- Aucune API : données **statiques** (images en `public/images`)

**Charte rapide**
- Couleurs : `#191998` (blue), `#FFC94F` (yellow)
- Typo titres : [Shrikhand](https://fonts.google.com/specimen/Shrikhand)
- Typo texte : *Gotham* (à défaut, une alternative libre type **Montserrat**/**Inter**)

---

## 🚀 Démarrage

> Prérequis : Node 18+ (reco : 20+), npm

```bash
npm install
npm run dev
Build prod : npm run build

Preview du build : npm run preview

📁 Structure (extrait)
pgsql
Copier le code
.
├─ assetes/                 # assets divers (dossier projet)
├─ dist/                    # build Vite
├─ node_modules/
├─ public/
│  └─ images/               # images statiques
├─ src/
│  └─ main.js               # bootstrap JS (si utilisé)
├─ about.html
├─ about.js
├─ account.html
├─ account.js
├─ final-order.html
├─ index.html
├─ index.js
├─ log.html
├─ order.html
├─ order.js
├─ restaurant.html
├─ restaurant1.js
├─ validation.js
├─ package.json
├─ vite.config.js
└─ README.md
Remarque : le dossier assetes/ contient vos ressources de projet ; les images publiques sont dans public/images.

👥 Équipe
Arnaud D. — Recenseur de restaurants

David dM. — Artificier en chef

Guillaume Z. — Happiness manager

Quentin B. — Background artist

Rahmoun D. — Ingénieur carrousel

📜 Licence
MIT