import {
  FETCH_ALLATTENDENCE_REQUEST,
  FETCH_ALLATTENDENCE_SUCCESS,
  FETCH_ALLATTENDENCE_FALIURE
} from './AllAttendenceConstants'
import {config} from '../config'

export const fetchAllAttendenceRequest = () =>{
  return{
    type : FETCH_ALLATTENDENCE_REQUEST
  }
}

export const fetchAllAttendenceSuccess = (all_attendence_success) =>{
  return{
    type : FETCH_ALLATTENDENCE_SUCCESS,
    payload : all_attendence_success
  }
}

export const fetchAllAttendenceFaliure = (error) =>{
  return{
    type : FETCH_ALLATTENDENCE_FALIURE,
    payload : error
  }
}

export const fetchAllAllAttendence = () =>{
    return(dispatch) => {
      dispatch(fetchAllAttendenceRequest())
      const url =`${config.api_root}/get_all_attendance`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_attendence_res =>{
      const all_attendence_success = all_attendence_res
      dispatch(fetchAllAttendenceSuccess(all_attendence_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllAttendenceFaliure(errorMsg))
    })
    }
}
