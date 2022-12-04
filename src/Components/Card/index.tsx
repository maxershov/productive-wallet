import React from 'preact/compat';
import { Task } from 'types';


const Card: React.FC<Task> = (props: Task) => {
  const { ID, userId, title, type, price } = props;
  return (
    <div>
      <span>{title}</span>
      <span>{type}</span>
      <span>{price}</span>
    </div>
  );
};

export default Card;
