import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import Navlinks from './Navlinks';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/userSlice';

// SETTING THEME OBJECT
// const themes = {
//   winter: 'winter',
//   night: 'night',
// };

const Navbar = () => {
  const dispatch = useDispatch();
  // const [theme, setTheme] = useState(
  //   localStorage.getItem('theme') || themes.winter
  // );
  const handleTheme = () => {
    dispatch(toggleTheme());
    // const { winter, night } = themes;
    // const newTheme = theme === winter ? night : winter;
    // setTheme(newTheme);
  };

  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', theme);
  //   localStorage.setItem('theme', theme);
  // }, [theme]);

  const { numItemsInCart } = useSelector((store) => store.cart);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          {/* DROPDOWN */}

          <details className="dropdown ">
            <summary className="btn btn-ghost lg:hidden ">
              <FaBarsStaggered className="h-6 w-6" />
            </summary>
            <ul className="p-2 shadow menu menu-sm lg:hidden dropdown-content z-[1] mt-3 bg-base-200 rounded-box w-52">
              <Navlinks />
            </ul>
          </details>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/* THEME */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* SUN */}
            <BsSunFill className="swap-on h-4 w-4" />
            {/* MOON */}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          {/* CART */}
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
