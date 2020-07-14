import React from 'react';
import './style.css';
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'



function App() {
  return (
    <div>
      <Header/>
      <div className = 'todo-list'>
      <MainContent/>
      <MainContent/>
      <MainContent/>
      <MainContent/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
