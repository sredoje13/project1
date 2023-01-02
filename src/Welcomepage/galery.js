import { useRef } from "react"
import classes from './welcomepage.module.css'
import Image1 from './../rakija1.jpg'
import Image2 from './../rakija2.jpg'
import Image3 from './../rakija3.jpg'
import Image4 from './../rakija4.jpg'
import { useState } from "react"
import Image6 from './../rakija7.jpg'
import Image7 from './../rakija8.jpg'
import ImgGalery from "./imggalery"
import { imageaction } from "../store/redux"
import { useDispatch,useSelector} from "react-redux"
const Galery=(props)=>{
    const click=useSelector((state)=>state.imgSlice.imgclick)

    const imagee=useSelector((state)=>state.imgSlice.img);

const arr=[
{  slika:Image1,
    id:'im1',
    clname:classes.img,
},
{  slika:Image2,
    id:'im2',
    clname:classes.img,
},
{   slika:Image3,
    id:'im3',
    clname:classes.img,
},
{ slika:Image4,
     id:'im4',
     clname:classes.img,
},
{ slika:Image6,
    id:'im5',
    clname:classes.img,
 },
 { slika:Image7,
    id:'im6',
   clname:classes.img,
},
];
const items=arr.map((item)=>item);
console.log(items)


    return(
        <div className={classes.galery} >
           {arr.map((item)=>
  <ImgGalery className={!click?item.clname:classes.opacity} key={item.id} id={item.id} slika={item.slika}/>
 
)}
 {click&&<img src={imagee.slika} className={classes.bigimage} alt="slikica" id="r6"></img>}
        </div>
    )
}
export default Galery