import {
  ADD_PROFESSION_REQUEST,
  ADD_PROFESSION_SUCCESS,
  ADD_PROFESSION_FALIURE
} from './AddProfessionConstants'
import {config} from '../config'

export const addProfessionRequest = (profession_info) =>{
  return{
    type : ADD_PROFESSION_REQUEST,
    payload : profession_info
  }
}

export const addProfessionSuccess = (add_profession_success) =>{
  return{
    type : ADD_PROFESSION_SUCCESS,
    payload : add_profession_success
  }
}

export const addProfessionFaliure = (error) =>{
  return{
    type : ADD_PROFESSION_FALIURE,
    payload : error
  }
}

export const addProfession = (profession_info) =>{
    return(dispatch) => {
      dispatch(addProfessionRequest(profession_info))
      const url =`${config.api_root}/add_profession`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        ProfessionName : profession_info.professionName
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_profession_res =>{
      const add_profession_success = add_profession_res
      dispatch(addProfessionSuccess(add_profession_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addProfessionFaliure(errorMsg))
    })
    }
}
