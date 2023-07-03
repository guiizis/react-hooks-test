import { useReducer } from 'react';
import { PostContext } from './context';
import { reducer } from './reducer';
import { data } from './data';

// eslint-disable-next-line react/prop-types
export const PostsProvider = ({ children }) => {
  const [postState, postDispatch] = useReducer(reducer, data);

  return (
    <PostContext.Provider value={{ postState, postDispatch }}>
      {children}
    </PostContext.Provider>
  );
};
