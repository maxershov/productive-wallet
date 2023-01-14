/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'preact/compat';
import { Task } from 'types';
import { cn } from '@/Utils/ClassNames';
import { user } from '@/Classes/User';
import styles from './wrapper.module.css';
import global from '@/global.module.css';

import WithToken from '../WithToken';
import CardContainer from '../CardContainer';
import StatusBar from '../StatusBar';
import { CardsContext, BalanceContext } from '@/Components/Context';
import AddTask from '../AddTask';

import { filterTasks } from '@/Utils/FilterTasks';

const Wrapper: React.FC = () => {
  const [tasks, setTasks] = useState<Task[] | undefined>();
  const [balance, setBalance] = useState<number | undefined>();
  const [showTasks, setShowTasks] = useState(true);

  function toggleHabits() {
    setShowTasks(!showTasks);
  }

  useEffect(() => {
    const getData = async () => {
      const data = await user.getData();
      setTasks(data.tasks);
    };
    getData();
  }, []);

  useEffect(() => {
    const { balance } = user;
    setBalance(balance.getAmount());
  }, [balance]);

  const updateTasks = () => {
    // TODO fix rerenders in card
    setTasks([...user.tasks]);
  };

  const updateBalance = () => {
    setBalance(user.balance.getAmount());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.lines} />
      <div className={styles.container}>
        <BalanceContext.Provider value={[balance, updateBalance]}>
          <CardsContext.Provider value={[tasks, updateTasks]}>
            <StatusBar />
            <h3 className={cn([global.blink, styles.title])}>JOURNAL</h3>
            <WithToken>
              {tasks &&
                filterTasks(tasks, showTasks).map((task) => {
                  const { ID, userId, title, type, price, date } = task;
                  return (
                    <CardContainer
                      key={ID}
                      ID={ID}
                      title={title}
                      type={type}
                      price={price}
                      date={date}
                      userId={userId}
                    />
                  );
                })}
              <AddTask />
              <button
                type="button"
                className={global.button}
                onClick={toggleHabits}
              >
                {showTasks ? 'HABITS' : 'TASKS'}
              </button>
            </WithToken>
          </CardsContext.Provider>
        </BalanceContext.Provider>
      </div>
    </div>
  );
};

export default Wrapper;
