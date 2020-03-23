import {
  FETCH_ALLNOTICE_REQUEST,
  FETCH_ALLNOTICE_SUCCESS,
  FETCH_ALLNOTICE_FALIURE
} from './AllNoticeConstants'

const intialstate = {
  all_notice_loading : false,
  all_notice : [],
  all_notice_error : ''
}

const AllNoticeReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLNOTICE_REQUEST : return{
      ...state,
      all_notice_loading:true
    }
    case FETCH_ALLNOTICE_SUCCESS : return{
      ...state,
      all_notice_loading:false,
      all_notice:action.payload
    }
    case FETCH_ALLNOTICE_FALIURE : return{
      ...state,
      all_notice_error:action.payload
    }
    default: return state
  }

}

export default AllNoticeReducers
