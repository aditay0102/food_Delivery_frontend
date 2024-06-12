import React, { createRef, useEffect, useState } from 'react'
import './FoodItem.css'
import { useContext } from 'react';
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContest.jsx';

function FoodItem({id,name,price,description,image}) {
  const [itemCount,setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

 
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt=''  />
        { !cartItems[id]
            ? <img className='add' onClick={() => addToCart(id)}  src={assets.add_icon_white}  alt='' />
            : <div className='food-item-counter'>
                <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red}  />
                <p>{cartItems[id]}</p>
                <img onClick={() => addToCart(id)} src={assets.add_icon_green} />
              </div>
        }
      </div>

      <div className='food-item-info'>
        <div className='food-item-name-rating' >
            <p>{name}</p>
            <img src={assets.rating_starts} />
        </div>

        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
