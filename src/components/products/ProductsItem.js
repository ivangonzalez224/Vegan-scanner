import PropTypes from 'prop-types';

const ProductsItem = (
  {
    productName, productId,
  },
) => (
  <div className="product-container">
    <span className="product-name">{productName}</span>
  </div>
);

ProductsItem.propTypes = {
  productName: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
};

export default ProductsItem;
