import classes from './card.module.css'

const Finalyproducts=(props)=>{
    return(

        <div className={`centerd ${classes.happycart}` }id={props.id}>
           
            <div>CESTITAMO, PORUCILI STE {props.numofproducts} PROIZVODA!!</div>
            <div>VAS RACUN IZNOSI {props.totalamount} RSD</div>
            <div>UZIVAJTE U VASEM PICU!!</div>
            <button className={classes.btn}onClick={props.onClick}>X</button>
        </div>
    )
}
export default Finalyproducts