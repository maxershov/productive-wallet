import React from 'preact/compat';
import global from '@/global.module.css';

type PropsTypes = {
  showTasks: boolean;
  toggleHabits: () => void;
};

const TypeSwitch: React.FC<PropsTypes> = ({ showTasks, toggleHabits }) => (
  <button type="button" className={global.button} onClick={toggleHabits}>
    {showTasks ? 'HABITS' : 'TASKS'}
  </button>
);

export default TypeSwitch;
