/* eslint-disable prettier/prettier */
import { useReducer } from 'react';
import './App.css';

export const globalState = {
  title: 'o titulo do contexto',
  body: 'o body do contexto',
  counter: 0,
};

const reducer = (state, action) => {

  switch (action.type) {
    case 'change':
      console.log(action.payload);
      return { ...state, title: 'change ' + action.payload };
    case 'invert':
      console.log('inverter');
      return { ...state, title: state.title.split('').reverse().join('') };
  }

  return { ...state };
}

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>{title}</h1>
      <p>{counter}</p>
      <p>{body}</p>
      <button onClick={() => dispatch({ type: 'change', payload: new Date().toLocaleDateString('pt-br') })}>click</button>
      <button onClick={() => dispatch({ type: 'invert' })}>invert</button>
    </div>
  );
}

export default App;
