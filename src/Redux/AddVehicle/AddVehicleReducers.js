import {
  ADD_VEHICLE_REQUEST,
  ADD_VEHICLE_SUCCESS,
  ADD_VEHICLE_FALIURE
} from './AddVehicleConstants'

const intialstate = {
  add_vehicle_loading : false,
  add_vehicle : [],
  add_vehicle_error : '',
  add_vehicle_success : false
}

const AddVehicleReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_VEHICLE_REQUEST : return{
      ...state,
      add_vehicle_loading:true
    }
    case ADD_VEHICLE_SUCCESS : return{
      ...state,
      add_vehicle_loading:false,
      add_vehicle_success:true,
      add_vehicle:action.payload
    }
    case ADD_VEHICLE_FALIURE : return{
      ...state,
      add_vehicle_error:action.payload
    }
    default: return state
  }

}

export default AddVehicleReducers
