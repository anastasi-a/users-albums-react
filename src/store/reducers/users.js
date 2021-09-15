export const ACTION_UPDATE_USER = "UPDATE_USER";
export const ACTION_REMOVE_USER = "REMOVE_USER";
export const ACTION_SET_ALL_USERS = "SET_ALL_USERS";

const initialValue = {
  users: []
}

const userReducer = (state = initialValue, {type, payload}) => {
  switch (type) {
    case ACTION_UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === payload.id ? payload : user
        )
      }

    case ACTION_REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user =>
          user.id !== payload
        )
      }

    case ACTION_SET_ALL_USERS:
      return {
        ...state,
        users: payload
      }

    default:
      return state;
  }
}

export default userReducer;
