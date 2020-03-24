import {
  ASSIGN_CLASS_REQUEST,
  ASSIGN_CLASS_SUCCESS,
  ASSIGN_CLASS_FALIURE
} from './AssignClassConstants'

const intialstate = {
  assign_class_loading : false,
  assign_class : [],
  assign_class_error : '',
  assign_class_success : false
}

const AssignClassReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ASSIGN_CLASS_REQUEST : return{
      ...state,
      assign_class_loading:true
    }
    case ASSIGN_CLASS_SUCCESS : return{
      ...state,
      assign_class_loading:false,
      assign_class_success:true,
      assign_class:action.payload
    }
    case ASSIGN_CLASS_FALIURE : return{
      ...state,
      assign_class_error:action.payload
    }
    default: return state
  }

}

export default AssignClassReducers
