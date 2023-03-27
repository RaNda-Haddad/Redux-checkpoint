import './App.css';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddTodo />
    <TodoList />
    </div>
  );
}

export default App;