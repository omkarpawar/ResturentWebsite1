import './Item.css';

const Item=({item})=>{
  console.log(item)
  return(
    <div className="item">
      <ul>
        <li>
          <h3><strong>{item.name}</strong></h3>
          <i>{item.title}</i>
          <h2>{item.price}</h2>
        </li>
        <hr />
      </ul>
    </div>
  )
}
export default Item;