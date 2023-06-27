/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import './App.css';

const globalState = {
  title: 'o titulo do contexto',
  body: 'o body do contexto',
  counter: 0
};

const GlobalContext = React.createContext();

/* eslint-disable-next-line */
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
}

/* eslint-disable-next-line */
const H1 = ({ children }) => {
  const theContext = useContext(GlobalContext);
  const { contextState: {title, counter} } = theContext;

  return (
    <h1>
      {title} / {counter}
    </h1>
  );
}

/* eslint-disable-next-line */
const P = ({ children }) => {
  const theContext = useContext(GlobalContext);
  const { contextState: {body, counter}, contextState, setContextState } = theContext;

  return (
    <p onClick={() => setContextState({...contextState, counter: counter + 1 })}>
      {body}
    </p>
  );
}


function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{contextState, setContextState}} className="App">
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
