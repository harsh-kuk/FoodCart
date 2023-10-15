import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import CartItem from './Cartitem';

const Cart = (props) => {
  const cartctx=useContext(CartContext);2
  const totalAmount=`$${cartctx.totalAmount.toFixed()}`
  const hasitem=cartctx.items.length>0;
  const removeitemhandler=(id)=>{
cartctx.removeItem(id);
  }
  const additemhandler=(item)=>{
    cartctx.addItem({...item,amount:1})
  }


  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartctx.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={ removeitemhandler.bind(null,item.id)} onAdd={ additemhandler.bind(null,item)} />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onclose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onclose}>
          Close
        </button>
        {hasitem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;