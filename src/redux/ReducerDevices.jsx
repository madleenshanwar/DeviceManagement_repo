export default function ReducerDevices(state=[],action) {
    switch(action.type){
        case 'ADD_DEVICES' :
            return [...state,{...action.payload}]
        case 'REMOVE_DEVICES':
            return state.filter((_device,index)=>{
                return index !== action.payload
            })
        case 'UPDATE_DEVICES':
            return state.map((device,index)=>{
                if(index===action.payload.id){
                    return{
                        image:action.payload.image,
                        name:action.payload.name,
                        date:action.payload.date,
                        ramsize:action.payload.ramsize,
                        storagesize:action.payload.storagesize,
                        isadd:action.payload.isadd
                    }
                }
                return device
            })
        default:
            return state
    }
}
