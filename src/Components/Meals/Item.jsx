import './Item.css';

const Item=({item})=>{
  console.log(item)
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
          <form action="">
              <div className='form-group'>
                <label htmlFor='amount'><strong>Amount</strong></label>
                <input type="number" id='amount' title='amount' />
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