import { useContext } from 'react';

import CartIcon from '../Cart/Carticon';
import CartContext from '../../store/CartContext';
import classes from './Headercartbutton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, items) => {
    return curNumber + items.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onclick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;