import React from "react";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <li
      className={`flex flex-wrap justify-between items-center p-2 border-b last:border-b-0 ${
        completed ? "bg-green-100" : "bg-gray-50"
      }`}
    >
      <span className={`break-words max-w-full sm:max-w-xs ${completed ? "line-through" : ""}`}>
        {text}
      </span>
      <div className="flex space-x-2 mt-2 sm:mt-0">
        <button className="text-blue-500" onClick={() => onToggleComplete(id)}>
          {completed ? "Desfazer" : "Completo"}
        </button>
        <button className="text-red-500" onClick={() => onDelete(id)}>
          Deletar
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
