import React, {useState,useEffect,useMemo} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  FormControl,
  FormGroup,
  FormLabel,
  Form
} from "react-bootstrap";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { acceptFees } from '../Redux/AcceptFees/AcceptFeesActions'
import { fetchAllFeesCollection } from '../Redux/AllFeesCollection/AllFeesCollectionActions'
function AcceptFees(){
  // store data access start
const acceptFeesData = useSelector(state =>state.AcceptFees)
const allFeesCollectionData = useSelector(state =>state.AllFeesCollection)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allFeesCollectionResult,setFeesCollectionResult] = useState([])
  const [allFeesCollectionInfo,setFeesCollectionInfo] = useState([])
  const [inputValues,setInputValues] = useState({
                                          payId:"",
                                          paymode:""
  })
  const [activestate,setActivestate] = useState('')
    const [error,setError] = useState(null)
    const [successStatus,setSuccessStatus] = useState(null)
  // component all states define End

   //hooks start
   // fetch allFeesCollection api hook start
   useEffect(() =>{
     dispatch(fetchAllFeesCollection())
   },[dispatch])
  // fetch allFeesCollection api hook End

  // add data of allFeesCollection api into constant,hook start
   useMemo(() =>{
     if(allFeesCollectionData && allFeesCollectionData.all_fees_collection && allFeesCollectionData.all_fees_collection.result && allFeesCollectionData.all_fees_collection.success === true){
       setFeesCollectionResult(allFeesCollectionData.all_fees_collection.result)
     }
   },[allFeesCollectionData])
  // add data of allFeesCollection api into constant,hook End

  // add data of allFeesCollection api into constant,hook start
   useMemo(() =>{
     if(allFeesCollectionResult && allFeesCollectionResult.data){
       setFeesCollectionInfo(allFeesCollectionResult.data)
     }
   },[allFeesCollectionResult])
  // add data of allFeesCollection api into constant,hook End


// add data of acceptFees api into constant,hook start
   useMemo(()=>{
     if(acceptFeesData && acceptFeesData.accept_fees && acceptFeesData.accept_fees.error){
       setError(acceptFeesData.accept_fees.error)
     }
   },[acceptFeesData])
// add data of acceptFees api into constant,hook End

// add data of acceptFees api into constant,hook start
   useMemo(()=>{
     if(acceptFeesData && acceptFeesData.accept_fees && acceptFeesData.accept_fees.success){
        setSuccessStatus(acceptFeesData.accept_fees.success)
     }
   },[acceptFeesData])
// add data of acceptFees api into constant,hook End
   //hooks end

// component function start

// examHandler function start
   const acceptfeesHandler = (event) =>{
   event.preventDefault()
   const accept_fees_info = inputValues;
     dispatch(acceptFees(accept_fees_info))
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
                <li>Accept Fees</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Add Expense Area Start Here */}
            <div className="card height-auto">
            {acceptFeesData && acceptFeesData.accept_fees_loading === false ? successStatus === false || successStatus === null  ? (
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Accept Fees</h3>
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
                <form className="new-added-form" onSubmit={(e) =>acceptfeesHandler(e)}>
                  <div className="row">
                    <div className="col-12-xxxl col-lg-12 col-12 form-group">
                    <FormGroup>
                        <FormLabel>Please Select User *</FormLabel>
                        {error != null && error.paymode ? (<h6 className="addStudent-error">*{JSON.stringify(error.paymode).replace(/[\[\]"]+/g,"")}</h6>):null}
                        <div className="table-responsive">
                          <table className="table data-table text-nowrap">
                            <thead>
                              <tr>
                                <th>Please select payId</th>
                                <th>ID</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Medium</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Expense</th>
                                <th>Amount</th>
                                <th>E-mail</th>
                                <th />
                              </tr>
                            </thead>
                            {allFeesCollectionData.all_fees_collection_loading === false ? allFeesCollectionInfo && allFeesCollectionInfo.length > 0 ? (
                            <tbody>
                              {allFeesCollectionInfo.filter(unpaiditem =>unpaiditem.Status == "UnPaid").map((item,index) =>(
                              <tr>
                                <td>
                                  <Form.Check
                                    required
                                    type="radio"
                                    className="feescollectionRadio"
                                    name="formHorizontalRadios"
                                    id={item.id}
                                    value={item.id}
                                    onClick={(e) =>setInputValues({...inputValues,payId:e.target.value})}
                                    //onChange={(evt) => this.changeTitle(evt)}
                                  />
                                </td>
                                <td>{item.id}</td>
                                <td><img src="img/figure/student2.png" alt="student" /></td>
                                <td>{item.StudentName}</td>
                                <td>{item.StudentGender}</td>
                                <td>{item.MediumName}</td>
                                <td>{item.ClassName}</td>
                                <td>{item.SectionName}</td>
                                <td>{Object.keys(allFeesCollectionInfo[index])[3]}</td>
                                <td>${item.MonthFees}</td>
                                <td>{item.StudentEmail}</td>
                              </tr>
                              ))}
                            </tbody>
                          ):
                          (<tr><td colspan="10"><h6 className="text-center">No data available in table</h6></td></tr>)
                        :(<tr>
                          <td colspan="10">
                        <Loader
                        className = "student-detail-loader"
                      type="MutatingDots"
                      color="#fea801"
                      height={100}
                      width={100}

                        />
                        </td>
                        </tr>)}
                          </table>
                        </div>
                      </FormGroup>
                    </div>
                    <div className="col-12-xxxl col-lg-6 col-12 form-group">
                    <FormGroup>
                        <FormLabel>Payment Mode *</FormLabel>
                        <FormControl
                          required
                          type="text"
                          onChange={(e) =>setInputValues({...inputValues,paymode:e.target.value})}
                          as="select"
                        >
                        <option value="">Please Select Payment Mode *</option>
                        <option value="1">Cash</option>
                        <option value="2">Online</option>
                        </FormControl>
                        {error != null && error.paymode ? (<h6 className="addStudent-error">*{JSON.stringify(error.paymode).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                  <h2>Fees Paid Successfully!</h2>
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

export default AcceptFees;
