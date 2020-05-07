import React, {useState,useEffect,useMemo} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { addExpenseType } from '../Redux/AddExpenseType/AddExpenseTypeActions'

function AddExpenseType(){
  // store data access start
const addExpenseTypeData = useSelector(state =>state.AddExpenseType)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [inputValues,setInputValues] = useState({
                                          expenseType:""
  })
  const [activestate,setActivestate] = useState('')
    const [error,setError] = useState(null)
    const [successStatus,setSuccessStatus] = useState(null)
  // component all states define End

   //hooks start

// add data of addExpenseType api into constant,hook start
   useMemo(()=>{
     if(addExpenseTypeData && addExpenseTypeData.add_expenseType && addExpenseTypeData.add_expenseType.error){
       setError(addExpenseTypeData.add_expenseType.error)
     }
     else if(addExpenseTypeData && addExpenseTypeData.add_expenseType && addExpenseTypeData.add_expenseType.success){
        setSuccessStatus(addExpenseTypeData.add_expenseType.success)
     }
   },[addExpenseTypeData])
// add data of addExpenseType api into constant,hook End

   //hooks end

// component function start

// examHandler function start
   const expenseTypeHandler = (event) =>{
   event.preventDefault()
   const expenseType_info = inputValues;
     dispatch(addExpenseType(expenseType_info))
 }
// examHandler function End

// resetHandler function start
   const resetHandler = (event) =>{
     event.preventDefault()
     window.location.reload(false);
   }
// resetHandler function start


  const callbackFunction = (childData) => {
    setActivestate(childData)
}

// component function end

        return (
            <div id="wrapper" className={activestate ? 'wrapper bg-ash sidebar-collapsed': 'wrapper bg-ash'}>
        {/* Header Menu Area Start Here */}
        <Header parentCallback = {() =>callbackFunction()}/>
        {/* Header Menu Area End Here */}
        {/* Page Area Start Here */}
        <div className="dashboard-page-one">
          {/* Sidebar Area Start Here */}
          <Sidebar />
          {/* Sidebar Area End Here */}
          <div className="dashboard-content-one">
            {/* Breadcubs Area Start Here */}
            <div className="breadcrumbs-area">
              <h3>Accounts</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Add New Expense Type</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Add Expense Area Start Here */}
            <div className="card height-auto">
            {addExpenseTypeData && addExpenseTypeData.add_expenseType_loading === false ? successStatus === false || successStatus === null  ? (
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Add New Expense Type</h3>
                  </div>
                  <div className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">...</a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                      <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                      <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                    </div>
                  </div>
                </div>
                <form className="new-added-form" onSubmit={(e) =>expenseTypeHandler(e)}>
                  <div className="row">
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <label>Expense Type *</label>
                      <input type="text" value = {inputValues.expenseType} onChange={(e) =>setInputValues({...inputValues,expenseType:e.target.value})} placeholder className="form-control" required/>
                      {error != null && error.ExpenseType ? (<h6 className="addStudent-error">*{JSON.stringify(error.ExpenseType).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-12 form-group mg-t-8">
                      <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                      <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow" onClick={(e) =>resetHandler(e)}>Reset</button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (<div className="card-body">
                  <div className="success-greeting">
                  <h2>Thank You!</h2>
                  <h2>Expense Type is Added Successfully!</h2>
                  </div>
              </div>):(<div className="card-body">
                  <div className="Student-Loader">
                  <Loader
                  className = "student-detail-loader"
                type="MutatingDots"
                color="#fea801"
                height={150}
                width={150}

   />
                  </div>
                </div>)}
            </div>
            {/* Add Expense Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default AddExpenseType;
