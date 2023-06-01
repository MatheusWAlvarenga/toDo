import React, { useState } from 'react'
import plus from '../assets/plus.svg'

interface InsertFieldProps {
  handleCreateTask: (content: string) => void
}
export default function InsertField({ handleCreateTask }: InsertFieldProps) {
  const [newTask, setNewTask] = useState('')
  function handleOnChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault()
    setNewTask(event.currentTarget.value)
  }

  function handleCreateANewTask(event: { preventDefault: () => void }) {
    event.preventDefault()
    handleCreateTask(newTask)
    setNewTask('')
  }
  return (
    <form className='phone:flex w-full justify-center gap-4 -mt-8'>
      <input
        className='flex px-4 py-2 w-full h-[3.25rem] bg-newGray-500 rounded-lg border border-newGray-700 text-newGray-100 font-light placeholder:text-newGray-300 focus:outline-none focus:border focus:border-purple-dark'
        type='text'
        maxLength={80}
        placeholder='Adicione uma nova tarefa'
        name='newTask'
        value={newTask}
        onChange={handleOnChange}
      />

      <button
        onClick={handleCreateANewTask}
        className='flex h-[3.25rem] w-full mt-4 phone:mt-0 phone:w-[6.5rem] justify-center items-center gap-2 bg-blue-dark hover:bg-blue-light text-newGray-100 rounded-lg font-bold text-sm transition-color duration-100'
      >
        Criar <img src={plus} alt='' />
      </button>
    </form>
  )
}
