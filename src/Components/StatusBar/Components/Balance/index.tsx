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
      const maxSteps = 50; // Target max animation steps (~500ms at 10ms interval)
      const addTo = Math.max(1, Math.ceil(Math.abs(diff) / maxSteps));
      const direction = diff > 0 ? 1 : -1;
      let i = prevBalance;
      const interval = setInterval(() => {
        i += addTo * direction;
        if ((direction > 0 && i >= balance) || (direction < 0 && i <= balance)) {
          setDisplayedBalance(balance);
          clearInterval(interval);
          setPrevBalance(balance);
        } else {
          setDisplayedBalance(i);
        }
      }, 10);
      return () => clearInterval(interval);
    }
    setDisplayedBalance(balance);
  }, [balance, prevBalance]);

  return <div className={styles.balance}>{displayedBalance}</div>;
};

export default Balance;
