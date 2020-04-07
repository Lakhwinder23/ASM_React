import {
  RETURN_ASSIGN_BOOK_REQUEST,
  RETURN_ASSIGN_BOOK_SUCCESS,
  RETURN_ASSIGN_BOOK_FALIURE
} from './ReturnAssignBookConstants'


const intialstate = {
  return_assign_book_loading : false,
  return_assign_book : [],
  return_assign_book_error : '',
  return_assign_book_success : false
}

const ReturnAssignBookReducers = (state = intialstate,action) =>{
  switch(action.type){
    case RETURN_ASSIGN_BOOK_REQUEST : return{
      ...state,
      return_assign_book_loading:true
    }
    case RETURN_ASSIGN_BOOK_SUCCESS : return{
      ...state,
      return_assign_book_loading:false,
      return_assign_book_success:true,
      return_assign_book:action.payload
    }
    case RETURN_ASSIGN_BOOK_FALIURE : return{
      ...state,
      return_assign_book_error:action.payload
    }
    default: return state
  }

}

export default ReturnAssignBookReducers
