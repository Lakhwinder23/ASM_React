import {
  FETCH_ALLBOOK_REQUEST,
  FETCH_ALLBOOK_SUCCESS,
  FETCH_ALLBOOK_FALIURE
} from './AllBookConstants'

const intialstate = {
  all_book_loading : false,
  all_book : [],
  all_book_error : ''
}

const AllBookReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLBOOK_REQUEST : return{
      ...state,
      all_book_loading:true
    }
    case FETCH_ALLBOOK_SUCCESS : return{
      ...state,
      all_book_loading:false,
      all_book:action.payload
    }
    case FETCH_ALLBOOK_FALIURE : return{
      ...state,
      all_book_error:action.payload
    }
    default: return state
  }

}

export default AllBookReducers
