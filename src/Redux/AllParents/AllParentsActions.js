import {
  FETCH_ALLPARENTS_REQUEST,
  FETCH_ALLPARENTS_SUCCESS,
  FETCH_ALLPARENTS_FALIURE
} from './AllParentsConstants'
import {config} from '../config'

export const fetchAllParentsRequest = () =>{
  return{
    type : FETCH_ALLPARENTS_REQUEST
  }
}

export const fetchAllParentsSuccess = (all_parents_success) =>{
  return{
    type : FETCH_ALLPARENTS_SUCCESS,
    payload : all_parents_success
  }
}

export const fetchAllParentsFaliure = (error) =>{
  return{
    type : FETCH_ALLPARENTS_FALIURE,
    payload : error
  }
}

export const fetchAllParents = () =>{
    return(dispatch) => {
      dispatch(fetchAllParentsRequest())
      const url =`${config.api_root}/get_all_parent`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_parents_res =>{
      const all_parents_success = all_parents_res
      dispatch(fetchAllParentsSuccess(all_parents_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllParentsFaliure(errorMsg))
    })
    }
}
