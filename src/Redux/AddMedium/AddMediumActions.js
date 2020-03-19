import {
  ADD_MEDIUM_REQUEST,
  ADD_MEDIUM_SUCCESS,
  ADD_MEDIUM_FALIURE
} from './AddMediumConstants'
import {config} from '../config'

export const addMediumRequest = (medium_info) =>{
  return{
    type : ADD_MEDIUM_REQUEST,
    payload : medium_info
  }
}

export const addMediumSuccess = (add_medium_success) =>{
  return{
    type : ADD_MEDIUM_SUCCESS,
    payload : add_medium_success
  }
}

export const addMediumFaliure = (error) =>{
  return{
    type : ADD_MEDIUM_FALIURE,
    payload : error
  }
}

export const addMidium = (medium_info) =>{
    return(dispatch) => {
      dispatch(addMediumRequest(medium_info))
      const url =`${config.api_root}/add_medium`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        MediumName : medium_info.mediumName
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_medium_res =>{
      const add_medium_success = add_medium_res
      dispatch(addMediumSuccess(add_medium_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addMediumFaliure(errorMsg))
    })
    }
}
