import { ADD_ACCESSORIES, ADD_DEVICES, ADD_FAV_ACCESSORIES, ADD_Fav_DEVICES, ADD_OFFER, REMOVE_ACCESSORIES, REMOVE_DEVICES, REMOVE_FAV_ACCESSORIES, REMOVE_Fav_DEVICES, REMOVE_OFFER, UPDATE_ACCESSORIES, UPDATE_DEVICES, UPDATE_FAV_ACCESSORIES, UPDATE_Fav_DEVICES, UPDATE_OFFER } from "./ActionTypes"

//devices
export const AddDevice=(device)=>({
    type :ADD_DEVICES,
    payload: device
})
export const RemoveDevice=(index)=>({
    type :REMOVE_DEVICES,
    payload: index
})
export const UpdateDevices=(device,index)=>({
    type :UPDATE_DEVICES,
    payload: {
        id:parseInt(index),
        name:device.name,
        date:device.date,
        image:device.image,
        ramsize:device.ramsize,
        storagesize:device.storagesize,
        isadd:device.isadd
    }
})
//Accessories
export const AddAccessor=(accessories)=>({
    type :ADD_ACCESSORIES,
    payload: accessories
})
export const RemoveAccessories=(index)=>({
    type :REMOVE_ACCESSORIES,
    payload: index
})
export const UpdateAccessor=(accessories,index)=>({
    type :UPDATE_ACCESSORIES,
    payload: {
        id:parseInt(index),
        namedevice:accessories.namedevice,
        image:accessories.image,
        name:accessories.name,
    }
})
//offer
export const AddOffer=(offer)=>({
    type :ADD_OFFER,
    payload: offer
})
export const RemoveOffer=(index)=>({
    type :REMOVE_OFFER,
    payload: index
})
export const UpdateOffer=(offer)=>({
    type :UPDATE_OFFER,
    payload: {
        deviceName:offer.namedevice,
        namedevice:offer.namedevice,
        accessorieses:offer.accessorieses,
        price:offer.price,
        enddate:offer.enddate,
    }
})
//fav device
export const AddFavDevice=(device)=>({
    type :ADD_Fav_DEVICES,
    payload: device
})
export const RemoveFavDevice=(index)=>({
    type :REMOVE_Fav_DEVICES,
    payload: index
})
export const UpdateFavDevices=(device,index)=>({
    type :UPDATE_Fav_DEVICES,
    payload: {
        id:parseInt(index),
        name:device.name,
        date:device.date,
        image:device.image,
        ramsize:device.ramsize,
        storagesize:device.storagesize,
        isadd:device.isadd
    }
})
//fav Accessories
export const AddFavAccessories=(accessories)=>({
    type:ADD_FAV_ACCESSORIES,
    payload:accessories
})
export const RemoveFavAccessories=(index)=>({
    type:REMOVE_FAV_ACCESSORIES,
    payload:index
})
export const UpdateFavAccessories=(accessories,index)=>({
    type:UPDATE_FAV_ACCESSORIES,
    payload: {
        id:parseInt(index),
        namedevice:accessories.namedevice,
        image:accessories.image,
        name:accessories.name,
    }
})