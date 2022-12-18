import React from 'preact/compat';
import { Task } from 'types';
import styles from './card.module.css';
import globalStyles from '../../global.module.css';

const Card: React.FC<Task> = (props: Task) => {
  const { ID, title, type, price } = props;
  return (
    <div className={styles.card}>
      <span className={`${globalStyles.blink} ${styles.title}`}>{title}</span>
      <span className={`${globalStyles.blink} ${styles.type}`}>{type}</span>
      <span className={`${globalStyles.blink} ${styles.price}`}>{price}</span>
      <button type="button" className={styles.button}>
        <span className={globalStyles.blink}>OK</span>
      </button>
    </div>
  );
};

export default Card;
