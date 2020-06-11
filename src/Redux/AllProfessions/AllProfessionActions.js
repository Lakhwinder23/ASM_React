import {
  FETCH_ALLPROFESSION_REQUEST,
  FETCH_ALLPROFESSION_SUCCESS,
  FETCH_ALLPROFESSION_FALIURE
} from './AllProfessionConstants'
import {config} from '../config'

export const fetchAllProfessionRequest = (all_professions_info) =>{
  return{
    type : FETCH_ALLPROFESSION_REQUEST,
    payload:all_professions_info
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

export const fetchAllProfessions = (all_professions_info) =>{
    return(dispatch) => {
      dispatch(fetchAllProfessionRequest(all_professions_info))
      const url =`${config.api_root}/get_all_profession`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            ProfessionId: all_professions_info.professionId != undefined ? all_professions_info.professionId :undefined
          })
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
