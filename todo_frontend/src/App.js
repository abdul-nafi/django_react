import React, {useState,useEffect} from "react";
import './App.css';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos =async()=>{
    try{
      const response = await fetch("api/todos/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTodos(data);
    }catch( error){
      console.error('Failed to fetch todos:',error);
    }
  }

  const addTodo = async (newTodo) =>{
    try{
      const response = await fetch('api/todos/',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });
      
      const createdTodo = await response.json();

      setTodos((prevTodos) => [...prevTodos, createdTodo]);
    }catch(error){
      console.error('Failed to add todo:', error);
    }
  };
  useEffect(()=>{
    fetchTodos();},[]);

  return (
    
  <div className="App">
      <header className="App-header">
        <h1>Django-React Todo List</h1>
      </header>
      <main>
        {/* We now use our separate, clean components */}
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </main>
    </div>
  );
}

export default App;
