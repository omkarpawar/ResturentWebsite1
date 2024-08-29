import { useContext, useRef } from 'react';
import { ItemList } from '../../Store/Item-List-Store';
import './Item.css';


const Item=({item})=>{

  const {addItem}=useContext(ItemList)
  const amountElement=useRef()
  
  const formSubmitHandler=(event)=>{
    event.preventDefault();

    const id=item.id;
    const name=item.name;
    const price = item.price;
    const amount=amountElement.current.value;

    addItem(id,name,price,amount)

   
  }

  return(
    <div className="item">
      <ul>
        <li className='listElement'>
          <div>
            <h3><strong>{item.name}</strong></h3>
            <i>{item.title}</i>
            <h2>{item.price}</h2>
          </div>
          
        <div className='addItems'>
          <form  onSubmit={formSubmitHandler}>
              <div className='form-group'>
                <label htmlFor='amount'><strong>Amount</strong></label>
                <input type="number" ref={amountElement} id='amount' title='amount' />
              </div>
              
              <button className='button'><strong>+Add</strong></button>
            </form>

        </div>
          
         

        </li>
        <hr />
      </ul>
    </div>
  )
}
export default Item;