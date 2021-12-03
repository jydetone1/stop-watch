import React, { useState, useEffect } from 'react';
import style from './Control.module.scss';

type Props = {
  setTimer: Function;
};

const Controls = (props: Props) => {
  const { setTimer } = props;
  const [intervalId, setIntervalId] = useState(false);

  useEffect(() => {
    if (intervalId) {
      const interval: any = setInterval(() => {
        setTimer((previousState: number) => previousState + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [intervalId, setTimer]);

  const handleStartButton = () => {
    setIntervalId(true);
  };

  const handleStopButton = () => {
    setIntervalId(false);
  };

  const handleWaitButton = () => {
    setTimeout(() => {
      setIntervalId(false);
    }, 3000);
  };

  const handleResetButton = () => {
    setIntervalId(false);
    setTimer(0);
  };

  return (
    <div className={style.btn__group}>
      {intervalId ? (
        <button onClick={handleStopButton}>stop </button>
      ) : (
        <button onClick={handleStartButton}> start </button>
      )}
      <button onDoubleClick={handleWaitButton}>wait</button>
      <button
        disabled={!intervalId}
        className={style.reset}
        onClick={handleResetButton}
      >
        reset
      </button>
    </div>
  );
};

export default Controls;
