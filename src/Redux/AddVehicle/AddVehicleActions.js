import {
  ADD_VEHICLE_REQUEST,
  ADD_VEHICLE_SUCCESS,
  ADD_VEHICLE_FALIURE
} from './AddVehicleConstants'
import {config} from '../config'

export const addVehicleRequest = (vehicle_info) =>{
  return{
    type : ADD_VEHICLE_REQUEST,
    payload : vehicle_info
  }
}

export const addVehicleSuccess = (vehicle_success) =>{
  return{
    type : ADD_VEHICLE_SUCCESS,
    payload : vehicle_success
  }
}

export const addVehicleFaliure = (error) =>{
  return{
    type : ADD_VEHICLE_FALIURE,
    payload : error
  }
}

export const addGrade = (vehicle_info) =>{
    return(dispatch) => {
      dispatch(addVehicleRequest(vehicle_info))
      const url =`${config.api_root}/add_vechile`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        VehicleNumber : vehicle_info.VehicleNumber,
        VehicleCode : vehicle_info.VehicleCode,
        TotalSeats  : vehicle_info.TotalSeats ,
        BusSize  : vehicle_info.BusSize
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_vehicle_res =>{
      const add_vehicle_success = add_vehicle_res
      dispatch(addVehicleSuccess(add_vehicle_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addVehicleFaliure(errorMsg))
    })
    }
}
