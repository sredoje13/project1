
import classes from './card.module.css'
import {useDispatch} from 'react-redux'
import { Fragment } from 'react'
import { Addremoveitems } from "../store/redux"
const Carditems=(props)=>{
   let showbutton=false
    const {price,product,numofproducts,priceofproducts,id}=props.item;
    const dispatch=useDispatch()
    const deleteoneitem=()=>{
        dispatch(Addremoveitems.removeitems({
        id,
        price,
        numofproducts,

        }))
        }
        if(numofproducts>=1){
           showbutton=true;
        }
   
    return(<Fragment>
        {showbutton&&<div className={classes.carditems}>
            <div>{price}</div>
            <div>{product}</div>
            <div>{numofproducts}<button onClick={deleteoneitem}>-</button></div>
            <div>{priceofproducts}</div>
          
        </div>}</Fragment>
    )
}
export default Carditems