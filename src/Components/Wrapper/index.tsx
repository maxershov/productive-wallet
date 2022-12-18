import React from 'preact/compat';
import styles from './wrapper.module.css';
import globalStyles from '../../global.module.css';

import Card from '../Card';
import { tasks } from '../../BFF/mock';

const Wrapper: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.lines} />
      <div className={styles.container}>
        <h3 className={`${globalStyles.blink} ${styles.title}`}>JOURNAL</h3>
        {tasks.map((task) => {
          const { ID, userId, title, type, price } = task;
          return (
            <Card
              ID={ID}
              title={title}
              type={type}
              price={price}
              userId={userId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wrapper;
