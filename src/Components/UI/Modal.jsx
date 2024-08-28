import './Modal.css';
import ReactDom from "react-dom";
import React from 'react';

const Backdrop=(props)=>{

  return <div className='backdrop'></div>
}
const ModalOverlays=(props)=>{

  return(
    <div className="main-carts">
        <p>Sushi</p>
        <div className="mid-cart">
          <span>Total Amount</span>
          <span className="amount">35.56</span>
        </div>

        <div className="footer-cart">
          <button className="closeButton">Close</button>
          <button className="orderButton">Order</button>
        </div>

      </div>
  )
}


const Modal=()=>{
  return(
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop/>,document.getElementById("backdrop-root"))}
      {ReactDom.createPortal(<ModalOverlays/>,document.getElementById("overlay-root"))}
      
    </React.Fragment>
  )
}

export default Modal;