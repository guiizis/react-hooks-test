import { useContext, useEffect, useRef } from 'react';
import { PostContext } from '../../contexts/postProvider/context';
import { loadPosts } from '../../contexts/postProvider/actions';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostContext);
  const { postState, postDispatch } = postsContext;

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
    </>
  );
};
