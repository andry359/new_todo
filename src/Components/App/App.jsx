import { useState } from 'react'
import './App.css'
import CreateTask from '../CreateTask/CreateTask'
import TaskList from '../TaskList/TaskList'

/**
 * Компонент с общим состоянием всех тасок
 * @return возвращает собранное приложение
 */
function App() {

  const [todo, setTodo] = useState([]);

  return (
    <div className="app">
      <CreateTask todo={todo} setTodo={setTodo} />
      <TaskList todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App
