/* eslint-disable prettier/prettier */
import P from 'prop-types';
import './App.css';
import { useEffect, useState, useMemo } from 'react';

const Post = ({ post }) => {
  console.log('renderizou filho');

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

function App() {
  console.log('pai renderizou');

  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  return (
    <div className="App">
      <p>
        <input type='search' value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      {
      useMemo(() => {
        return (
          posts.length > 0 && posts.map((post) => {
            return <Post post={post} key={post.id} />;
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
  })
};

export default App;
