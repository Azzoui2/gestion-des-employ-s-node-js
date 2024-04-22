const mongoose = require("mongoose");

// Définition du schéma pour les données
const userSchema = new mongoose.Schema({
  // Champ userNameee de type String
  nom: { type: String  },
  prenom: { type: String  },
  age: { type: Number  },
  email: { type: String  },
  telephon: { type: String  },
  genre: { type: String  },
  paye: { type: String  },

  
} ,{timestamps :true});

// Création du modèle basé sur le schéma
const User = mongoose.model("Customer",userSchema);

// Exporte le modèle pour pouvoir l'utiliser dans d'autres fichiers
module.exports = User;

