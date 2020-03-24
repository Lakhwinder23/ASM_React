import {
  ASSIGN_CLASS_REQUEST,
  ASSIGN_CLASS_SUCCESS,
  ASSIGN_CLASS_FALIURE
} from './AssignClassConstants'
import {config} from '../config'

export const assignClassRequest = (assign_class_info) =>{
  return{
    type : ASSIGN_CLASS_REQUEST,
    payload : assign_class_info
  }
}

export const assignClassSuccess = (assign_class_success) =>{
  return{
    type : ASSIGN_CLASS_SUCCESS,
    payload : assign_class_success
  }
}

export const assignClassFaliure = (error) =>{
  return{
    type : ASSIGN_CLASS_FALIURE,
    payload : error
  }
}

export const assignClass = (assign_class_info) =>{
    return(dispatch) => {
      dispatch(assignClassRequest(assign_class_info))
      const url =`${config.api_root}/assign_class`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        ClassId : assign_class_info.classId,
        SectionId : assign_class_info.sectionId,
        IsIncharge : assign_class_info.isIncharge,
        TeacherId : assign_class_info.teacherId
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(assign_class_res =>{
      const assign_class_success = assign_class_res
      dispatch(assignClassSuccess(assign_class_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(assignClassFaliure(errorMsg))
    })
    }
}
