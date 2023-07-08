import { useLayoutEffect, useRef, useState } from 'react';

export const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  const handleClick = () => {
    setCounted((c) => [...c, Number(counted.slice(-1)) + 1]);
  };

  useLayoutEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  }, []);

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <div
        ref={divRef}
        style={{ height: '200px', width: '100px', overflow: 'scroll' }}
      >
        {counted.map((e) => {
          return <p key={e}>{e}</p>;
        })}
      </div>
    </>
  );
};
