import styles from './TodoItem.module.css';

export default function TodoItem({ todo, todos, setTodos }) {
  // todos배열요소 모두(t)에서 todo.id가 같으면
  // 해당객체의 done을 변경하고
  // todo.id와 같지않은 배열요소는 원래 객체를 리턴
  function handleDone() {
    setTodos(
      todos.map((t) => {
        return t.id === todo.id ? { ...t, done: !t.done } : t;
      })
    );
  }

  return (
    <li className={styles.todo_item}>
      <input id={`check${todo.id}`} type="checkbox" />
      <label className={todo.done === true ? styles.done : ''} htmlFor={`check${todo.id}`} onClick={handleDone}>
        {todo.text}
      </label>
      <button type="button">remove</button>
    </li>
  );
}
