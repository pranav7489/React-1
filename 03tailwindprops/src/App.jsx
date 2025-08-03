import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className='bg-green-400 text-black rounded-xl Tailwind test p-4 '> 
        tailwind css
       </h1>
       <Card chanel="chai aur code"/>
       <Card chanel="Hietsh Chaudhary"/>
       
    </>
  )
}

export default App
