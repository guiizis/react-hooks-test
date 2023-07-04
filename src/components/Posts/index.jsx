import { useContext, useEffect, useRef } from 'react';
import { PostContext } from '../../contexts/postProvider/context';
import { loadPosts } from '../../contexts/postProvider/actions';
import { CounterContext } from '../../contexts/counterProvider/context';

export const Posts = () => {
  const isMounted = useRef(true);
  const { postState, postDispatch } = useContext(PostContext);
  const { counterState, counterDispatch } = useContext(CounterContext);

  useEffect(() => {
    loadPosts(postDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postDispatch]);

  return (
    <>
      {postState.loading && <strong>Carregando...</strong>}
      {postState.posts.map((e) => (
        <div key={e.id}>
          <p>{e.title}</p>
          <p>{e.id}</p>
        </div>
      ))}
      <h1>O valor do contador é: {counterState.counter}</h1>
      <button
        onClick={() => {
          counterDispatch({ type: 'INCREMENT_COUNTER' });
        }}
      >
        Increment +
      </button>
      <button
        onClick={() => {
          counterDispatch({ type: 'DECREMENT_COUNTER' });
        }}
      >
        Decrement -
      </button>
    </>
  );
};
