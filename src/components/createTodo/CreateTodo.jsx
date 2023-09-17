import {useState} from 'react'
import styles from './CreateTodo.module.css'

const CreateTodo = ({getTodo}) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
      getTodo(value)
      setValue("")
    }

  return (
    <div id={styles.TodoCreateFild}>
        <input value={value} onChange={handleChange} id={styles.creteInput} type="text" />
        <button onClick={handleClick} id={styles.createBtn}>Add Todo</button>
    </div>
  )
}

export default CreateTodo