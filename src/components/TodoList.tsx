import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  // Carregar a lista de tarefas do localStorage
  const loadTodos = (): Todo[] => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  };

  // Inicializar o estado com a lista carregada do localStorage
  const [todos, setTodos] = useState<Todo[]>(loadTodos);

  // Salvar a lista de tarefas no localStorage sempre que ela for alterada
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Função para adicionar uma nova tarefa
  const handleAddTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Função para alternar o estado de conclusão de uma tarefa
  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Função para excluir uma tarefa
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">To-Do List</h2>

      {/* Componente TodoInput */}
      <TodoInput onAddTodo={handleAddTodo} />

      <ul className="space-y-2">
        {/* Renderiza cada tarefa com TodoItem */}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
