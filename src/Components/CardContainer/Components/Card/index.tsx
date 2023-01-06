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
      <span className={cn([global.blink, styles.title])}>{title}</span>
      <span className={cn([global.blink, styles.type])}>{type}</span>
      <span className={cn([global.blink, styles.price])}>{price}</span>
      <span className={cn([global.blink, styles.date])}>{timeLeft}</span>
      <button onClick={onEdit} type="button" className={styles.edit}>
        <span className={global.blink}>EDIT</span>
      </button>
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
