import React from 'preact/compat';
import global from '@/global.module.css';

type Props = {
  onAdd: () => void;
};

const AddTask: React.FC<Props> = ({ onAdd }) => (
  <button type="button" className={global.button} onClick={onAdd}>
    +
  </button>
);
export default AddTask;
