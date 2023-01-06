import React, { useContext } from 'preact/compat';
import { BalanceContext } from '@/Components/Context';
import { cn } from '@/Utils/ClassNames';
import styles from './balance.module.css';
import global from '@/global.module.css';

const Balance: React.FC = () => {
  const [balance] = useContext(BalanceContext);
  return <div className={cn([global.blink, styles.balance])}>{balance}</div>;
};

export default Balance;
