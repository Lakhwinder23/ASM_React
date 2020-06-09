import {
  FETCH_ALLEXPENSE_REQUEST,
  FETCH_ALLEXPENSE_SUCCESS,
  FETCH_ALLEXPENSE_FALIURE
} from './AllExpenseConstants'

const intialstate = {
  all_expense_loading : false,
  all_expense : [],
  all_expense_error : ''
}

const AllExpenseReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLEXPENSE_REQUEST : return{
      ...state,
      all_expense_loading:true
    }
    case FETCH_ALLEXPENSE_SUCCESS : return{
      ...state,
      all_expense_loading:false,
      all_expense:action.payload
    }
    case FETCH_ALLEXPENSE_FALIURE : return{
      ...state,
      all_expense_error:action.payload
    }
    default: return state
  }

}

export default AllExpenseReducers
