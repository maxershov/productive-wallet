import React, { useContext } from 'preact/compat';
import { BalanceContext } from '@/Context/BalanceContext';
import styles from './balance.module.css';

const Balance: React.FC = () => {
  const [balance] = useContext(BalanceContext);
  return <div className={styles.balance}>{balance}</div>;
};

export default Balance;
