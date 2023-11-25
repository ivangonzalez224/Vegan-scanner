import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductsItem from './ProductsItem';
import { getProducts } from '../../redux/products/ProductsSlice';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { productItems } = useSelector((store) => store.products);
  useEffect(() => {
    if (productItems.length === 0) {
      dispatch(getProducts());
    }
  });

  return (
    <div className="product-listItems">
      {productItems.map((product) => (
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
