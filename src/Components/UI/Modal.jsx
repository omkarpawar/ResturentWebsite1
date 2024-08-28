import './Modal.css';
import ReactDom from "react-dom";
import React, { useContext } from 'react';
import { ItemList } from '../../Store/Item-List-Store';

const Backdrop=(props)=>{

  return <div className='backdrop'></div>
}
const ModalOverlays=(props)=>{

  return(
    <div className="main-carts">
        <ul>
          {props.cartList.map((cart,index)=><li key={index}>{cart.name}</li>)}
        </ul>
        
        
        <div className="mid-cart">
          <span>Total Amount</span>
          <span className="amount">35.56</span>
        </div>

        <div className="footer-cart">
          <button className="closeButton" onClick={props.onConfirm}>Close</button>
          <button className="orderButton">Order</button>
        </div>

      </div>
  )
}


const Modal=(props)=>{

  const {cartList}=useContext(ItemList)
  


  return(
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop/>,document.getElementById("backdrop-root"))}
      {ReactDom.createPortal(<ModalOverlays cartList={cartList} onConfirm={props.onConfirm}/>,document.getElementById("overlay-root"))}
      
    </React.Fragment>
  )
}

export default Modal;