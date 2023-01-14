import React from 'preact/compat';
import styles from './statusBar.module.css';

import Time from './Components/Time';
import Balance from './Components/Balance';
import FetchData from '../FetchData';
import SyncData from '../SyncData';

const StatusBar: React.FC = () => (
  <div className={styles.bar}>
    <Time />
    <Balance />
    <FetchData />
    <SyncData />
  </div>
);

export default StatusBar;
