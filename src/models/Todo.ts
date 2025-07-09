// Problema: Tipo não exportado
interface Todo {
  id: string;
  title: string;
  description?: string; // Problema: Propriedade opcional sem tratamento adequado
  completed: boolean; // Problema: Valor padrão não definido
  createdAt: Date;
  updatedAt?: Date; // Problema: Campo nunca atualizado
}

// Problema: Exportação incorreta
export default Todo;