import {
  ACTION_SET_ALBUMS,
  ACTION_SET_PHOTOS
} from "../reducers/albums";
import {
  ACTION_UPDATE_USER,
  ACTION_REMOVE_USER,
  ACTION_SET_ALL_USERS
} from "../reducers/users";

import api from "../../services/api";

export const updateUser = (payload) => {
  return (dispatch) => {
    api.put(`users/${payload.id}`, payload)
      .then(response => {
        dispatch({
          type: ACTION_UPDATE_USER,
          payload: response.data
        })
      })
  }
}

export const removeUser = (payload) => {
  return (dispatch) => {
    api.delete(`users/${payload}`)
      .then(response => {
        dispatch({
          type: ACTION_REMOVE_USER,
          payload
        })
      })
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    api.get("users")
      .then(response => {
        dispatch({
          type: ACTION_SET_ALL_USERS,
          payload: response.data
        })
      });
  }
}

export const fetchAlbums = () => {
  return (dispatch) => {
    api.get("albums")
      .then(response => {
        dispatch({
          type: ACTION_SET_ALBUMS,
          payload: response.data
        })
      });
  }
}

export const fetchPhotos = (id) => {
  return (dispatch) => {
    api.get(`photos?albumId=${id}`)
      .then(response => {
        dispatch({
          type: ACTION_SET_PHOTOS,
          payload: response.data
        })
      });
  }
}
