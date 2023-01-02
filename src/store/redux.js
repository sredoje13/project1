import { createSlice,configureStore } from "@reduxjs/toolkit";
import { GiClawSlashes } from "react-icons/gi";
import classes from './../Welcomepage/welcomepage.module.css'
const initialstate2={imgclick:false, img:{}}
 const imgSlice=createSlice({
name:"imgSlice",
initialState:initialstate2,
reducers:{
  clickimage(state,action){
    state.imgclick=!state.imgclick;
    let clasname;
    if(state.imgclick){
   clasname='bigimage'
    }
    else clasname=""
 const slika=action.payload;
 console.log(slika)
 state.img={
 id:slika.id,
 slika:slika.slika,
 clname:clasname
 }
 
  }
}
 })
 const loging=createSlice({
  name:'loging',
  initialState:{islogin:null},
  reducers:{
    loginonpage(state){
state.islogin=true;

    },
    logoutonpage(state){
 state.islogin=false;
    }
  }
 })
    
const showname=createSlice({
  name:"showname",
  initialState:{name:""},
  reducers:{
 addname(state,action){
  state.name=action.payload;
 }
  }
})

const initialstate={totalamount:0,items:[],totalnum:0};
const cartSlice=createSlice({
    name:'cartSlice',
    initialState:initialstate,
    reducers:{
        additems(state,action){
          state.totalnum++;
          const newitem=action.payload;
          const existingitemId=state.items.find((item)=>item.id===action.payload.id);
         
          if(existingitemId){
           existingitemId.numofproducts++;
           existingitemId.priceofproducts=existingitemId.numofproducts*existingitemId.price
         
          }
          else state.items.push({
            id:newitem.id,
            price:newitem.price,
            product:newitem.product,
            numofproducts:1,
            priceofproducts:newitem.price
          })

          state.totalamount=state.totalamount+newitem.price;
        },
        removeitems(state,action){
          state.totalnum--;
      const newitem=action.payload;
      const existingitemid=state.items.find((item)=>item.id===newitem.id);
      
        if(existingitemid.numofproducts===1){
           state.items= state.items.filter((item)=>item.id!==newitem.id)
        }
        else {
            existingitemid.numofproducts--;
            existingitemid.priceofproducts=existingitemid.numofproducts*existingitemid.price
        }


        state.totalamount=state.totalamount-existingitemid.price;
        },
        nullitems(state,action){
          state.totalnum=0;
          state.totalamount=0;
          state.items=[];
        }
    }
})

const store=configureStore({
    reducer:{cartSlice:cartSlice.reducer,
      imgSlice:imgSlice.reducer,
      loging:loging.reducer,
      showname:showname.reducer
    }
})
export const shownameaction=showname.actions
export const logionac= loging.actions
export const imageaction=imgSlice.actions;
export const Addremoveitems=cartSlice.actions
export default store;
