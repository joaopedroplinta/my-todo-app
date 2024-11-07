import React, { useState } from "react";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddClick = () => {
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Adicione uma nova tarefa"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md"
        onClick={handleAddClick}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
};

export default TodoInput;
