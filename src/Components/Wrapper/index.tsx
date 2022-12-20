import React from 'preact/compat';
import { cn } from '@/Utils/ClassNames';
import styles from './wrapper.module.css';
import global from '@/global.module.css';

import CardContainer from '../CardContainer';
import Time from '../Time';
import { tasks } from '@/BFF/mock';

const Wrapper: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.lines} />
      <div className={styles.container}>
        <Time />
        <h3 className={cn([global.blink, styles.title])}>JOURNAL</h3>
        {tasks.map((task) => {
          const { ID, userId, title, type, price, date } = task;
          return (
            <CardContainer
              ID={ID}
              title={title}
              type={type}
              price={price}
              date={date}
              userId={userId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wrapper;
