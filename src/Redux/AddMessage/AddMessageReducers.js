import {
  ADD_MESSAGE_REQUEST,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FALIURE
} from './AddMessageConstants'


const intialstate = {
  add_message_loading : false,
  add_message : [],
  add_message_error : '',
  add_message_success : false
}

const AddMessageReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_MESSAGE_REQUEST : return{
      ...state,
      add_message_loading:true
    }
    case ADD_MESSAGE_SUCCESS : return{
      ...state,
      add_message_loading:false,
      add_message_success:true,
      add_message:action.payload
    }
    case ADD_MESSAGE_FALIURE : return{
      ...state,
      add_message_error:action.payload
    }
    default: return state
  }

}

export default AddMessageReducers
