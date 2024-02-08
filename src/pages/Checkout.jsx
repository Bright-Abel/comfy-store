import { useSelector } from 'react-redux';

import { CartTotals, CheckOutForm, SectionTitle } from '../components';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

export const loader = (store) => () => {
  const user = store.getState().user.user;
  // console.log(user);
  if (!user) {
    toast.warn('You must logging before checking out');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const { cartTotal } = useSelector((store) => store.cart);

  if (!cartTotal) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <div>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckOutForm />
        <CartTotals />
      </div>
    </div>
  );
};
export default Checkout;
