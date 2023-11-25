import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { checkProduct } from '../../redux/products/ProductsSlice';

const ProductsItem = ({ productName }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{productName}</span>
    </div>
  );
};

export default ProductsItem;
