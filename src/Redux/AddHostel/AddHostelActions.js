import {
  ADD_HOSTEL_REQUEST,
  ADD_HOSTEL_SUCCESS,
  ADD_HOSTEL_FALIURE
} from './AddHostelConstants'
import {config} from '../config'

export const addHostelRequest = (hostel_info) =>{
  return{
    type : ADD_HOSTEL_REQUEST,
    payload : hostel_info
  }
}

export const addHostelSuccess = (add_hostel_success) =>{
  return{
    type : ADD_HOSTEL_SUCCESS,
    payload : add_hostel_success
  }
}

export const addHostelFaliure = (error) =>{
  return{
    type : ADD_HOSTEL_FALIURE,
    payload : error
  }
}

export const addHostel = (hostel_info) =>{
    return(dispatch) => {
      dispatch(addHostelRequest(hostel_info))
      const url =`${config.api_root}/add_hostel`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        HostelName : hostel_info.hostelName
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_hostel_res =>{
      const add_hostel_success = add_hostel_res
      dispatch(addHostelSuccess(add_hostel_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addHostelFaliure(errorMsg))
    })
    }
}
