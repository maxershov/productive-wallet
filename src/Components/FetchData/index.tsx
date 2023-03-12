import React, { useContext } from 'preact/compat';
import { CardsContext } from '@/Context/CardsContext';
import { user } from '@/Classes/User';

import global from '@/global.module.css';

const FetchData: React.FC = () => {
  const [, updateTasks] = useContext(CardsContext);

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
