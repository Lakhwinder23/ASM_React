import React, {useState,useEffect,useMemo} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { fetchAllStudents } from '../Redux/AllStudents/AllStudentsActions'
import {fetchAllParents} from '../Redux/AllParents/AllParentsActions'
import { fetchAllTeachers } from '../Redux/AllTeachers/AllTeachersActions'
import { addMessage } from '../Redux/AddMessage/AddMessageActions'
function Message() {
  // store data access start
const addMessageData = useSelector(state =>state.AddMessage)
const students = useSelector(state =>state.AllStudents)
const teachers = useSelector(state =>state.AllTeachers)
  const parents = useSelector(state =>state.AllParents)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [studentResult,setStudentResult] = useState([])
  const [allStudentsInfo,setAllStudentsInfo] = useState([])
  const [parentResult,setParentResult] = useState([])
  const [allParentsInfo,setParentsInfo] = useState([])
  const [teacherResult,setTeacherResult] = useState([])
  const [allTeachersInfo,setTeachersInfo] = useState([])
  const [inputValues,setInputValues] = useState({
                                          userId:"",
                                          createdById:"5",
                                          title:"",
                                          message:""
  })
  const [activestate,setActivestate] = useState('')
    const [error,setError] = useState(null)
  // component all states define End

   //hooks start
   // fetch AllStudents and teachers api hook start
   useEffect(() =>{
     dispatch(fetchAllStudents())
     dispatch(fetchAllParents())
     dispatch(fetchAllTeachers())
   },[dispatch])
// fetch classes and teachers api hook End

// add data of AllStudents api into constant,hook start
useMemo(()=>{
  if(students && students.all_students && students.all_students.result){
    setStudentResult(students.all_students.result)
  }
},[students.all_students.result])
// add data of AllStudents api into constant,hook End

// when studentResult change add data into constant,hook start
useMemo(()=>{
  if(studentResult && studentResult.data){
        setAllStudentsInfo(studentResult.data)
  }
},[studentResult])
// when studentResult change add data into constant,hook End

// add data of AllParents api into constant,hook start
useMemo(()=>{
  if(parents && parents.all_parents && parents.all_parents.result){
    setParentResult(parents.all_parents.result)
  }
},[parents.all_parents.result])
// add data of AllParents api into constant,hook end

// when parentResult change add data into constant,hook start
useMemo(()=>{
  if(parentResult && parentResult.data){
        setParentsInfo(parentResult.data)
  }
},[parentResult])
// when parentResult change add data into constant,hook end

// add data of AllTeachers api into constant,hook start
useMemo(()=>{
  if(teachers && teachers.all_teachers && teachers.all_teachers.result){
    setTeacherResult(teachers.all_teachers.result)
  }
},[teachers.all_teachers.result])
// add data of AllTeachers api into constant,hook end

// when teacherResult change add data into constant,hook start
useMemo(()=>{
  if(teacherResult && teacherResult.data){
        setTeachersInfo(teacherResult.data)
  }
},[teacherResult])
// when teacherResult change add data into constant,hook end

// add data of addFees api into constant,hook start
   useMemo(()=>{
     if(addMessageData && addMessageData.add_message && addMessageData.add_message.error){
       setError(addMessageData.add_message.error)
     }
   },[addMessageData])
// add data of addFees api into constant,hook End


   //hooks end

// component function start

// examHandler function start
   const messageHandler = (event) =>{
   event.preventDefault()
   const message_info = inputValues;
     dispatch(addMessage(message_info))
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
                  <h3>Messaging</h3>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Compose Message</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                <div className="row">
                  {/* Add Notice Area Start Here */}
                  <div className="col-xl-8">
                    <div className="card">
                    {addMessageData && addMessageData.add_message_loading === false  ? (
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Write New Message</h3>
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
                        <form className="new-added-form" onSubmit={(e) =>messageHandler(e)}>
                          <div className="row">
                            <div className="col-12 form-group">
                              <label>Title</label>
                              <input type="text" value={inputValues.title} onChange={(e) =>setInputValues({...inputValues,title:e.target.value})}  className="form-control" required/>
                            </div>
                            <div className="col-12 form-group">
                              <FormGroup>
                                  <FormLabel>Recipient </FormLabel>
                                  <FormControl
                                    required
                                    type="text"
                                    onChange={(e) =>setInputValues({...inputValues,userId:e.target.value})}
                                    as="select"
                                  >
                                  <option value="">Please Select Recipient</option>
                                  {allStudentsInfo ? allStudentsInfo.map((item,index) =>(
                                    <option value={item.id} key={index}>{item.StudentName}</option>
                                  )):null}
                                  {allParentsInfo ? allParentsInfo.map((item,index) =>(
                                    <option value={item.id} key={index}>{item.ParentName}</option>
                                  )):null}
                                  {allTeachersInfo ? allTeachersInfo.map((item,index) =>(
                                    <option value={item.id} key={index}>{item.TeacherName}</option>
                                  )):null}
                                  </FormControl>
                                </FormGroup>
                            </div>
                            <div className="col-12 form-group">
                              <label>Message</label>
                              <textarea className="textarea form-control" value={inputValues.message} onChange={(e) =>setInputValues({...inputValues,message:e.target.value})} name="message" id="form-message" cols={10} rows={9} defaultValue={""} />
                            </div>
                            <div className="col-12 form-group mg-t-8">
                              <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                              <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow" onClick={(e) =>resetHandler(e)}>Reset</button>
                            </div>
                          </div>
                        </form>
                      </div>)
                      :(<div className="card-body">
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
                  </div>
                  {/* Add Notice Area End Here */}
                  {/* All Notice Area Start Here */}
                  <div className="col-xl-4">
                  {addMessageData && addMessageData.add_message && addMessageData.add_message.success === true  ? (
                    <div className="card message-box-wrap height-auto">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Successful Message</h3>
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
                        <div className="message-success-box">
                          <div className="item-content">
                            <div className="item-icon">
                              <i className="fas fa-check" />
                            </div>
                            <h3 className="item-title">Successfully Message Sent</h3>
                          </div>
                        </div>
                      </div>
                    </div>):(null)}
                    {error !=null && addMessageData && addMessageData.add_message && addMessageData.add_message.success === false ? (
                      <div className="card message-box-wrap height-auto">
                        <div className="card-body">
                          <div className="heading-layout1">
                            <div className="item-title">
                              <h3>Error Message</h3>
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
                          <div className="message-error-box">
                            <div className="item-content">
                              <div className="item-icon">
                                <i className="fas fa-exclamation-circle" />
                              </div>
                              {error.UserId ? (<h3 className="item-title">{JSON.stringify(error.UserId).replace(/[\[\]"]+/g,"")}</h3>):null}
                              {error.CreatedById ? (<h3 className="item-title">{JSON.stringify(error.CreatedById).replace(/[\[\]"]+/g,"")}</h3>):null}
                              { error.title ? (<h3 className="item-title">{JSON.stringify(error.title).replace(/[\[\]"]+/g,"")}</h3>):null}
                              {error.message ? (<h3 className="item-title">{JSON.stringify(error.message).replace(/[\[\]"]+/g,"")}</h3>):null}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) :(null)}

                  </div>
                  {/* All Notice Area End Here */}
                </div>
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );
}

export default Message;
