import React from 'react'
import './Checkout.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
           <img className="checkout__ad" src="" alt="" /> 
           {basket.length === 0 ? (
               <div>
                   <h2>Your shopping basket is empty.</h2>
                   <p>You have no item in your cart. To add one or more items, click "Add to basket" next to the item.</p>
               </div>
           ) : (
               <div>
                   <h2 className="checkout_title">Your shopping basket.</h2>
                   {basket.map(item => (
                      <CheckoutProduct 
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                      /> 
                   ))} 
               </div>
           )}
           </div>
           {basket.length > 0 && (
               <div className="checkout_right">
                    <h2>Subtotal</h2>
                   <Subtotal />
               </div>
           )}
        </div>
    );
}

export default Checkout;
