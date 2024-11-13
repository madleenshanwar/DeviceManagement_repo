function ReducerAccessoreis(state=[],action) {
    switch(action.type){
        case 'ADD_ACCESSORIES' :
            return [...state,{...action.payload}]
        case 'REMOVE_ACCESSORIES':
            return state.filter((_accessories,index)=>{
                return index !== action.payload
            })
        case 'UPDATE_ACCESSORIES':
            return state.map((accessories,index)=>{
                if(index===action.payload.id){
                    return{
                        namedevice:action.payload.namedevice,
                        image:action.payload.image,
                        name:action.payload.name,
                    }
                }
                return accessories
            })
        default:
            return state
    }
}
export default ReducerAccessoreis