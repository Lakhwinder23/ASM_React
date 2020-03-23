import {
  FETCH_ALLMEDIUM_REQUEST,
  FETCH_ALLMEDIUM_SUCCESS,
  FETCH_ALLMEDIUM_FALIURE
} from './AllMediumConstants'
import {config} from '../config'

export const fetchAllMediumRequest = () =>{
  return{
    type : FETCH_ALLMEDIUM_REQUEST
  }
}

export const fetchAllMediumSuccess = (all_mediums_success) =>{
  return{
    type : FETCH_ALLMEDIUM_SUCCESS,
    payload : all_mediums_success
  }
}

export const fetchAllMediumFaliure = (error) =>{
  return{
    type : FETCH_ALLMEDIUM_FALIURE,
    payload : error
  }
}

export const fetchAllMediums = () =>{
    return(dispatch) => {
      dispatch(fetchAllMediumRequest())
      const url =`${config.api_root}/get_all_medium`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_medium_res =>{
      const all_mediums_success = all_medium_res
      dispatch(fetchAllMediumSuccess(all_mediums_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllMediumFaliure(errorMsg))
    })
    }
}
