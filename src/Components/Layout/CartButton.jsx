import { FaShoppingCart } from "react-icons/fa";
import './Cart.css';

const CartButton=()=>{
  return(
    <button className="cart">
      
      <span className="logo"><FaShoppingCart /></span>
      
      <span className='para'>Your Cart</span>
     
      <span className="number">3</span>
    </button>
  )
}

export default CartButton;