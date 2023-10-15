import React ,{useContext}from 'react'
import classes from './MealItem.module.css'
import MealItemform from './MealItem/MealItemform'
import CartContext from '../../store/CartContext'

const MealItem = (props) => {
 const cartctx= useContext(CartContext);

  const addcartitemhandler=amount=>{
cartctx.addItem({
  id:props.id,
  name:props.name,
  amount:amount,
  price:props.price
})
  }

const price=`$${props.price}`
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
      <MealItemform onaddtocart={addcartitemhandler} id={props.id}/>
      </div>
    </li>
  )
}
export default MealItem
