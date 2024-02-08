import { useSelector } from 'react-redux';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';
const Cart = () => {
  const { user } = useSelector((store) => store.user);
  const { numItemsInCart } = useSelector((store) => store.cart);

  if (numItemsInCart < 1) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <div>
      <SectionTitle text="Shopping Cart" />
      <div className="grid mt-8 gap-8 lg:grid-cols-12 ">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>

        <div className="lg:col-span-4 lg:pl-4  rounded-xl">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-accent btn-block mt-8">
              proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-accent btn-block mt-8">
              please login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
