import {
  FETCH_ALLASSIGNBOOK_REQUEST,
  FETCH_ALLASSIGNBOOK_SUCCESS,
  FETCH_ALLASSIGNBOOK_FALIURE
} from './AllAssignBookConstants'

const intialstate = {
  all_assign_book_loading : false,
  all_assign_book : [],
  all_assign_book_error : ''
}

const AllAssignBookReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLASSIGNBOOK_REQUEST : return{
      ...state,
      all_assign_book_loading:true
    }
    case FETCH_ALLASSIGNBOOK_SUCCESS : return{
      ...state,
      all_assign_book_loading:false,
      all_assign_book:action.payload
    }
    case FETCH_ALLASSIGNBOOK_FALIURE : return{
      ...state,
      all_assign_book_error:action.payload
    }
    default: return state
  }

}

export default AllAssignBookReducers
