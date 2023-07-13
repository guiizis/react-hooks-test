/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { Suspense, createContext, useContext, useState } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>oi</p>
      <button onClick={() => setShow((s) => !s)}>show</button>
      {show &&
        <Suspense fallback={ <p>Carregando...</p> }>
          <LazyComponent />
        </Suspense>
        }
    </div>
  );
};
