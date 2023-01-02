import classes from './welcomepage.module.css'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { useRef } from 'react'
import Galery from './galery'
const Welcompage=(props)=>{
  const ref=useRef(null)
  const scrollTOGalery=()=>{
    ref.current?.scrollIntoView({behavior:'smooth'})
  }
return(<Fragment>
    <div className={`${classes.div1} centered`}>
      <p> Dobrodosli na nasu stranicu</p> 
      <div>Ukoliko zelite da porucite
         nesto iz naseg asortimana,
         <Link className={classes.activlink} to="/buildaccount"> napravite nalog</Link> ili se <Link className={classes.activlink} to="/formpage">ulogujte</Link> na vec postojeci
          </div>
    </div>
    <div className={`${classes.div1} centered`}>
    <button className={classes.btn}
    onClick={scrollTOGalery}> GALERIJA</button> </div>
    <div className=' centered' ref={ref}>
    <Galery/></div>
    </Fragment>
)
}
export default Welcompage