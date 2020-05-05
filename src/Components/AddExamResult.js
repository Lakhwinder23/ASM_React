import React, {useState,useEffect,useMemo} from 'react';
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllClasses} from '../Redux/AllClasses/AllClassesActions'
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';
import {fetchAllExams} from '../Redux/AllExams/AllExamsActions'
import {addExamResult} from '../Redux/AddExamResult/AddExamResultActions'
function AddExamResult() {
  // store data access start
  const classes = useSelector(state =>state.AllClasses)
  const sections = useSelector(state =>state.AllSections)
  const exams = useSelector(state =>state.AllExams)
const addExamResult_data = useSelector(state =>state.AddExamResult)

// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [examsResult,setExamsResult] = useState([])
  const [allExamsInfo,setExamsInfo] = useState([])
  const [inputValues,setInputValues] = useState({
                                          classId:"",
                                          sectionId:"",
                                          examId:"",
                                          studentResult:""
  })
  const [mediumId,setMediumId] = useState('')
    const [error,setError] = useState(null)
    const [successStatus,setSuccessStatus] = useState(null)
  // component all states define End

   //hooks start
   // fetch classes and teachers api hook start
   useEffect(() =>{
     dispatch(fetchAllClasses())
   },[dispatch])
  // fetch classes and teachers api hook End

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

// fetch allexams api hook start
  useMemo(() =>{
    if(inputValues.classId !="" && inputValues.sectionId !=""){
      const exam_info ={
        classId:inputValues.classId,
        sectionId:inputValues.sectionId
      }
      dispatch(fetchAllExams(exam_info))
    }
  },[inputValues.classId,inputValues.sectionId])
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

// add data of addGrade api into constant,hook start
   useMemo(()=>{
     if(addExamResult_data && addExamResult_data.add_exam_result && addExamResult_data.add_exam_result.error){
       setError(addExamResult_data.add_grade.error)
     }
     else if(addExamResult_data && addExamResult_data.add_exam_result && addExamResult_data.add_exam_result.success){
        setSuccessStatus(addExamResult_data.add_exam_result.success)
     }
   },[addExamResult_data])
// add data of addGrade api into constant,hook End

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
   const examResultHandler = (event) =>{
   event.preventDefault()
   const exam_result_info = inputValues;
     dispatch(addExamResult(exam_result_info))
 }
// examResultHandler function End

// resetHandler function start
   const resetHandler = (event) =>{
     event.preventDefault()
     window.location.reload(false);
   }
// resetHandler function start


// component function end
        return (
            <div className="col-4-xxxl col-12">
                    <div className="card height-auto">
                    {addExamResult_data && addExamResult_data.add_exam_result_loading === false ? successStatus === false || successStatus === null  ? (
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Add Exams Result</h3>
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
                        <form className="new-added-form" onSubmit={(e) =>examResultHandler(e)}>
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
                              {error != null && error.ClassId ? (<h6 className="addStudent-error">*{JSON.stringify(error.ClassId).replace(/[\[\]"]+/g,"")}</h6>):null}
                            </FormGroup>
                          </div>
                          {mediumId !='' && inputValues.classId !='' ? (
                            <div className="col-12-xxxl col-lg-6 col-12 form-group">
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
                          {inputValues.sectionId && inputValues.classId !='' ? (
                            <div className="col-12-xxxl col-lg-6 col-12 form-group">
                              <FormGroup>
                                  <FormLabel>Exam *</FormLabel>
                                  <FormControl
                                    required
                                    type="text"
                                    onChange={(e) =>setInputValues({...inputValues,examId:e.target.value})}
                                    as="select"
                                  >
                                  <option value="">Please Select Exam *</option>
                                  {allExamsInfo ? allExamsInfo.map((item,index) =>(
                                    <option value={item.id} key={index}>{item.ExamName}</option>
                                  ) ): null}
                                  </FormControl>
                                  {error != null && error.ExamId ? (<h6 className="addStudent-error">*{JSON.stringify(error.ExamId).replace(/[\[\]"]+/g,"")}</h6>):null}
                                </FormGroup>
                            </div>
                          ) : null}
                            <div className="col-12 form-group">
                              <label>Student Result</label>
                              <textarea className="textarea form-control" value={inputValues.studentResult} onChange={(e) =>setInputValues({...inputValues,studentResult:e.target.value})} name="message" id="form-message" cols={10} rows={4} defaultValue={""} required/>
                              {error != null && error.StudentResult ? (<h6 className="addStudent-error">*{JSON.stringify(error.StudentResult).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                          <h2>Exam Result Detail add Successfully!</h2>
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
                  </div>
        );
}

export default AddExamResult;
