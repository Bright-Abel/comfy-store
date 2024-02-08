import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
const links = [
  { id: nanoid(), url: '/', text: 'home' },
  { id: nanoid(), url: 'about', text: 'about' },
  { id: nanoid(), url: 'product', text: 'products' },
  { id: nanoid(), url: 'cart', text: 'cart' },
  { id: nanoid(), url: 'checkout', text: 'checkout' },
  { id: nanoid(), url: 'orders', text: 'orders' },
];

const Navlinks = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === 'checkout' || url === 'orders') && !user) return;
        return (
          <li key={id}>
            <NavLink to={url} className="capitalize">
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default Navlinks;
