import React from 'preact/compat';
import { Task } from 'types';

import CardContainer from '../CardContainer';

import { filterTasks } from '@/Utils/FilterTasks';

type PropsTypes = {
  showTasks: boolean;
  tasks?: Task[];
  onRefresh: () => void;
};

const Tasks: React.FC<PropsTypes> = ({ showTasks, tasks, onRefresh }) => (
  <div>
    {tasks &&
      filterTasks(tasks, showTasks).map((task) => (
        <CardContainer key={task.ID} {...task} onRefresh={onRefresh} />
      ))}
  </div>
);

export default Tasks;
