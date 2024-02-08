import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authFetch } from '../axios';
import { ComplexPaginationCont, OrdersList, SectionTitle } from '../components';

const ordersQueryData = (params, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      authFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    // console.log(store);

    const user = store.getState().user.user;
    if (!user) {
      toast.warn('You must logging to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        ordersQueryData(params, user)
      );

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errMsg =
        error?.response?.data?.error?.message ||
        'There was an error placing your order';
      toast.error(errMsg);

      if (error?.response?.status === 401 || 403) return redirect('/login');
    }

    return null;
  };
const Orders = () => {
  const { meta } = useLoaderData();

  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order" />;
  }
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <ComplexPaginationCont />
    </>
  );
};
export default Orders;
