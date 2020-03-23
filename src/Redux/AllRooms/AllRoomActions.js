import {
  FETCH_ALLROOM_REQUEST,
  FETCH_ALLROOM_SUCCESS,
  FETCH_ALLROOM_FALIURE
} from './AllRoomConstants'
import {config} from '../config'

export const fetchAllRoomRequest = () =>{
  return{
    type : FETCH_ALLROOM_REQUEST
  }
}

export const fetchAllRoomSuccess = (all_rooms_success) =>{
  return{
    type : FETCH_ALLROOM_SUCCESS,
    payload : all_rooms_success
  }
}

export const fetchAllRoomFaliure = (error) =>{
  return{
    type : FETCH_ALLROOM_FALIURE,
    payload : error
  }
}

export const fetchAllRooms = () =>{
    return(dispatch) => {
      dispatch(fetchAllRoomRequest())
      const url =`${config.api_root}/get_all_room`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_rooms_res =>{
      const all_rooms_success = all_rooms_res
      dispatch(fetchAllRoomSuccess(all_rooms_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllRoomFaliure(errorMsg))
    })
    }
}
