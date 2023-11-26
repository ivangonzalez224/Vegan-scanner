import { React } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailsItem from './DetailsItem';

const DetailsList = () => {
  const { productId } = useParams();
  const { productItems } = useSelector((store) => store.products);

  const productIdNum = parseInt(productId, 10);
  const newProducts = productItems.filter((item) => item.id === productIdNum);
  const descriptionArr = newProducts[0].descri.split('**');
  const imgProduct = descriptionArr[0];
  const tagProduct1 = descriptionArr[1];
  const tagProduct2 = descriptionArr[2];
  const ingredientsArr = descriptionArr[3].split('??');
  const ingreMap = ingredientsArr.map((ingredient) => <span key={ingredient} className="ingredient-item">{ingredient}</span>);

  return (
    <div className="details-main">
      <DetailsItem />
      <h1>Ingredients</h1>
      <div className="ingredient-listItems">
        {ingreMap}
      </div>
    </div>
  );
};

export default DetailsList;
