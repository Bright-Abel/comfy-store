import { Form, redirect } from 'react-router-dom';
import FormLogin from './FormLogin';
import SubmitBtn from './SubmitBtn';
import { authFetch } from '../axios';
import { formatPrice } from '../axios/custom';
import { clearCart } from '../features/cartSlice';
import { toast } from 'react-toastify';

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const { cartItems, numItemsInCart, orderTotal } = store.getState().cart;
    const user = store.getState().user.user;
    console.log(user);

    const info = {
      address,
      cartItems,
      chargeTotal: orderTotal,
      numItemsInCart,
      name,
      orderTotal: formatPrice(orderTotal),
    };

    try {
      const response = await authFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      queryClient.removeQueries(['orders']);
      store.dispatch(clearCart());
      toast.success('order placed successfully');
      return redirect('/orders');
    } catch (error) {
      console.log(error);
      const errMsg =
        error?.response?.data?.error?.message ||
        'There was an error placing your order';
      toast.error(errMsg);

      if (error?.response?.status === 401 || 403) return redirect('/checkout');
    }

    return null;
  };
const CheckOutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">shipping information</h4>
      <FormLogin label="first name" name="name" type="text" />
      <FormLogin label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};
export default CheckOutForm;
