import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from  './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'Talha',
    age: 28
  }
   
  let newArr = [1, 2, 3]

  return (
    <>
        <Card username="chai aur code" btnText = 'click me'/>
        <Card username="Mast Item" btnText = 'visit me' />

    </>
  )
}

export default App
