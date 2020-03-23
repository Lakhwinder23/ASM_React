import {
  FETCH_ALLPROFESSION_REQUEST,
  FETCH_ALLPROFESSION_SUCCESS,
  FETCH_ALLPROFESSION_FALIURE
} from './AllProfessionConstants'
import {config} from '../config'

export const fetchAllProfessionRequest = () =>{
  return{
    type : FETCH_ALLPROFESSION_REQUEST
  }
}

export const fetchAllProfessionSuccess = (all_professions_success) =>{
  return{
    type : FETCH_ALLPROFESSION_SUCCESS,
    payload : all_professions_success
  }
}

export const fetchAllProfessionFaliure = (error) =>{
  return{
    type : FETCH_ALLPROFESSION_FALIURE,
    payload : error
  }
}

export const fetchAllProfessions = () =>{
    return(dispatch) => {
      dispatch(fetchAllProfessionRequest())
      const url =`${config.api_root}/get_all_profession`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_professions_res =>{
      const all_professions_success = all_professions_res
      dispatch(fetchAllProfessionSuccess(all_professions_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllProfessionFaliure(errorMsg))
    })
    }
}
