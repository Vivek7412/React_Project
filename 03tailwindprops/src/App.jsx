import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let Myobj={
    username: "Vivek",
    age:"23"
  }

  return (
    <>
     <h1 className='bg-green-300 text-black p-4 rounded-xl'>Tailwindp Test</h1>
     <Card username="Chai aur Laptop" btnText="Click me" />  
     <Card username="Book aur Laptop" btnText="Visit me" />  
    </>
  )
}

export default App
