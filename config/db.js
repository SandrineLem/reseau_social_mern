const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.avdz0.mongodb.net/reseau-social",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Connexion à MongoDB échouée !", err));