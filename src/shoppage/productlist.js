import Productitem from "./porductitem"
import classes from './products.module.css'
const Productlist=(props)=>{
  
    return(
   <div><ul>{props.items.map((item)=>
    <Productitem
    className={classes.productitem}
    key={item.id}
    id={item.id}
    product={item.product}
    description={item.description}
    price={item.price}/>
    )}</ul>
    </div>

    )
}
export default Productlist