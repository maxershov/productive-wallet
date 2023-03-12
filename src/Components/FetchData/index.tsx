import React, { useContext } from 'preact/compat';

import { CardsActions } from '@/Context';

import { user } from '@/Classes/User';

import global from '@/global.module.css';

const FetchData: React.FC = () => {
  const updateTasks = useContext(CardsActions);

  async function fetchData() {
    await user.fetchData();
    updateTasks();
  }

  return (
    <button type="button" className={global.iconBtn} onClick={fetchData}>
      &#8681;
    </button>
  );
};

export default FetchData;
