const mongoose = require("mongoose");
 
// Définition du schéma pour les données
const userSchema = new mongoose.Schema({
  // Champ userNameee de type String
  nom: { type: String, required: true  },
  prenom: { type: String, required: true  },
  age: { type: Number, required: true  },
  email: { type: String, required: true  },
  telephon: { type: String, required: true  },
  genre: { type: String, required: true  },
  paye: { type: String, required: true  },

  
});

// Création du modèle basé sur le schéma
const User = mongoose.model("Customer",userSchema);

// Exporte le modèle pour pouvoir l'utiliser dans d'autres fichiers
module.exports = User;

 