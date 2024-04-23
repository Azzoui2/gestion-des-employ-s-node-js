const UserCustomerC = require('../modeles/customerSchema.js');
var moment = require('moment');

const Page_Accueile =(req, res) => {
    //res.render("index",{mytitle:"Home page"})
   // result == array of object
   UserCustomerC.find()
   .then(result=>{res.render("index",{mytitle:"Home page",arrayCustomer:result,moment:moment});})
   .catch((err)=> {console.log(err)})
  
  }

  const Ajouter = (req, res) => {
    // Création d'une nouvelle instance de Mydata avec les données reçues du formulaire
    // const userData = new UserCustomer(req.body); userData.save() ou UserCustomer.create(req.body)
  
    // Sauvegarde des données dans la base de données
    UserCustomerC
    .create(req.body)
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
  }

  module.exports={Page_Accueile,Ajouter};