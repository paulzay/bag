import React from 'react';
import { ColorModeSwitcher } from '../utils/colorModeSwitcher';
import './App.css';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <ColorModeSwitcher />
      <Signup />
    </div>
  );
}

export default App;
