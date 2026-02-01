import React, { useEffect, useState } from 'preact/compat';
import styles from './time.module.css';

const Time: React.FC = () => {
  const [today, setToday] = useState(new Date());

  const formatDate = (date: Date): string => {
    const weekday = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(date);
    const day = new Intl.DateTimeFormat('en-GB', { day: '2-digit' }).format(date);
    const month = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(date);
    const year = new Intl.DateTimeFormat('en-GB', { year: 'numeric' }).format(date);
    const hour = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }).format(date);
    
    return `${weekday} ${day} ${month} ${year} ${hour}`;
  };

  const date = formatDate(today);

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <div className={styles.time}>{date}</div>;
};

export default Time;
