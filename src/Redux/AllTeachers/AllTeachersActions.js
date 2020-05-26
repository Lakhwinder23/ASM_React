import {
  FETCH_ALLTEACHERS_REQUEST,
  FETCH_ALLTEACHERS_SUCCESS,
  FETCH_ALLTEACHERS_FALIURE
} from './AllTeachersConstants'
import {config} from '../config'

export const fetchAllTeachersRequest = (teacher_info) =>{
  return{
    type : FETCH_ALLTEACHERS_REQUEST,
    payload:teacher_info
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

export const fetchAllTeachers = (teacher_info) =>{
    return(dispatch) => {
      dispatch(fetchAllTeachersRequest(teacher_info))
      const url =`${config.api_root}/get_all_teacher`;
      const request_option = {
        method: "POST",
        headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ config.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    TeacherId : teacher_info != undefined ? teacher_info.teacherId : undefined,
                    ProfessionId : teacher_info != undefined ? teacher_info.professionId : undefined
              })
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
