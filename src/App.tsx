import React from 'preact/compat';
import './App.css';
import Card from './Components/Card';
import { tasks } from './BFF/mock';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('preact/debug');
}

const App: React.FC = () => {
  return (
    <>
      <div>Tasks</div>
      {tasks.map((task) => {
        const { ID, userId, title, type, price } = task;
        return (
          <Card
            ID={ID}
            title={title}
            type={type}
            price={price}
            userId={userId}
          />
        );
      })}
    </>
  );
};

export default App;
