import React, { useState, useContext } from 'preact/compat';
import { Task } from 'types';

import { CardsActions } from '@/Context';

import { user } from '@/Classes/User';
import { FocusValues, TASK_TYPE } from '@/enums';

import Card from './Components/Card';
import Edit from './Components/Edit';

import styles from './card_container.module.css';

const CardContainer: React.FC<Task> = (props: Task) => {
  const { ID, title, type, price, date, userId } = props;

  // eslint-disable-next-line no-console
  console.log(`card rendered ${ID}`);

  const updateTasks = useContext(CardsActions);

  const [isEdit, setIsEdit] = useState(false);
  const [focus, setFocus] = useState(null);

  const onCloseEdit = () => {
    setIsEdit(false);
  };

  const onEdit = (focus: FocusValues) => {
    setIsEdit(true);
    setFocus(focus);
  };

  const onComplete = (ID: number) => {
    if (type === TASK_TYPE.HABIT) {
      user.completeHabit(ID);
    } else {
      user.completeTask(ID);
    }

    updateTasks();
  };

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
          focusInput={focus}
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
