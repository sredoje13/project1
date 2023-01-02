import Button from "../UI/Button";
import{TbGlassFull} from 'react-icons/tb'
import classes from './navbuttons.module.css'
import {GiSquareBottle} from "react-icons/gi"
import {TbGlass} from 'react-icons/tb'
import {useState,useEffect} from 'react'
import { NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logionac } from "../store/redux";
const Navbarbuttons=()=>{
    const dispatch=useDispatch();

    const numofpr=useSelector((state)=>state.cartSlice.totalnum)
 const[glass,setglass]=useState(false)
const mousover=()=>{
setglass(prevvalue=>!prevvalue)

}
const log=useSelector((state)=>state.loging.islogin)
const logout=()=>{
dispatch(logionac.logoutonpage())
}

 
    return(
        <ul className={classes.ul}  onMouseOver={mousover} >
           
            <div className={classes.glassbottle}><GiSquareBottle className={!glass?classes.bottle:classes.hoverbottle}/>
           {!glass&&<TbGlass className={classes.glassone}/>}
           {glass&&<TbGlassFull className={classes.glassone}/>}
           </div>
            <div className={classes.header}>Domaca rakija</div>
            
            {log&& <div className={classes.divlink}>
        <NavLink to="/carditems"><Button
            className={classes.btn}> Cart products<br>
            </br><div>{numofpr}</div> </Button></NavLink>
          <div><Button children="Log Out" className={classes.logout} onClick={logout}/></div> </div>}
        </ul>
    )
}
export default Navbarbuttons