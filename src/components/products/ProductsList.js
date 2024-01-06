import {
  React, useState, useEffect, useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductsItem from './ProductsItem';
import { getProducts } from '../../redux/products/ProductsSlice';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { productItems } = useSelector((store) => store.products);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterEstado, setFilterEstado] = useState('');

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

  useEffect(() => {
    if (productItems.length === 0) {
      dispatch(getProducts());
    }
  });

  return (
    <div className="product-listItems">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Busca productos..."
      />
      <button type="button" onClick={() => setFilterEstado('apto')}>Apto</button>
      <button type="button" onClick={() => setFilterEstado('noApto')}>No Apto</button>
      <button type="button" onClick={() => setFilterEstado('all')}>All</button>
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
