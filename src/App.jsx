import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  return (
  <div>
    <p>Hello World, it is { now.toString() }</p>
    <p>
      { a } plus { b } is { a + b }
    </p>
  </div>
  )
}

export default App
