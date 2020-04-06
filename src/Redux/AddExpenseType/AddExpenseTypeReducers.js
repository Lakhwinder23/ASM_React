import {
  ADD_EXPENSE_TYPE_REQUEST,
  ADD_EXPENSE_TYPE_SUCCESS,
  ADD_EXPENSE_TYPE_FALIURE
} from './AddExpenseTypeConstants'

const intialstate = {
  add_expenseType_loading : false,
  add_expenseType : [],
  add_expenseType_error : '',
  add_expenseType_success : false
}

const AddExpenseTypeReducers = (state = intialstate,action) =>{
  switch(action.type){
    case ADD_EXPENSE_TYPE_REQUEST : return{
      ...state,
      add_expenseType_loading:true
    }
    case ADD_EXPENSE_TYPE_SUCCESS : return{
      ...state,
      add_expenseType_loading:false,
      add_expenseType_success:true,
      add_expenseType:action.payload
    }
    case ADD_EXPENSE_TYPE_FALIURE : return{
      ...state,
      add_expenseType_error:action.payload
    }
    default: return state
  }

}

export default AddExpenseTypeReducers
