import {
  FETCH_STUDENTDETAIL_REQUEST,
  FETCH_STUDENTDETAIL_SUCCESS,
  FETCH_STUDENTDETAIL_FALIURE
} from './StudentDetailConstants'
import {config} from '../config'

export const fetchStudentDetailRequest = (student_id) =>{
  return{
    type : FETCH_STUDENTDETAIL_REQUEST,
    payload : student_id
  }
}

export const fetchStudentDetailSuccess = (student_detail_success) =>{
  return{
    type : FETCH_STUDENTDETAIL_SUCCESS,
    payload : student_detail_success
  }
}

export const fetchStudentDetailFaliure = (error) =>{
  return{
    type : FETCH_STUDENTDETAIL_FALIURE,
    payload : error
  }
}

export const fetchStudentDetail = (student_id) =>{
    return(dispatch) => {
      dispatch(fetchStudentDetailRequest(student_id))
      const url =`${config.api_root}/get_student/${student_id}`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(student_detail_res =>{
      const student_detail_success = student_detail_res
      dispatch(fetchStudentDetailSuccess(student_detail_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchStudentDetailFaliure(errorMsg))
    })
    }
}
