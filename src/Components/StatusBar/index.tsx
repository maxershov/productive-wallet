import React from 'preact/compat';
import styles from './statusBar.module.css';

import Time from './Components/Time';
import Balance from './Components/Balance';

const StatusBar: React.FC = () => (
  <div className={styles.bar}>
    <Time />
    <Balance />
  </div>
);

export default StatusBar;
