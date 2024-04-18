const express = require('express');
const app = express();
const port = 3003;
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});


mongoose.connect(`mongodb+srv://mohammadelazzaoui1999:${encodeURIComponent("Moha1234@@@@")}@cluster0.z0gc0jf.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0`)

  .then(() => {
 
    app.listen(port, () => {
      console.log("connexion assure");
      console.log(`http://localhost:${port}`);
  });
    // Tu peux placer ici d'autres actions que tu souhaites exécuter une fois la connexion établie.
  })
  .catch((error) => {
    console.error('Erreur de connexion à la base de données :', error);
  });