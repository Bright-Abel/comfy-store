import { Outlet, useNavigation } from 'react-router-dom';
import Error from './Error';
import { Header, Loading, Navbar } from '../components';
const HomeLayout = () => {
  const { state } = useNavigation();

  const currentState = state === 'loading';
  // console.log(currentState);
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        {currentState ? <Loading /> : <Outlet />}
      </section>
    </>
  );
};
export default HomeLayout;
