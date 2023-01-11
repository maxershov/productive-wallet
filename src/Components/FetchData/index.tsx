import React, { useContext } from 'preact/compat';
import { CardsContext } from '@/Components/Context';
import { user } from '@/Classes/User';

import global from '@/global.module.css';

const FetchData: React.FC = () => {
  const [, updateTasks] = useContext(CardsContext);

  async function fetchData() {
    await user.fetchData();
    updateTasks();
  }

  return (
    <button type="button" className={global.button} onClick={fetchData}>
      FETCH
    </button>
  );
};

export default FetchData;
