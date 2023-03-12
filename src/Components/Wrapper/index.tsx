import React, { useCallback, useEffect, useState } from 'preact/compat';
import { Task } from 'types';
import { user } from '@/Classes/User';
import styles from './wrapper.module.css';
import global from '@/global.module.css';

import WithToken from '../../HOC/WithToken';
import CardContainer from '../CardContainer';
import StatusBar from '../StatusBar';

import {
  CardsContext,
  CardsActions,
  BalanceContext,
  BalanceActions,
} from '@/Context';

import AddTask from '../AddTask';

import { filterTasks } from '@/Utils/FilterTasks';
import { useSwipe } from '@/Hooks/useSwipe';

const Wrapper: React.FC = () => {
  const [tasks, setTasks] = useState<Task[] | undefined>();
  const [balance, setBalance] = useState<number | undefined>();
  const [showTasks, setShowTasks] = useState(true);
  const isSwiped = useSwipe();

  const toggleHabits = useCallback(() => {
    setShowTasks((showTasks) => !showTasks);
  }, []);

  useEffect(() => {
    if (isSwiped) {
      toggleHabits();
    }
  }, [isSwiped, toggleHabits]);

  useEffect(() => {
    (async () => {
      const data = await user.getData();
      setTasks(data.tasks);
    })();
  }, []);

  useEffect(() => {
    const { balance } = user;
    setBalance(balance.getAmount());
  }, [balance]);

  const updateTasks = useCallback(() => {
    setTasks([...user.tasks]);
  }, []);

  const updateBalance = useCallback(() => {
    setBalance(user.balance.getAmount());
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.lines} />
      <div className={styles.container}>
        <BalanceContext.Provider value={balance}>
          <BalanceActions.Provider value={updateBalance}>
            <CardsContext.Provider value={tasks}>
              <CardsActions.Provider value={updateTasks}>
                <StatusBar />
                <h3 className={styles.title}>JOURNAL</h3>
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
              </CardsActions.Provider>
            </CardsContext.Provider>
          </BalanceActions.Provider>
        </BalanceContext.Provider>
      </div>
    </div>
  );
};

export default Wrapper;
