import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';
import { BsUpcScan, BsSearch } from 'react-icons/bs';

const NavBar = () => (
  <nav>
    <ul>
      <li id="nav_left">
        <NavLink to="/">ᐸ</NavLink>
      </li>
      <li>
        <BsUpcScan style={{ color: '#fff' }} />
      </li>
      <li>
        <NavLink to="/products"><BsSearch style={{ color: '#fff' }} /></NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
