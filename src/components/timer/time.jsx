import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    // start,
    // pause,
    // resume,
    // restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
     
      <div style={{}}>
      <div className='timerDiv'>
            <div><p className='timerValue'>{days}</p> <p  className='timerText'>Days</p></div>
            <div><p className='timerValue'>{hours}</p><p className='timerText'>Hours </p></div>
            <div><p className='timerValue'>{minutes}</p><p className='timerText'>Minutes </p></div>
            <div><p className='timerValue'>{seconds}</p><p className='timerText'>Seconds </p></div>
        </div>
        <span></span>:<span></span>:<span></span>:<span></span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button> */}
    </div>
  );
}
export default MyTimer;

