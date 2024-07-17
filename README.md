Pour utiliser la simulation de feu de forêt : ouvrir le fichier dist/index.html

Pour modifier le code ou le fichier de configuration :
Version de node : 16.11.0
Version de npm : 8.0.0
npm install --save-dev webpack webpack-dev-server webpack-cli
npm install --save-dev typescript ts-loader
npm run build

Spécifications du fichier de configuration config/config.json :
height : le nombre de case en hauteur
width : le nombre de case en largeur
proba : la probabilité de propagation (compris entre 0 et 1)
fires : les cases contenant du feu sous la forme d'un tableau de tuples hauteur/largeur ([[2,8],[3,3]])
sleep : le temps d'attente entre chaque étape (en ms)