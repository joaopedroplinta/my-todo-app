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
      className={`flex justify-between items-center p-2 border-b ${
        completed ? "bg-green-100 line-through" : "bg-gray-50"
      }`}
    >
      <span>{text}</span>
      <div className="flex space-x-2">
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
