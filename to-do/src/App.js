import React from 'react';
import logo from './logo.svg';
import './App.css';
// import MyComponent from './components/Greet'
// import {Greet} from './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
     {/* <MyComponent/> */}
     <Greet/>
     <Welcome/>
    </div>
  );
}

export default App;