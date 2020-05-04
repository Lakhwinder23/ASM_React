import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllClasses} from '../Redux/AllClasses/AllClassesActions'
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';
import { fetchAllSubjects } from '../Redux/AllSubjects/AllSubjectsActions'
import { fetchAllTeachers } from '../Redux/AllTeachers/AllTeachersActions'
import { addExam } from '../Redux/AddExam/AddExamActions'
function AddExam(){
  // store data access start
const classes = useSelector(state =>state.AllClasses)
const sections = useSelector(state =>state.AllSections)
const subjects = useSelector(state =>state.AllSubjects)
const teachers = useSelector(state =>state.AllTeachers)
const addExam_data = useSelector(state =>state.AddExam)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [allSubjectsInfo,setSubjectsInfo] = useState([])
  const [teacherResult,setTeacherResult] = useState([])
  const [allTeachersInfo,setTeachersInfo] = useState([])
  const [inputValues,setInputValues] = useState({
                                          classId:"",
                                          sectionId:"",
                                          subjectId:"",
                                          teacherId:"",
                                          maxNumber:"",
                                          examDate:"",
                                          examName:"",
                                          examTime:""
  })
  const [mediumId,setMediumId] = useState('')
    const [error,setError] = useState(null)
    const [successStatus,setSuccessStatus] = useState(null)
  // component all states define End

   //hooks start
   // fetch classes and teachers api hook start
   useEffect(() =>{
     dispatch(fetchAllClasses())
     dispatch(fetchAllTeachers())
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

// add data of teachers api into constant,hook start
   useMemo(()=>{
     if(teachers && teachers.all_teachers && teachers.all_teachers.result && teachers.all_teachers.success === true){
       setTeacherResult(teachers.all_teachers.result)
     }
   },[teachers])
// add data of teachers api into constant,hook End

// when teacherResult change add data into teachersInfo,hook start
   useMemo(()=>{
     if(teacherResult && teacherResult.data){
           setTeachersInfo(teacherResult.data)
     }
   },[teacherResult])
// when teacherResult change add data into teachersInfo,hook End

// add data of addExam api into constant,hook start
   useMemo(()=>{
     if(addExam_data && addExam_data.add_exam && addExam_data.add_exam.error){
       setError(addExam_data.add_exam.error)
     }
     else if(addExam_data && addExam_data.add_exam && addExam_data.add_exam.success){
        setSuccessStatus(addExam_data.add_exam.success)
     }
   },[addExam_data])
// add data of addExam api into constant,hook End

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

// examHandler function start
   const examHandler = (event) =>{
   event.preventDefault()
   const exam_info = inputValues;
     dispatch(addExam(exam_info))
 }
// examHandler function End

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
                {addExam_data && addExam_data.add_exam_loading === false ? successStatus === false || successStatus === null  ? (
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Add New Exam</h3>
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
                    <form className="new-added-form" onSubmit={(e) =>examHandler(e)}>
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
                      {mediumId !='' && inputValues.classId !=''  ? (
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Subject Type  *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,subjectId:e.target.value})}
                              as="select"
                            >
                            <option value="">Please Select Subject *</option>
                            {allSubjectsInfo ? allSubjectsInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.SubjectName}</option>
                            )):null}
                            </FormControl>
                            {error != null && error.SubjectId ? (<h6 className="addStudent-error">*{JSON.stringify(error.SubjectId).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </FormGroup>
                        </div>
                      ) : null}
                      <div className="col-12-xxxl col-lg-6 col-12 form-group">
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
                          )):null}
                          </FormControl>
                          {error != null && error.TeacherId ? (<h6 className="addStudent-error">*{JSON.stringify(error.TeacherId).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </FormGroup>
                      </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Exam Name</label>
                          <input type="text" placeholder className="form-control" value={inputValues.examName} onChange={(e) =>setInputValues({...inputValues,examName:e.target.value})} required/>
                          {error != null && error.ExamName ? (<h6 className="addStudent-error">*{JSON.stringify(error.ExamName).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Exam Maximum Marks</label>
                          <input type="number" placeholder className="form-control" value={inputValues.maxNumber} onChange={(e) =>setInputValues({...inputValues,maxNumber:e.target.value})} required/>
                          {error != null && error.MaxNumber ? (<h6 className="addStudent-error">*{JSON.stringify(error.MaxNumber).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Exam Time</label>
                          <input type="Text" placeholder ="10:00AM - 11:00AM" className="form-control" value={inputValues.examTime} onChange={(e) =>setInputValues({...inputValues,examTime:e.target.value})} required/>
                          {error != null && error.ExamTime ? (<h6 className="addStudent-error">*{JSON.stringify(error.ExamTime).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Exam Date</label>
                          <input type="Date" placeholder="dd/mm/yyyy" className="form-control" value={inputValues.examDate} onChange={(e) =>setInputValues({...inputValues,examDate:e.target.value})} required/>
                          {error != null && error.ExamDate ? (<h6 className="addStudent-error">*{JSON.stringify(error.ExamDate).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                      <h2>Exam is Sheduled Successfully!</h2>
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

export default AddExam;
