import { useSelector } from "react-redux"

const  TaskList = ()=> {
  const tasks = useSelector(state => state.tasks)

  return (
    <div>
      {
        tasks.map(task => (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList
