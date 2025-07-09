import express from 'express';
import todoRoutes from './routes/todoRoutes';

const app = express();

// Problema: Middleware de JSON faltando
app.use(express.urlencoded());

// Problema: Rota raiz sem tratamento adequado
app.get('/', (req, res) => {
  res.send('Bem-vindo!');
});

// Problema: CORS não configurado
app.use('/todos', todoRoutes);

// Problema: Middleware de erro não implementado
app.use((err, req, res, next) => {
  console.log('Ocorreu um erro');
});

// Problema: Porta hardcoded
app.listen(3000, () => {
  console.log('Servidor rodando...');
});