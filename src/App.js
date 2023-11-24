import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Details from './components/pages/Details';

const App = () => (
  <body>
    <div className="main-container">
      <NavBar />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </section>
    </div>
  </body>

);

export default App;
