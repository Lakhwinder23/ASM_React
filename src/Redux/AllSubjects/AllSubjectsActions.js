import {
  FETCH_ALLSUBJECT_REQUEST,
  FETCH_ALLSUBJECT_SUCCESS,
  FETCH_ALLSUBJECT_FALIURE
} from './AllSubjectsConstants'
import {config} from '../config'

export const fetchAllSubjectsRequest = (class_id,medium_id) =>{
  return{
    type : FETCH_ALLSUBJECT_REQUEST,
    class_id : class_id,
    medium_id : medium_id
  }
}

export const fetchAllSubjectsSuccess = (all_subjects_success) =>{
  return{
    type : FETCH_ALLSUBJECT_SUCCESS,
    payload : all_subjects_success
  }
}

export const fetchAllSubjectsFaliure = (error) =>{
  return{
    type : FETCH_ALLSUBJECT_FALIURE,
    payload : error
  }
}

export const fetchAllSubjects = (class_id,medium_id) =>{
    return(dispatch) => {
      dispatch(fetchAllSubjectsRequest(class_id,medium_id))
      const url =`${config.api_root}/get_all_subject/${class_id}/${medium_id}`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_subjects_res =>{
      const all_subjects_success = all_subjects_res
      dispatch(fetchAllSubjectsSuccess(all_subjects_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllSubjectsFaliure(errorMsg))
    })
    }
}
