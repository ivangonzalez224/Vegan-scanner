import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ProductsItem = (
  {
    productName, productId,
  },
) => (
  <div className="product-container">
    <NavLink
      to={`/details/${productId}`}
    >
      <span className="product-name">{productName}</span>
    </NavLink>
  </div>
);

ProductsItem.propTypes = {
  productName: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
};

export default ProductsItem;
