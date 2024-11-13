function ReducerFavAccessories(state=[], action) {
  switch (action.type) {
    case "ADD_FAV_ACCESSORIES":
      return [...state, { ...action.payload }];
    case "REMOVE_FAV_ACCESSORIES":
      return state.filter((_accessories, index) => {
        return index !== action.payload;
      });
    case "UPDATE_FAV_ACCESSORIES":
      return state.map((accessories, index) => {
        if (index === action.payload.id) {
          return {
            namedevice: action.payload.namedevice,
            image: action.payload.image,
            name: action.payload.name,
          };
        }
        return accessories;
      });
    default:
      return state;
  }
}
export default ReducerFavAccessories