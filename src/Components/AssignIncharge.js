import React, {useState,useMemo,useEffect}  from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux';
import { assignIncharge } from '../Redux/AssignIncharge/AssignInchargeActions';
import { fetchAllClasses } from '../Redux/AllClasses/AllClassesActions';
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';
import { fetchAllTeachers } from '../Redux/AllTeachers/AllTeachersActions'
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";

function AssignIncharge(){
  // store data access start
  const assign_incharge_data = useSelector(state =>state.AssignIncharge)
  const classes = useSelector(state =>state.AllClasses)
  const sections = useSelector(state =>state.AllSections)
  const teachers = useSelector(state =>state.AllTeachers)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
     const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({classId:'',
                                                  sectionId:'',
                                                  isIncharge:'',
                                                  teacherId:''
                                                    })


  const [error,setError] = useState(null)
  if(error != null){
    console.log("error",typeof error)
  }


  const [successStatus,setSuccessStatus] = useState(null)
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [mediumId,setMediumId] = useState('')
  const [teacherResult,setTeacherResult] = useState([])
  const [allTeachersInfo,setTeachersInfo] = useState([])
  console.log("allSectionsInfo",allSectionsInfo);
  console.log("allClassesInfo",allClassesInfo);

   // component all states define End

   //hooks start
   useEffect(() =>{
     dispatch(fetchAllClasses())
     dispatch(fetchAllTeachers())
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

  useMemo(()=>{
    if(assign_incharge_data && assign_incharge_data.assign_incharge && assign_incharge_data.assign_incharge.error){
      setError(assign_incharge_data.assign_incharge.error)
    }

  },[assign_incharge_data.assign_incharge])

  useMemo(()=>{
    if(assign_incharge_data && assign_incharge_data.assign_incharge && assign_incharge_data.assign_incharge.success){
      setSuccessStatus(assign_incharge_data.assign_incharge.success)
    }

  },[assign_incharge_data.assign_incharge])

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
    const assignClassHandler = (event) =>{
    event.preventDefault()
    const asign_incharge_info = inputValues;
      dispatch(assignIncharge(asign_incharge_info))
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
            <h3>Teacher</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Assign Incharge</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Admit Form Area Start Here */}
          <div className="card height-auto">
            {assign_incharge_data && assign_incharge_data.assign_incharge_loading === false ? successStatus === false || successStatus === null  ? (
              <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Assign Incharge</h3>
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
                    <form className="new-added-form" onSubmit={(e) =>assignClassHandler(e)}>
                      <div className="row">
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Class Name *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>classHandler(e)}
                              as="select"
                            >
                            <option value="">Please select Class Name *</option>
                            {allClassesInfo ? allClassesInfo.map((class_data,index) =>(
                              <option value={class_data.id}>{class_data.ClassName} {class_data.MediumName}Medium</option>
                            )):null}
                            </FormControl>
                            {error != null && error.ClassId ? (<h6 className="addStudent-error">*{JSON.stringify(error.ClassId).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </FormGroup>
                        </div>
                        {mediumId !='' && inputValues.classId !='' ? (
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Section Name *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,sectionId:e.target.value})}
                              as="select"
                            >
                            <option value="">Please select Section Name *</option>
                            {allSectionsInfo ? allSectionsInfo.map((section_data,index) =>(
                              <option value={section_data.id}>{section_data.SectionName}</option>
                            )):null}
                            </FormControl>
                            {error != null && error.SectionId ? (<h6 className="addStudent-error">*{JSON.stringify(error.SectionId).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </FormGroup>
                        </div>
                        ) : null}
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Teacher Name *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,teacherId:e.target.value})}
                              as="select"
                            >
                            <option value="">Please select Teacher Name *</option>
                            {allTeachersInfo ? allTeachersInfo.map((teacher_data,index) =>(
                              <option value={teacher_data.id}>{teacher_data.TeacherName}</option>
                            )):null}
                            </FormControl>
                            {error != null && error.TeacherId ? (<h6 className="addStudent-error">*{JSON.stringify(error.TeacherId).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </FormGroup>
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>IsIncharge *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,isIncharge:e.target.value})}
                              as="select"
                            >
                            <option value="">Please select *</option>
                              <option value="1">Yes</option>
                              <option value="2">No</option>
                            </FormControl>
                            {error != null && error.IsIncharge ? (<h6 className="addStudent-error">*{JSON.stringify(error.IsIncharge).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                      <h2>Incharge Assign Successfully!</h2>
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

export default AssignIncharge;
