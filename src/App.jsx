import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello { props.name }, you are { props.age } years old</p>
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
