import express from 'express';
import cors from "cors"
import { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todoRoutes';

const app = express();

// Problema: Middleware de JSON faltando (RESOLVIDO)
app.use(cors({ origin: "*"}));
app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 3000;

// Problema: Rota raiz sem tratamento adequado (RESOLVIDO)
app.get('/', (req, res) => {
  try {
    res.send('Bem-vindo! API de resolução de problemas');
  } catch (error) {
    res.status(500).send('Erro interno do servidor');
  }
});

// Problema: CORS não configurado (RESOLVIDO)
app.use('/todos', todoRoutes);

// Problema: Middleware de erro não implementado (RESOLVIDO)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Ocorreu um erro:', err);
  res.status(500).json({ error: err.message || 'Erro interno do servidor' })
})


//Problema: Porta hardcoded (RESOLVIDO)
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`)
})