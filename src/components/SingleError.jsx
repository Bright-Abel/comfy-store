import { useRouteError } from 'react-router-dom';
const SingleError = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <h4 className="font-bold text-4xl h-screen grid place-items-center animate-bounce text-red-400">
      {err.message}
    </h4>
  );
};
export default SingleError;
