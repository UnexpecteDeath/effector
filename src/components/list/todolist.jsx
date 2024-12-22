import styles from "./todoList.module.css";
import completed from "../../assets/completed.svg";
import complete from "../../assets/complete.svg";
import { useUnit } from 'effector-react'
import { TasksStore } from "../../store/store";
import { removeTask, toggleTask } from "../../store/events";

function TodoList() {

  const tasks = useUnit(TasksStore)

  return (
    <>
      <ul className={styles.todoList}>
        {tasks ? tasks.sort((a, b) => b.priority - a.priority).map((task, index) => {
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
                    onClick={()=>toggleTask(task.id)}
                  >
                    <img src={task.completed ? completed : complete}></img>
                  </button>
                  <p>{task.text}</p>
                  <button
                    className={styles.deleteTaskBtn}
                    onClick={()=>removeTask(task.id)}
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
