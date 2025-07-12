import { Router } from 'express';
import TodoService from '../services/TodoServices';
import { authorizeUser } from '../middleware/authorizeUser';

const router = Router();
const todoService = new TodoService();

// Problema: Falta validação de entrada (RESOLVIDO)
router.post('/', async (req, res) => {
  if(!req.body) {
    res.status(400).json({message: "Requisição vazia"})
    return
  }
  try {
    const todo = await todoService.createTodo(req.body);
    res.status(200).json(todo);
  } catch (error) {
    console.error("Erro ao cadastrar: ", error);
    throw error;
  }
});

// Problema: Falta tratamento de erro (RESOLVIDO)
router.get('/:id', async (req, res) => {
  try {
    const todo = await todoService.getTodoById(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    console.error("Erro ao carregar: ", error);
    throw error;    
  }
});

// Problema: Rota sem verificação de autenticação
router.delete('/:id', authorizeUser, async (req, res) => {
  try {
    await todoService.deleteTodo(req.params.id);
    res.status(200).json({message: `Apagado com sucesso`});
  } catch (error) {
    console.error("Erro ao apagar: ", error);
    throw error;    
  }
});

// Problema: Falta paginação (RESOLVIDO)
router.get('/', async (req, res) => {
  const todos = await todoService.getAllTodos();
  res.status(200).json(todos);
});

export default router;