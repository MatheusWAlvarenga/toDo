// vendors
import { useState } from 'react'

// icon
import { BiCheck } from 'react-icons/bi'

interface CheckboxProps {
  status?: boolean
  handleMarked: (itemStatus: boolean) => void
}

export default function Checkbox({
  status = false,
  handleMarked,
}: CheckboxProps) {
  const [marked, setMarked] = useState(false)

  function handleState() {
    const itemStatus = marked
    setMarked(!itemStatus)
    handleMarked(!itemStatus)
  }

  return (
    <div className='transition duration-500'>
      {marked || status ? (
        <div
          className='flex justify-center items-center rounded-full bg-purple-dark h-6 w-6 hover:bg-purple-light cursor-pointer'
          onClick={handleState}
        >
          <BiCheck className='h-5 w-5 text-newGray-100' />
        </div>
      ) : (
        <div
          className='flex rounded-full border-2 border-blue-light hover:border-blue-dark h-6 w-6 hover:bg-blue-dark hover:bg-opacity-10 cursor-pointer'
          onClick={handleState}
        >
          {' '}
        </div>
      )}
    </div>
  )
}
