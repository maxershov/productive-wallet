import { Task as TaskType } from '../../../../../types';
import { user } from '@/Classes/User';
import { CardsContext } from '@/Components/Context';
import React, { useContext } from 'preact/compat';
import styles from './edit.module.css';

type PropsTypes = TaskType & { onCloseEdit: () => void };

const Edit: React.FC<PropsTypes> = (props: PropsTypes) => {
  const { userId, ID, title, type, price, onCloseEdit } = props;

  const [, updateTasks] = useContext(CardsContext);

  function updateTask(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const form = new FormData(target);

    const [title, type, price] = form.values() as Iterable<string>;
    const editedTask = { title, type, price: parseInt(price), ID, userId };

    user.updateTask(editedTask);
    updateTasks();
    onCloseEdit();
  }

  return (
    <form className={styles.edit} onSubmit={updateTask} autoComplete="off">
      <input className={styles.title} value={title} name="title" />
      <input className={styles.type} value={type} name="type" />
      <input
        className={styles.price}
        value={price}
        type="number"
        name="price"
      />
      <button type="button" className={styles.cancel} onClick={onCloseEdit}>
        CANCEL
      </button>
      <button type="submit" className={styles.button}>
        OK
      </button>
    </form>
  );
};

export default Edit;
