import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CounterContextProvider } from './contexts/CounterContext';
import './styles/global-styles.css';

import { Home } from './templates/Home';
import { Abc } from './components/Abc';
import { Menu } from './components/Menu';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/abc/:id" exact component={Abc} />
        </Switch>
      </BrowserRouter>
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
