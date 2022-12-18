import React from 'preact/compat';
import { Task } from 'types';
import styles from './card.module.css';
import globalStyles from '../../../../global.module.css';

type PropsTypes = Task & { onEditClick: () => void };

const Card: React.FC<PropsTypes> = (props: PropsTypes) => {
  const { ID, title, type, price, userId, onEditClick } = props;
  return (
    <div className={styles.grid}>
      <span className={`${globalStyles.blink} ${styles.title}`}>{title}</span>
      <span className={`${globalStyles.blink} ${styles.type}`}>{type}</span>
      <span className={`${globalStyles.blink} ${styles.price}`}>{price}</span>
      <button onClick={onEditClick} type="button" className={styles.edit}>
        <span className={globalStyles.blink}>EDIT</span>
      </button>
      <button type="button" className={styles.button}>
        <span className={globalStyles.blink}>OK</span>
      </button>
    </div>
  );
};

export default Card;
