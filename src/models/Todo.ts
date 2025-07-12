export interface Todo {
  id: string;
  title: string;
  description?: string | ""; // Propriedade opcional corretamente tipada (RESOLVIDO)
  completed?: false;  // Valor padrão pode ser definido na criação do objeto (RESOLVIDO)
  createdAt: Date;
  updatedAt?: Date; // Campo opcional, deve ser atualizado quando o Todo for modificado(RESOLVIDO)
}


