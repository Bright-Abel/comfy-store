import { useSelector } from 'react-redux';
import { formatPrice } from '../axios/custom';

const CartTotals = () => {
  const { shipping, cartTotal, tax, orderTotal } = useSelector(
    (store) => store.cart
  );
  const dolarVal = formatPrice(cartTotal);
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTALS */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>SubTotal</span>
          <span className="font-medium">{dolarVal}</span>
        </p>

        {/* SHIPPING */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span className="font-medium">{shipping}</span>
        </p>

        {/* TAX */}
        <p className="flex justify-between text-xs pb-2">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>

        {/* ORDER TOTAL */}
        <p className="flex justify-between text-smmt-4 border-b border-base-300 pb-2">
          <span className="capitalize">Total amount</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
