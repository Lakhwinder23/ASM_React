import React, {useState,useEffect,useMemo} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { addFeesCollection } from '../Redux/AddFeesCollection/AddFeesCollectionActions'
function AddFeesCollection(){
  // store data access start
const addFeesCollectionData = useSelector(state =>state.AddFeesCollection)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [inputValues,setInputValues] = useState({
                                          date:"",
  })
  const [activestate,setActivestate] = useState('')
    const [error,setError] = useState(null)
    const [successStatus,setSuccessStatus] = useState(null)
  // component all states define End

   //hooks start


// add data of addFees api into constant,hook start
   useMemo(()=>{
     if(addFeesCollectionData && addFeesCollectionData.add_fees_collection && addFeesCollectionData.add_fees_collection.error){
       setError(addFeesCollectionData.add_fees_collection.error)
     }
     else if(addFeesCollectionData && addFeesCollectionData.add_fees_collection && addFeesCollectionData.add_fees_collection.success){
        setSuccessStatus(addFeesCollectionData.add_fees_collection.success)
     }
   },[addFeesCollectionData])
// add data of addFees api into constant,hook End

   //hooks end

// component function start

// feesCollectionHandler function start
   const feesCollectionHandler = (event) =>{
   event.preventDefault()
   const fees_collection_info = inputValues;
     dispatch(addFeesCollection(fees_collection_info))
 }
// feesCollectionHandler function End

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
                <li>Add Fees Collection</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Add Expense Area Start Here */}
            <div className="card height-auto">
            {addFeesCollectionData && addFeesCollectionData.add_fees_collection_loading === false ? successStatus === false || successStatus === null  ? (
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Add Fees Collection</h3>
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
                <form className="new-added-form" onSubmit={(e) =>feesCollectionHandler(e)}>
                {error != null ? (<h6 className="addStudent-error">*{error}</h6>):null}
                  <div className="row">
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <FormGroup>
                        <FormLabel>Date *</FormLabel>
                        <FormControl
                          required
                          type="text"
                          onChange={(e) =>setInputValues({...inputValues,date:e.target.value})}
                          as="select"
                        >
                        <option value="">Select Date</option>
                          <option value="2020-01-01">2020-01-01</option>
                          <option value="2020-02-01">2020-02-01</option>
                          <option value="2020-03-01">2020-03-01</option>
                          <option value="2020-04-01">2020-04-01</option>
                          <option value="2020-05-01">2020-05-01</option>
                          <option value="2020-06-01">2020-06-01</option>
                          <option value="2020-07-01">2020-07-01</option>
                          <option value="2020-08-01">2020-08-01</option>
                          <option value="2020-09-01">2020-09-01</option>
                          <option value="2020-10-01">2020-10-01</option>
                          <option value="2020-11-01">2020-11-01</option>
                          <option value="2020-12-01">2020-12-01</option>
                        </FormControl>
                        {error != null && error.Date ? (<h6 className="addStudent-error">*{JSON.stringify(error.Date).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </FormGroup>
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
                  <h2>Fees Collection is Added Successfully!</h2>
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

export default AddFeesCollection;
