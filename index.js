const express = require('express');
const userRoute = require('./src/routes/user.route')

const app = express();

app.use("/soma", userRoute)
//ROTA
  // Metodo HTTP - CRUD (CREAT, READ, UPDATE, DELETE)
    // Get - Pega info
    // Post - Cria uma info
    // Put - Altera toda info
    // Patch - Altera parte da info
    // Delete - Apaga uma info

  // Name - Um identificador da rota
  // Function (Callback)

app.listen(3000);