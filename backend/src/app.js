import express, { json } from 'express'
import { clienteRouter } from './routes/cliente.js';


const PORT = process.env.PORT || 3000;

const app = express();
app.use(json());


app.use('/clientes', clienteRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});


