import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartItemsList = () => {
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} {...item} />;
      })}
    </div>
  );
};
export default CartItemsList;
