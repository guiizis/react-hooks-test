import { useParams, useLocation, useHistory } from 'react-router-dom';

export const Abc = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();

  console.log(location);
  console.log(history);

  return <h1>{id}</h1>;
};
