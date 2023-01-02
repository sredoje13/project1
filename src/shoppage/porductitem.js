import { useDispatch } from 'react-redux';
import { Addremoveitems } from '../store/redux'

const Productitem=(props)=>{
const{product,price,description,id}=props
    const dispatch=useDispatch();
    const addtopay=(event)=>{
        event.preventDefault()
    dispatch(Addremoveitems.additems({
      price,
      product,
      id
    }))
    }
    return(
        <div className={props.className } >
            <div>{product}</div>
            <div>{description}</div>
            <div>{price}</div>
           <button onClick={addtopay}>+</button>

        </div>
    )
}
export default Productitem