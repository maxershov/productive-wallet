import React, { useEffect, useState } from 'preact/compat';
import styles from './time.module.css';
import globalStyles from '../../global.module.css';

function toTwoDigits(time: number) {
  return time.toString().padStart(2, '0');
}

const Time: React.FC = () => {
  const [today, setToday] = useState(new Date());
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  const time = `${today.getHours()}:${toTwoDigits(today.getMinutes())}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, [today]);

  return (
    <div className={`${globalStyles.blink} ${styles.time}`}>
      {date} {time}
    </div>
  );
};

export default Time;
