import { BiTrash } from 'react-icons/bi'
import Checkbox from './Checkbox'
import { useState } from 'react'

interface TaskProps {
  content: string
  marked?: boolean
  handleMarkedTask: (check: boolean) => void
  handleDeleteTask: (check: boolean) => void
}

export default function Task({
  content,
  marked = false,
  handleMarkedTask,
  handleDeleteTask,
}: TaskProps) {
  const [markedItem, setMarkedItem] = useState(false)

  function handleMarkedItem(marked: boolean) {
    setMarkedItem(marked)
    handleMarkedTask(marked)
  }

  return (
    <div className='flex w-full gap-4 px-2 phone:px-8 py-4 bg-newGray-500 rounded-[8px] min-h-[4.5rem] items-start justify-between'>
      <div className='flex w-max justify-center '>
        <Checkbox
          status={marked}
          handleMarked={(status) => handleMarkedItem(status)}
        />
      </div>
      <span
        className={`overflow-hidden break-all flex w-full justify-center text-[.875rem] text-sm leading-relaxed text-newGray-100 font-light ${
          markedItem ? 'line-through opacity-75' : 'opacity-100'
        }`}
      >
        {content}
      </span>
      <div className='flex w-max justify-center '>
        <BiTrash
          className='h-6 w-6 font-bold text-newGray-300 hover:text-danger cursor-pointer'
          onClick={handleDeleteTask}
        />
      </div>
    </div>
  )
}
