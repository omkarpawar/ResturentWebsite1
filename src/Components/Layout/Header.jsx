import './Header.css';
import CartButton from '../Carts/CartButton';

const Header=()=>{
  return(
    <div>
    <div className='Header-main-div'>
      <div className='heading'>   
      <div className='cartButton'>
        <h1>ReactMeals</h1>
        </div>
      </div>
    </div>
    <div className='cartButton2'>
            <CartButton/>
    </div>
    </div>
  )
}

export default Header;