# Entreprise de Plâtrerie — Application Web Complète

## Stack Technique
- **Frontend** : React 18 + Vite + Tailwind CSS + react-i18next
- **Backend** : Node.js + Express.js + MongoDB (Mongoose)
- **Auth** : JWT + bcrypt + OTP Email
- **Upload** : Multer (stockage local)

## Structure du Projet
```
marwen/
├── backend/          → API Node.js/Express
│   ├── src/
│   │   ├── config/   → Connexion MongoDB
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/   → User, Realisation, Review
│   │   ├── routes/
│   │   └── utils/    → Email, OTP
│   └── uploads/      → Images stockées localement
└── frontend/         → Application React
    └── src/
        ├── components/ → Navbar, Footer, StarRating...
        ├── context/    → AuthContext, ThemeContext
        ├── i18n/       → FR + EN
        └── pages/      → Home, Realisations, Avis, Auth, Dashboard
```

## Installation

### 1. Prérequis
- Node.js >= 18
- MongoDB (local ou MongoDB Atlas)
- Compte Gmail pour Nodemailer

### 2. Backend
```bash
cd backend
npm install
```
Configurer `.env` (déjà créé, adapter les valeurs) :
```
EMAIL_USER=votre_email@gmail.com
EMAIL_PASS=votre_mot_de_passe_app_gmail
MONGODB_URI=mongodb://localhost:27017/platrerie
```

### 3. Frontend
```bash
cd frontend
npm install
```

## Démarrage

### Backend (terminal 1)
```bash
cd backend
npm run dev
```
→ Serveur sur http://localhost:5000

### Frontend (terminal 2)
```bash
cd frontend
npm run dev
```
→ Application sur http://localhost:5173

## Compte Administrateur
L'admin est créé automatiquement au démarrage :
- **Email** : admin0@gmail.com
- **Mot de passe** : Admin@2024
- Accès dashboard : http://localhost:5173/dashboard

## Fonctionnalités
- ✅ Page d'accueil moderne avec hero, stats, services, CTA
- ✅ Mode sombre / clair (persisté)
- ✅ Multilingue FR / EN
- ✅ Inscription avec vérification OTP email
- ✅ Connexion JWT sécurisée
- ✅ Galerie des réalisations avec lightbox
- ✅ Avis clients (modération admin)
- ✅ Dashboard admin complet
  - Statistiques en temps réel
  - CRUD réalisations
  - Modération des avis (pending/accepted/refused)
  - Gestion des utilisateurs

## Gmail — Configuration App Password
1. Activer l'authentification 2FA sur votre compte Gmail
2. Aller dans : Compte Google → Sécurité → Mots de passe des applications
3. Générer un mot de passe et le mettre dans `EMAIL_PASS`
"# marwen_backend" 
