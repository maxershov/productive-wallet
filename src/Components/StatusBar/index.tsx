import React from 'preact/compat';
import styles from './statusBar.module.css';

import Time from './Components/Time';

const StatusBar: React.FC = () => {
  return (
    <div className={styles.bar}>
      <Time />
    </div>
  );
};

export default StatusBar;
