import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TaskForm from './TaskForm'
import TaskList from './TaskList'


const TaskBoard = () => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
    if (!user) navigate('/login')
  }, [user, navigate])

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className='btn' onClick={() => navigate('/all-tasks')}>Check Tasks</button>
          </div>
      </section>
      <TaskForm /> 
      <hr />
      <TaskList/>

    </>
  )
}

export default TaskBoard