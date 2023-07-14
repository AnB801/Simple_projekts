import { RiBriefcase3Fill } from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      {/* adding icons */}
      <RiBriefcase3Fill className={styles.todoIcon} />
      {/* adding text of task */}
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}
export default Todo
