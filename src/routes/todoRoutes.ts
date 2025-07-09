import { Router } from 'express';
import TodoService from '../services/TodoService';

const router = Router();
const todoService = new TodoService();

// Problema: Falta validação de entrada
router.post('/', async (req, res) => {
  const todo = await todoService.createTodo(req.body);
  res.json(todo);
});

// Problema: Falta tratamento de erro
router.get('/:id', async (req, res) => {
  const todo = await todoService.getTodoById(req.params.id);
  res.json(todo);
});

// Problema: Rota sem verificação de autenticação
router.delete('/:id', async (req, res) => {
  await todoService.deleteTodo(req.params.id);
  res.sendStatus(200);
});

// Problema: Falta paginação
router.get('/', async (req, res) => {
  const todos = await todoService.getAllTodos();
  res.json(todos);
});

export default router;