import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [status, setStatus] = useState('idle');

  const run = useCallback(() => {
    setResult(null);
    setError(null);
    setStatus(null);

    return asyncFunction()
      .then((response) => {
        setResult(response);
        setStatus('settled');
      })
      .catch((error) => {
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, result, error, status];
};

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  const dataJson = await data.json();
  return dataJson;
};

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  useEffect(() => {
    reFetchData();
  }, [reFetchData]);

  if (status === 'idle') {
    return <pre>loading ...</pre>;
  }

  if (status === 'settled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }

  if (status === 'error') {
    return <pre>look an error: {error}</pre>;
  }
};
