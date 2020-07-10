import React, {useState,useMemo,useEffect}  from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux';
import { addAttendence } from '../Redux/AddAttendence/AddAttendenceActions';
import { fetchAllClasses } from '../Redux/AllClasses/AllClassesActions';
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';
import { fetchAllTeachers } from '../Redux/AllTeachers/AllTeachersActions'
import { fetchAllStudents } from '../Redux/AllStudents/AllStudentsActions'
import {
  FormControl,
  FormGroup,
  FormLabel,
  Card,
  Button,
  Form
} from "react-bootstrap";

function AddAttendence(){
  // store data access start
  const add_attendence_data = useSelector(state =>state.AddAttendence)
  const classes = useSelector(state =>state.AllClasses)
  const sections = useSelector(state =>state.AllSections)
  const teachers = useSelector(state =>state.AllTeachers)
  const students = useSelector(state =>state.AllStudents)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
     const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({classId:'',
                                                  sectionId:'',
                                                  teacherId:'',
                                                  date:'',
                                                  presentStudentIds:''
                                                    })


  const [error,setError] = useState(null)
  if(error != null){
    console.log("error",typeof error)
  }
  console.log("inputValues.date",inputValues.date)

  const [successStatus,setSuccessStatus] = useState(null)
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [mediumId,setMediumId] = useState('')
  const [teacherResult,setTeacherResult] = useState([])
  const [allTeachersInfo,setTeachersInfo] = useState([])
  const [studentResult,setStudentResult] = useState([])
  const [allStudentsInfo,setAllStudentsInfo] = useState([])
  const [duplicate,setDuplicate] = useState([])
  const [popStudentInfo,setPopStudentInfo] = useState([])
  const [absentStudentInfo,setAbsentStudentInfo] = useState([])
  const [presentStudentInfo,setPresentStudentInfo] = useState([])
  const [presentStudentIds,setPresentStudentIds] = useState([])
  console.log("mediumId",mediumId);
  console.log("allSectionsInfo",allSectionsInfo);
  console.log("presentStudentIds",presentStudentIds.toString());
  console.log("allStudentsInfo",allStudentsInfo);
  console.log("presentStudentInfo",presentStudentInfo);
  console.log("absentStudentInfo",absentStudentInfo);
  console.log("studentResult",studentResult);
   // component all states define End

   //hooks start
   useEffect(() =>{
     dispatch(fetchAllClasses())
     dispatch(fetchAllTeachers())
     const today =new Date()
     console.log("today",today)
     const month = today.getMonth()+1
     const onlydate = today.getDate()
     console.log("month",onlydate.toString().length)
     if(month.toString().length == 1 && onlydate.toString().length == 1){
       const date = today.getFullYear()+ '-' + '0'+(month) + '-' + '0'+(onlydate);
        setInputValues({...inputValues,date:date})
     }
     else if(month.toString().length > 1 && onlydate.toString().length == 1){
       const date = today.getFullYear()+ '-' +(month) + '-' + '0'+(onlydate);
        setInputValues({...inputValues,date:date})
     }
     else if(month.toString().length > 1 && onlydate.toString().length > 1){
       const date = today.getFullYear()+ '-' +(month) + '-' +(onlydate);
        setInputValues({...inputValues,date:date})
     }

     else if(month.toString().length == 1 && onlydate.toString().length > 1){
       const date = today.getFullYear()+ '-' + '0' +(month) + '-' +(onlydate);
        setInputValues({...inputValues,date:date})
     }

   },[dispatch])


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
     if(mediumId !='' && inputValues.classId !=''){
         dispatch(fetchAllSections(inputValues.classId,mediumId))
     }
   },[mediumId,inputValues.classId])

   useMemo(()=>{
     if(sections && sections.all_sections && sections.all_sections.result){
       setSectionsInfo(sections.all_sections.result)
     }
   },[sections.all_sections.result])

   useMemo(() =>{
     if(inputValues.classId !='' && inputValues.sectionId !=''){
       const student_info = {
         classId:inputValues.classId,
         sectionId:inputValues.sectionId
       }
         dispatch(fetchAllStudents(student_info))
         setAbsentStudentInfo([])
         setPresentStudentInfo([])
         setPopStudentInfo([])
     }
   },[inputValues.classId,inputValues.sectionId])

   useMemo(()=>{
     if(students && students.all_students && students.all_students.result && students.all_students.success === true){
       setStudentResult(students.all_students.result)
     }
   },[students])

   useMemo(() =>{
     if(studentResult && studentResult.data){
       setAllStudentsInfo(studentResult.data)
     }
   },[studentResult])

   useMemo(() =>{
     if(studentResult && studentResult.data){
       setDuplicate(studentResult.data)
     }
   },[studentResult])

   useMemo(() =>{
     if(allStudentsInfo && allStudentsInfo.length > 0 && popStudentInfo && popStudentInfo.length == 0){
       setPopStudentInfo(allStudentsInfo[0])
      allStudentsInfo.shift()
     }
   },[allStudentsInfo])

   useMemo(()=>{
     if(teachers && teachers.all_teachers && teachers.all_teachers.result){
       setTeacherResult(teachers.all_teachers.result)
     }
   },[teachers.all_teachers.result])

   useMemo(()=>{
     if(teacherResult && teacherResult.data){
           setTeachersInfo(teacherResult.data)
     }
   },[teacherResult])

  useMemo(()=>{
    if(add_attendence_data && add_attendence_data.add_attendence && add_attendence_data.add_attendence.error){
      setError(add_attendence_data.add_attendence.error)
    }

  },[add_attendence_data.add_attendence])

  useMemo(()=>{
    if(add_attendence_data && add_attendence_data.add_attendence && add_attendence_data.add_attendence.success){
      setSuccessStatus(add_attendence_data.add_attendence.success)
    }

  },[add_attendence_data.add_attendence])

  useMemo(() =>{
    if(absentStudentInfo && absentStudentInfo.length > 0 ){
      if(allStudentsInfo && allStudentsInfo.length > 0){
        setPopStudentInfo(allStudentsInfo[0])
        const remainingallStudentsInfo = allStudentsInfo
          remainingallStudentsInfo.shift()
        setAllStudentsInfo(remainingallStudentsInfo)
      }
      else{
        setPopStudentInfo([])
      }
    }
  },[absentStudentInfo])

  useMemo(() =>{
    if(presentStudentInfo && presentStudentInfo.length > 0 ){
      if(allStudentsInfo && allStudentsInfo.length > 0){
        setPopStudentInfo(allStudentsInfo[0])
        const remainingallStudentsInfo = allStudentsInfo
          remainingallStudentsInfo.shift()
        setAllStudentsInfo(remainingallStudentsInfo)
      }
      else{
        setPopStudentInfo([])
      }

    }
  },[presentStudentInfo])

  // useMemo(() =>{
  //   if(presentStudentIds && presentStudentIds.length > 0){
  //     presentStudentIds.map((item,index) =>{
  //       setPresentStudentInfo(presentStudentInfo.filter(({id}) =>id != presentStudentIds[index]))
  //     })
  //   }
  // },[presentStudentIds])

  useMemo(() =>{
    if(presentStudentIds && presentStudentIds.length > 0 && presentStudentIds.length ==  presentStudentInfo.length){
      const attendence_info = {
        classId:inputValues.classId,
        sectionId:inputValues.sectionId,
        teacherId:inputValues.teacherId,
        date:inputValues.date,
        presentStudentIds:presentStudentIds.toString()
      }
        dispatch(addAttendence(attendence_info))
    }

  },[presentStudentIds])

  //hooks end
  const callbackFunction = (childData) => {
    setActivestate(childData)
  }

  const classHandler = (event) =>{

    const classInfo = event.target.value
    console.log("classInfo",event.target.value)
    if(classInfo !=""){
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

  const presentStudentHandler = (event) =>{
      event.preventDefault()
      const removedData = presentStudentInfo.filter(({ id }) =>id == event.target.value)
    console.log("removedData",removedData)
    setPresentStudentInfo(presentStudentInfo.filter(({ id }) =>id != event.target.value))
     setAbsentStudentInfo([...absentStudentInfo,removedData[0]])
  }

  const absentStudentHandler = (event) =>{
    event.preventDefault()
    const removedData = absentStudentInfo.filter(({ id }) =>id == event.target.value)
  console.log("removedData",removedData)
  setAbsentStudentInfo(absentStudentInfo.filter(({ id }) =>id != event.target.value))
   setPresentStudentInfo([...presentStudentInfo,removedData[0]])
  }
    const addAttendenceHandler = (event) =>{
    event.preventDefault()
    if(presentStudentInfo && presentStudentInfo.length > 0){
      let value = []
      presentStudentInfo.map((item,index) =>{
        value.push(item.id)
      })
      setPresentStudentIds(value)
    }
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
            <h3>Attendence</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Add Attendence</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Admit Form Area Start Here */}
          <div className="card height-auto">
            {add_attendence_data && add_attendence_data.add_attendence_loading === false ? successStatus === false || successStatus === null  ? (
              <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Add Attendence</h3>
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
                    <form className="new-added-form" onSubmit={(e) =>addAttendenceHandler(e)}>
                      <div className="row">
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
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
                          {error != null && error.ClassId ? (<h6 className="addStudent-error">*{JSON.stringify(error.ClassId).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </FormGroup>
                      </div>
                      {mediumId !='' && inputValues.classId !='' ? (
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <FormGroup>
                              <FormLabel>Section *</FormLabel>
                              <FormControl
                                required
                                type="text"
                                onChange={(e) =>setInputValues({...inputValues,sectionId:e.target.value})}
                                as="select"
                              >
                              <option value="">Please Select Section *</option>
                              {allSectionsInfo ? allSectionsInfo.map((item,index) =>(
                                <option value={item.id} key={index}>{item.SectionName}</option>
                              ) ): null}
                              </FormControl>
                                {error != null && error.SectionId ? (<h6 className="addStudent-error">*{JSON.stringify(error.SectionId).replace(/[\[\]"]+/g,"")}</h6>):null}
                            </FormGroup>
                        </div>
                      ) : null}
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <FormGroup>
                              <FormLabel>Teacher *</FormLabel>
                              <FormControl
                                required
                                type="text"
                                onChange={(e) =>setInputValues({...inputValues,teacherId:e.target.value})}
                                as="select"
                              >
                              <option value="">Please Select Teacher *</option>
                              {allTeachersInfo ? allTeachersInfo.map((item,index) =>(
                                <option value={item.id} key={index}>{item.TeacherName}</option>
                              ) ): null}
                              </FormControl>
                              {error != null && error.TeacherId ? (<h6 className="addStudent-error">*{JSON.stringify(error.TeacherId).replace(/[\[\]"]+/g,"")}</h6>):null}
                            </FormGroup>
                        </div>
                        <div className="col-12">
                        <div className="row">
                          <div className="col-4"></div>
                          <div className="col-4">
                          {students && students.all_students && students.all_students.success === false ?
                              students.all_students.error ? students.all_students.error+" "+"of students" :null
                             :popStudentInfo && Object.keys(popStudentInfo).length > 0 ? (
                            <Card>
                              <Card.Img variant="top" src="/img/figure/admin.jpg" />
                              <Card.Body>
                              <Card.Title>{popStudentInfo.StudentName}</Card.Title>
                              <Card.Text>
                                {popStudentInfo.RollNumber}
                              </Card.Text>
                              <Button variant="danger" onClick={(e) =>setAbsentStudentInfo([...absentStudentInfo,popStudentInfo])}>Absent</Button>
                              <Button className="present-button" variant="success" onClick={(e) =>setPresentStudentInfo([...presentStudentInfo,popStudentInfo])}>Present</Button>
                              </Card.Body>
                            </Card>
                          ):null}
                          </div>
                          <div className="col-4"></div>
                        </div>
                        </div>
                        {allStudentsInfo &&
                        allStudentsInfo.length == 0 &&
                        popStudentInfo &&
                        popStudentInfo.length == 0 ? (
                          <div className="col-12 present-absent-info">
                            <div className="row">
                                <div className="col-2"></div>
                                 <div className="col-3">
                                 {presentStudentInfo &&
                                   presentStudentInfo.length > 0 ?(
                                 <>
                                 <h4>Present Students</h4>
                                 {presentStudentInfo.map((item,index) =>(
                                   <Form.Group id="formGridCheckbox" key={index}>
                                     <Form.Check
                                     type="checkbox"
                                     label={item.RollNumber}
                                     name={item.RollNumber}
                                     id={item.RollNumber}
                                     value={item.id}
                                     defaultChecked={true}
                                     onClick={(e) =>presentStudentHandler(e)}
                                     />
                                   </Form.Group>
                                 ))}
                                 </>
                                 ):null}
                                 </div>

                                <div className="col-2"></div>

                                    <div className="col-3">
                                    {absentStudentInfo &&
                                      absentStudentInfo.length > 0 ?(
                                    <>
                                    <h4>Absent Students</h4>
                                    {absentStudentInfo.map((item,index) =>(
                                      <Form.Group id="formGridCheckbox" key={index}>
                                        <Form.Check
                                        type="checkbox"
                                        label={item.RollNumber}
                                        name={item.RollNumber}
                                        id={item.RollNumber}
                                        value={item.id}
                                        defaultChecked={false}
                                        onClick={(e) =>absentStudentHandler(e)}
                                        />
                                      </Form.Group>
                                    ))}
                                    </>
                                    ):null}
                                    </div>
                                    <div className="col-2"></div>
                            </div>
                          </div>
                        ) :null}

                        <div className="col-12 form-group mg-t-8">
                        {allStudentsInfo && allStudentsInfo.length == 0 && popStudentInfo && popStudentInfo.length == 0 ? (
                          <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                        ):null}
                          <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow" onClick={(e) =>resetHandler(e)}>Reset</button>
                        </div>
                      </div>
                    </form>
                  </div>
            ) : (<div className="card-body">
                      <div className="success-greeting">
                      <h2>Thank You!</h2>
                      <h2>Attendence Add Successfully!</h2>
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

export default AddAttendence;
