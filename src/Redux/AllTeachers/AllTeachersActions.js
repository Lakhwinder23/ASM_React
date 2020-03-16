import {
  FETCH_ALLTEACHERS_REQUEST,
  FETCH_ALLTEACHERS_SUCCESS,
  FETCH_ALLTEACHERS_FALIURE
} from './AllTeachersConstants'
import {config} from '../config'

export const fetchAllTeachersRequest = () =>{
  return{
    type : FETCH_ALLTEACHERS_REQUEST
  }
}

export const fetchAllTeachersSuccess = (all_teachers_success) =>{
  return{
    type : FETCH_ALLTEACHERS_SUCCESS,
    payload : all_teachers_success
  }
}

export const fetchAllTeachersFaliure = (error) =>{
  return{
    type : FETCH_ALLTEACHERS_FALIURE,
    payload : error
  }
}

export const fetchAllTeachers = () =>{
    return(dispatch) => {
      dispatch(fetchAllTeachersRequest())
      const url =`${config.api_root}/get_all_teacher`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_teachers_res =>{
      const all_teachers_success = all_teachers_res
      dispatch(fetchAllTeachersSuccess(all_teachers_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllTeachersFaliure(errorMsg))
    })
    }
}
