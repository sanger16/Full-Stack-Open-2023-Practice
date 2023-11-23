import { useState } from 'react'
import './App.css'


const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right:0
  });

  const handleLeftClicks = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }
    setClicks(newClicks);
  }

  const handleRightClicks = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks);
  }

  return (
  <>
    { clicks.left }
    <button onClick={ handleLeftClicks }>
      left
    </button>
    { clicks.right }
    <button onClick={ handleRightClicks }>
      right
    </button>
  </>
  )
}

export default App
