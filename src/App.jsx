import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = ({ name, age }) => {
  {/* const { name, age } = props; */}
  const bornYear = () => new Date().getFullYear() - age;
 
  return (
    <div>
      <p>Hello { name }, you are { age } years old</p>
      <p>So you were probably born in { bornYear() }</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter';
  const age = 10;
  return (
  <>
    <h1>Greetings</h1>
    <Hello name='Daniel' age={ 15 + 20 }/>
    <Hello name={ name } age={ age }/>
  </>
  )
}

export default App
