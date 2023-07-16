import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Link to="/"> Go To Home </Link>
      <Link to="/abc/59"> Go To ABC </Link>
    </nav>
  );
};
