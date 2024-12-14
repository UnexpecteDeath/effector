import { removeTask, toogleTaskComplete, setFilter } from "../todoSlice/todoSlice";
import styles from "./todoList.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import completed from "../../assets/completed.svg";
import complete from "../../assets/complete.svg";

function TodoList() {
  const tasks = useSelector((state) => {
    switch(state.todos.filter) {
      case 'all':
        return state.todos.tasks;
        break;
      case 'completed':
        return state.todos.tasks.filter((task) => task.completed);
        break;
      case 'complete':
        return state.todos.tasks.filter((task) => !task.completed);
    }
  });

  const currentFilter = useSelector((state) => { return state.todos.filter})

  const dispatch = useDispatch();
  const sortTask = [...tasks].sort((a, b) => b.priority - a.priority);
  return (
    <>
      <div className={styles.filterBtnCont}>
        <button onClick={()=>dispatch(setFilter('all'))} disabled={currentFilter === 'all'}>All</button>
        <button onClick={()=>dispatch(setFilter('completed'))} disabled={currentFilter === 'completed'}>Completed</button>
        <button onClick={()=>dispatch(setFilter('complete'))} disabled={currentFilter === 'complete'}>Not Completed</button>
      </div>
      <ul className={styles.todoList}>
        {sortTask
          ? sortTask.map((task, index) => {
              return (
                <li className={styles.task} key={index}>
                  {task.priority ? (
                    <div
                      className={
                        task.priority === 3
                          ? styles.redMark
                          : task.priority === 2
                          ? styles.yellowMark
                          : task.priority === 1
                          ? styles.greenMark
                          : ""
                      }
                    ></div>
                  ) : (
                    ""
                  )}
                  <button
                    className={styles.moreTask}
                    onClick={() => dispatch(toogleTaskComplete(task.id))}
                  >
                    <img src={task.completed ? completed : complete}></img>
                  </button>
                  <p>{task.text}</p>
                  <button
                    className={styles.deleteTaskBtn}
                    onClick={() => dispatch(removeTask(task.id))}
                  >
                    Delete
                  </button>
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
}

export default TodoList;
