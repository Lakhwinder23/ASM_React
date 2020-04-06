import {
  ASSIGN_VEHICLE_REQUEST,
  ASSIGN_VEHICLE_SUCCESS,
  ASSIGN_VEHICLE_FALIURE
} from './AssignVehicleConstants'
import {config} from '../config'

export const assignVehicleRequest = (assign_vehicle_info) =>{
  return{
    type : ASSIGN_VEHICLE_REQUEST,
    payload : assign_vehicle_info
  }
}

export const assignVehicleSuccess = (assign_vehicle_success) =>{
  return{
    type : ASSIGN_VEHICLE_SUCCESS,
    payload : assign_vehicle_success
  }
}

export const assignVehicleFaliure = (error) =>{
  return{
    type : ASSIGN_VEHICLE_FALIURE,
    payload : error
  }
}

export const assignVehicle = (assign_vehicle_info) =>{
    return(dispatch) => {
      dispatch(assignVehicleRequest(assign_vehicle_info))
      const url =`${config.api_root}/add_book`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        DriverId : assign_vehicle_info.driverId,
        VehicleId : assign_vehicle_info.vehicleId,
        RouteName : assign_vehicle_info.routeName,
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(assign_vehicle_res =>{
      const assign_vehicle_success = assign_vehicle_res
      dispatch(assignVehicleSuccess(assign_vehicle_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(assignVehicleFaliure(errorMsg))
    })
    }
}
