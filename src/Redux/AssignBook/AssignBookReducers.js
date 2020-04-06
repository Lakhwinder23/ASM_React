import {
  ASSIGN_BOOK_REQUEST,
  ASSIGN_BOOK_SUCCESS,
  ASSIGN_BOOK_FALIURE
} from './AssignBookConstants'


const intialstate = {
  assign_book_loading : false,
  assign_book : [],
  assign_book_error : '',
  assign_book_success : false
}

const AssignBookReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ASSIGN_BOOK_REQUEST : return{
      ...state,
      assign_book_loading:true
    }
    case ASSIGN_BOOK_SUCCESS : return{
      ...state,
      assign_book_loading:false,
      assign_book_success:true,
      assign_book:action.payload
    }
    case ASSIGN_BOOK_FALIURE : return{
      ...state,
      assign_book_error:action.payload
    }
    default: return state
  }

}

export default AssignBookReducers
