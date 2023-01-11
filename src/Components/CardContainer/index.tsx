/* eslint-disable react/jsx-no-bind */
import React, { useState, useContext } from 'preact/compat';
import { BalanceContext, CardsContext } from '@/Components/Context';
import { user } from '@/Classes/User';
import { Task } from 'types';
import { TASK_TYPE } from '@/enums';

import Card from './Components/Card';
import Edit from './Components/Edit';

import styles from './card_container.module.css';

const CardContainer: React.FC<Task> = (props: Task) => {
  const { ID, title, type, price, date, userId } = props;

  console.log(`card rendered ${ID}`);

  const [, updateBalance] = useContext(BalanceContext);
  const [, updateTasks] = useContext(CardsContext);

  const [isEdit, setIsEdit] = useState(false);

  function onCloseEdit() {
    setIsEdit(false);
  }

  function onEdit() {
    setIsEdit(true);
  }

  function onComplete(ID: number) {
    if (type === TASK_TYPE.HABIT) {
      user.completeHabit(ID);
    } else {
      user.completeTask(ID);
    }

    updateBalance();
    updateTasks();
  }

  return (
    <div className={styles.card}>
      {isEdit ? (
        <Edit
          userId={userId}
          ID={ID}
          title={title}
          type={type}
          date={date}
          price={price}
          onCloseEdit={onCloseEdit}
        />
      ) : (
        <Card
          ID={ID}
          title={title}
          type={type}
          price={price}
          date={date}
          userId={userId}
          onEdit={onEdit}
          onComplete={onComplete}
        />
      )}
    </div>
  );
};

export default CardContainer;
