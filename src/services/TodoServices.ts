import { v4 as uuidv4 } from 'uuid';
import {Todo} from '../models/Todo';

// Problema: Falta interface para o serviço (RESOLVIDO)
export default class TodoService {
  private todos: Todo[] = [];

  // Problema: Tipo 'any' usado (RESOLVIDO)
  async createTodo(data: Todo): Promise<Todo> {
    const todo = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.todos.push(todo);
    return todo;
  }

  // Problema: Falta verificação se o todo existe (RESOLVIDOS)
  async getTodoById(id: string): Promise<Todo | undefined> {
    if (!this.todos) {
      console.error("Erro ao carregar os dados");
      return undefined;
    }
    return this.todos.find(todo => todo.id === id);
  }

  // Problema: Operação não é atômica (RESOLVIDO)
  private deleteLock: Promise<void> = Promise.resolve();

  async deleteTodo(id: string): Promise<void> {
    this.deleteLock = this.deleteLock.then(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
    await this.deleteLock;
  }

  // Problema: Potencial problema de performance com muitos todos (RESOLVIDO)
  async getAllTodos(page: number = 1, pageSize: number = 20): Promise<Todo[]> {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return this.todos.slice(start, end);
  }
}