import './App.css';
import TodoCreation from './TodoCreation';
import TodoList from './TodoList';

export default function App() {
  return (
    <div className="wrapper bg-slate-900 "> 
      <TodoCreation ele />
      <TodoList />
    </div>
  );
}
