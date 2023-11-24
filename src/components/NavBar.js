import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';
import { BsUpcScan, BsSearch } from 'react-icons/bs';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">ᐸ</NavLink>
      </li>
      <li>
        <BsUpcScan style={{ color: '#fff' }} />
      </li>
      <li>
        <NavLink to="/search"><BsSearch style={{ color: '#fff' }} /></NavLink>

      </li>
    </ul>
  </nav>
);

export default NavBar;
