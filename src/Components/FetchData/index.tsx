import React, { useContext } from 'preact/compat';

import { CardsActions } from '@/Context';

import { user } from '@/Classes/User';

import global from '@/global.module.css';

const FetchData: React.FC = () => {
  const updateTasks = useContext(CardsActions);

  const fetchData = async () => {
    await user.fetchData();
    updateTasks();
  };

  return (
    <button type="button" className={global.iconBtn} onClick={fetchData}>
      <span style={{ display: 'inline-block', transform: 'rotate(180deg) translateY(-4px)' }}>
        &#8682;
      </span>
    </button>
  );
};

export default FetchData;
