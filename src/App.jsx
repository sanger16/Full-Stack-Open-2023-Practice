import { useState } from 'react'
import './App.css'


const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right:0
  });

  const [allClicks, setAll] = useState([]);

  const [total, setTotal] = useState(0);

  const handleLeftClicks = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }
    setClicks(newClicks);
    setAll(allClicks.concat('L'));
    setTotal(newClicks.left + clicks.right);
  }

  const handleRightClicks = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks);
    setAll(allClicks.concat('R'));
    setTotal(newClicks.right + clicks.left);
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
    <p>{allClicks.join(' ')}</p>
    <p>total {total}</p>
  </>
  )
}

export default App
