import { Link, useLoaderData } from 'react-router-dom';
import { authFetch } from '../axios';
import { formatPrice, generateAmountOptions } from '../axios/custom';
import { useState } from 'react';
import { addItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';

const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => authFetch(`/products/${id}`),
  };
};

export const loader = (queryClient) => async (data) => {
  // console.log(data);
  const id = data.params.id;
  // console.log(id);
  const resp = await queryClient.ensureQueryData(singleProductQuery(id)); //authFetch(`/products/${id}`)
  const product = resp.data.data;

  return { product };
};
const optionArray = ['1', '2', '3'];

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarVal = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();
  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };

  const addToCart = () => {
    dispatch(addItem(cartProduct));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </div>

      <div className="grid lg:grid-cols-2 gap-y-8 mt-6 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-[24rem] rounded-lg h-[29rem] object-cover lg:w-full "
        />

        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="capitalize text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <h4 className="capitalize text-xl text-neutral-content font-semibold">
            {dollarVal}
          </h4>
          <p className="mt-6 leading-8">{description}</p>

          {/* COLORS */}
          <div className="mt-8 ">
            <h4 className="text-md font-medium tracking-wider capitalize">
              Colors
            </h4>
            <div className="mt-2">
              {colors.map((col) => {
                return (
                  <button
                    key={col}
                    type="button"
                    className={`badge h-6 w-6 mr-2 ${
                      col === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: col }}
                    onClick={() => setProductColor(col)}
                  ></button>
                );
              })}
            </div>
          </div>

          <div className="form-control mt-6 w-full max-w-xs">
            <h4 className="text-md font-medium -tracking-wider capitalize">
              Amount
            </h4>
            <select
              className="select select-bordered select-secondary select-md mt-2"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => {
                setAmount(parseInt(e.target.value));
              }}
            >
              {/* {optionArray.map((numb) => {
                return (
                  <option key={numb} value={numb}>
                    {numb}
                  </option>
                );
              })} */}
              {generateAmountOptions(20)}
            </select>
          </div>
          <button
            className="btn btn-secondary uppercase btn-md font-bold mt-4"
            onClick={addToCart}
          >
            Add to bag
          </button>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
