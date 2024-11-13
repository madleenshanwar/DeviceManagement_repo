export default function ReducerOffer(state=[],action) {
    switch(action.type){
        case 'ADD_OFFER' :
            return [...state,{...action.payload}]
        case 'REMOVE_OFFER':
            return state.filter((offer)=>{
                return offer.namedevice !== action.payload
            })
        case 'UPDATE_OFFER':
            return state.map((offer)=>{
                if(offer.namedevice===action.payload.namedevice){
                    return{
                        namedevice:action.payload.namedevice,
                        accessorieses:action.payload.accessorieses,
                        price:action.payload.price,
                        enddate:action.payload.enddate
                    }
                }
                return offer
            })
        default:
            return state
    }
}
