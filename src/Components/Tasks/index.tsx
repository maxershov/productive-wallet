import React, { useContext } from 'preact/compat';

import CardContainer from '../CardContainer';

import { CardsContext } from '@/Context';

import { filterTasks } from '@/Utils/FilterTasks';

type PropsTypes = {
  showTasks: boolean;
};

const Tasks: React.FC<PropsTypes> = ({ showTasks }) => {
  const tasks = useContext(CardsContext);
  return (
    <div>
      {tasks &&
        filterTasks(tasks, showTasks).map((task) => (
          <CardContainer key={task.ID} {...task} />
        ))}
    </div>
  );
};

export default Tasks;
