import { createContext, useReducer } from "react";

export const ItemList=createContext({
  itemList:[],
  addItem:()=>{},
  deleteItem:()=>{},
})


const itemListReducer=(currlist,action)=>{
  return currlist
}

const ItemListProvider=({children})=>{

  const [itemList,dispatchItemList]=useReducer(itemListReducer,items)

  const addItem=()=>{

  }

  const deleteItem=()=>{

  }

  return <ItemList.Provider value={{itemList,addItem,deleteItem}}>{children}</ItemList.Provider>
}

const items=[
  {
    name:'sushi',
    title:'FInest Fresh and Veggies',
    price:'$22.99',
  },

  {
    name:'Pav bhaji',
    title:'Amul BUtter Pav Bhaji',
    price:'$5.99',
  },

  {
    name:'MAc Spicy Panner Burger',
    title:'spicy sauce with panner patty with loaded lactus',
    price:'$10.00',
  },

  {
    name:'VADA PAV',
    title:'spicy VADA PAV with green chilli and with pudina chutney',
    price:'$1.00',
  },

]

export default ItemListProvider;