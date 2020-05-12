import React, {useState,useMemo} from 'react';
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
import { addBook } from '../Redux/AddBook/AddBookActions';
import {fetchAllClasses} from '../Redux/AllClasses/AllClassesActions'
import { fetchAllSubjects } from '../Redux/AllSubjects/AllSubjectsActions'

function AddBook(){
  // store data access start
  const addBookData = useSelector(state =>state.AddBook)
  const classes = useSelector(state =>state.AllClasses)
  const subjects = useSelector(state =>state.AllSubjects)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
   const [classesResult,setClassesResult] = useState([])
   const [allClassesInfo,setClassesInfo] = useState([])
    const [allSubjectsInfo,setSubjectsInfo] = useState([])
    const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({bookName:'',
                                                  totalBook:'',
                                                  writter:'',
                                                  published:'',
                                                  creatingdate:'',
                                                  bookType:'',
                                                  language:'',
                                                  classId:'undefined',
                                                  subjectId:'undefined'
                                                    })

  const [error,setError] = useState(null)

  const [successStatus,setSuccessStatus] = useState(null)
  const [mediumId,setMediumId] = useState('')
   // component all states define End

   //hooks start
   useMemo(() =>{
     if(inputValues.bookType == "1"){
       dispatch(fetchAllClasses())
     }
   },[inputValues.bookType])

   // add data of classes api into constant,hook start
      useMemo(() =>{
        if(classes && classes.all_classes && classes.all_classes.result && classes.all_classes.success === true){
          setClassesResult(classes.all_classes.result)
        }
      },[classes])
   // add data of classes api into constant,hook End

   // when classesResult change add data into classInfo,hook start
      useMemo(()=>{
        if(classesResult && classesResult.data){
              setClassesInfo(classesResult.data)
        }
      },[classesResult])
   // when classesResult change add data into classInfo,hook End

   // fetch allSections and allsubject api,hook start
      useMemo(() =>{
        if(mediumId !='' && inputValues.classId !="undefined"){
            dispatch(fetchAllSubjects(inputValues.classId,mediumId))
        }
      },[mediumId,inputValues.classId])
   // fetch allSections and allsubject api,hook End


   // add data of allsubject api into constant,hook start
      useMemo(()=>{
        if(subjects && subjects.all_subjects && subjects.all_subjects.result && subjects.all_subjects.success === true ){
          setSubjectsInfo(subjects.all_subjects.result)
        }
        else if(subjects && subjects.all_subjects && subjects.all_subjects && subjects.all_subjects.success === false){
          setSubjectsInfo([])
        }
      },[subjects])
   // add data of allsubject api into constant,hook End



   // add data of addExam api into constant,hook start
      useMemo(()=>{
        if(addBookData && addBookData.add_book && addBookData.add_book.error){
          setError(addBookData.add_book.error)
        }
      },[addBookData])
   // add data of addExam api into constant,hook End

   // add data of addExam api into constant,hook start
      useMemo(()=>{

    if(addBookData && addBookData.add_book && addBookData.add_book.success){
           setSuccessStatus(addBookData.add_book.success)
        }
      },[addBookData])
   // add data of addExam api into constant,hook End

  //hooks end

  // classHandler function start
     const classHandler = (event) =>{

       const classInfo = event.target.value
       console.log("classInfo",event.target.value)
       if(classInfo !="undefined"){
         setInputValues({...inputValues,classId:classInfo})
         allClassesInfo.filter(classid =>classid.id ==
            classInfo).map((item,index) =>{
           setMediumId(item.ClassMediumId)
         })

       }
       else{
         setInputValues({...inputValues,classId:classInfo})
       }

     }
  // classHandler function End

  const callbackFunction = (childData) => {
    setActivestate(childData)
  }
    const bookHandler = (event) =>{
    event.preventDefault()
    const book_info = inputValues;
      dispatch(addBook(book_info))
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
                <li>Add New Book</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Add New Book Area Start Here */}
            <div className="card height-auto">
            {addBookData && addBookData.add_book_loading === false ? successStatus === false || successStatus === null  ? (
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Add New Book</h3>
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
                <form className="new-added-form" onSubmit={(e) =>bookHandler(e)}>
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Book Name *</label>
                      <input type="text" value={inputValues.bookName} onChange={(e) =>setInputValues({...inputValues,bookName:e.target.value})} className="form-control" required/>
                      {error != null && error.BookName ? (<h6 className="addStudent-error">*{JSON.stringify(error.BookName).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Book Quantity *</label>
                      <input type="number" value={inputValues.totalBook} onChange={(e) =>setInputValues({...inputValues,totalBook:e.target.value})} className="form-control" required/>
                      {error != null && error.TotalBook ? (<h6 className="addStudent-error">*{JSON.stringify(error.TotalBook).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Writter Name *</label>
                      <input type="text" value={inputValues.writter} onChange={(e) =>setInputValues({...inputValues,writter:e.target.value})} className="form-control" required/>
                      {error != null && error.Writter ? (<h6 className="addStudent-error">*{JSON.stringify(error.Writter).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Publishing Date *</label>
                      <input type="date" value={inputValues.published} onChange={(e) =>setInputValues({...inputValues,published:e.target.value})} className="form-control" required/>
                      {error != null && error.Published ? (<h6 className="addStudent-error">*{JSON.stringify(error.Published).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Uploade Date *</label>
                      <input type="date" value={inputValues.creatingdate} onChange={(e) =>setInputValues({...inputValues,creatingdate:e.target.value})} className="form-control" required/>
                      {error != null && error.Creatingdate ? (<h6 className="addStudent-error">*{JSON.stringify(error.Creatingdate).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Language *</label>
                      <input type="text" value={inputValues.language} onChange={(e) =>setInputValues({...inputValues,language:e.target.value})} className="form-control" required/>
                      {error != null && error.Language ? (<h6 className="addStudent-error">*{JSON.stringify(error.Language).replace(/[\[\]"]+/g,"")}</h6>):null}
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <FormGroup>
                          <FormLabel>Book Type *</FormLabel>
                          <FormControl
                            required
                            type="text"
                            onChange={(e) =>setInputValues({...inputValues,bookType:e.target.value})}
                            as="select"
                          >
                          <option value="">Please Select Book Type</option>
                            <option value="1">class</option>
                            <option value="2">General</option>
                          </FormControl>
                          {error != null && error.BookType ? (<h6 className="addStudent-error">*{JSON.stringify(error.BookType).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </FormGroup>
                    </div>
                    {inputValues.bookType == "1" ? (
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Class *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>classHandler(e)}
                              as="select"
                            >
                            <option value="undefined">Please Select Class *</option>
                            {allClassesInfo ? allClassesInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.ClassName} {item.MediumName}Medium</option>
                            )):null}
                            </FormControl>
                            {error != null && error.ClassId ? (<h6 className="addStudent-error">*{JSON.stringify(error.ClassId).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </FormGroup>
                      </div>
                    ) : null}

                    {inputValues.bookType == "1" && inputValues.classId !="undefined" && mediumId != '' ? (
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Subject *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,subjectId:e.target.value})}
                              as="select"
                            >
                            <option value="undefined">Please Select Subject *</option>
                            {allSubjectsInfo && allSubjectsInfo.length > 0 ? allSubjectsInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.SubjectName}</option>
                            )):(<option value="undefined">No subject Available *</option>)}
                            </FormControl>
                            {error != null && error.SubjectId ? (<h6 className="addStudent-error">*{JSON.stringify(error.SubjectId).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </FormGroup>
                      </div>
                    ) : null}

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
                  <h2>Book is Added Successfully!</h2>
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

export default AddBook;
