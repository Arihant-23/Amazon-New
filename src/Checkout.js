import React from "react";
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import './Subtotal';
import Subtotal from "./Subtotal";
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
    <div className="checkout">
            <div className="checkout_left">
               <img className='checkout_ad' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjb6rsDkhNMa7aQoMoANCpS_su-aEkRADeQ&usqp=CAU"/>
            <div>
                <h3>
                   <strong>Hello, { user && user.email}</strong> 
                </h3>
                <h2 className="checkout_title">
                    Your shopping Basket
                </h2>
               {basket.map(item =>(
                   <CheckoutProduct
                   title={item.title}
                   image={item.image}
                   price={item.price}
                   rating={item.rating}
                   />
               ))}

            </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />
                
            </div>

        </div>
    ); 
}

export default Checkout;
