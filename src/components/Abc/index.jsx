import { useParams } from 'react-router-dom';

export const Abc = () => {
  const { id } = useParams();

  return <h1>{id}</h1>;
};
