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

  const filteredProducts = useMemo(
    () => productItems.filter(
      (product) => product.nom_producto.toLowerCase().includes(searchQuery.toLowerCase()),
    ), [productItems, searchQuery],
  );

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
