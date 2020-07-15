import React from 'react'


function TodoItems(props){
  return (
      <div className = "todo-item">
          <input  type ="checkbox" />
          <p>{props.item.activity}</p>
      </div>
  )
}
// checked ={props.item.completed}
export default TodoItems