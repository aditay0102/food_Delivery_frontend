import React, { useContext } from 'react'
import "./Cart.css";
import {StoreContext} from '../../context/StoreContest.jsx'
import {useNavigate} from 'react-router-dom'
import { food_list } from '../../assets/frontend_assets/assets.js';

function Cart() { 
  const {cartItems,food_list,removeFromCart, getTotalCartAmount} = useContext(StoreContext)

  const navigate = useNavigate();
  
  return (
    <div className='cart'> 
      <div className="cart-Items">
        <div className="cart-items-title">
          <p>items</p>
          <p>title</p>
          <p>price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index) => {
          if(cartItems[item._id] > 0)
            {
              

                return(
                <div>

                  <div className='cart-items-title cart-items-item'>
                    <img src={item.image} alt='' />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]}</p>
                    <p className='cross' onClick={() => removeFromCart(item._id)} >x</p>
                  </div>
                  <hr/>

                </div>
                )
              
              
            }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>
            Cart Totals
          </h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>

          <button onClick={()=> navigate('/order')} >PROCEED TO CHECKOUT</button>

        </div>
        <div className='cart-Promocode'>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='promo code' />
              <button>Submit </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
