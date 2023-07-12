/* eslint-disable react/prop-types */
import React, {
  Children,
  cloneElement,
  createContext,
  createElement,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

const TurmOnOffContext = createContext();

const TurnOnAndOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return (
    <TurmOnOffContext.Provider value={{ isOn, onTurn }}>
      {children}
    </TurmOnOffContext.Provider>
  );
};

const TurnedOn = ({ children }) => {
  const { isOn, onTurn } = useContext(TurmOnOffContext);
  return isOn ? children : null;
};

const TurnedOff = ({ children }) => {
  const { isOn, onTurn } = useContext(TurmOnOffContext);
  return isOn ? null : children;
};

const TurnButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurmOnOffContext);
  return (
    <button {...props} onClick={() => onTurn()}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

export const Home = () => {
  return (
    <TurnOnAndOff>
      <p>teste</p>
      <TurnedOn>Coisas do on</TurnedOn>
      <TurnedOff>Coisas do off</TurnedOff>
      <TurnButton {...s} />
    </TurnOnAndOff>
  );
};
