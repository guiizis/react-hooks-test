import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [reverse, setReverse] = useState(false);
  const [contador, setContador] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setContador((c) => c + 1);
    setReverse(!reverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador está em: {contador}</h1>

        <button type="button" onClick={handleClick}>
          reverse {reverseClass}
        </button>
      </header>
    </div>
  );
}

export default App;
