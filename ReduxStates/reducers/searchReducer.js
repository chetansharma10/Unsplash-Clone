const searchReducer=(state='',action)=>{

    if(action.type==="INPUT"){
        return {
            value:action.payload.value,
        }
    }
   
}
export default searchReducer;