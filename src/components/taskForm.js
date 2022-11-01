import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from '../feature/taskSlice'

const  TaskForm = ()=> {

  const dispatch = useDispatch()

  const [task, setTask] = useState({})

  const handlerChange = e => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handlerSubmit= (e)=> {
    e.preventDefault()
    dispatch(addTask(task))
  }

  return (
    <form onSubmit={handlerSubmit}> 
      <input 
        type="text" 
        name="title" 
        onChange={handlerChange}
        placeholder="title" 
        />
      <textarea 
        name="description"  
        rows="2"
        onChange={handlerChange}
        placeholder="Description">
      </textarea>
      <button>
        Save
      </button>
    </form>
  )
}

export default TaskForm
