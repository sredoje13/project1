import Button from "../UI/Button"
import classes from './input.module.css'
import Bottlepage from "./bottlepage";
import {useForm }from 'react-hook-form';
import { useDispatch} from "react-redux";
import { logionac } from "../store/redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Buildaccount=()=>{
 const [errorfind,seterror]=useState(false);
 
  const history=useHistory()
 const dispatch=useDispatch()
    const {register,handleSubmit,formState:{errors}}=useForm({
        defaultValues:{
            email:"",
            password:"",
            phone:""
        },
        criteriaMode:"all"
    });
  const onformsubmit=(data)=>{
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEYyL1ldCgYwhApu7A6iEGH9AOjVzueCo",{
      method:"POST",
      body:JSON.stringify({
        email:data.email,
        password:data.password,
        returnSecureToken:true,
      }),
      headers:{
        "Content-Type":"application/json"
        }
    }).then((res)=>{
      if(res.ok){
        history.replace('/')
        alert("uspesno ste poslali podatke, mozete se ulogovati na svoj nalog")
       return res.json()
      }
      else{
        seterror(true)
          dispatch(logionac.logoutonpage())
          history.replace('/buildaccount')
        return res.json().then((data)=>{
         
        throw new Error("vec postoji korisnik sa ovim e-mailom")}
        )
        
       }}).then((data)=>{

         console.log(data); 
        }).catch((error)=>{
          seterror(true)
          dispatch(logionac.logoutonpage())
          history.replace('/buildaccount')
       alert(error.message)
        }
        )
      
      
  
    console.log(errorfind);}
  const onerror=(err)=>console.log(err)

    return(
<form className={classes.form} onSubmit={handleSubmit(onformsubmit,onerror)}>
<input  className={errorfind?classes.errinput:""}
     {...register('name',{
      required:"Obavezno polje",
      minLength:{value:5,
      message:"Potrebno je upisati ime od najmanje 5 slova"}
    })} name='name'type="name" placeholder="name" />

{errors.name&&<p className={classes.err}>{errors.name?.message}</p>}
    <input  className={errorfind?classes.errinput:""}
     {...register('email',{
      required:"Obavezno polje",
      minLength:{value:5,
      message:"Potrebno je upisati e mail od najmanje 5 slova"}
    })} name='email'type="email" placeholder="email" />
   
  {errors.email&&<p className={classes.err}>{errors.email?.message}</p>}
   <input {...register('password',{
      required:"Obavezno polje",
      minLength:{value:5,
      message:"Potrebno je upisati sifru od najmanje 5 slova"}
    })} name='password'type="password" placeholder="password"/>
 
  {errors.password&& <p className={classes.err}>{errors.password?.message}</p>}
  <input {...register('phone',{
      valueAsNumber: true,
      required:"Obavezno polje",
      minLength:{value:5,
      message:"Potrebno je upisati broj od najmanje 9 cifara",
   }
    })} name='phone'type="number" placeholder="phone" />
   
  {errors.phone&& <p className={classes.err}>{errors.phone?.message}</p>}
  <input {...register('adress',{
      required:"Obavezno polje",
      minLength:{value:5,
      message:"Potrebno je upisati tacnu adresu "}
    })} name='adress'type="text" placeholder="adress"/>
 
  {errors.adress&& <p className={classes.err}>{errors.adress?.message}</p>}

    <Button
        type='submit'
        className={classes.btn}
        children="SUBMIT"
        
        />
        <Bottlepage/>
</form>

    )
}
export default Buildaccount
