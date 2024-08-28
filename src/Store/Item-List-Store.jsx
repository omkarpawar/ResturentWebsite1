import { createContext, useReducer } from "react";

export const ItemList=createContext({
  itemList:[],
  cartList:[],
  addItem:()=>{},
  deleteItem:()=>{},
})


const itemListReducer=(currlist,action)=>{
  return currlist;
}
const cartListReducer=(cartList,action)=>{
  let newCartList = cartList;
  if(action.type==='ADD_ITEM'){
    
    newCartList=[action.payload,...cartList];

  }
  return newCartList;
}

const ItemListProvider=({children})=>{

  const [itemList,dispatchItemList]=useReducer(itemListReducer,items)

  const [cartList,dispatchCartList]=useReducer(cartListReducer,[])

  const addItem=(name)=>{
    
    dispatchCartList({
      type:'ADD_ITEM',
      payload:{
          name,
      },
    })
  }

  const deleteItem=()=>{

  }

  return <ItemList.Provider value={{itemList,cartList,addItem,deleteItem}}>{children}</ItemList.Provider>
}


const items=[
  {
    id:1,
    name:'sushi',
    title:'FInest Fresh and Veggies',
    price:'$22.99',
  },

  {
    id:2,
    name:'Pav bhaji',
    title:'Amul BUtter Pav Bhaji',
    price:'$5.99',
  },

  {
    id:3,
    name:'MAc Spicy Panner Burger',
    title:'spicy sauce with panner',
    price:'$10.00',
  },

  {
    id:4,
    name:'VADA PAV',
    title:'spicy VADA PAV with green chilli',
    price:'$1.00',
  },

]

export default ItemListProvider;