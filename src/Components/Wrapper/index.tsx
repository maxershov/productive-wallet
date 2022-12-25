import React, { useEffect, useState } from 'preact/compat';
import { cn } from '@/Utils/ClassNames';
import { user } from '@/Classes/User';
import styles from './wrapper.module.css';
import global from '@/global.module.css';

import CardContainer from '../CardContainer';
import Time from '../Time';
import { Task } from 'types';
import { CardsContext } from '@/Components/Context';

const Wrapper: React.FC = () => {
  const [tasks, setTasks] = useState<Task[] | undefined>();

  useEffect(() => {
    const tasks = user.tasks;
    setTasks(tasks);
  }, [tasks]);

  const setTask = () => {
    setTasks([...tasks]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.lines} />
      <div className={styles.container}>
        <Time />
        <h3 className={cn([global.blink, styles.title])}>JOURNAL</h3>
        <CardsContext.Provider value={[tasks, setTask]}>
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
        </CardsContext.Provider>
      </div>
    </div>
  );
};

export default Wrapper;
