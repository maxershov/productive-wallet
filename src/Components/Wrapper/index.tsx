import React, { useCallback, useEffect, useState } from 'preact/compat';
import { Task } from 'types';
import { user } from '@/Classes/User';
import styles from './wrapper.module.css';

import WithToken from '../../HOC/WithToken';
import Tasks from '../Tasks';
import TypeSwitch from '../TypeSwitch';
import StatusBar from '../StatusBar';
import AddTask from '../AddTask';

import { useSwipe } from '@/Hooks/useSwipe';

const Wrapper: React.FC = () => {
  const [tasks, setTasks] = useState<Task[] | undefined>();
  const [balance, setBalance] = useState<number>(0);
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
      setBalance(user.balance.amount);
    })();
  }, []);

  const refreshTasks = useCallback(() => {
    setTasks([...user.tasks]);
    setBalance(user.balance.amount);
  }, []);

  const handleFetchData = useCallback(async () => {
    await user.fetchData();
    refreshTasks();
  }, [refreshTasks]);

  const handleAddTask = useCallback(() => {
    user.createTask();
    refreshTasks();
  }, [refreshTasks]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.lines} />
      <div className={styles.container}>
        <StatusBar balance={balance} onFetch={handleFetchData} />
        <h3 className={styles.title}>JOURNAL</h3>
        <WithToken>
          <Tasks
            showTasks={showTasks}
            tasks={tasks}
            onRefresh={refreshTasks}
          />
          <AddTask onAdd={handleAddTask} />
          <TypeSwitch
            showTasks={showTasks}
            toggleHabits={toggleHabits}
          />
        </WithToken>
      </div>
    </div>
  );
};

export default Wrapper;
