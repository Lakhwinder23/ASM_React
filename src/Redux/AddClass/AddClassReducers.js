import {
  ADD_CLASS_REQUEST,
  ADD_CLASS_SUCCESS,
  ADD_CLASS_FALIURE
} from './AddClassConstants'

const intialstate = {
  add_class_loading : false,
  add_class : [],
  add_class_error : '',
  add_class_success : false
}

const AddClassReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_CLASS_REQUEST : return{
      ...state,
      add_class_loading:true
    }
    case ADD_CLASS_SUCCESS : return{
      ...state,
      add_class_loading:false,
      add_class_success:true,
      add_class:action.payload
    }
    case ADD_CLASS_FALIURE : return{
      ...state,
      add_class_error:action.payload
    }
    default: return state
  }

}

export default AddClassReducers
