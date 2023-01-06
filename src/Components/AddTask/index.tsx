import React, { useContext } from 'preact/compat';
import { CardsContext } from '@/Components/Context';
import { user } from '@/Classes/User';

import styles from './add_task.module.css';

const AddTask: React.FC = () => {
  const [, updateTasks] = useContext(CardsContext);

  function addTask() {
    user.createTask();
    updateTasks();
  }

  return (
    <button className={styles.button} onClick={addTask}>
        +
    </button>
  );
};

export default AddTask;
