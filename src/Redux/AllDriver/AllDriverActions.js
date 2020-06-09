import {
  FETCH_ALLDRIVER_REQUEST,
  FETCH_ALLDRIVER_SUCCESS,
  FETCH_ALLDRIVER_FALIURE
} from './AllDriverConstants'
import {config} from '../config'

export const fetchAllDriverRequest = () =>{
  return{
    type : FETCH_ALLDRIVER_REQUEST
  }
}

export const fetchAllDriverSuccess = (all_driver_success) =>{
  return{
    type : FETCH_ALLDRIVER_SUCCESS,
    payload : all_driver_success
  }
}

export const fetchAllDriverFaliure = (error) =>{
  return{
    type : FETCH_ALLDRIVER_FALIURE,
    payload : error
  }
}

export const fetchAllDriver = () =>{
    return(dispatch) => {
      dispatch(fetchAllDriverRequest())
      const url =`${config.api_root}/get_all_driver`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_driver_res =>{
      const all_driver_success = all_driver_res
      dispatch(fetchAllDriverSuccess(all_driver_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllDriverFaliure(errorMsg))
    })
    }
}
