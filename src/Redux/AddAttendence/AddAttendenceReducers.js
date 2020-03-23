import {
  ADD_ATTENDENCE_REQUEST,
  ADD_ATTENDENCE_SUCCESS,
  ADD_ATTENDENCE_FALIURE
} from './AddAttendenceConstants'

const intialstate = {
  add_attendence_loading : false,
  add_attendence : [],
  add_attendence_error : '',
  add_attendence_success : false
}

const AddAttendenceReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_ATTENDENCE_REQUEST : return{
      ...state,
      add_attendence_loading:true
    }
    case ADD_ATTENDENCE_SUCCESS : return{
      ...state,
      add_attendence_loading:false,
      add_attendence_success:true,
      add_attendence:action.payload
    }
    case ADD_ATTENDENCE_FALIURE : return{
      ...state,
      add_attendence_error:action.payload
    }
    default: return state
  }

}

export default AddAttendenceReducers
