import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask } from './todoSlice'

function ToDo() {
    const todos = useSelector((state) => state.todo.list)
    const dispatch = useDispatch()
    const [task, setTask] = useState('')

    const handleAdd = () => {
        const trimmedTask = task.trim()

        if (trimmedTask) {
            dispatch(addTask(trimmedTask))
            setTask('')
        }
    }

  return (
    <div>
        <h1>To Do List</h1>
        <input type="text" placeholder='type task' value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        <ul>
            {todos.map((t,i) => (
                <li key={i}>{t} <button onClick={() => dispatch(removeTask(i))}>R</button></li>
            ))}
        </ul>
    </div>
  )
}

export default ToDo