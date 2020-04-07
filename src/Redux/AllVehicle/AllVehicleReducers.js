import {
  FETCH_ALLVEHICLE_REQUEST,
  FETCH_ALLVEHICLE_SUCCESS,
  FETCH_ALLVEHICLE_FALIURE
} from './AllVehicleConstants'

const intialstate = {
  all_vehicle_loading : false,
  all_vehicle : [],
  all_vehicle_error : ''
}

const AllVehicleReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLVEHICLE_REQUEST : return{
      ...state,
      all_vehicle_loading:true
    }
    case FETCH_ALLVEHICLE_SUCCESS : return{
      ...state,
      all_vehicle_loading:false,
      all_vehicle:action.payload
    }
    case FETCH_ALLVEHICLE_FALIURE : return{
      ...state,
      all_vehicle_error:action.payload
    }
    default: return state
  }

}

export default AllVehicleReducers
