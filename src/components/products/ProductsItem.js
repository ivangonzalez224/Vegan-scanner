import PropTypes from 'prop-types';

const ProductsItem = (
  {
    productName, productId,
  }
) => (
    <div>
      <span className="product-name">{productName}</span>
    </div>
  );

ProductsItem.propTypes = {
  productName: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
};

export default ProductsItem;
