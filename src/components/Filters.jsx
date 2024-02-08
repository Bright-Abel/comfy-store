import { Form, useLoaderData, Link } from 'react-router-dom';
import FormLogin from './FormLogin';
import SearchInput from './SearchInput';
import { useEffect, useState } from 'react';
import { formatPrice } from '../axios/custom';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const { meta, product, newUrl } = useLoaderData();
  const category = meta.categories;
  const company = meta.companies;
  // console.log(newUrl);

  return (
    <Form className="grid bg-base-300 rounded-md px-8 py-4 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormLogin
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={newUrl.search}
      />
      {/* CATEGORIES */}
      <SearchInput
        list={category}
        size="select-sm"
        name="category"
        label="select category"
        defaultValue={newUrl.category}
      />
      {/* COMPANY */}
      <SearchInput
        list={company}
        size="select-sm"
        name="company"
        label="select company"
        defaultValue={newUrl.company}
      />
      {/* ORDER */}
      <SearchInput
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
        name="order"
        label="sort by"
        defaultValue={newUrl.order}
      />
      {/* PRICE*/}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        myPrice={newUrl.price}
      />

      {/* CHECKBOX */}
      <FormCheckbox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultChecked={newUrl.shipping}
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm capitalize">
        search
      </button>
      <Link to="/product" className="btn btn-accent btn-sm capitalize">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
