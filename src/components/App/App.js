import { useState, useEffect, useRef } from 'react';
import Timer from '../Timer/Timer';
import Buttons from '../Buttons/Buttons';
import './App.css';

function App() {
  const interval = useRef(null);
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (timerOn) {
      interval.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const start = () => {
    setTimerOn(true);
  };

  const stop = () => {
    setTimerOn(false);
    setTime(0);
  };

  const wait = () => {
    setCounter(counter + 1);

    setTimeout(() => {
      setCounter(0);
    }, 300);
    if (counter === 1) {
      setTimerOn(false);
    }
  };

  const reset = () => {
    setTime(0);
    start();
  };

  return (
    <div className="timer">
      <Timer time={time}></Timer>

      <Buttons
        onStart={start}
        onStop={stop}
        onReset={reset}
        onWait={wait}
        status={timerOn}
      ></Buttons>
    </div>
  );
}

export default App;
