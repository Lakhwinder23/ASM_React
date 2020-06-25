import {
  FETCH_ALLROOM_REQUEST,
  FETCH_ALLROOM_SUCCESS,
  FETCH_ALLROOM_FALIURE
} from './AllRoomConstants'
import {config} from '../config'

export const fetchAllRoomRequest = (all_rooms_info) =>{
  return{
    type : FETCH_ALLROOM_REQUEST,
    payload:all_rooms_info
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

export const fetchAllRooms = (all_rooms_info) =>{
    return(dispatch) => {
      dispatch(fetchAllRoomRequest(all_rooms_info))
      const url =`${config.api_root}/get_all_room`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            HostelId: all_rooms_info != undefined ? all_rooms_info.hostelId != "" ? all_rooms_info.hostelId : undefined : undefined,
            RoomId: all_rooms_info != undefined ? all_rooms_info.roomId != "" ? all_rooms_info.roomId :undefined: undefined
          })
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
