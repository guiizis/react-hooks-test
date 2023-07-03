import * as types from './types.js';

export const loadPosts = async (dispatch) => {
  const postRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postRaw.json();
  return () => dispatch({ type: types.POSTS_SUCCESS, payload: posts });
};
