import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailsList = () => {
  const { productId } = useParams();
  const { productItems } = useSelector((store) => store.products);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const productIdNum = parseInt(productId, 10);
  const newProducts = productItems.filter((item) => item.id === productIdNum);
  const nomProduct = newProducts[0].nom_producto;
  const descriptionArr = newProducts[0].descri.split('**');
  const imgProduct = descriptionArr[0];
  let tagProduct1 = descriptionArr[1];
  let tagProduct2 = descriptionArr[2];
  const ingredientsArr = descriptionArr[3].split('??');
  const ingreMap = ingredientsArr.map((ingredient) => {
    let className;
    const key = ingredient;
    if (ingredient.includes('XX')) {
      className = 'ingredient-red';
    } else if (ingredient.includes('~~')) {
      className = 'ingredient-blue';
    } else {
      className = 'ingredient-black';
    }
    if (tagProduct1 === 'esVegan.png') {
      tagProduct1 = 'https://veganicapp.com/wp-content/uploads/esVegan.png';
    } else if (tagProduct1 === 'vegano_noEs_apto.png') {
      tagProduct1 = 'https://veganicapp.com/wp-content/uploads/vegano_no_apto.png';
    }
    if (tagProduct2 === 'noGluten.png') {
      tagProduct2 = 'https://veganicapp.com/wp-content/uploads/noGluten.png';
    } else if (tagProduct2 === 'conGlutenEsp.png') {
      tagProduct2 = 'https://veganicapp.com/wp-content/uploads/conGlutenEsp.png';
    } else if (tagProduct2 === 'crueltyFree.png') {
      tagProduct2 = 'https://veganicapp.com/wp-content/uploads/crueltyFree.png';
    }

    return (
      <div key={key} className="product-container">
        <span className={className}>{ingredient}</span>
      </div>
    );
  });
  return (
    <div className="details-main">
      <div className="details-top">
        <img src={imgProduct} alt="Product" />
        <div>
          <h3>{nomProduct}</h3>
        </div>
      </div>
      {!showRecommendation && (
        <>
          <div className="details-tags">
            <img src={tagProduct1} alt="Product tag" />
            <img src={tagProduct2} alt="Product tag" />
          </div>
          <div className="top-ingredients">
            <p>Ingredientes</p>
            {newProducts[0].estado === 'apto' && (
              <button
                type="button"
                onClick={() => setShowRecommendation(true)}
              >
                ver recomendación
              </button>
            )}
          </div>
          <div className="ingredient-listItems">
            {ingreMap}
          </div>
        </>
      )}
      {showRecommendation && (
        <div className="recommendation-main">
          <button className="recom-backBtn" type="button" onClick={() => setShowRecommendation(false)}>ver ingredientes</button>
          <div className="recommendation-item">
            <img src="{newProducts[0].recom_img}" alt="nutritional recommendation icon" />
            <span id="recommendation-title">{newProducts[0].recomendacion}</span>
          </div>
          <div className="recommendation-item">
            <span>- Sodio</span>
            <div>{newProducts[0].sodio}</div>
          </div>
          <div className="recommendation-item">
            <span>- Azúcares</span>
            <div>{newProducts[0].azucar}</div>
          </div>
          <div className="recommendation-item">
            <span>- Aditivos</span>
            <div>{newProducts[0].aditivos}</div>
          </div>
          <div className="recommendation-item">
            <span>- Proteínas</span>
            <div>{newProducts[0].proteinas}</div>
          </div>
          <div className="recommendation-item">
            <span>- Fortificado</span>
            <div>{newProducts[0].fortificado}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsList;
