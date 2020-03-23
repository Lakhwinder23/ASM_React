import {
  FETCH_ALLHOSTEL_REQUEST,
  FETCH_ALLHOSTEL_SUCCESS,
  FETCH_ALLHOSTEL_FALIURE
} from './AllHostelConstants'
import {config} from '../config'

export const fetchAllHostelRequest = () =>{
  return{
    type : FETCH_ALLHOSTEL_REQUEST
  }
}

export const fetchAllHostelSuccess = (all_hostels_success) =>{
  return{
    type : FETCH_ALLHOSTEL_SUCCESS,
    payload : all_hostels_success
  }
}

export const fetchAllHostelFaliure = (error) =>{
  return{
    type : FETCH_ALLHOSTEL_FALIURE,
    payload : error
  }
}

export const fetchAllHostels = () =>{
    return(dispatch) => {
      dispatch(fetchAllHostelRequest())
      const url =`${config.api_root}/get_all_hostel`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_hostels_res =>{
      const all_hostels_success = all_hostels_res
      dispatch(fetchAllHostelSuccess(all_hostels_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllHostelFaliure(errorMsg))
    })
    }
}
