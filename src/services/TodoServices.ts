import { v4 as uuidv4 } from 'uuid';
import Todo from '../models/Todo';

// Problema: Falta interface para o serviço
export default class TodoService {
  private todos: Todo[] = [];

  // Problema: Tipo 'any' usado
  async createTodo(data: any): Promise<Todo> {
    const todo = {
      id: uuidv4(),
      ...data,
      createdAt: new Date()
    };
    this.todos.push(todo);
    return todo;
  }

  // Problema: Falta verificação se o todo existe
  async getTodoById(id: string): Promise<Todo> {
    return this.todos.find(todo => todo.id === id);
  }

  // Problema: Operação não é atômica
  async deleteTodo(id: string): Promise<void> {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // Problema: Potencial problema de performance com muitos todos
  async getAllTodos(): Promise<Todo[]> {
    return [...this.todos];
  }
}