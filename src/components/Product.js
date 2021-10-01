import React from 'react';
import './Product.css'
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import { useStateValue } from '../StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
          <div className="product__info">
           <h2>{title}</h2>
           <p className="product__price">
              <small>Rs.</small>
              <strong>{price}</strong>
           </p> 
           <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_) => (
                    <p>
                        <StarBorderPurple500SharpIcon />
                    </p>
                )
              )}  
           </div>
   
          </div>
          <img src={image} alt="" />
          <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product;
