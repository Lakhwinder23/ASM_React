import {
  ADD_HOSTEL_REQUEST,
  ADD_HOSTEL_SUCCESS,
  ADD_HOSTEL_FALIURE
} from './AddHostelConstants'
import {config} from '../config'

export const addHotelRequest = (hotel_info) =>{
  return{
    type : ADD_HOSTEL_REQUEST,
    payload : hotel_info
  }
}

export const addHotelSuccess = (add_hotel_success) =>{
  return{
    type : ADD_HOSTEL_SUCCESS,
    payload : add_hotel_success
  }
}

export const addHotelFaliure = (error) =>{
  return{
    type : ADD_HOSTEL_FALIURE,
    payload : error
  }
}

export const addHotel = (hotel_info) =>{
    return(dispatch) => {
      dispatch(addHotelRequest(hotel_info))
      const url =`${config.api_root}/add_hostel`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        HostelName : hotel_info.hostelName
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_hotel_res =>{
      const add_hotel_success = add_hotel_res
      dispatch(addHotelSuccess(add_hotel_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addHotelFaliure(errorMsg))
    })
    }
}
