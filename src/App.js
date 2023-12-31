import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Details from './components/pages/Details';

const App = () => (
  <div className="main-container">
    <NavBar />
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:productId" element={<Details />} />
      </Routes>
    </section>
  </div>

);

export default App;
