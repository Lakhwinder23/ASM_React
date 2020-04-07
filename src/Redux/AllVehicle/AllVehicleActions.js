import {
  FETCH_ALLVEHICLE_REQUEST,
  FETCH_ALLVEHICLE_SUCCESS,
  FETCH_ALLVEHICLE_FALIURE
} from './AllVehicleConstants'
import {config} from '../config'

export const fetchAllVehicleRequest = (vehicle_info) =>{
  return{
    type : FETCH_ALLVEHICLE_REQUEST,
    payload:vehicle_info
  }
}

export const fetchAllVehicleSuccess = (all_vehicle_success) =>{
  return{
    type : FETCH_ALLVEHICLE_SUCCESS,
    payload : all_vehicle_success
  }
}

export const fetchAllVehicleFaliure = (error) =>{
  return{
    type : FETCH_ALLVEHICLE_FALIURE,
    payload : error
  }
}

export const fetchAllVehicle = (vehicle_info) =>{
    return(dispatch) => {
      dispatch(fetchAllVehicleRequest(vehicle_info))
      const vehicleNumber = vehicle_info != undefined && vehicle_info.vehicleNumber != undefined ? vehicle_info.vehicleNumber : undefined
      const vehicleCode = vehicle_info != undefined && vehicle_info.vehicleCode != undefined  ? vehicle_info.vehicleCode : undefined
      const totalSeats = vehicle_info != undefined && vehicle_info.totalSeats != undefined ? vehicle_info.totalSeats : undefined
      const busSize = vehicle_info != undefined && vehicle_info.busSize != undefined  ? vehicle_info.busSize : undefined

      const url =`${config.api_root}/get_all_vechile`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                  VehicleNumber:vehicleNumber,
                  VehicleCode:vehicleCode,
                  TotalSeats : totalSeats,
                  BusSize : busSize
            })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(vehicle_res =>{
      const all_vehicle_success = vehicle_res
      dispatch(fetchAllVehicleSuccess(all_vehicle_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllVehicleFaliure(errorMsg))
    })
    }
}
