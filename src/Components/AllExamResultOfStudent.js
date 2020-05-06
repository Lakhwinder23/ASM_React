import React, {useState,useEffect,useMemo} from 'react';
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
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllExamsResultStudent} from '../Redux/AllExamsResultStudent/AllExamsResultStudentActions'
import {fetchAllClasses} from '../Redux/AllClasses/AllClassesActions'
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';
import {fetchAllExams} from '../Redux/AllExams/AllExamsActions'
function AllExamResultOfStudent() {

  // store data access start
const allExamResultStudent = useSelector(state =>state.AllExamsResultStudent)
const classes = useSelector(state =>state.AllClasses)
const sections = useSelector(state =>state.AllSections)
const exams = useSelector(state =>state.AllExams)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [activestate,setActivestate] = useState('')
  const [examResultStudentInfo,setExamResultStudentInfo] = useState([])
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [examsResult,setExamsResult] = useState([])
  const [allExamsInfo,setExamsInfo] = useState([])
  const [inputValues,setInputValues] =useState({
                                        studentName:"Rahulsaini",
                                        studentId:"4",
                                        classId:undefined,
                                        sectionId:undefined,
                                        examId:undefined,
                                        year:undefined
  })
  const [mediumId,setMediumId] = useState('')
  // component all states define End

   //hooks start
   // fetch allexams api hook start
   useEffect(() =>{
    const exams_result_student_info = {
       studentName:"Rahulsaini",
       studentId:"4"
     }
     dispatch(fetchAllExamsResultStudent(exams_result_student_info))
     dispatch(fetchAllClasses())
     dispatch(fetchAllExams())
   },[dispatch])
// fetch allexams api hook End

// add data of classes api into constant,hook start
   useMemo(() =>{
     if(allExamResultStudent && allExamResultStudent.all_exams_result_student && allExamResultStudent.all_exams_result_student.result && allExamResultStudent.all_exams_result_student.success === true){
       setExamResultStudentInfo(allExamResultStudent.all_exams_result_student.result)
     }
   },[allExamResultStudent])
// add data of classes api into constant,hook End

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

// add data of allexams api into constant,hook start
   useMemo(() =>{
     if(exams && exams.all_exams && exams.all_exams.result && exams.all_exams.success === true){
       setExamsResult(exams.all_exams.result)
     }
   },[exams])
// add data of allexams api into constant,hook End

// when examsResult change add data into classInfo,hook start
   useMemo(()=>{
     if(examsResult && examsResult.data){
           setExamsInfo(examsResult.data)
     }
   },[examsResult])
// when examsResult change add data into classInfo,hook End

// fetch allSections and allsubject api,hook start
 useMemo(() =>{
   if(mediumId !='' && inputValues.classId !=''){
       dispatch(fetchAllSections(inputValues.classId,mediumId))
   }
 },[mediumId,inputValues.classId])
// fetch allSections and allsubject api,hook End

// add data of allSections api into constant,hook start
 useMemo(()=>{
   if(sections && sections.all_sections && sections.all_sections.result && sections.all_sections.success === true){
     setSectionsInfo(sections.all_sections.result)
   }
 },[sections])
// add data of allSections api into constant,hook End


   //hooks end

// component function start
   // classHandler function start
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
   // classHandler function End

   // examResultHandler function start
      const examResultSearchHandler = (event) =>{
      event.preventDefault()
      const exams_result_student_info = inputValues;
        dispatch(fetchAllExamsResultStudent(exams_result_student_info))
    }
   // examResultHandler function End

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
            <h3>Exam Result</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Exam Result of Student</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Class Table Area Start Here */}
          <div className="card height-auto">
                   <div className="card-body">
                     <div className="heading-layout1">
                       <div className="item-title">
                         <h3>All Exam Result Lists of Student</h3>
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
                     <form className="mg-b-20">
                       <div className="row gutters-8">
                         <div className="col-lg-3 col-12 form-group">
                         <FormGroup>
                             <FormControl
                               type="text"
                               onChange={(e) =>classHandler(e)}
                               as="select"
                             >
                             <option value="undefined">Search by Class ...</option>
                             {allClassesInfo ? allClassesInfo.map((item,index) =>(
                               <option value={item.id} key={index}>{item.ClassName} {item.MediumName}Medium</option>
                             )):null}
                             </FormControl>
                           </FormGroup>
                         </div>
                         {mediumId !='' && inputValues.classId !=undefined ? (
                         <div className="col-lg-3 col-12 form-group">
                         <FormGroup>
                             <FormControl
                               type="text"
                               onChange={(e) =>setInputValues({...inputValues,sectionId:e.target.value})}
                               as="select"
                             >
                             <option value="undefined">Search by section ... </option>
                             {allSectionsInfo ? allSectionsInfo.map((item,index) =>(
                               <option value={item.id} key={index}>{item.SectionName}</option>
                             ) ): null}
                             </FormControl>
                           </FormGroup>
                         </div>
                         ) : null}
                         <div className="col-lg-2 col-12 form-group">
                         <FormGroup>
                             <FormControl
                               required
                               type="text"
                               onChange={(e) =>setInputValues({...inputValues,examId:e.target.value})}
                               as="select"
                             >
                             <option value="undefined">Search by Exam ...</option>
                             {allExamsInfo ? allExamsInfo.map((item,index) =>(
                               <option value={item.id} key={index}>{item.ExamName}</option>
                             ) ): null}
                             </FormControl>
                           </FormGroup>
                         </div>
                         <div className="col-lg-2 col-12 form-group">
                           <input type="text" value={inputValues.year} onChange={(e) =>setInputValues({...inputValues,year:e.target.value})} placeholder="Search by Year ..." className="form-control" />
                         </div>
                         <div className="col-lg-2 col-12 form-group">
                           <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                         </div>
                       </div>
                     </form>
                     <div className="table-responsive">
                       <table className="table display data-table text-nowrap">
                         <thead>
                           <tr>
                             <th>
                               <div className="form-check">
                                 <input type="checkbox" className="form-check-input checkAll" />
                                 <label className="form-check-label">ID</label>
                               </div>
                             </th>
                             <th>Hostal Name</th>
                             <th />
                           </tr>
                         </thead>
                         {allExamResultStudent.all_exams_result_student_loading === false ? examResultStudentInfo && examResultStudentInfo.length > 0 ? (
                         <tbody>
                         {examResultStudentInfo.map((item,index) =>(
                           <tr key={index}>
                             <td>
                               <div className="form-check">
                                 <input type="checkbox" className="form-check-input" />
                                 <label className="form-check-label">{item.id}</label>
                               </div>
                             </td>
                             <td>{item.HostelName}</td>
                             <td>
                               <div className="dropdown">
                                 <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                   <span className="flaticon-more-button-of-three-dots" />
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                   <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                   <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                 </div>
                               </div>
                             </td>
                           </tr>
                         ))}
                         </tbody>
                       ):
                       (<tr><td colspan="3"><h6 className="text-center">No data available in table</h6></td></tr>)
                     :(<tr>
                       <td colspan="3">
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
                   </div>
                 </div>
          {/* Class Table Area End Here */}
          <Footer />
        </div>
      </div>
      {/* Page Area End Here */}
    </div>
        );
}

export default AllExamResultOfStudent;
