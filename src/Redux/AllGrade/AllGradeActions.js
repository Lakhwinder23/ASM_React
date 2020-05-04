import {
  FETCH_ALLGRADE_REQUEST,
  FETCH_ALLGRADE_SUCCESS,
  FETCH_ALLGRADE_FALIURE
} from './AllGradeConstants'
import {config} from '../config'

export const fetchAllGradeRequest = () =>{
  return{
    type : FETCH_ALLGRADE_REQUEST
  }
}

export const fetchAllGradeSuccess = (all_grades_success) =>{
  return{
    type : FETCH_ALLGRADE_SUCCESS,
    payload : all_grades_success
  }
}

export const fetchAllGradeFaliure = (error) =>{
  return{
    type : FETCH_ALLGRADE_FALIURE,
    payload : error
  }
}

export const fetchAllGrades = () =>{
    return(dispatch) => {
      dispatch(fetchAllGradeRequest())
      const url =`${config.api_root}/get_all_grade`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_grades_res =>{
      const all_grades_success = all_grades_res
      //dispatch(fetchAllGradeSuccess(all_grades_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllGradeFaliure(errorMsg))
    })
    }
}
