import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import NewTodo from './components/NewTodo';
import { Todo } from './models/todo.models'



const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

 function addToto<T extends Todo>(todo: T) {
   
   setTodos([...todos, todo]);
 }

  return (
    <div className="App">
      <NewTodo addTodo = {addToto}/>
      <TodoList items = {todos} />
    </div>
  );
}

export default App;
