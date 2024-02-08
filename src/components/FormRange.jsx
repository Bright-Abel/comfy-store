import { useState } from 'react';
import { formatPrice } from '../axios/custom';
const step = 1000;
const maxPrice = 100000;
const FormRange = ({ label, size, name, myPrice }) => {
  const [selectedPrice, setSelectedPrice] = useState(myPrice || maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>

      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => {
          setSelectedPrice(e.target.value);
        }}
        step={step}
        className={`range range-accent ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">Min: 0</span>
        <span className="font-bold text-md">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};
export default FormRange;
