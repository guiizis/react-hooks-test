/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useEffect, useRef, useState } from 'react';
import './styles.css';
import { PostsProvider } from '../../contexts/postProvider';
import { Posts } from '../../components/Posts';

function App() {
  return (
    <PostsProvider>
      <Posts />
    </PostsProvider>
  );
};

export default App;
