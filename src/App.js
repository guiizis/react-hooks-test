import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('componentDidUpdate');
  });

  useEffect(() => {
    console.log('componentDidMount');

    document.querySelector('h1').addEventListener('click', () => {
      console.log('teste');
    });

    // trigger para componentWillUnMount, para limpar os listeners
    return () => {
      document.querySelector('h1').removeEventListener('click', () => {
        console.log('teste');
      });
    };
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate com deps');
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter((prev) => ++prev)}>+</button>
    </div>
  );
}

export default App;
