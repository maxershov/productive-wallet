import React, { useEffect, useState } from 'preact/compat';
import styles from './time.module.css';

const Time: React.FC = () => {
  const [today, setToday] = useState(new Date());
  const date = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(today);

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, [today]);

  return <div className={styles.time}>{date}</div>;
};

export default Time;
