import { useReducer } from 'react';

import CartContext from './CartContext';
 
const defaultCartState = {
  items: [],
  totalAmount: 0
};
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

  const existingcartitemindex=state.items.findIndex((item)=>item.id===action.item.id);
const existingcartitem=state.items[existingcartitemindex];
let updatedItems;
if(existingcartitem){
  const updatedItem={
    ...existingcartitem,
    amount:existingcartitem.amount+action.item.amount
  };
  updatedItems=[...state.items];
  updatedItems[existingcartitemindex]=updatedItem;
}else{
updatedItems = state.items.concat(action.item);
}
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
if(action.type ==='REMOVE'){
  const existingcartitemindex=state.items.findIndex((item)=>item.id===action.id);
const existingcartitem=state.items[existingcartitemindex];
const updatedTotalAmount=state.amount-existingcartitem.price;
let updatedItems;
if(existingcartitem.amount===1)
{
  updatedItems=state.items.filter(item=> item.id !== action.id)
}
else{
  const updatedItem={...existingcartitem,amount:existingcartitem.amount-1};
  updatedItems=[state.items];
  updatedItems[existingcartitemindex]=updatedItem;
}
return{
  items:updatedItems,
  totalAmount:updatedTotalAmount
}


}
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;