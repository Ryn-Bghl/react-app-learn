import { useEffect, useState } from 'react';
import { Input } from "./components/forms/Input.jsx"
import { clear } from '@testing-library/user-event/dist/clear.js';

function App() {

  const [time, setTime] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(time)

  const handleChange = (v) => {
    setTime(v)
    setSecondsLeft(v)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(
        (sec) => {
          if (sec <= 1) {
            clearInterval()
            return 0
          }
          return sec-1;
        }
      )
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [time])

  return   <div className='m-3 vstack gap-2'>
    <Input
      value={time}
      onChange={handleChange}
      placeHolder="enter timer duration"
    />
    <p>Décompte : {secondsLeft}</p>
  </div>
}

export default App;
