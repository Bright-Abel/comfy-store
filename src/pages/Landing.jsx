import { FeaturedProduct, Hero } from '../components';
import { authFetch } from '../axios';
// import { useQuery } from '@tanstack/react-query';

const url = '/products?featured=true';
const featuredProductQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => authFetch(url),
};

export const loader = (queryClient) => async () => {
  const resp = await queryClient.ensureQueryData(featuredProductQuery); //authFetch(url)
  // console.log(resp);
  const product = resp.data.data;
  return { product };
};
const Landing = () => {
  return (
    <div>
      <Hero />

      <FeaturedProduct />
    </div>
  );
};
export default Landing;
