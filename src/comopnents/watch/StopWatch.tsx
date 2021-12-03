import React, { useState, useEffect } from 'react';
import style from './StopWatch.module.scss';
import Controls from '../controls/Controls';
import Timer from '../../helper/Timer';

const StopWatch = () => {
  const [time, setTimer] = useState<number>(0);
  const [timerCount, setTimerCount] = useState<Array<number | string>>([]);

  useEffect(() => {
    const timeCount: Array<number | string> = Timer(time);
    setTimerCount(timeCount);
  }, [time]);

  return (
    <main className={style.stop__watch}>
      <section className={style.watch__timer}>
        <h1>StopWatch</h1>
        <div className={style.circle}>
          <p>{timerCount[0]}</p>
          <span>:</span>
          <p>{timerCount[1]}</p>
          <span>:</span>
          <p>{timerCount[2]}</p>
        </div>
        <Controls setTimer={setTimer} />
      </section>
    </main>
  );
};

export default StopWatch;
