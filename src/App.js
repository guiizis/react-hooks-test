/* eslint-disable prettier/prettier */
import './App.css';
import { createContext, useContext, useReducer, useRef } from 'react';

//data
export const globalState = {
  title: 'o titulo do contexto',
  body: 'o body do contexto',
  counter: 0,
};

//actions
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE:
      return { ...state, title: action.payload }
  };

  return { ...state };
};

//context
export const Context = createContext()

// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
};

export const H1 = () => {
  const { state, dispatch } = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <input type="text" ref={inputRef} onChange={() => dispatch({ type: actions.CHANGE_TITLE, payload: inputRef.current.value })} />
      <h1>{state.title}</h1>
    </>
  );
};

function App() {
  return (
    <AppContext>
      <H1 />
    </AppContext>
  );
}

export default App;
