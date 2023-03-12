import React, { useContext } from 'preact/compat';
import { CardsActions } from '@/Context';
import { user } from '@/Classes/User';

import global from '@/global.module.css';

const AddTask: React.FC = () => {
  const updateTasks = useContext(CardsActions);

  function addTask() {
    user.createTask();
    updateTasks();
  }

  return (
    <button type="button" className={global.button} onClick={addTask}>
      +
    </button>
  );
};

export default AddTask;
