import React from 'react'
import styles from './showTodo.module.css'

import Todo from '../todo/Todo'

const ShowTodos = ({todos}) => {

  return (
    <div id={styles.todoContainer}>
        {
            todos.map((todo) => <Todo todo={todo} key={todo.id} />)
        }  
    </div>
  )
}

export default ShowTodos