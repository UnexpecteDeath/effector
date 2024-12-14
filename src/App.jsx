import './App.css'
import FormTodo from './components/form/form'
import TodoList from './components/list/todolist'

function App() {
  return (
    <>
    <h1>Todo-app</h1>
    <FormTodo/>
    <h2>Todo list</h2>
    <TodoList/>
    </>
  )
}

export default App
