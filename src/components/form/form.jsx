import styles from "./form.module.css";
import imageBtn from "../../assets/more.svg";
import { useState } from "react";
import { addTask } from "../../store/events";

function FormTodo() {

  const [more, setMore] = useState(false);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(1);



  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text.trim())  return;
    const task = {
      id: Date.now(),
      text: text,
      completed: false,
      priority: priority,
    }
    addTask(task)
    setText('')
  };

  return (
    <>
      <form className={styles.formTodo} onSubmit={handleSubmit}>
        <button
          type="button"
          className={
            more ? styles.moreBtn : `${styles.moreBtn} ${styles.moreBtnActive}`
          }
          onClick={() => setMore(!more)}
        >
          <img src={imageBtn} alt=""></img>
        </button>
        <input
          className={styles.inoutTodo}
          placeholder="Write to do..."
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="submit">done!</button>
      </form>
      <div
        className={
          !more
            ? styles.moreSetTask
            : `${styles.moreSetTask} ${styles.moreSetActive}`
        }
      >
        <div className={styles.deadlineContainer}>
          <label htmlFor="deadline">Priority:</label>
          <button
            className={styles.priorityBtn}
            onClick={() => setPriority(3)}
            disabled={priority === 3}
          >
            High Priority
          </button>
          <button
            className={styles.priorityBtn}
            onClick={() => setPriority(2)}
            disabled={priority === 2}
          >
            Medium Priority
          </button>
          <button
            className={styles.priorityBtn}
            onClick={() => setPriority(1)}
            disabled={priority === 1}
          >
            Low Priority
          </button>
        </div>
      </div>
    </>
  );
}

export default FormTodo;
