import React, { useState } from 'preact/compat';
import { Task } from 'types';

import { user } from '@/Classes/User';
import { FocusValues, TASK_TYPE } from '@/enums';

import Card from './Components/Card';
import Edit from './Components/Edit';

import styles from './card_container.module.css';

type CardContainerProps = Task & {
  onRefresh: () => void;
};

const CardContainer: React.FC<CardContainerProps> = (props: CardContainerProps) => {
  const { ID, title, type, price, date, userId, onRefresh } = props;

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
    type === TASK_TYPE.HABIT ? user.completeHabit(ID) : user.completeTask(ID);
    onRefresh();
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
          onUpdate={onRefresh}
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
