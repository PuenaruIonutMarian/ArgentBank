# Tableau de bord de Sportsee - projet 12 Openclassrooms

Ce projet est une application bancaire en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive.

## Fonctionnalités

- L'utilisateur peut visiter la page d'accueil
- L'utilisateur peut se connecter au système
- L'utilisateur peut se déconnecter du système
- L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
- L'utilisateur peut modifier le profil et conserver les données dans la base de données

## Utilisation

1. Cloner le dépôt depuis GitHub :

- git clone https://github.com/PuenaruIonutMarian/ArgentBank.git

2. Installer les dépendances :

- npm install


## Lancer l'application :

- npm start
- L'application sera accessible à l'adresse http://localhost:3000.


## API

Les données réelles sont récupérées à partir de l'API fournie par OpenClassrooms.

Vous pouvez trouver la documentation de l'API :

- https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master

Pour cloner l'API:

- git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git


## Documentation

Ce projet inclut des commentaires JSDoc pour documenter le code. JSDoc est un outil qui extrait la documentation à partir de commentaires spécialement formatés dans le code.
La documentation générée se trouve dans le dossier `docs`. Pour consulter la documentation, ouvrez le fichier `index.html` situé dans le dossier `docs` dans votre navigateur web.
Pour générer la documentation localement, assurez-vous d'avoir JSDoc installé globalement :

- npm install -g jsdoc

Ensuite, exécutez la commande suivante dans le répertoire du projet :

- jsdoc -c jsdoc.json

Cela générera la documentation à partir des commentaires JSDoc dans le code et la placera dans le dossier docs.
