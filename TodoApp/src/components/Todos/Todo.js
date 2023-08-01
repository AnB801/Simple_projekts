import { RiBriefcase3Fill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todo}>
      {/* adding icons */}
      <RiBriefcase3Fill
        className={`${styles.todo} ${
          todo.isCompleted ? styles.completedTodo : ''
        }`}
      />
      {/* adding text of task */}
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  )
}
export default Todo
