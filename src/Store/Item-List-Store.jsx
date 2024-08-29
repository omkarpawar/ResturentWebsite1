import { createContext, useReducer } from "react";

export const ItemList=createContext({
  itemList:[],
  cartList:[],
  addItem:()=>{},
  amountDecrement:()=>{},
  amountIncrement:()=>{},
  
})


const itemListReducer=(currlist,action)=>{
  return currlist;
}
const cartListReducer=(cartList,action)=>{
  let newCartList = cartList;
  if(action.type==='ADD_ITEM'){
    
    newCartList=[action.payload,...cartList];
  }else if(action.type==='DELETE_AMOUNT'){
    newCartList= cartList.map((item)=>item.id === action.payload.id && item.amount>0 ? {...item, amount:Number(item.amount) - 1}:{item})
  }else if(action.type==='ADD_AMOUNT'){
    newCartList=cartList.map((item)=>item.id === action.payload.id ? {...item,amount:Number(item.amount)+1}:{item})
  }


  return newCartList;
}

const ItemListProvider=({children})=>{

  const [itemList,dispatchItemList]=useReducer(itemListReducer,items)

  const [cartList,dispatchCartList]=useReducer(cartListReducer,[])

  const addItem=(id,name,price,amount)=>{
    
    dispatchCartList({
      type:'ADD_ITEM',
      payload:{
          id:id,
          name:name,
          price:price,
          amount:amount,
      },
    })
  }

  const amountDecrement=(id,)=>{
    
    console.log(id)
    dispatchCartList({
      type:'DELETE_AMOUNT',
      payload:{
          id,
      },
    })
  }

  const amountIncrement=(id)=>{

    console.log(id)
    dispatchCartList({
      type:'ADD_AMOUNT',
      payload:{
          id,
      },
    })

  }

  return <ItemList.Provider value={{itemList,cartList,addItem,amountDecrement,amountIncrement}}>{children}</ItemList.Provider>
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
    name:'Panner Burger',
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