import {
  ADD_FEES_REQUEST,
  ADD_FEES_SUCCESS,
  ADD_FEES_FALIURE
} from './AddFeesConstants'

const intialstate = {
  add_fees_loading : false,
  add_fees : [],
  add_fees_error : '',
  add_fees_success : false
}

const AddFeesReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_FEES_REQUEST : return{
      ...state,
      add_fees_loading:true
    }
    case ADD_FEES_SUCCESS : return{
      ...state,
      add_fees_loading:false,
      add_fees_success:true,
      add_fees:action.payload
    }
    case ADD_FEES_FALIURE : return{
      ...state,
      add_fees_error:action.payload
    }
    default: return state
  }

}

export default AddFeesReducers
