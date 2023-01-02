import { imageaction } from "../store/redux"
import { useDispatch,useSelector} from "react-redux"

const ImgGalery=(props)=>{
   
    const{slika,id,clname}=props;
    const imagee=useSelector((state)=>state.imgSlice.img);
  console.log(imagee)
    console.log(imagee.id)
const dispatch=useDispatch()
    const viewimage=()=>{
        dispatch(imageaction.clickimage({
            slika,id,clname
    }))
        }
    return(<div>
      <img onClick={viewimage} src={props.slika} className={props.className} alt='slika'/>
      </div>
    )
}
export default ImgGalery