import React from 'preact/compat';
import { Task } from 'types';
import styles from './card.module.css';
import { dateWrapper } from '@/Utils/DateWrapper';
import { FOCUS, FocusValues } from '@/enums';

type PropsTypes = Task & {
  onEdit: (focus: FocusValues) => void;
  onComplete: (ID: number) => void;
};

const Card: React.FC<PropsTypes> = (props: PropsTypes) => {
  const { ID, title, type, price, date, onEdit, onComplete } = props;

  // TODO move in shared
  const dateTo = date && new Date(date);
  const timeLeft = dateWrapper(dateTo, new Date());

  return (
    <div className={styles.grid}>
      <button
        className={styles.title}
        type="button"
        onClick={() => onEdit(FOCUS.TITLE)}
      >
        <span>{title}</span>
      </button>
      <button
        className={styles.type}
        type="button"
        onClick={() => onEdit(FOCUS.TYPE)}
      >
        <span>{type}</span>
      </button>
      <button
        className={styles.price}
        type="button"
        onClick={() => onEdit(FOCUS.PRICE)}
      >
        <span>{price}</span>
      </button>
      <span className={styles.date}>{timeLeft}</span>
      <button
        onClick={() => onComplete(ID)}
        type="button"
        className={styles.button}
      >
        <span>&#10004;</span>
      </button>
    </div>
  );
};

export default Card;
