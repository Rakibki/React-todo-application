import React from 'react'
import styles from './Todo.module.css'
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';


const Todo = ({todo}) => {
  return (
    <div className='flex p-4 justify-between px-10' id={styles.todo}>
      <div>
        <div className='flex gap-3'>
          <input type="checkbox" name="" id="" />
          <p>task 1</p>
          <p>{todo.value}</p>
        </div>
      </div>
      <div className='flex gap-2'>
          <AiFillDelete className='text-[25px] cursor-pointer' />
          <BiEdit className='text-[25px] cursor-pointer' />
      </div>
    </div>
  )
}

export default Todo