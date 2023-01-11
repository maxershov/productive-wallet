import React from 'preact/compat';
import { user } from '@/Classes/User';

import global from '@/global.module.css';

const SyncData: React.FC = () => {
  function syncData() {
    user.syncData();
  }

  return (
    <button type="button" className={global.button} onClick={syncData}>
      SYNC
    </button>
  );
};

export default SyncData;
