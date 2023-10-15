import React,{Fragment} from 'react'
import classes from './header.module.css';
import meals from '../assets/meals.jpg'
import Headercartbutton from './Headercartbutton';
const Header = (props) => {
  return (
    <Fragment>
   <header className={classes.header}>
    <h1>ReactMeals</h1>
    <Headercartbutton onclick={props.onshow}/>
   </header>
   <div className={classes['main-image']}>
   <img src={meals} alt='delicious meals are there'/>
   </div>
    </Fragment>
  )
}
export default Header
