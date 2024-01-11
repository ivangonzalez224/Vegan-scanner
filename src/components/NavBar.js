import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';
import { BsUpcScan, BsSearch } from 'react-icons/bs';
import homelogo from '../assets/images/homeLogo.png';

const NavBar = () => (
  <nav>
    <ul>
      <li id="nav_left">
        <NavLink to="/"><img src={homelogo} alt="Logo" /></NavLink>
      </li>
    </ul>
    <ul id="nav-rigth">
      <li id="scan-list">
        <BsUpcScan id="scan-btn" style={{ color: '#fff' }} />
      </li>
      <li>
        <NavLink to="/products"><BsSearch style={{ color: '#fff' }} /></NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
