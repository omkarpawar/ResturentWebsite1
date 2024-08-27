import { useContext } from "react";
import { ItemList as ItemListData } from "../../Store/Item-List-Store";
import Item from "./Item";
import './ItemList.css';
const ItemList=()=>{

  const {itemList}=useContext(ItemListData)
 

  return(
    <div className="itemList">
      {itemList.map((item,index)=><Item key={index} item={item} />)}
      
    </div>
  )
}

export default ItemList;