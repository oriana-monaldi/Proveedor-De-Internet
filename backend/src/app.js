import express from 'express';
import { clienteRouter } from './routes/clientes.js';
import { PrismaClient } from '@prisma/client';

const PORT = process.env.PORT || 3000;

const app = express();

export const prisma = new PrismaClient();

app.use(express.json());

app.use('/api/clientes', clienteRouter);

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
})