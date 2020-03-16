import {
  ADD_MEDIUM_REQUEST,
  ADD_MEDIUM_SUCCESS,
  ADD_MEDIUM_FALIURE
} from './AddMediumConstants'

const intialstate = {
  add_medium_loading : false,
  add_medium : [],
  add_medium_error : '',
  add_medium_success : false
}

const AddMediumReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_MEDIUM_REQUEST : return{
      ...state,
      add_medium_loading:true
    }
    case ADD_MEDIUM_SUCCESS : return{
      ...state,
      add_medium_loading:false,
      add_medium_success:true,
      add_medium:action.payload
    }
    case ADD_MEDIUM_FALIURE : return{
      ...state,
      add_medium_error:action.payload
    }
    default: return state
  }

}

export default AddMediumReducers
