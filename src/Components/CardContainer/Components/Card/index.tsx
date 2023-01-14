import React from 'preact/compat';
import { Task } from 'types';
import { cn } from '@/Utils/ClassNames';
import styles from './card.module.css';
import global from '@/global.module.css';
import { dateWrapper } from '@/Utils/DateWrapper';

type PropsTypes = Task & {
  onEdit: () => void;
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
        className={cn([global.blink, styles.title])}
        type="button"
        onClick={onEdit}
      >
        <span>{title}</span>
      </button>
      <button
        className={cn([global.blink, styles.type])}
        type="button"
        onClick={onEdit}
      >
        <span>{type}</span>
      </button>
      <button
        className={cn([global.blink, styles.price])}
        type="button"
        onClick={onEdit}
      >
        <span>{price}</span>
      </button>
      <span className={cn([global.blink, styles.date])}>{timeLeft}</span>
      <button
        onClick={() => onComplete(ID)}
        type="button"
        className={styles.button}
      >
        <span className={global.blink}>OK</span>
      </button>
    </div>
  );
};

export default Card;
