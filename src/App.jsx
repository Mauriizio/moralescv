import { useState } from 'react'
import Curriculo from './components/Curriculo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className= "min-h-screen bg-gray-100 flex flex-col items-center px-0 py-0 font-sans overflow-x-hidden">

      <Curriculo/>



      </div>
      
    </>
  )
}

export default App
