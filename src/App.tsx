import React from 'preact/compat';
import './App.css';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('preact/debug');
}

const App: React.FC = () => {
  return (
    <>
      <div>TEST</div>
    </>
  );
};

export default App;
