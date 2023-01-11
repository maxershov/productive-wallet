import React from 'preact/compat';
import './App.css';
import Wrapper from './Components/Wrapper';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('preact/debug');
}

const App: React.FC = () => <Wrapper />;

export default App;
