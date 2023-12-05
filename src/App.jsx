import { useState } from 'react'
import './App.css'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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
    <Button handleClick={handleLeftClicks} text='left' > </Button>
    <Button handleClick={handleRightClicks} text='right' />
    { clicks.right }
    <p>{allClicks.join(' ')}</p>
    <p>total {total}</p>
    <History allClicks={allClicks} />
  </>
  )
}

export default App
