/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'preact/compat';
import { Task } from 'types';
import Card from './Components/Card';
import Edit from './Components/Edit';
import styles from './card_container.module.css';

const CardContainer: React.FC<Task> = (props: Task) => {
  const { ID, title, type, price, date, userId } = props;
  const [isEdit, setIsEdit] = useState(false);

  function onCancelClick() {
    setIsEdit(false);
  }

  function onEditClick() {
    setIsEdit(true);
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
          onCancelClick={onCancelClick}
        />
      ) : (
        <Card
          ID={ID}
          title={title}
          type={type}
          price={price}
          date={date}
          userId={userId}
          onEditClick={onEditClick}
        />
      )}
    </div>
  );
};

export default CardContainer;
