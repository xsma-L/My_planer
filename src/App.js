import { useState, } from "react";
import data from "./data.json";

import Header from './Header';
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

import './App.css';

function App() {

  const [ toDoList, setToDoList ] = useState(data);
  const [isOpen, setIsOpen] = useState(false);


  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }

  const handleFilter = (id) => {
    let filtred = toDoList.filter(task => {
      return task.id !== id;
    });
    setToDoList(filtred);
  }

  const taskCompleted = (id) => {
    var index = toDoList.findIndex(function (task){
      if(task.id === id) {
        return true;
      }
    })

    let newToDoList = [...toDoList];
    newToDoList[index].complete = true;

    setToDoList(newToDoList);
  }

  const taskUncompleted = (id) => {
    console.log('...');
    var index = toDoList.findIndex(function (task){
      if(task.id === id){
        return true;
      }
    })

    let newToDoList = [...toDoList];
    newToDoList[index].complete = false;

    setToDoList(newToDoList);
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [ ...copy, {id: toDoList.length +1, task: userInput, complete: false }]
    setToDoList(copy);
  }


  return (
    <div className="App">
      <Header />
      <div id="todo-container">
        <span className="cross" onClick={openModal}>Ajouter une tâche</span>
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} taskCompleted={taskCompleted} taskUncompleted={taskUncompleted} />
      </div>
      <ToDoForm addTask={addTask} isOpen={isOpen} closeModal={closeModal} /> 
    </div>
  );
}

export default App; 