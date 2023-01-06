import React, { useEffect, useState } from 'preact/compat';
import { cn } from '@/Utils/ClassNames';
import styles from './time.module.css';
import global from '@/global.module.css';

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

  return <div className={cn([global.blink, styles.time])}>{date}</div>;
};

export default Time;
