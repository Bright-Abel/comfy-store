import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://strapi-store-server.onrender.com/api',
  headers: {
    Accept: 'application/json',
  },
});

export default authFetch;

export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return dollarAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
