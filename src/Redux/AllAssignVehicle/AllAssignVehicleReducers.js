import {
  FETCH_ALL_ASSIGN_VEHICLE_REQUEST,
  FETCH_ALL_ASSIGN_VEHICLE_SUCCESS,
  FETCH_ALL_ASSIGN_VEHICLE_FALIURE
} from './AllAssignVehicleConstants'

const intialstate = {
  all_assign_vehicle_loading : false,
  all_assign_vehicle : [],
  all_assign_vehicle_error : ''
}

const AllAssignVehicleReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALL_ASSIGN_VEHICLE_REQUEST : return{
      ...state,
      all_assign_vehicle_loading:true
    }
    case FETCH_ALL_ASSIGN_VEHICLE_SUCCESS : return{
      ...state,
      all_assign_vehicle_loading:false,
      all_assign_vehicle:action.payload
    }
    case FETCH_ALL_ASSIGN_VEHICLE_FALIURE : return{
      ...state,
      all_assign_vehicle_error:action.payload
    }
    default: return state
  }

}

export default AllAssignVehicleReducers
