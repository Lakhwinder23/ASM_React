import React, {useState,useMemo,useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux';
import { assignBook } from '../Redux/AssignBook/AssignBookActions';
import { fetchAllBook } from '../Redux/AllBook/AllBookActions'


function AssignBook(){
  // store data access start
  const assignBookData = useSelector(state =>state.AssignBook)
  const allBookData = useSelector(state =>state.AllBook)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
   const [allBookResult,setBookResult] = useState([])
   const [allBookInfo,setBookInfo] = useState([])
    const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({bookId:'',
                                                  userId:'',
                                                  userRole:'6',
                                                  bookAssignDate:'',
                                                  bookSubmitDate:'',
                                                  bookCharges:''
                                                    })

  const [error,setError] = useState(null)

  const [successStatus,setSuccessStatus] = useState(null)
   // component all states define End

   //hooks start

   // fetch allBook and teachers api hook start
   useEffect(() =>{
     dispatch(fetchAllBook())
   },[dispatch])
// fetch allBook and teachers api hook End

// add data of allFees api into constant,hook start
   useMemo(() =>{
     if(allBookData && allBookData.all_book && allBookData.all_book.result && allBookData.all_book.success === true){
       setBookResult(allBookData.all_book.result)
     }
   },[allBookData])
// add data of allFees api into constant,hook End

// when allBookResult data change than data add into constant,hook start
   useMemo(() =>{
     if(allBookData && allBookResult.data){
       setBookInfo(allBookResult.data)
     }
   },[allBookResult])
// when allBookResult data change than data add into constant,hook End


   // add data of addExam api into constant,hook start
      useMemo(()=>{
        if(assignBookData && assignBookData.assign_book && assignBookData.assign_book.error){
          setError(assignBookData.assign_book.error)
        }
      },[assignBookData])
   // add data of addExam api into constant,hook End

   // add data of addExam api into constant,hook start
      useMemo(()=>{

    if(assignBookData && assignBookData.assign_book && assignBookData.assign_book.success){
           setSuccessStatus(assignBookData.assign_book.success)
        }
      },[assignBookData])
   // add data of addExam api into constant,hook End

  //hooks end


  const callbackFunction = (childData) => {
    setActivestate(childData)
  }
    const assignBookHandler = (event) =>{
    event.preventDefault()
    const assign_book_info = inputValues;
      dispatch(assignBook(assign_book_info))
  }

  const resetHandler = (event) =>{
    event.preventDefault()
    window.location.reload(false);
  }
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
              <h3>Library</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Assign Book</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Add New Book Area Start Here */}
            <div className="card height-auto">
            {assignBookData && assignBookData.assign_book_loading === false ? successStatus === false || successStatus === null  ? (
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Assign Book</h3>
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
                <form className="new-added-form" onSubmit={(e) =>assignBookHandler(e)}>
                  <div className="row">
                  <div className="col-xl-3 col-lg-6 col-12 form-group">
                    <FormGroup>
                        <FormLabel>Book Name *</FormLabel>
                        <FormControl
                          required
                          type="text"
                          onChange={(e) =>setInputValues({...inputValues,bookId:e.target.value})}
                          as="select"
                        >
                        <option value="">Please Select Book Name *</option>
                        {allBookInfo && allBookInfo.length > 0 ? allBookInfo.map((item,index) =>(
                          <option value={item.id} key={index}>{item.BookName}</option>
                        )):(<option value="">No Book Available *</option>)}
                        </FormControl>
                        {error != null && error.BookId ? (<h6 className="addStudent-error">*{JSON.stringify(error.BookId).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </FormGroup>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-12 form-group">
                    <FormGroup>
                        <FormLabel>User Name *</FormLabel>
                        <FormControl
                          required
                          type="text"
                          onChange={(e) =>setInputValues({...inputValues,userId:e.target.value})}
                          as="select"
                        >
                        <option value="">Please Select User Name</option>
                          <option value="1">jatingoel</option>
                          <option value="2">shivamsharma</option>
                          <option value="3">dfff</option>
                          <option value="4">Rahulsaini</option>
                          <option value="5">ghfhf</option>
                          <option value="6">neetusaini</option>
                          <option value="7">Rajatsaini</option>
                        </FormControl>
                        {error != null && error.UserId ? (<h6 className="addStudent-error">*{JSON.stringify(error.UserId).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </FormGroup>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Book Assign Date *</label>
                    <input type="date" value={inputValues.bookAssignDate} onChange={(e) =>setInputValues({...inputValues,bookAssignDate:e.target.value})} className="form-control" required/>
                    {error != null && error.BookAssignDate ? (<h6 className="addStudent-error">*{JSON.stringify(error.BookAssignDate).replace(/[\[\]"]+/g,"")}</h6>):null}
                  </div>
                  <div className="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Book Submit Date *</label>
                    <input type="date" value={inputValues.bookSubmitDate} onChange={(e) =>setInputValues({...inputValues,bookSubmitDate:e.target.value})} className="form-control" required/>
                    {error != null && error.BookSubmitDate ? (<h6 className="addStudent-error">*{JSON.stringify(error.BookSubmitDate).replace(/[\[\]"]+/g,"")}</h6>):null}
                  </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Book Charges *</label>
                      <input type="text" value={inputValues.bookCharges} onChange={(e) =>setInputValues({...inputValues,bookCharges:e.target.value})} className="form-control" required/>
                      {error != null && error.BookCharges ? (<h6 className="addStudent-error">*{JSON.stringify(error.BookCharges).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-md-3 d-none d-xl-block form-group">
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
                  <h2>Book is Assign Successfully!</h2>
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
            {/* Add New Book Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
    }

export default AssignBook;
