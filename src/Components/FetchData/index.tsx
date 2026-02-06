import React from 'preact/compat';

import global from '@/global.module.css';

type Props = {
  onFetch: () => Promise<void> | void;
};

const FetchData: React.FC<Props> = ({ onFetch }) => (
  <button type="button" className={global.iconBtn} onClick={onFetch}>
    <span style={{ display: 'inline-block', transform: 'rotate(180deg) translateY(-4px)' }}>
      &#8682;
    </span>
  </button>
);

export default FetchData;
