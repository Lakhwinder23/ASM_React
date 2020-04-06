import {
  ASSIGN_VEHICLE_REQUEST,
  ASSIGN_VEHICLE_SUCCESS,
  ASSIGN_VEHICLE_FALIURE
} from './AssignVehicleConstants'


const intialstate = {
  assign_vehicle_loading : false,
  assign_vehicle : [],
  assign_vehicle_error : '',
  assign_vehicle_success : false
}

const AssignVehicleReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ASSIGN_VEHICLE_REQUEST : return{
      ...state,
      assign_vehicle_loading:true
    }
    case ASSIGN_VEHICLE_SUCCESS : return{
      ...state,
      assign_vehicle_loading:false,
      assign_vehicle_success:true,
      assign_vehicle:action.payload
    }
    case ASSIGN_VEHICLE_FALIURE : return{
      ...state,
      assign_vehicle_error:action.payload
    }
    default: return state
  }

}

export default AssignVehicleReducers
