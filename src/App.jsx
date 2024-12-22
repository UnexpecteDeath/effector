import { useEffect } from 'react'
import './App.css'
import FormTodo from './components/form/form'
import TodoList from './components/list/todolist'
import { fetchTask } from './store/effects'

function App() {

  useEffect(()=>{
    fetchTask()

  },[])

  return (
    <>
    <h1>Todo-app with effector</h1>
    <FormTodo/>
    <h2>Todo list</h2>
    <TodoList/>
    </>
  )
}

export default App;
