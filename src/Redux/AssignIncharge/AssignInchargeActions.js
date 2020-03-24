import {
  ASSIGN_INCHARGE_REQUEST,
  ASSIGN_INCHARGE_SUCCESS,
  ASSIGN_INCHARGE_FALIURE
} from './AssignInchargeConstants'
import {config} from '../config'

export const assignInchargeRequest = (assign_incharge_info) =>{
  return{
    type : ASSIGN_INCHARGE_REQUEST,
    payload : assign_incharge_info
  }
}

export const assignInchargeSuccess = (assign_incharge_success) =>{
  return{
    type : ASSIGN_INCHARGE_SUCCESS,
    payload : assign_incharge_success
  }
}

export const assignInchargeFaliure = (error) =>{
  return{
    type : ASSIGN_INCHARGE_FALIURE,
    payload : error
  }
}

export const assignIncharge = (assign_incharge_info) =>{
    return(dispatch) => {
      dispatch(assignInchargeRequest(assign_incharge_info))
      const url =`${config.api_root}/assign_incharge`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        ClassId : assign_incharge_info.classId,
        SectionId : assign_incharge_info.sectionId,
        IsIncharge : assign_incharge_info.isIncharge,
        TeacherId : assign_incharge_info.teacherId
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(assign_incharge_res =>{
      const assign_incharge_success = assign_incharge_res
      dispatch(assignInchargeSuccess(assign_incharge_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(assignInchargeFaliure(errorMsg))
    })
    }
}
