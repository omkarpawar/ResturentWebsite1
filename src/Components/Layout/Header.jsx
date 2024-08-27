import './Header.css';
import { Fragment } from 'react';

import CartButton from './CartButton';

const Header=()=>{
  return(
    <Fragment>
    <div className='main'>

      <div className='Header-main-div'>
        <div className='heading'>   
          <div className='cartButton'>
            <h1>ReactMeals</h1>
          </div>
          <div className='cartButton2'>
              <CartButton/>
          </div>
        </div>
        
      </div>

    </div>
    </Fragment>
  )
}

export default Header;