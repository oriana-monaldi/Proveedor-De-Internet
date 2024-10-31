import { clienteRouter } from './routes/clientes.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/api/clientes', clienteRouter);

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
})