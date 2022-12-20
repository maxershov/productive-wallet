import React from 'preact/compat';
import { Task } from 'types';
import { cn } from '../../../../Utils/ClassNames';
import styles from './card.module.css';
import global from '../../../../global.module.css';

type PropsTypes = Task & { onEditClick: () => void };

const Card: React.FC<PropsTypes> = (props: PropsTypes) => {
  const { ID, title, type, price, onEditClick } = props;
  return (
    <div className={styles.grid}>
      <span className={cn([global.blink, styles.title])}>{title}</span>
      <span className={cn([global.blink, styles.type])}>{type}</span>
      <span className={cn([global.blink, styles.price])}>{price}</span>
      <button onClick={onEditClick} type="button" className={styles.edit}>
        <span className={global.blink}>EDIT</span>
      </button>
      <button type="button" className={styles.button}>
        <span className={global.blink}>OK</span>
      </button>
    </div>
  );
};

export default Card;
