import React from 'react';
import { ColorModeSwitcher } from '../utils/colorModeSwitcher';
import './App.css';
import Countries from './Countries';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <ColorModeSwitcher />
      <Countries />
    </div>
  );
}

export default App;
