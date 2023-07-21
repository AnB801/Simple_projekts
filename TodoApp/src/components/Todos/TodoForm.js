import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHendler = (event) => {
    event.preventDefault() // stay on this paje
    addTodo(text)
    setText('') //delete input text after submitting
  }
  return (
    <div className={styles.TodoFormContainer}>
      <form onSubmit={onSubmitHendler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
