import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Details from './components/pages/Details';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
