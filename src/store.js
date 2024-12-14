import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./components/todoSlice/todoSlice.js"

export  const store = configureStore({
    reducer: {
        todos:  todoReducer
    }
})