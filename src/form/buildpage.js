
import Buildaccount from "./buildaccount";
import classes from './loginpage.module.css'
const Buildpage=(props)=>{
    return(
        <div className={`centered ${classes.div1}`}>
         
      <Buildaccount/>
     
        </div>
    )
}
export default Buildpage;