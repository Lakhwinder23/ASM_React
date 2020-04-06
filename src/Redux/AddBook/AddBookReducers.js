import {
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FALIURE
} from './AddBookConstants'
import {config} from '../config'


const intialstate = {
  add_book_loading : false,
  add_book : [],
  add_book_error : '',
  add_book_success : false
}

const AddBookReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_BOOK_REQUEST : return{
      ...state,
      add_book_loading:true
    }
    case ADD_BOOK_SUCCESS : return{
      ...state,
      add_book_loading:false,
      add_book_success:true,
      add_book:action.payload
    }
    case ADD_BOOK_FALIURE : return{
      ...state,
      add_book_error:action.payload
    }
    default: return state
  }

}

export default AddBookReducers
