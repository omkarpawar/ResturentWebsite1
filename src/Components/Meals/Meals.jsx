import './Meals.css';
import Summary from "./Summary";
import ItemList from './ItemList';
const Meals =()=>{
  return(
    <>
    
    <div className="Meals">
      <Summary/>
      <ItemList/>
    </div>

  </>
  )
}

export default Meals;