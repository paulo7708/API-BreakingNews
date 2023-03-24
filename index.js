const express = require("express");
const userRoute = require("./src/routes/user.route");
const connectDatabase = require("./src/database/db");

const app = express();

const port = 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
//ROTA
// Metodo HTTP - CRUD (CREAT, READ, UPDATE, DELETE)
// Get - Pega info
// Post - Cria uma info
// Put - Altera toda info
// Patch - Altera parte da info
// Delete - Apaga uma info

// Name - Um identificador da rota
// Function (Callback)

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
