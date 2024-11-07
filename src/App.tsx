import React from 'react';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <TodoList />
    </div>
  );
};

export default App;
