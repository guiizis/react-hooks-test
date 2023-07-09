import {
  useDebugValue,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

const useMediaQuery = (queryValue) => {
  const [match, setMatch] = useState(false);

  useDebugValue('teste');

  useEffect(() => {
    console.log(queryValue);
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);
    const handleChange = () => {
      if (!isMounted) return;
      setMatch(!!matchMedia.match);
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

export const Home = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const background = huge ? 'green' : '';

  return (
    <div style={{ background }}>
      <h1>teste</h1>
    </div>
  );
};
