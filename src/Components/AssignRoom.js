import React, {useState,useMemo,useEffect}  from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux';
import { assignRoom } from '../Redux/AssignRoom/AssignRoomActions';
import { fetchAllHostels } from '../Redux/AllHostels/AllHostelActions'
import { fetchAllRooms } from '../Redux/AllRooms/AllRoomActions'
import { fetchAllClasses } from '../Redux/AllClasses/AllClassesActions';
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';
import { fetchAllStudents } from '../Redux/AllStudents/AllStudentsActions'
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";

function AssignRoom(){
  // store data access start
  const assign_room_data = useSelector(state =>state.AssignRoom)
  const allHostel = useSelector(state =>state.AllHostel)
  const rooms = useSelector(state =>state.AllRoom)
  const classes = useSelector(state =>state.AllClasses)
  const sections = useSelector(state =>state.AllSections)
  const students = useSelector(state =>state.AllStudents)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
     const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({hostelId:'',
                                                  roomId:'',
                                                  studentId:''
                                                    })


  const [error,setError] = useState(null)
  if(error != null){
    console.log("error",typeof error)
  }


  const [successStatus,setSuccessStatus] = useState(null)
  const [hostelResult,setHostelResult] = useState([])
  const [allHostelInfo,setAllHostelInfo] = useState([])
  const [roomResult,setRoomResult] = useState([])
  const [allRoomsInfo,setAllRoomsInfo] = useState([])
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [mediumId,setMediumId] = useState('')
  console.log("mediumId",mediumId);
  const [getStudentInput,setGetStudentInput] = useState({classid : '',
                                                          sectionId : ''})
  console.log("allSectionsInfo",allSectionsInfo);
  console.log("allClassesInfo",allClassesInfo);
  const [studentResult,setStudentResult] = useState([])
  console.log("studentResult",studentResult);
  const [allStudentsInfo,setAllStudentsInfo] = useState([])
   // component all states define End

   //hooks start
   useEffect(() =>{
     dispatch(fetchAllHostels())
     dispatch(fetchAllRooms())
     dispatch(fetchAllClasses())
   },[dispatch])

   useMemo(()=>{
     if(allHostel && allHostel.all_hostels && allHostel.all_hostels.result){
       setHostelResult(allHostel.all_hostels.result)
     }
   },[allHostel.all_hostels.result])

   useMemo(()=>{
     if(hostelResult && hostelResult.data){
           setAllHostelInfo(hostelResult.data)
     }
   },[hostelResult])

   useMemo(()=>{
     if(rooms && rooms.all_rooms && rooms.all_rooms.result){
       setRoomResult(rooms.all_rooms.result)
     }
   },[rooms.all_rooms.result])

   useMemo(()=>{
     if(roomResult && roomResult.data){
           setAllRoomsInfo(roomResult.data)
     }
   },[roomResult])

   useMemo(()=>{
     if(classes && classes.all_classes && classes.all_classes.result){
       setClassesResult(classes.all_classes.result)
     }
   },[classes.all_classes.result])

   useMemo(()=>{
     if(classesResult && classesResult.data){
           setClassesInfo(classesResult.data)
     }
   },[classesResult])

   useMemo(() =>{
     if(mediumId !='' && getStudentInput.classId !=''){
         dispatch(fetchAllSections(getStudentInput.classId,mediumId))
     }
   },[mediumId,getStudentInput.classId])

   useMemo(()=>{
     if(sections && sections.all_sections && sections.all_sections.result){
       setSectionsInfo(sections.all_sections.result)
     }
   },[sections.all_sections.result])

   useMemo(() =>{
     if(getStudentInput.classId !='' && getStudentInput.sectionId !=''){
         dispatch(fetchAllStudents(getStudentInput))
     }
   },[getStudentInput.classId,getStudentInput.sectionId])

   useMemo(()=>{
     if(students && students.all_students && students.all_students.result){
       setStudentResult(students.all_students.result)
     }
   },[students.all_students.result])

   useMemo(()=>{
     if(studentResult && studentResult.data){
           setAllStudentsInfo(studentResult.data)
     }
   },[studentResult])

  useMemo(()=>{
    if(assign_room_data && assign_room_data.assign_room && assign_room_data.assign_room.error){
      setError(assign_room_data.assign_room.error)
    }

  },[assign_room_data.assign_room])

  useMemo(()=>{
    if(assign_room_data && assign_room_data.assign_room && assign_room_data.assign_room.success){
      setSuccessStatus(assign_room_data.assign_room.success)
    }

  },[assign_room_data.assign_room])

  //hooks end
  const callbackFunction = (childData) => {
    setActivestate(childData)
  }

  const classHandler = (event) =>{

    const classInfo = event.target.value
    console.log("classInfo",event.target.value)
    if(classInfo !=""){
      setGetStudentInput({...getStudentInput,classId:classInfo})
      allClassesInfo.filter(classid =>classid.id ==
         classInfo).map((item,index) =>{
        setMediumId(item.ClassMediumId)
      })

    }
    else{
      setInputValues({...inputValues,classId:classInfo})
    }

  }
    const assignRoomHandler = (event) =>{
    event.preventDefault()
    const asign_room_info = inputValues;
      dispatch(assignRoom(asign_room_info))
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
            <h3>Class</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Assign class</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Admit Form Area Start Here */}
          <div className="card height-auto">
            {assign_room_data && assign_room_data.assign_room_loading === false ? successStatus === false || successStatus === null  ? (
              <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Assign class</h3>
                        {error != null && typeof error == "string" ? (<h4 className="addStudent-error">{error}</h4>) : null}
                        {
                           // if object exist then typeof return object if not exist then return string
                         }
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
                    <form className="new-added-form" onSubmit={(e) =>assignRoomHandler(e)}>
                      <div className="row">
                      <div className="col-12-xxxl col-lg-6 col-12 form-group">
                      <FormGroup>
                          <FormLabel>Class *</FormLabel>
                          <FormControl
                            required
                            type="text"
                            onChange={(e) =>classHandler(e)}
                            as="select"
                          >
                          <option value="">Please Select Class *</option>
                          {allClassesInfo ? allClassesInfo.map((item,index) =>(
                            <option value={item.id} key={index}>{item.ClassName} {item.MediumName}Medium</option>
                          )):null}
                          </FormControl>
                        </FormGroup>
                      </div>
                      {mediumId !='' && inputValues.classId !='' ? (
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <FormGroup>
                              <FormLabel>Section *</FormLabel>
                              <FormControl
                                required
                                type="text"
                                onChange={(e) =>setGetStudentInput({...getStudentInput,sectionId:e.target.value})}
                                as="select"
                              >
                              <option value="">Please Select Section *</option>
                              {allSectionsInfo ? allSectionsInfo.map((item,index) =>(
                                <option value={item.id} key={index}>{item.SectionName}</option>
                              ) ): null}
                              </FormControl>
                            </FormGroup>
                        </div>
                      ) : null}
                      {getStudentInput.classId !='' && getStudentInput.sectionId !='' ? (
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <FormGroup>
                              <FormLabel>Students *</FormLabel>
                              <FormControl
                                required
                                type="text"
                                onChange={(e) =>setInputValues({...inputValues,studentId:e.target.value})}
                                as="select"
                              >
                              <option value="">Please Select Student *</option>
                              {allStudentsInfo ? allStudentsInfo.map((item,index) =>(
                                <option value={item.id} key={index}>{item.StudentName}</option>
                              ) ): null}
                              </FormControl>
                              {error != null && error.StudentId ? (<h6 className="addStudent-error">*{JSON.stringify(error.StudentId).replace(/[\[\]"]+/g,"")}</h6>):null}
                            </FormGroup>
                        </div>
                      ) : null}
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Hostel Name *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,hostelId:e.target.value})}
                              as="select"
                            >
                            <option value="">Please select Hostel Name *</option>
                            {allHostelInfo ? allHostelInfo.map((hostel_data,index) =>(
                              <option value={hostel_data.id}>{hostel_data.HostelName} {hostel_data.MediumName}Medium</option>
                            )):null}
                            </FormControl>
                            {error != null && error.HostelId ? (<h6 className="addStudent-error">*{JSON.stringify(error.HostelId).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </FormGroup>
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Room Number *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,roomId:e.target.value})}
                              as="select"
                            >
                            <option value="">Please select Section Name *</option>
                            {allRoomsInfo ? allRoomsInfo.map((room_data,index) =>(
                              <option value={room_data.id}>{room_data.RoomNumber}</option>
                            )):null}
                            </FormControl>
                            {error != null && error.RoomId ? (<h6 className="addStudent-error">*{JSON.stringify(error.RoomId).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                      <h2>Assign Room To Student Successfully!</h2>
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
          {/* Admit Form Area End Here */}
          <Footer />
        </div>
      </div>
      {/* Page Area End Here */}
    </div>
        );
}

export default AssignRoom;
