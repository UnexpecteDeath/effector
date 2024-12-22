import { createStore } from 'effector'
import { addTask, removeTask, toggleTask } from './events';
import { fetchTask } from './effects';


export const TasksStore = createStore([])
    .on(addTask, (state, task) => [task, ...state])
    .on(toggleTask, (state, id) =>
        state.map((task) =>
            task.id === id ? {...task, completed: !task.completed} : task
    ))
    .on(fetchTask.doneData, (state, tasks) => [...state, ...tasks])
    .on(removeTask, (state, id) =>
        state.filter((task) => task.id !== id)
    );