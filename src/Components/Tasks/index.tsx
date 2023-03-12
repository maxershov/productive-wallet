import React, { useContext } from 'preact/compat';

import CardContainer from '../CardContainer';

import { CardsContext } from '@/Context';

import { filterTasks } from '@/Utils/FilterTasks';

type PropsTypes = {
  showTasks: boolean;
};

const Tasks: React.FC<PropsTypes> = (props: PropsTypes) => {
  const { showTasks } = props;
  const tasks = useContext(CardsContext);
  return (
    <div>
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
    </div>
  );
};

export default Tasks;
