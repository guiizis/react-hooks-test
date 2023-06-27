/* eslint-disable prettier/prettier */
import P from 'prop-types';
import './App.css';
import { useEffect, useState, useMemo, useRef } from 'react';

const Post = ({ post, handleClick }) => {
  console.log('renderizou filho');

  return (
    <div className="post">
      <h1
      style={{fontSize:'14px'}}
      onClick={()=> handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

function App() {
  console.log('pai renderizou');

  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
  }, [value]);

  useEffect(() => {
    contador.current++;
  });

  const handleClick = (value) => {
    setValue(value)
  }

  return (
    <div className="App">
      <h1>Renderizou {contador.current} vezes</h1>
      <p>
        <input ref={input} type='search' value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      {
      useMemo(() => {
        return (
          posts.length > 0 && posts.map((post) => {
            return <Post post={post} key={post.id} handleClick={handleClick}/>;
          })
        )
      }, [posts])}

      {posts.length <= 0 && <h1> Sem Posts por Enquanto</h1>}
    </div>
  );
}

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string
  }),
  handleClick:  P.func
};

export default App;
