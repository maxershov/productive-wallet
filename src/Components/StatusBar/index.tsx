import React from 'preact/compat';

import styles from './statusBar.module.css';

import Time from './Components/Time';
import Balance from './Components/Balance';
import FetchData from '../FetchData';
import SyncData from '../SyncData';

type Props = {
  balance: number;
  onFetch: () => Promise<void> | void;
};

const StatusBar: React.FC<Props> = ({ balance, onFetch }) => (
  <div className={styles.bar}>
    <Time />
    <Balance amount={balance} />
    <FetchData onFetch={onFetch} />
    <SyncData />
  </div>
);

export default StatusBar;
