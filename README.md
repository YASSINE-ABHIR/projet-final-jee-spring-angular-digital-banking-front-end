Bien sûr ! Voici une version révisée du fichier README pour votre projet GitHub digital-banking-App :

---

# digital-banking-App 

digital-banking-App est une application bancaire en ligne moderne construite avec Angular. Ce projet vise à fournir des services bancaires essentiels via une interface conviviale.
![Mode Clair Sombre](./src/assets/ScreenShots/light-dark.png)

## Fonctionnalités ✨

- **Authentification Utilisateur** : Connexion et inscription sécurisées utilisant JWT.
- **Gestion de Compte** : Voir et gérer les détails du compte, le solde et les transactions.
- **Gestion des Transactions** : Effectuer des transferts de fonds et consulter l'historique des transactions.
- **Panneau d'Administration** : Gérer les utilisateurs et consulter les journaux du système.
- **Design Responsive** : Optimisé pour différents appareils.

## Technologies Utilisées 🛠️

- **Frontend** : Angular
- **Authentification** : JWT

## Installation 🚀

### Prérequis 📋

- Node.js et npm
- Angular CLI

### Étapes 🔧

1. **Cloner le dépôt**
    ```bash
    git clone 
    cd digital-banking-App
    ```

2. **Configuration du Frontend**
    - Naviguez dans le répertoire du projet
    - Installez les dépendances requises
    ```bash
    npm install
    ```
    - Démarrez le serveur frontend
    ```bash
    ng serve
    ```

## Utilisation 💡

Une fois le serveur frontend démarré, vous pouvez accéder à l'application à l'adresse `http://localhost:4200`.

### Points de terminaison API 🔗

- **Authentification Utilisateur**
  - `POST /auth/login` : Authentifie un utilisateur

- **Gestion de Compte**
  - `GET /accounts` : Récupère les comptes utilisateur

- **Gestion des Clients**
  - `GET /customers` : Récupère les comptes utilisateur

- **Gestion des Transactions**
  - `GET /operations` : Récupère l'historique des opérations

## Structure du Projet 📁

### Frontend (Angular)
- **`src/app`** : Contient le code principal de l'application
  - **`layout`** : Composants de mise en page (barre latérale, barre supérieure, etc.)
  - **`services`** : Services Angular pour les appels API
  - **`models`** : Modèles de données
  - **`accounts`** : Visualiser et gérer les comptes
  - **`customers`** : Visualiser et gérer les clients
  - **`operations`** : Visualiser et gérer les opérations
  - **`admin`** : Contient les composants admin en tant qu'enfants
  - **`account-history`** : Voir l'historique d'un compte
  - **`customer-accounts`** : Voir et gérer les comptes d'un client
  - **`guards`** : Gardiens du projet
  - **`interceptors`** : Intercepteurs du projet
  - **`login`** : Connexion utilisateur
  - **`not-auth`** : Page non authentifiée
  - **`notfound`** : Page non trouvée

## Captures d'Écran

![Tableau de bord sombre](./src/assets/ScreenShots/Screenshot%20from%202024-06-26%2016-15-37.png)
![Tableau de bord clair](./src/assets/ScreenShots/Screenshot%20from%202024-06-26%2016-15-44.png)
![Clients](./src/assets/ScreenShots/Screenshot%20from%202024-06-26%2016-04-51.png)
![Comptes](./src/assets/ScreenShots/Screenshot%20from%202024-06-26%2016-04-58.png)
![Opérations](./src/assets/ScreenShots/Screenshot%20from%202024-06-26%2016-05-02.png)
![Mise à jour du client](./src/assets/ScreenShots/Screenshot%20from%202024-06-26%2016-05-23.png)
![Suppression du client](./src/assets/ScreenShots/Screenshot%20from%202024-06-26%2016-05-30.png)
![Compte bancaire du client](./src/assets/ScreenShots/Screenshot%20from%202024-06-26%2016-05-46.png)

## Contribuer 🤝

Les contributions sont les bienvenues ! Veuillez suivre ces étapes pour contribuer :

1. Forkez le dépôt
2. Créez une nouvelle branche (`git checkout -b feature-branch`)
3. Commitez vos modifications (`git commit -am 'Add new feature'`)
4. Poussez sur la branche (`git push origin feature-branch`)
5. Créez une nouvelle Pull Request

