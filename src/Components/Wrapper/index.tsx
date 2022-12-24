import React, { useEffect, useState } from 'preact/compat';
import { cn } from '@/Utils/ClassNames';
import { User } from '@/Classes/User';
import styles from './wrapper.module.css';
import global from '@/global.module.css';

import CardContainer from '../CardContainer';
import Time from '../Time';
import { Task } from 'types';

const user = new User();

const Wrapper: React.FC = () => {
  const [tasks, setTasks] = useState<Task[] | undefined>();

  useEffect(() => {
    const tasks = user.tasks;
    setTasks(tasks);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.lines} />
      <div className={styles.container}>
        <Time />
        <h3 className={cn([global.blink, styles.title])}>JOURNAL</h3>
        {tasks &&
          tasks.map((task) => {
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
