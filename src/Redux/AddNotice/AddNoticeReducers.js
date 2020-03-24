import {
  ADD_NOTICE_REQUEST,
  ADD_NOTICE_SUCCESS,
  ADD_NOTICE_FALIURE
} from './AddNoticeConstants'

const intialstate = {
  add_notice_loading : false,
  add_notice : [],
  add_notice_error : '',
  add_notice_success : false
}

const AddNoticeReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_NOTICE_REQUEST : return{
      ...state,
      add_notice_loading:true
    }
    case ADD_NOTICE_SUCCESS : return{
      ...state,
      add_notice_loading:false,
      add_notice_success:true,
      add_notice:action.payload
    }
    case ADD_NOTICE_FALIURE : return{
      ...state,
      add_notice_error:action.payload
    }
    default: return state
  }

}

export default AddNoticeReducers
