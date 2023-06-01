// image
import toDoLogo from '../assets/todoLogo.svg'

export default function Header() {
  return (
    <div className='flex w-full h-full  bg-newGray-700 justify-center items-center'>
      <img src={toDoLogo} alt='logo' />
    </div>
  )
}
