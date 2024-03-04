import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';

function App() {
  return (
    <div className='App'>

      <TodoCounter />
      <TodoSearch />
      <TodoList>
          <TodoItem />
          <TodoItem />
          <TodoItem />
      </TodoList>
       <CreateToDoButton />
    </div>
  );
}

export default App;
