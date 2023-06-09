// style
import './index.css'

// components
import Header from './components/Header'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex w-full h-[12.5rem]'>
        <Header />
      </div>
      <div className='flex flex-col items-start w-full px-[1rem] phone:px-[25%] flex-1 bg-background gap-20'>
        <TaskList />
      </div>
    </div>
  )
}

export default App
