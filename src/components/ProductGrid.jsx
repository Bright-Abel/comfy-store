import { Link, useLoaderData } from 'react-router-dom';

const ProductGrid = () => {
  const { product } = useLoaderData();
  //   console.log(product);
  return (
    <div className="grid lg:grid-cols-3 pt-12 gap-4 md:grid-cols-2">
      {product.map((item) => {
        const id = item.id;
        const { title, image, price, description } = item.attributes;
        return (
          <Link
            key={id}
            to={`/product/${id}`}
            className="capitalize cursor-pointer"
          >
            <div className="card w-full bg-base-300 shadow-xl hover:shadow-2xl ease-in-out duration-300 ">
              <figure>
                <img
                  src={image}
                  alt={title}
                  className="h-64 md:48 w-full object-cover rounded-t-xl "
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions sm:justify-end">
                  <div className="badge badge-outline">
                    ${(price / 100).toFixed(2)}
                  </div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductGrid;
