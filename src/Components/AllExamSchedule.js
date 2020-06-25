import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllExams} from '../Redux/AllExams/AllExamsActions'
import {fetchAllClasses} from '../Redux/AllClasses/AllClassesActions'
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';
import { fetchAllSubjects } from '../Redux/AllSubjects/AllSubjectsActions'

function AllExamSchedule() {
  // store data access start
const exams = useSelector(state =>state.AllExams)
const classes = useSelector(state =>state.AllClasses)
const sections = useSelector(state =>state.AllSections)
const subjects = useSelector(state =>state.AllSubjects)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [examsResult,setExamsResult] = useState([])
  const [allExamsInfo,setExamsInfo] = useState([])
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [allSubjectsInfo,setSubjectsInfo] = useState([])
  const [inputValues,setInputValues] = useState({
                                          classId:"",
                                          sectionId:"",
                                          subjectId:"",
                                          examDate:"",
  })
  const [mediumId,setMediumId] = useState('')
  console.log("allExamsInfo",allExamsInfo)
  // component all states define End

   //hooks start
   // fetch allexams api hook start
   useEffect(() =>{
     dispatch(fetchAllExams())
     dispatch(fetchAllClasses())
   },[dispatch])
// fetch allexams api hook End

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
     if(mediumId !='' && inputValues.classId !=''){
         dispatch(fetchAllSections(inputValues.classId,mediumId))
         dispatch(fetchAllSubjects(inputValues.classId,mediumId))
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

// add data of allsubject api into constant,hook start
   useMemo(()=>{
     if(subjects && subjects.all_subjects && subjects.all_subjects.result && subjects.all_subjects.success === true ){
       setSubjectsInfo(subjects.all_subjects.result)
     }
   },[subjects])
// add data of allsubject api into constant,hook End


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
       setInputValues({...inputValues,classId:classInfo,subjectId:classInfo,sectionId:classInfo})
       setMediumId("")
     }

   }
// classHandler function End

// examHandler function start
   const examFilterHandler = (event) =>{
   event.preventDefault()
   const exam_info = inputValues;
     dispatch(fetchAllExams(exam_info))
 }
// examHandler function End

   //hooks end
        return (
            <div className="col-8-xxxl col-12">
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>All Exam Schedule</h3>
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
                    <form className="mg-b-20" onSubmit={(e) =>examFilterHandler(e)}>
                      <div className="row gutters-8">
                        <div className="col-lg-2 col-12 form-group">
                        <FormGroup>
                            <FormControl
                              type="text"
                              onChange={(e) =>classHandler(e)}
                              as="select"
                            >
                            <option value="">Search by class ..."</option>
                            {allClassesInfo ? allClassesInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.ClassName}{item.MediumName}</option>
                            )):null}
                            </FormControl>
                          </FormGroup>
                        </div>
                        {mediumId !='' && inputValues.classId !='' ? (
                        <div className="col-lg-3 col-12 form-group">
                        <FormGroup>
                            <FormControl
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,sectionId:e.target.value})}
                              as="select"
                            >
                            <option value="">Search by section ..."</option>
                            {allSectionsInfo && allSectionsInfo.length > 0 ? allSectionsInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.SectionName}</option>
                            )):null}
                            </FormControl>
                          </FormGroup>
                        </div>
                        ) : null}
                        {mediumId !='' && inputValues.classId !='' ? (
                        <div className="col-lg-3 col-12 form-group">
                        <FormGroup>
                            <FormControl
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,subjectId:e.target.value})}
                              as="select"
                            >
                            <option value="">Search by subject ..."</option>
                            {allSubjectsInfo && allSubjectsInfo.length > 0 ? allSubjectsInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.SubjectName}</option>
                            )):null}
                            </FormControl>
                          </FormGroup>
                        </div>
                        ) : null}
                        <div className="col-lg-2 col-12 form-group">
                          <input type="Date" placeholder="Search by Date ..." className="form-control" value={inputValues.examDate} onChange={(e) =>setInputValues({...inputValues,examDate:e.target.value})} />
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
                                <label className="form-check-label">Exam Name</label>
                              </div>
                            </th>
                            <th>Subject</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th />
                          </tr>
                        </thead>
                        {exams.all_exams_loading === false ? allExamsInfo && allExamsInfo.length > 0 ? (
                        <tbody>
                         {allExamsInfo.map((item,index) =>(
                          <tr key={index}>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">{item.ExamName}</label>
                              </div>
                            </td>
                            <td>{item.SubjectName}</td>
                            <td>{item.ClassName}</td>
                            <td>{item.SectionName}</td>
                            <td>{item.ExamTime}</td>
                            <td>{item.ExamDate}</td>
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
                      (<tr><td colspan="7"><h6 className="text-center">No Data Avaiable</h6></td></tr>)
                    :(<tr>
                      <td colspan="7">
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
              </div>
        );
}

export default AllExamSchedule;
