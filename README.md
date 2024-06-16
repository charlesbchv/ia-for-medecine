# IA pour la Prédiction des États Épileptiques

<p align="center"><a href="https://www.mcgill.ca/neuro/fr/recherche/groupes-de-recherche/epilepsie" target="_blanc"><img src="https://www.frcneurodon.org/wp-content/uploads/2020/09/banni%C3%A8re.png"></a></p>
<p align="center"> 
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/charlesbchv/ia-for-medecine?style=plastic&color=blue">
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/charlesbchv/ia-for-medecine?style=plastic&color=violet">
<img alt="Last Commit" src="https://img.shields.io/github/last-commit/charlesbchv/ia-for-medecine?style=plastic&color=yellow">
<img alt="Bower" src="https://img.shields.io/bower/l/space?style=plastic&color=acre">
</p>
<p align="center">
   <img alt="ViewCount" src="https://views.whatilearened.today/views/github/charlesbchv/ia-for-medecine.svg">
</p>

## Contexte et Problématique

L'électroencéphalographie (EEG) est l'un des outils les plus utilisés pour étudier l'activité électrique du cerveau en raison de l'absence d'effets secondaires. L'EEG fournit des informations essentielles pour prédire les états épileptiques. La classification de ces états nécessite des approches sophistiquées basées sur des algorithmes de Machine Learning afin d'obtenir les meilleures performances de prédiction.

Le processus de fonctionnement d’un système de Machine Learning se compose généralement d’une phase d’extraction de caractéristiques et d’une autre de classification. L'extraction des caractéristiques peut être effectuée manuellement par un expert ou automatiquement à l'aide d'une architecture de convolution. La phase de classification peut utiliser des réseaux de neurones multicouches, des machines à vecteurs de support (SVM), des forêts aléatoires (RF), etc.

## Objectif

Définition d'une méthodologie basée sur l’ensemble d’extracteurs de caractéristiques (« Ensemble feature extractor ») et sur l’ensemble de classifieurs (« Ensemble selection ») pour optimiser les performances de classification.

1. **Ensemble feature extractor** : Association de plusieurs vecteurs de caractéristiques provenant de différents extracteurs pour exploiter de nouvelles caractéristiques.
   - Extraction de caractéristiques utilisant des architectures de réseaux de neurones convolutionnels (CNN) pour capturer des motifs complexes dans les signaux EEG.
   - Application de techniques de normalisation et de mise à l'échelle pour préparer les données avant l'extraction des caractéristiques.
   - Utilisation de la technique de Suréchantillonnage Synthétique Minoritaire (SMOTE) pour équilibrer les classes avant l'extraction des caractéristiques.

2. **Ensemble selection** : Sélection des classifieurs les plus pertinents pour capturer le maximum d’informations à partir des signaux EEG.
   - Implémentation de forêts aléatoires (Random Forest) et de techniques d'agrégation pour améliorer la robustesse et la précision des prédictions.
   - Évaluation des performances des modèles en utilisant des métriques telles que l'exactitude, la matrice de confusion, et les rapports de classification.
   - Application de la technique de Boosting pour renforcer les performances des classifieurs en combinant plusieurs modèles faibles pour créer un modèle fort.

## Démarche

1. Un état de l’art sur les algorithmes de ML pour la classification, en particulier ceux basés sur les techniques d’« Ensemble feature extractor » et d’« Ensemble selection », a été effectué.
2. Les algorithmes classiques pour la classification des états épileptiques ont été appliqués sur des bases de données réelles et leurs performances ont été évaluées.
3. Les techniques « Ensemble feature extractor » et « Ensemble selection » ont été implémentées afin d’améliorer les performances de classification.

## Compétences Requises

- Python
- Machine Learning
- Deep Learning

## Structure du Projet

- `Ressources/Dataset/` : Contient les fichiers de données EEG utilisés pour l'entraînement et les tests.
- `Classification/` : Contient des notebooks Jupyter pour l'analyse exploratoire des données, ensemble selection pour les prototypes de modèles.
- `Feature-Extraction/` : Contient des notebooks Jupyter d'extractions des caracteristiques des données.
- `Ressources/models/` : Contient les modèles entraînés et les extracteurs de caractéristiques.

## Installation

1. Clonez le repository :
```bash
git clone git@github.com:charlesbchv/ia-for-medecine.git
```

2. Naviguez dans le répertoire du projet :
```bash
cd ia-for-medecine
```

3. Créez un environnement virtuel et activez-le :
```bash
python -m venv env
source env/bin/activate  # Sur Windows, utilisez `env\Scripts\activate`
```

4. Installez les dépendances :
```bash
pip install -r requirements.txt
```

## Résultats

Les résultats des différentes expérimentations sont dans l'état de l'art.
Vous pouvez consulter les rapports de classification, les matrices de confusion, et les scores de précision.

## Site Web

Afin de lancer le site web, allez dans le dossier Interface/html et ouvrir index.html, vous serez redirigé sur le siteWeb.
Pour plus d'informations, sur le comment lancer le serveur, consulter requirements.txt.

## Contributeurs

- **Elodie PAN** - E4FI-G3
- **Charles BATCHAEV** - E4FI-G3
- **Yanis AIT-TAOUIT** - E4FI-G3
- **Yassine GUELAA** - E4FI-G1
  
- **Superviseur** : Ahmed Ghazi BLAIECH, Enseignant chercheur à l’ESIEE
  - Email : [ahmed.blaiech@esiee.fr](mailto:ahmed.blaiech@esiee.fr)


## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](https://github.com/charlesbchv/ia-for-medecine?tab=EPL-2.0-1-ov-file)  pour plus de détails.


### Explications des sections du README :

1. **Contexte et Problématique** : Décrit l'importance de l'EEG et la nécessité de classifier les états épileptiques à l'aide de ML.
2. **Objectif** : Énonce clairement les objectifs du projet.
3. **Démarche** : Détaille les étapes à suivre pour atteindre les objectifs.
4. **Compétences Requises** : Indique les compétences nécessaires pour travailler sur le projet.
5. **Structure du Projet** : Décrit l'organisation des fichiers et des répertoires.
6. **Installation** : Donne des instructions pour configurer l'environnement de développement.
7. **Utilisation** : Explique comment exécuter les scripts pour prétraiter les données, entraîner les modèles, et évaluer les performances.
8. **Résultats** : Indique où trouver les résultats des expérimentations.
9. **Contributeurs** : Liste les contributeurs au projet.
10. **Licence** : Précise la licence sous laquelle le projet est distribué.
