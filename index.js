import express from 'express'
import userRoute from './src/routes/user.route.js'
import connectDatabase from './src/database/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

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
