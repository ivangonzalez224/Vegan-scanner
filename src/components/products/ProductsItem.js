import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const ProductsItem = ({ productName }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{productName}</span>
    </div>
  );
};

ProductsItem.propTypes = {
  productName: PropTypes.string.isRequired,
};

export default ProductsItem;
