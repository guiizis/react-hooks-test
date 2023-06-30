import { useContext } from 'react';
import { GlobalContext } from '../../contexts/app';

/* eslint-disable-next-line */
export const P = ({ children }) => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;

  return (
    <p
      onClick={() => setContextState({ ...contextState, counter: counter + 1 })}
    >
      {body}
    </p>
  );
};
