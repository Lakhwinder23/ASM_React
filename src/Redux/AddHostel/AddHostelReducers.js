import {
  ADD_HOSTEL_REQUEST,
  ADD_HOSTEL_SUCCESS,
  ADD_HOSTEL_FALIURE
} from './AddHostelConstants'

const intialstate = {
  add_hostel_loading : false,
  add_hostel : [],
  add_hostel_error : '',
  add_hostel_success : false
}

const AddHostelReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_HOSTEL_REQUEST : return{
      ...state,
      add_hostel_loading:true
    }
    case ADD_HOSTEL_SUCCESS : return{
      ...state,
      add_hostel_loading:false,
      add_hostel_success:true,
      add_hostel:action.payload
    }
    case ADD_HOSTEL_FALIURE : return{
      ...state,
      add_hostel_error:action.payload
    }
    default: return state
  }

}

export default AddHostelReducers
