import {
  FETCH_TEACHERDETAIL_REQUEST,
  FETCH_TEACHERDETAIL_SUCCESS,
  FETCH_TEACHERDETAIL_FALIURE
} from './TeacherDetailConstants'
import {config} from '../config'

export const fetchTeacherDetailRequest = (teacher_id) =>{
  return{
    type : FETCH_TEACHERDETAIL_REQUEST,
    payload : teacher_id
  }
}

export const fetchTeacherDetailSuccess = (teacher_detail_success) =>{
  return{
    type : FETCH_TEACHERDETAIL_SUCCESS,
    payload : teacher_detail_success
  }
}

export const fetchTeacherDetailFaliure = (error) =>{
  return{
    type : FETCH_TEACHERDETAIL_FALIURE,
    payload : error
  }
}

export const fetchTeacherDetail = (teacher_id) =>{
    return(dispatch) => {
      dispatch(fetchTeacherDetailRequest(teacher_id))
      const url =`${config.api_root}/get_teacher/${teacher_id}`;
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
      const teacher_detail_success = teacher_detail_res
      dispatch(fetchTeacherDetailSuccess(teacher_detail_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchTeacherDetailFaliure(errorMsg))
    })
    }
}
