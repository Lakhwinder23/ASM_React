import {
  FETCH_ALLASSIGNCLASS_REQUEST,
  FETCH_ALLASSIGNCLASS_SUCCESS,
  FETCH_ALLASSIGNCLASS_FALIURE
} from './AllAssignClassConstants'
import {config} from '../config'

export const fetchAllAssignClassRequest = () =>{
  return{
    type : FETCH_ALLASSIGNCLASS_REQUEST
  }
}

export const fetchAllAssignClassSuccess = (all_assign_class_success) =>{
  return{
    type : FETCH_ALLASSIGNCLASS_SUCCESS,
    payload : all_assign_class_success
  }
}

export const fetchAllAssignClassFaliure = (error) =>{
  return{
    type : FETCH_ALLASSIGNCLASS_FALIURE,
    payload : error
  }
}

export const fetchAllAssignClasses = () =>{
    return(dispatch) => {
      dispatch(fetchAllAssignClassRequest())
      const url =`${config.api_root}/get_all_assign_class`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_assign_class_res =>{
      const all_assign_class_success = all_assign_class_res
      dispatch(fetchAllAssignClassSuccess(all_assign_class_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllAssignClassFaliure(errorMsg))
    })
    }
}
