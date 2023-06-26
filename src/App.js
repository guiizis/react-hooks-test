import P from 'prop-types';
import React, { useCallback, useState } from 'react';
import './App.css';

const Button = React.memo(function Button({ handleClick }) {
  console.log('Filho renderizou');
  return (
    <button type="button" onClick={() => handleClick(10)}>
      +
    </button>
  );
});

function App() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback((num) => {
    setCounter((prev) => prev + num);
  }, []);

  console.log('Pai renderizou');

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button handleClick={increment} />
    </div>
  );
}

Button.propTypes = {
  handleClick: P.func,
};

export default App;
