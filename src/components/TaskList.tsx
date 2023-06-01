// image
import { useState } from 'react'
import clipboard from '../assets/clipboard.svg'
import Task from './Task'
import InsertField from './InsertField'

interface TasksProps {
  id: number
  content: string
  marked: boolean
}

export default function Tasks() {
  const [counter, setCounter] = useState(0)
  const [tasks, setTasks] = useState<TasksProps[]>([])

  function counterMarkedItem(list?: TasksProps[]) {
    let counterItems = 0
    const newList = list ? [...list] : [...tasks]

    if (!newList.length) return setCounter(counterItems)

    newList.map((e) => {
      counterItems = e.marked ? counterItems + 1 : counterItems
    })

    setCounter(counterItems)
  }

  function handleMarkedTask(status: boolean, id: number) {
    const taskIndex = tasks.findIndex((e) => e.id === id)
    const newTasks = tasks
    newTasks[taskIndex].marked = status
    setTasks(newTasks)
    counterMarkedItem()
  }
  function handleDeleteTask(id: number) {
    const newTasksList = [...tasks]
    const taskIndex = newTasksList.findIndex((e) => e.id === id)
    newTasksList.splice(taskIndex, 1)
    setTasks(newTasksList)
    counterMarkedItem(newTasksList)
  }

  function handleCreateTask(content: string) {
    if (!content) return

    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 0
    const newTasksList = [...tasks]

    const newTask = {
      id,
      content,
      marked: false,
    }

    newTasksList.push(newTask)

    setTasks(newTasksList)
  }

  return (
    <div className=' flex flex-col w-full'>
      <InsertField handleCreateTask={handleCreateTask} />
      {/* Header */}
      <div className='flex mt-8 justify-between border-b border-newGray-300 pb-8 phone:mt-16'>
        <div className='flex items-center gap-2'>
          <span className='text-blue-light'>Tarefas criadas</span>
          <span className='flex bg-newGray-400 text-newGray-200 rounded-lg w-[1.563rem] h-[1.189rem] justify-center items-center text-sm'>
            {tasks.length}
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-purple-light'>Concluídas</span>
          <span className='flex bg-newGray-400 text-newGray-200 rounded-lg px-2 max-w-[5rem] h-[1.189rem] justify-center items-center text-sm'>
            {tasks.length ? `${counter} de ${tasks.length}` : '0'}
          </span>
        </div>
      </div>

      {/* body */}
      <div className='overflow-y-auto flex flex-col w-full h-[100vw] phone:h-[30vw] monitor:h-[35vw] mt-8'>
        {tasks.length ? (
          <div className='flex flex-col w-full flex-1 items-center justify-start gap-8'>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  content={task.content}
                  marked={task.marked}
                  handleMarkedTask={(status) =>
                    handleMarkedTask(status, task.id)
                  }
                  handleDeleteTask={() => handleDeleteTask(task.id)}
                />
              )
            })}
          </div>
        ) : (
          <div className='flex flex-col w-full flex-1 items-center justify-center gap-8'>
            <img src={clipboard} alt='' />
            <div className='flex flex-col items-center'>
              ``
              <span className='flex text-newGray-300 font-bold text-[1rem]'>
                Você ainda não tem tarefas cadastradas
              </span>
              <span className='flex text-newGray-300 font-light text-[1rem]'>
                Crie tarefas e organize seus itens a fazer
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
