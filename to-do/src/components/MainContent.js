import React from 'react';

// const Greet = () => <h1>Hello Kate</h1>

// export default Greet

// // export const Greet = () => <h1>Hello Kate</h1>

function MainContent(props){
    return ( 
    <div className = 'todo-item'>
      <input type="checkbox" />
      <h3>{props.contact.name}</h3>
      <br />
      <p>When: {props.contact.month}</p> 
      <br /> 
      <p>Phone: {props.contact.phone}</p>  
      <br />
      <p>Web page: {props.contact.website}</p> 
      <br /> 
    </div>
    )
  }

export default MainContent