import { useReducer,useCallback } from "react"
import { GiAccordion } from "react-icons/gi";

const defaultvalue={
    error:null,
    data:null,
    loading:null
}

function http(state,action){
if(action.type==="SEND"){
   return{ data:null,
    error:null,
    loading:true,}
};
if(action.type==="SUCCESS"){
   return {data:GiAccordion.responseData,
    error:null,
    loading:null,}
}
if(action.type==="ERROR"){
 return{ data:null,
    loading:null,
    error:action.errmessage}
}
return state;
}
const useHttp=(requestfunction)=>{
const[httpstate,dispatch]=useReducer(http,defaultvalue);
const sendreqquest=useCallback(async(requestData)=>{
dispatch({type:'SEND'});
try{
    const responseData=await requestfunction(requestData);
    if(responseData.ok){
        dispatch({type:"SUCCESS",responseData})
    }
    else{
        dispatch({type:"ERRPR",
    errmessage:"fail request"})
    }
}
catch(error){
    dispatch({type:"ERRPR",
    errmessage:error.message||"somethiing went wrong"})

}


},[requestfunction])

    return{
sendreqquest,
httpstate

}
}
export default useHttp