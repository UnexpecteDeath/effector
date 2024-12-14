import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    tasks: [],
    filter: 'all'
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const [text, priority] = action.payload;
            state.tasks.push({
                id: Date.now(),
                text: text,
                priority: priority,
                completed: false,
            });
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        toogleTaskComplete: (state, action) => {
            const task = state.tasks.find(t => t.id === action.payload);
            if(!task) return;
            task.completed = !task.completed
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})
export const { addTask, removeTask, toogleTaskComplete, setFilter } = todoSlice.actions;
export default todoSlice.reducer;