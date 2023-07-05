/*eslint-disable */

import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('effect ' + new Date().toLocaleDateString());
    setLoading(true);

    const fetchData = async () => {
      await new Promise(r => setTimeout(r, 3000));

      try {
        const result = await fetch(url, options);
        const resultJson = await result.json();
        setResult(resultJson);
        setLoading(false);
      }
      catch (e) {
        setLoading(false);
        throw e;
      };
    }
    fetchData();
  }, [url])

  return [result, loading];
}

export const Home = () => {
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
      abc: 'abc'
    }
  });
  if (loading) {
    return <p>loading ...</p>
  }
  return <h1>OI</h1>;
};
