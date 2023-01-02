import Carditems from "./Carditems"
import classes from'./card.module.css'
import {useCallback,useState,useEffect,Fragment} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { NavLink,useHistory } from "react-router-dom"
import Finalyproducts from './finalyproducts'
import{Addremoveitems} from './../store/redux';
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Card=(props)=>{
  const history=useHistory()
  const dispatch=useDispatch()
  const[dataitems,setdataitems]=useState({})
  const[showproducts,setshowproducts]=useState(false)
  let showamount=false;
   const[loading,setisloading]=useState(false)
    const itemss=useSelector((state)=>state.cartSlice.items)
    const totalprice=useSelector((state)=>state.cartSlice.totalamount);
    const totalnumber=useSelector((state)=>state.cartSlice.totalnum);

const viewdata=useCallback(async()=>{
  
  const response=await fetch("https://routeappv6-default-rtdb.firebaseio.com/productbye.json");
 try{if(response.ok){
 
  const data=await response.json();
let arrofdata=[];

  arrofdata={
id:data,
numofproducts:data.totalnumber,
totalamount:data.totalprice}

setdataitems(arrofdata);
console.log(dataitems);
setshowproducts(true)
}
else{throw new Error("fail request")}
}
catch(error){
  console.log(error.message)
}
},[dataitems])


const closeproducts=()=>{
dispatch(Addremoveitems.nullitems());
setshowproducts(false)
}
let itemcard;
const closewindow=()=>{
history.replace('/shopingcart')
  }
if(totalprice>0){
  showamount=true;
 itemcard=itemss.map((item)=>(<ul>
  <Carditems key={item.id}
    item={{product:item.product,
       numofproducts: item.numofproducts,
       priceofproducts:`${item.priceofproducts}RSD`,
       price:`${item.price}RSD`, id:item.id}}
  />
 </ul>))
}
else{
  itemcard=(<div className={classes.noproduct}><p>
    NE POSTOJE PROIZVODI U KORPI TRENUTNO</p>
  <p>Vratite se u kupovinu</p><p><NavLink to="/shopingcart"> <AiOutlineShoppingCart/></NavLink></p></div>)
}
const sendporducts=useCallback(async()=>{

  const response=await fetch("https://routeappv6-default-rtdb.firebaseio.com/productbye.json",{
    method:"PUT",
    body:JSON.stringify({itemss, totalprice,totalnumber}),
    headers:{ 'Content-Type': 'application/json',}
  })
  try{ setisloading(true)
  if(response.ok){
   
    const data=await response.json;
    console.log(data)
  }
  else{
throw new Error("failed request")
  }}
  catch(error){
  console.log(error.message);
  }
  setisloading(false)
  await viewdata()
},[itemss,totalnumber,totalprice,viewdata])




return(<Fragment>
    <section className={showamount?`${classes.listofitems} centered`:`${classes.noproduct} centered`}>
{itemcard}
{showamount&&<div className={classes.totalprice}>{totalprice}RSD</div>}
{showamount&&
<div className={classes.btnss}>
  <button className={classes.btn} onClick={closewindow}>Zatvori</button>
<button onClick={sendporducts} className={classes.btn} >Naruci</button>
</div>}
{loading&&<div  className={classes.loading}>loading....</div> }</section>
{showproducts&&<Finalyproducts
key={dataitems.id}
id={dataitems.id}
 numofproducts={dataitems.numofproducts}
 totalamount={dataitems.totalamount}
 onClick={closeproducts}/>}
        </Fragment>

)


}
export default Card