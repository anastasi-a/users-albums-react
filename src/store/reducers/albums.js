export const ACTION_SET_ALBUMS = "SET_ALL_ALBUMS";
export const ACTION_SET_PHOTOS = "SET_SELECTED_ALBUM";

const initialValue = {
  albums: [],
  photos: []
}

const albumReducer = (state = initialValue, {type, payload}) => {
  switch (type) {
    case ACTION_SET_ALBUMS:
      return {
        ...state,
        albums: payload
      }

    case ACTION_SET_PHOTOS:
      return {
        ...state,
        photos: payload
      }

    default:
      return state;
  }
}

export default albumReducer;
