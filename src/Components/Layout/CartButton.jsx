import Modal from "../UI/Modal";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { ItemList } from "../../Store/Item-List-Store";
import './Cart.css';

const CartButton=()=>{
  const {cartList}=useContext(ItemList)
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
     
      <span className="number">{cartList.length}</span>
    </button>
  </div>
  )
}

export default CartButton;