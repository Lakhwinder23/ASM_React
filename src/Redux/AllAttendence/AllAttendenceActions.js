import {
  FETCH_ALLATTENDENCE_REQUEST,
  FETCH_ALLATTENDENCE_SUCCESS,
  FETCH_ALLATTENDENCE_FALIURE
} from './AllAttendenceConstants'
import {config} from '../config'

export const fetchAllAttendenceRequest = (all_attendence_info) =>{
  return{
    type : FETCH_ALLATTENDENCE_REQUEST,
    payload:all_attendence_info
  }
}

export const fetchAllAttendenceSuccess = (all_attendence_success) =>{
  return{
    type : FETCH_ALLATTENDENCE_SUCCESS,
    payload : all_attendence_success
  }
}

export const fetchAllAttendenceFaliure = (error) =>{
  return{
    type : FETCH_ALLATTENDENCE_FALIURE,
    payload : error
  }
}

export const fetchAllAllAttendence = (all_attendence_info) =>{
    return(dispatch) => {
      dispatch(fetchAllAttendenceRequest())
      const url =`${config.api_root}/get_all_attendance`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                  Role:all_attendence_info != undefined && all_attendence_info.role !=undefined ? all_attendence_info.role : undefined,
                  ClassId : all_attendence_info != undefined && all_attendence_info.classId !=undefined ? all_attendence_info.classId : undefined,
                  SectionId : all_attendence_info != undefined && all_attendence_info.sectionid !=undefined ? all_attendence_info.sectionid : undefined,
                  Month : all_attendence_info != undefined && all_attendence_info.month !=undefined ? all_attendence_info.month : undefined,
                  Date : all_attendence_info != undefined && all_attendence_info.date !=undefined ? all_attendence_info.date : undefined,
                  StudentId : all_attendence_info != undefined && all_attendence_info.studentId !=undefined ? all_attendence_info.studentId : undefined
            })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_attendence_res =>{
      const all_attendence_success = all_attendence_res
      dispatch(fetchAllAttendenceSuccess(all_attendence_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllAttendenceFaliure(errorMsg))
    })
    }
}
