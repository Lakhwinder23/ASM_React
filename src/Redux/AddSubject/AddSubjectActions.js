import {
  ADD_SUBJECT_REQUEST,
  ADD_SUBJECT_SUCCESS,
  ADD_SUBJECT_FALIURE
} from './AddSubjectConstants'
import {config} from '../config'

export const addSubjectRequest = (subject_info) =>{
  return{
    type : ADD_SUBJECT_REQUEST,
    payload : class_info
  }
}

export const addSubjectSuccess = (add_subject_success) =>{
  return{
    type : ADD_SUBJECT_SUCCESS,
    payload : add_subject_success
  }
}

export const addSubjectFaliure = (error) =>{
  return{
    type : ADD_SUBJECT_FALIURE,
    payload : error
  }
}

export const addSubject = (subject_info) =>{
    return(dispatch) => {
      dispatch(addSubjectRequest(subject_info))
      const url =`${config.api_root}/add_subject`;
      const request_option = {
      method: "POST",
      body: JSON.stringify({
        SubjectName : subject_info.className,
        SubjectMediumId : subject_info.totalSection,
        ClassId : subject_info.studentLimitInClass
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_subject_res =>{
      const add_subject_success = add_subject_res
      dispatch(addSubjectSuccess(add_subject_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addSubjectFaliure(errorMsg))
    })
    }
}
