import React,{useRef, useState} from 'react'
import classes from './MealItemform.module.css'
import Input from '../../UI/Input'

const MealItemform = (props) => {
  const amountref=useRef();
const[isvalid,setIsvalid]=useState(true);
  const submithandler=(event)=>{
   event.preventDefault();
   const enteredamount=amountref.current.value;
   const enteredamountnumber= +enteredamount;
   if(enteredamount.trim().length===0 || enteredamountnumber<1 || enteredamount>5){
    setIsvalid(false);
    return;
   }
   props.onaddtocart(enteredamountnumber);
  }
  return (
    <form className={classes.form} onSubmit={submithandler}>
    <Input ref={amountref} label='Amount' input={{
        id:'Amount'+props.id,
        type:'number',
        min:"1",
        max:"5",
        step:'1',
        defaultValue:'1' 
    }}/>
    <button className={classes.button}> + Add </button>
    {!isvalid && <p>please enter correct amount between 1-5</p>}
    </form>
  )
}
export default MealItemform
