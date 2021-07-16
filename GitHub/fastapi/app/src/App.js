import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ToDoListView from './TodoListView/TodoListView';

function App() {
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:8000/api/todo').then(res =>{
      setTodoList(res.data)
    })
  });

  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', {'title' : title, 'description' : desc})
    .then(res => console.log(res))
  }

  return (
    <div className="App">
      <hl>Todo List</hl>
      <ToDoListView todoList = {todoList}/>
      <p>Add todo</p>
      <input onChange={event => setTitle(event.target.value)} placeholder = 'Title'/>
      <input onchange={event => setDesc(event.target.value)} placeholder = 'Description'/>
      <button onClick = {addTodoHandler}>Add</button>  
    </div>
  );
}

export default App;
