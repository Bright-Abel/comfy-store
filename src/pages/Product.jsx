import { authFetch } from '../axios';
import { Filters, ProductContainer, PaginationContainer } from '../components';

const url = '/products';

const allProductQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => authFetch(url, { params: queryParams }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    // console.log(request);
    const newUrl = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    // console.log(newUrl);
    console.log(newUrl);
    const resp = await queryClient.ensureQueryData(allProductQuery(newUrl)); //authFetch(url, { params: newUrl });
    console.log(resp);

    const product = resp.data.data;

    const meta = resp.data.meta;
    return { product, meta, newUrl };
  };
const Product = () => {
  return (
    <>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </>
  );
};
export default Product;
