import {
  ADD_GRADE_REQUEST,
  ADD_GRADE_SUCCESS,
  ADD_GRADE_FALIURE
} from './AddGradeConstants'
import {config} from '../config'

export const addGradeRequest = (grade_info) =>{
  return{
    type : ADD_GRADE_REQUEST,
    payload : grade_info
  }
}

export const addGradeSuccess = (grade_success) =>{
  return{
    type : ADD_GRADE_SUCCESS,
    payload : grade_success
  }
}

export const addGradeFaliure = (error) =>{
  return{
    type : ADD_GRADE_FALIURE,
    payload : error
  }
}

export const addGrade = (grade_info) =>{
    return(dispatch) => {
      dispatch(addGradeRequest(grade_info))
      const url =`${config.api_root}/add_grade`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        GradeName : grade_info.gradeName,
        GradePoint : grade_info.gradePoint,
        GradeFrom  : grade_info.gradeFrom ,
        GradeUpto  : grade_info.gradeUpto,
        Comment  : grade_info.comment
      })  
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_grade_res =>{
      const add_grade_success = add_grade_res
      dispatch(addGradeSuccess(add_grade_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addGradeFaliure(errorMsg))
    })
    }
}
