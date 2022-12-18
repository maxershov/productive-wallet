import React from 'preact/compat';
import { Task } from 'types';
import styles from './edit.module.css';

type PropsTypes = Task & { onCancelClick: () => void };

const Edit: React.FC<PropsTypes> = (props: PropsTypes) => {
  const { ID, title, type, price, onCancelClick } = props;
  return (
    <div className={styles.edit}>
      <input className={styles.title} value={title} />
      <input className={styles.type} value={type} />
      <input className={styles.price} value={price} />
      <button type="button" className={styles.cancel} onClick={onCancelClick}>
        CANCEL
      </button>
      <button type="button" className={styles.button}>
        OK
      </button>
    </div>
  );
};

export default Edit;
