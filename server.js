/**En repartant de 0, créer un nouveau répertoire pour votre projet

- Nous utiliserons express, PUG et dotenv 
- Vous devrez utiliser la commande : 
		- npm run dev pour démarrer votre projet avec browser-refresh
        - npm start pour démarrer votre projet avec node (pour gérer la mise en production)
- Déclarer la variable PORT dans .env pour démarrer l'écoute du serveur HTTP sur l'un des ports couramment utilisé.
- Créer le répertoire static (couramment appelé public)
- Créer les templates pour la page d'accueil (avec un lien vers inscription) sur la route inscription utiliser un autre template où il y aura un formulaire "d'inscription"
- Le formulaire devra avoir au minimum les champs nom, prenom, email, téléphone
	(vous pouvez si vous le souhaitez créer d'avantage de champs)
- le formulaire devra être soumis en post
- Sur la route en post gérer l'affichage via un 3eme template, où sera énumérer les valeurs soumise par l'utilisateur

- Exemple
	//-----------------------------
	Votre inscription a bien était reçu
    
    Voici le récapitulatif de vos informations
    👤 Nom : DUPONT Michel
    📧 Email : m.dupont@free.fr
    📱 Téléphone : 0612345678
    
    L'équipe de super-site.com vous remercie 
    //----------------------------- */

const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();



//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render(
        'index', 
        {greet : "Bienvenue !", invit: "Remplissez le form : "}
    );
});

app.get('/formulaire', (req, res) => {
    res.render(
    );
  });

  
app.listen(process.env.PORT_HTTP,() => {
    if(process.env.APP_ENV == 'dev') {
        console.log(`Le serveur est démarré : http://localhost:${process.env.PORT_HTTP}`);
    }
})
