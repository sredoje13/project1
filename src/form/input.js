import Button from "../UI/Button"
import classes from './input.module.css'
import Bottlepage from "./bottlepage";
import { useForm} from 'react-hook-form';
import { useDispatch } from "react-redux";
import { logionac } from "../store/redux";
import { Link,useHistory } from "react-router-dom";
import { useState } from "react";
import { shownameaction } from "../store/redux";
let errorfind=false;
const Input=(props)=>{
    const history=useHistory()
    const [logcost,setlogon]=useState('/formpage')
    const dispatch=useDispatch()
    const {register,handleSubmit,formState:{errors}}=useForm();
  
  const onsubmit=(data)=>{
    dispatch(logionac.loginonpage())
   setlogon("/shopingcart");
fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEYyL1ldCgYwhApu7A6iEGH9AOjVzueCo",{
    method:"POST",
    body:JSON.stringify({
      email:data.email,
      password:data.password,
      returnSecureToken:true
    }),
    headers:{
      "Content-Type":"application/json"
      }
  }).then((res)=>{
   
    if(res.ok){
     dispatch( shownameaction.addname(data.name))
     return res.json()
    }
    
    else{ dispatch(logionac.logoutonpage())
          history.replace('/')
      errorfind=true;
      return res.json().then(()=>{

      throw new Error("niste dobro ukucali mail ili sifru!")
      })}
    }).then((data)=>{

       console.log(data);
      }).catch((error)=>{
        errorfind=true;
        dispatch(logionac.logoutonpage())
        history.replace('/')
       history.replace('/formpage')
     alert(error.message)
      }
      )
    

}
  const onerror=error=>console.log(error);

    return(
<form className={classes.form} onSubmit={handleSubmit(onsubmit,onerror)}>
<input  className={errorfind?classes.errinput:""}
     {...register('name',{
      required:"Obavezno polje",
      minLength:{value:5,
      message:"Potrebno je upisati ime od najmanje 5 slova"}
    })} name='name'type="name" placeholder="name" />

{errors.name&&<p className={classes.err}>{errors.name?.message}</p>}
    <input type="email" placeholder="email" 
    
    {...register("email",{
        required:'Obavezno polje!!',
        minLength:{
            value:7,
            message:"Minimum 7 slova!!!"
        }

    })}
    >
    </input>
   {errors.email&&<p className={classes.err}>{errors.email?.message}</p>}
    <input type="password"placeholder="password" 
    className={errorfind?classes.errinput:""}
    {...register("password",{
   required:"obavezno polje!!!",
   minLength:{
    value:7,
    message:"Sifra mora imati minimum sedam cifara!!!"
   }

    })}>
    </input>
   {errors.password &&<p className={classes.err}>{errors.password?.message}</p>}
    <button
        type='submit'
        className={classes.btn}>Login</button>
        <Bottlepage/>
</form>

    )
}
export default Input