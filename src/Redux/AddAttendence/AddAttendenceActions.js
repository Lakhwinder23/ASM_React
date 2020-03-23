import {
  ADD_ATTENDENCE_REQUEST,
  ADD_ATTENDENCE_SUCCESS,
  ADD_ATTENDENCE_FALIURE
} from './AddAttendenceConstants'
import {config} from '../config'

export const addAttendenceRequest = (attendence_info) =>{
  return{
    type : ADD_ATTENDENCE_REQUEST,
    payload : attendence_info
  }
}

export const addAttendenceSuccess = (add_attendence_success) =>{
  return{
    type : ADD_ATTENDENCE_SUCCESS,
    payload : add_attendence_success
  }
}

export const addAttendenceFaliure = (error) =>{
  return{
    type : ADD_ATTENDENCE_FALIURE,
    payload : error
  }
}

export const addAttendence = (attendence_info) =>{
    return(dispatch) => {
      dispatch(addAttendenceRequest(attendence_info))
      const url =`${config.api_root}/add_room`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        ClassId : attendence_info.classId,
        SectionId : attendence_info.sectionId,
        TeacherId : attendence_info.teacherId,
        Date : attendence_info.date,
        PresentStudentIds : attendence_info.presentStudentIds,
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_attendence_res =>{
      const add_attendence_success = add_attendence_res
      dispatch(addAttendenceSuccess(add_attendence_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addAttendenceFaliure(errorMsg))
    })
    }
}
