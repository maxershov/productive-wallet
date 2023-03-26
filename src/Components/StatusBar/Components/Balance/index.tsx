import React, { useContext, useState, useEffect } from 'preact/compat';
import { BalanceContext } from '@/Context/BalanceContext';
import styles from './balance.module.css';

const Balance = () => {
  const balance = useContext(BalanceContext);
  const [prevBalance, setPrevBalance] = useState(balance);
  const [displayedBalance, setDisplayedBalance] = useState(balance);

  useEffect(() => {
    if (balance !== prevBalance) {
      const diff = balance - prevBalance;
      const addTo = diff > 100 ? 10 : 1;
      let i = prevBalance;
      const interval = setInterval(() => {
        i += addTo;
        setDisplayedBalance(i);
        if (i >= balance) {
          clearInterval(interval);
          setPrevBalance(balance);
        }
      }, 10);
    }

    // fix init render
    setDisplayedBalance(balance);
  }, [balance, prevBalance]);

  return <div className={styles.balance}>{displayedBalance}</div>;
};

export default Balance;
