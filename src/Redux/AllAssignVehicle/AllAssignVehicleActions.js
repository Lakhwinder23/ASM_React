import {
  FETCH_ALL_ASSIGN_VEHICLE_REQUEST,
  FETCH_ALL_ASSIGN_VEHICLE_SUCCESS,
  FETCH_ALL_ASSIGN_VEHICLE_FALIURE
} from './AllAssignVehicleConstants'
import {config} from '../config'

export const fetchAllAssignVehicleRequest = (all_assign_vehicle_info) =>{
  return{
    type : FETCH_ALL_ASSIGN_VEHICLE_REQUEST,
    payload:all_assign_vehicle_info
  }
}

export const fetchAllAssignVehicleSuccess = (all_assign_vehicle_success) =>{
  return{
    type : FETCH_ALL_ASSIGN_VEHICLE_SUCCESS,
    payload : all_assign_vehicle_success
  }
}

export const fetchAllAssignVehicleFaliure = (error) =>{
  return{
    type : FETCH_ALL_ASSIGN_VEHICLE_FALIURE,
    payload : error
  }
}

export const fetchAllAssignVehicle = (all_assign_vehicle_info) =>{
    return(dispatch) => {
      dispatch(fetchAllAssignVehicleRequest(all_assign_vehicle_info))
      const driverid = all_assign_vehicle_info != undefined ? all_assign_vehicle_info.driverId !="" ? all_assign_vehicle_info.driverId  : undefined : undefined
      const url =`${config.api_root}/get_assign_vehicle`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token
          },
          body: JSON.stringify({
                  DriverId : driverid
            })

    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(all_assign_vehicle_res =>{
      const all_assign_vehicle_success = all_assign_vehicle_res
      dispatch(fetchAllAssignVehicleSuccess(all_assign_vehicle_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllAssignVehicleFaliure(errorMsg))
    })
    }
}
