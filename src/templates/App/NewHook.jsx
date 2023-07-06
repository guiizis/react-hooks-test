/*eslint-disable */

import { useEffect, useRef, useState } from "react";

const isEqual = (objA, objB) =>  {
  return JSON.stringify(objA) === JSON.stringify(objB);
}

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;

    if (!isEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }
    else if (!isEqual(url, optionsRef.current)) {
      optionsRef.current = options;
      changed = true;
    }

    // if(changed) {
    //   setShouldLoad(c => !c)
    // }
  }, [url, options])

  useEffect(() => {
    console.log('effect ' + new Date().toLocaleDateString());
    setLoading(true);

    const fetchData = async () => {
      await new Promise(r => setTimeout(r, 3000));

      try {
        const result = await fetch(urlRef.current, optionsRef.current);
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
  }, [])

  return [];
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
  if (!loading && result) {
    console.log(result)
  }
  return <h1>OI</h1>;
};
