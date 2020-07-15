import React from 'react';
import './style.css';
import Header from './components/Header'
import todoData from './components/todoData'
import Footer from './components/Footer'
import TodoItems from './components/TodoItems'



function App() {
  const todoItem = todoData.map(item => <TodoItems key={item.id} item={item}/>)
  return (
    <div>
      <Header/>
      <div className = 'todo-list'>
      {todoItem}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
