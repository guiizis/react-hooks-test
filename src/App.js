/* eslint-disable prettier/prettier */
import { Div } from './components/Div'
import React from 'react';
import './App.css';
import { AppContext } from './contexts/app';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
