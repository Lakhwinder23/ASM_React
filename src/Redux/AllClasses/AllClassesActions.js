import {
  FETCH_ALLCLASSES_REQUEST,
  FETCH_ALLCLASSES_SUCCESS,
  FETCH_ALLCLASSES_FALIURE
} from './AllClassesConstants'
import {config} from '../config'

export const fetchAllClassesRequest = () =>{
  return{
    type : FETCH_ALLCLASSES_REQUEST
  }
}

export const fetchAllClassesSuccess = (all_classes_success) =>{
  return{
    type : FETCH_ALLCLASSES_SUCCESS,
    payload : all_classes_success
  }
}

export const fetchAllClassesFaliure = (error) =>{
  return{
    type : FETCH_ALLCLASSES_FALIURE,
    payload : error
  }
}

export const fetchAllClasses = () =>{
    return(dispatch) => {
      dispatch(fetchAllClassesRequest())
      const url =`${config.api_root}/get_all_class`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_classes_res =>{
      const all_classes_success = all_classes_res
      dispatch(fetchAllClassesSuccess(all_classes_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllClassesFaliure(errorMsg))
    })
    }
}
