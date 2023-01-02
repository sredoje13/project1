import { useState,useEffect,useCallback} from "react"
import Productlist from "./productlist.js"
import { useSelector } from "react-redux"
import classes from './products.module.css'
const Products=(props)=>{
const myname=useSelector((state)=>state.showname.name);
console.log(myname)

    const[loading,setisloading]=useState(false)
    const[allproducts,setallproducts]=useState([])
const showproducts=useCallback(async()=>{
    setisloading(true)
try{const response=await fetch('https://routeappv6-default-rtdb.firebaseio.com/shoping.json');
if(!response.ok){
    throw new Error('Failed request')
}
let datatransform=[];
const data=await response.json()
for(let onedata in data){
    datatransform.push({
        id:onedata,
        product:data[onedata].product,
        description:data[onedata].description,
        price:data[onedata].price,

    })
  
}
setallproducts(datatransform)
console.log(datatransform)
}
catch(error){
    alert(error.message)
}
setisloading(false)
},[])
useEffect(() => {
   showproducts();
  }, [showproducts]);
    return(<div>
        <div className={`${classes.myname} centered`}>Dobrodosli {myname}</div>
<Productlist items={allproducts}/></div>
    )
}
export default Products