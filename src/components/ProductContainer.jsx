import { useLoaderData } from 'react-router-dom';
import ProductList from './ProductList';
import ProductGrid from './ProductGrid';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useState } from 'react';

const ProductContainer = () => {
  const { meta } = useLoaderData();

  const totals = meta.pagination.total;
  //   console.log(totals);
  const [layout, setLayout] = useState('grid');

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-based-content'
    }`;
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-lg">
          {totals} Product{totals > 1 && 's'}
        </h4>

        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => {
              setLayout('grid');
            }}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>

          <button
            type="button"
            onClick={() => {
              setLayout('list');
            }}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>

      <div>
        {totals === 0 ? (
          <h5 className="text-2xl mt-16 text-accent animate-bounce">
            Ooooops!!!, No available product for your search
          </h5>
        ) : layout === 'grid' ? (
          <ProductGrid />
        ) : (
          <ProductList />
        )}
      </div>
      {/* {layout === 'grid' ? <ProductGrid /> : <ProductList />} */}
    </>
  );
};
export default ProductContainer;
