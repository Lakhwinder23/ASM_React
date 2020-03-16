import {
  FETCH_ALLSECTIONS_REQUEST,
  FETCH_ALLSECTIONS_SUCCESS,
  FETCH_ALLSECTIONS_FALIURE
} from './AllSectionsConstants'
import {config} from '../config'

export const fetchAllSectionsRequest = (class_id,medium_id) =>{
  return{
    type : FETCH_ALLSECTIONS_REQUEST,
    class_id : class_id,
    medium_id : medium_id
  }
}

export const fetchAllSectionsSuccess = (all_sections_success) =>{
  return{
    type : FETCH_ALLSECTIONS_SUCCESS,
    payload : all_sections_success
  }
}

export const fetchAllSectionsFaliure = (error) =>{
  return{
    type : FETCH_ALLSECTIONS_FALIURE,
    payload : error
  }
}

export const fetchAllSections = (class_id,medium_id) =>{
    return(dispatch) => {
      dispatch(fetchAllSectionsRequest(class_id,medium_id))
      const url =`${config.api_root}/get_all_section/${class_id}/${medium_id}`;
      const request_option = {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          }
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_sections_res =>{
      const all_sections_success = all_sections_res
      dispatch(fetchAllSectionsSuccess(all_sections_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllSectionsFaliure(errorMsg))
    })
    }
}
