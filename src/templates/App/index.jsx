/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useEffect, useRef, useState } from 'react';
import './styles.css';
import { PostsProvider } from '../../contexts/postProvider';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/counterProvider';
import { Home } from './NewHook';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <Home />
        {/* <Posts /> */}
      </PostsProvider>
    </CounterProvider>
  );
};

export default App;
