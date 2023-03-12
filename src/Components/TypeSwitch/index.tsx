import React from 'preact/compat';
import global from '@/global.module.css';

type PropsTypes = {
  showTasks: boolean;
  toggleHabits: () => void;
};

const Tasks: React.FC<PropsTypes> = (props: PropsTypes) => {
  const { showTasks, toggleHabits } = props;

  return (
    <button type="button" className={global.button} onClick={toggleHabits}>
      {showTasks ? 'HABITS' : 'TASKS'}
    </button>
  );
};

export default Tasks;
