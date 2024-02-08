import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Changing the way people shop!!
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          excepturi veniam voluptatibus iusto, aspernatur delectus veritatis
          error provident eos, soluta sequi nobis molestias animi dolor!
        </p>
        <div className="mt-10">
          <Link to="product" className="btn btn-accent capitalize">
            our product
          </Link>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((images) => {
          return (
            <div key={images} className="carousel-item">
              <img
                src={images}
                alt=""
                className="rounded-box w-80 h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
