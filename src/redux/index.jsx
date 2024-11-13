import ReducerDevices from "./ReducerDevices";
import ReducerAccessoreis from "./ReducerAccessoreis";
import ReducerOffer from "./ReducerOffer";
import ReducerFavDevice from "./ReducerFavDevice";
import ReducerFavAccessories from "./ReducerFavAccessories";
import { combineReducers } from "redux";
export const allReducer=combineReducers({
    ReducerDevices:ReducerDevices,
    ReducerAccessoreis:ReducerAccessoreis,
    ReducerOffer:ReducerOffer,
    ReducerFavDevice:ReducerFavDevice, 
    ReducerFavAccessories:ReducerFavAccessories
})