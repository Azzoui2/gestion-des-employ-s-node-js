const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');   
app.set('view engine', 'ejs')
app.use(express.static('public'))
// CustomerSchema <= ustomerSchema
const Mydata = require('./modeles/CustomerSchema');

// Middleware body-parser pour analyser les requêtes POST
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Route pour la page d'accueil
// Get request
app.get('/', (req, res) => {

  res.render("index",{mytitle:"Home page"})
 // result == array of object
 
// Mydata.find().then((result)=>
// .catch((err)=>{console.log(err)})
});

app.get('/user/add.html', (req, res) => {
res.render("user/add",{mytitle:"Add"})
});

app.get('/user/edit.html', (req, res) => {
  res.render("user/edit",{mytitle:"Edit"})
  });

 app.get('/user/search.html', (req, res) => {
  res.render("user/search",{mytitle:"Search"})
  });

  app.get('/user/view.html', (req, res) => {
    res.render("user/view",{mytitle:"View"})
    });  

// Post request 

app.post('/user/add.html', (req, res) => {
  // Création d'une nouvelle instance de Mydata avec les données reçues du formulaire
  const userData = new Mydata({
    nom: req.body.nom,
    prenom: req.body.prenom,
    age: req.body.age,
    telephon: req.body.telephon,
    email: req.body.email,
    paye: req.body.paye,
    genre: req.body.genre,

  });

  // Sauvegarde des données dans la base de données
  userData.save()
    .then(() => {
    
      console.log(req.body); 
      // Réponse HTTP en cas de succès
      res.status(200).send('Données enregistrées avec succès');
    })
    .catch(error => {
      console.error('Erreur lors de l\'enregistrement des données :', error);
      // Réponse HTTP en cas d'erreur
      res.status(500).send('Erreur lors de l\'enregistrement des données');
    });
    res.redirect("/")
});


// Connexion à la base de données MongoDB
mongoose.connect(`mongodb+srv://mohammadelazzaoui1999:${encodeURIComponent("Moha1234@@@@")}@cluster0.z0gc0jf.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    // Démarrage du serveur une fois la connexion établie
    app.listen(port, () => {
      console.log("Connexion assurée");
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Erreur de connexion à la base de données :', error);
    console.log(`http://localhost:${port}`);
  });

// Route pour enregistrer une personne
app.post("/", (req, res) => {
  // Création d'une nouvelle instance de Mydata avec les données reçues du formulaire
  const userData = new Mydata({
    userNameee: req.body.userNameee,
    prenom: req.body.prenom,
    age: req.body.age,
    phone: req.body.phone

  });

  // Sauvegarde des données dans la base de données
  userData.save()
    .then(() => {
    
      console.log(req.body); 
      // Réponse HTTP en cas de succès
      res.status(200).send('Données enregistrées avec succès');
    })
    .catch(error => {
      console.error('Erreur lors de l\'enregistrement des données :', error);
      // Réponse HTTP en cas d'erreur
      res.status(500).send('Erreur lors de l\'enregistrement des données');
    });
});




// Auto refrsh :
 
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
const { readdir } = require('fs');
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});