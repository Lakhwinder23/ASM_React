import {
  FETCH_ALLSTUDENTS_REQUEST,
  FETCH_ALLSTUDENTS_SUCCESS,
  FETCH_ALLSTUDENTS_FALIURE
} from './AllStudentsConstants'
import {config} from '../config'

export const fetchAllStudentsRequest = () =>{
  return{
    type : FETCH_ALLSTUDENTS_REQUEST
  }
}

export const fetchAllStudentsSuccess = (all_students_success) =>{
  return{
    type : FETCH_ALLSTUDENTS_SUCCESS,
    payload : all_students_success
  }
}

export const fetchAllStudentsFaliure = (error) =>{
  return{
    type : FETCH_ALLSTUDENTS_FALIURE,
    payload : error
  }
}

export const fetchAllStudents = () =>{
    return(dispatch) => {
      dispatch(fetchAllStudentsRequest())
      const url =`${config.api_root}/get_all_student`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(students_res =>{
      const all_students_success = students_res
      dispatch(fetchAllStudentsSuccess(all_students_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllStudentsFaliure(errorMsg))
    })
    }
}
