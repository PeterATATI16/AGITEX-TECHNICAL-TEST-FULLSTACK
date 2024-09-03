
# AGITEX TECHNICAL TEST

Cette application a été développée pour la société Climax dans le but de générer des rapports statistiques sur ses clients. 
L'application permet de lire des fichiers de différents formats (CSV, JSON, TXT, XML) et de calculer la moyenne des salaires par profession.


## Structure du Projet

- **`climax-server-springboot/`** : Contient le code backend développé avec Spring Boot
- **`climax-client-react/`** : Contient le code frontend développé avec React.
- **`files/`** : Contient des fichiers de test au format CSV, JSON, TXT et XML.
- **`captures/`** : Contient l'apercu de l'application.
- **`docker-compose.yml`** : Fichier de configuration pour Docker Compose.


## Prérequis

 - [Java 17 ou supérieur](https://www.oracle.com/java/technologies/downloads/)
 - [Node.js et npm (ou yarn)](https://nodejs.org/en)
 - [Docker (optionnel, pour exécuter les conteneurs)](https://www.docker.com/products/docker-desktop/)


## Installation et exécution

**Cloner le Dépôt**

```bash
  git clone https://github.com/PeterATATI16/AGTX-TECHNICAL-TEST.git
  cd AGTX-TECHNICAL-TEST
```


*1. Naviguer vers le dossier backend (Spring Boot)*

```bash
  cd climax-server-springboot
```
*2. Construire et exécuter le backend*

```bash
  mvn clean install
  mvn spring-boot:run
```

*3. Naviguer vers le dossier front (React)*

```bash
  cd climax-client-react
```
*4. Installer les dépendances*

```bash
  npm install
```
ou
```bash
  yarn install
```
*5. IDémarrer l'application*

```bash
  npm start
```
ou
```bash
  yarn start
```

**`Le frontend sera accessible sur http://localhost:3000.`**

***Docker (Optionnel)***
```bash
  docker-compose up --build
```
**`La commande doit etre exécutée à la racine ou se trouve le fichier docker-compose.Assurez vous également que vous avez build le backend avec la commande mvn clean install`**
    
## Endpoints

```http
  POST /api/clients/import-file : Permet d'uploader un fichier (CSV, JSON, TXT, XML)
  GET /api/clients/mean-salaries : Récupère la moyenne des salaires par profession
  GET /api/clients/clients-list : Récupère la liste des clients
  GET /api/clients/clients-stats : Récupère les statistiques par profession (nombre total de clients, salaire total, salaire moyen)
```




## Test avec Postman

#### 1. Upload de fichier
- **`URL : http://localhost:8080/api/clients/import-file`**
- **`Méthode : POST`**
- **`Body : form-data avec un fichier(file)`**

#### 2. LIste des clients
- **`URL : http://localhost:8080/api/clients/clients-list`**
- **`Méthode : GET`**
- **`Body : JSON avec la liste des clients`**

#### 3. Calcul de la moyenne des salaires
- **`URL : http://localhost:8080/api/clients/mean-salaries`**
- **`Méthode : GET`**
- **`Body : JSON avec les moyennes des salaires`**

#### 4. Statistiques par profession
- **`URL : http://localhost:8080/api/clients/clients-stats`**
- **`Méthode : GET`**
- **`Body : JSON avec les moyennes des salaires`**



## Fichiers de Test

Les fichiers de test sont disponibles dans le dossier files et incluent des exemples de CSV, JSON, TXT et XML.

