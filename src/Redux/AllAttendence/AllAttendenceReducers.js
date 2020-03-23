import {
  FETCH_ALLATTENDENCE_REQUEST,
  FETCH_ALLATTENDENCE_SUCCESS,
  FETCH_ALLATTENDENCE_FALIURE
} from './AllAttendenceConstants'

const intialstate = {
  all_attendence_loading : false,
  all_attendence : [],
  all_attendence_error : ''
}

const AllAttendenceReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLATTENDENCE_REQUEST : return{
      ...state,
      all_attendence_loading:true
    }
    case FETCH_ALLATTENDENCE_SUCCESS : return{
      ...state,
      all_attendence_loading:false,
      all_attendence:action.payload
    }
    case FETCH_ALLATTENDENCE_FALIURE : return{
      ...state,
      all_attendence_error:action.payload
    }
    default: return state
  }

}

export default AllAttendenceReducers
