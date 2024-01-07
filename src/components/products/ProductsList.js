import {
  React, useState, useEffect, useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductsItem from './ProductsItem';
import { getProducts } from '../../redux/products/ProductsSlice';
import '../../assets/styles/products.css';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { productItems } = useSelector((store) => store.products);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterEstado, setFilterEstado] = useState('');
  const [activeFilterBtn, setActiveFilterBtn] = useState('filterBtn-todo');

  const filteredProducts = useMemo(() => {
    const baseFilter = searchQuery
      ? productItems.filter(
        (product) => product.nom_producto.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      : productItems;

    if (filterEstado && filterEstado !== 'all') {
      return baseFilter.filter((product) => product.estado === filterEstado);
    }

    return baseFilter;
  }, [productItems, searchQuery, filterEstado]);

  const handleCloseSearch = () => {
    setSearchQuery('');
  };

  const handleFilterClick = (id) => {
    setFilterEstado(id.replace('filterBtn-', ''));
    setActiveFilterBtn(id);
  };

  useEffect(() => {
    if (productItems.length === 0) {
      dispatch(getProducts());
    }
  });

  return (
    <div className="product-listItems">
      <div className="search-main">
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Busca productos..."
          />
          <button id="search-closeBtn" type="button" onClick={handleCloseSearch}>X</button>
        </div>
      </div>
      <div className="filterBtn-conatiner">
        <button
          className={`filter-btn ${activeFilterBtn === 'filterBtn-todo' ? 'active' : ''}`}
          type="button"
          onClick={() => handleFilterClick('filterBtn-todo')}
        >
          Todo
        </button>
        <button
          className={`filter-btn ${activeFilterBtn === 'filterBtn-apto' ? 'active' : ''}`}
          type="button"
          onClick={() => handleFilterClick('filterBtn-apto')}
        >
          Apto
        </button>
        <button
          className={`filter-btn ${activeFilterBtn === 'filterBtn-noApto' ? 'active' : ''}`}
          type="button"
          onClick={() => handleFilterClick('filterBtn-noApto')}
        >
          No Apto
        </button>
      </div>

      {filteredProducts.map((product) => (
        <ProductsItem
          key={product.id}
          productId={product.id}
          productName={product.nom_producto}
        />
      ))}
    </div>
  );
};
export default ProductsList;
