import express from 'express'
import connectDatabase from './src/database/db.js';
import dotenv from 'dotenv';

import userRoute from './src/routes/user.route.js'
import authRoute from './src/routes/auth.route.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
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
