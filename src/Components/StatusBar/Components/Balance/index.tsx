import React, { useState, useEffect } from 'preact/compat';
import styles from './balance.module.css';

type Props = {
  amount: number;
};

const Balance: React.FC<Props> = ({ amount }) => {
  const [prevBalance, setPrevBalance] = useState(amount);
  const [displayedBalance, setDisplayedBalance] = useState(amount);

  useEffect(() => {
    if (amount !== prevBalance) {
      const diff = amount - prevBalance;
      const maxSteps = 50; // Target max animation steps (~500ms at 10ms interval)
      const addTo = Math.max(1, Math.ceil(Math.abs(diff) / maxSteps));
      const direction = diff > 0 ? 1 : -1;
      let i = prevBalance;
      const interval = setInterval(() => {
        i += addTo * direction;
        if ((direction > 0 && i >= amount) || (direction < 0 && i <= amount)) {
          setDisplayedBalance(amount);
          clearInterval(interval);
          setPrevBalance(amount);
        } else {
          setDisplayedBalance(i);
        }
      }, 10);
      return () => clearInterval(interval);
    }
    setDisplayedBalance(amount);
  }, [amount, prevBalance]);

  return <div className={styles.balance}>{displayedBalance}</div>;
};

export default Balance;
