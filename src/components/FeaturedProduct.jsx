import ProductGrid from './ProductGrid';
import SectionTitle from './SectionTitle';

const FeaturedProduct = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="Featured products" />
      <ProductGrid />
    </div>
  );
};
export default FeaturedProduct;
