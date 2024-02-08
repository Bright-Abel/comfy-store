import { useLoaderData, Link } from 'react-router-dom';
import { formatPrice } from '../axios/custom';
const ProductList = () => {
  const { product } = useLoaderData();

  return (
    <div className="grid mt-12 gap-y-8 ">
      {product.map((item) => {
        const id = item.id;
        const { title, image, price, company } = item.attributes;
        const dollarVal = formatPrice(price);
        return (
          <Link key={id} to={`/product/${id}`}>
            <div className="flex flex-col p-8 rounded-lg sm:card-side sm:gap-8 gap-y-4 group bg-base-300 shadow-xl hover:shadow-2xl ease-in-out duration-300 ">
              <figure>
                <img
                  src={image}
                  alt={title}
                  className="w-24 h-[6rem] sm:ml-10 rounded-lg sm:h-[8rem] sm:w-[8rem] object-cover group-hover:scale-105 transition duration-300 "
                />
              </figure>
              <div className="ml-0 sm:ml-16">
                <h3 className=" capitalize font-medium text-lg">{title}</h3>
                <p className="text-lg text-neutral-content capitalize">
                  {company}
                </p>
              </div>

              <p className=" ml-0 sm:ml-auto   text-secondary font-medium text-lg">
                {dollarVal}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductList;
