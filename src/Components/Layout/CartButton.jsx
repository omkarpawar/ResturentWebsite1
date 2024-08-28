import Modal from "../UI/Modal";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import './Cart.css';

const CartButton=()=>{

  const [buttonClicked,setButtonClicked]=useState(false)

  const errorHandler=()=>{
    setButtonClicked(false)
  }

  return(
    <div>
      {buttonClicked && <Modal onConfirm={errorHandler}/> }
      
    <button className="cart" onClick={()=>{setButtonClicked(true)}}>
      
      <span className="logo"><FaShoppingCart /></span>
      
      <span className='para'>Your Cart</span>
     
      <span className="number">3</span>
    </button>
  </div>
  )
}

export default CartButton;