import React, {useState,useMemo,useEffect}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchAllClasses } from '../Redux/AllClasses/AllClassesActions';
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';
import { fetchAllStudents } from '../Redux/AllStudents/AllStudentsActions';
import { fetchAllAllAttendence } from '../Redux/AllAttendence/AllAttendenceActions'

import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
function StudentAttendenceFilter({parentCallbackInput}) {
  // store data access start
  const classes = useSelector(state =>state.AllClasses)
  const sections = useSelector(state =>state.AllSections)
  const students = useSelector(state =>state.AllStudents)
  const all_attendence_data = useSelector(state =>state.AllAttendence)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
  const [inputValues,setInputValues] = useState({ role:"1",
                                                  classId:'',
                                                  sectionId:'',
                                                  studentId:'',
                                                  month:'',
                                                  date:''
                                                    })
console.log("inputValues",inputValues);
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [mediumId,setMediumId] = useState('')
  console.log("mediumId",mediumId);
  console.log("allSectionsInfo",allSectionsInfo);
  console.log("allClassesInfo",allClassesInfo);
  const [studentResult,setStudentResult] = useState([])
  console.log("studentResult",studentResult);
  const [allStudentsInfo,setAllStudentsInfo] = useState([])
  const [error,setError] = useState(null)
  const [successStatus,setSuccessStatus] = useState(null)
   // component all states define End

   //hooks start
   useEffect(() =>{
     dispatch(fetchAllClasses())
     const today =new Date()
     const month = (today.getMonth()+1);

     setInputValues({...inputValues,month:month})
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
         dispatch(fetchAllStudents(inputValues))
     }
   },[inputValues.classId,inputValues.sectionId])

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
     if(all_attendence_data && all_attendence_data.all_attendence && all_attendence_data.all_attendence.error){
       setError(all_attendence_data.all_attendence.error)
     }

   },[all_attendence_data.all_attendence])

   useMemo(()=>{
     if(all_attendence_data && all_attendence_data.all_attendence && all_attendence_data.all_attendence.success){
       setSuccessStatus(all_attendence_data.all_attendence.success)
     }

   },[all_attendence_data.all_attendence])

   // useMemo(()=>{
   //   if(successStatus && successStatus === true){
   //     this.sendData(inputValues)
   //   }
   //
   // },[successStatus])

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
  // const sendData = (data) =>{
  //   this.props.parentCallbackInput(data)
  // }
    const allAttendenceHandler = (event) =>{
    event.preventDefault()
    const all_attendence_info = inputValues;
      dispatch(fetchAllAllAttendence(all_attendence_info))
        parentCallbackInput(inputValues)
  }
        return (
            <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="heading-layout1">
                          <div className="item-title">
                            <h3>Student Attendence Filter</h3>
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
                        <form className="new-added-form" onSubmit={(e) =>allAttendenceHandler(e)}>
                          <div className="row">
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                            <FormGroup>
                                <FormLabel>Class *</FormLabel>
                                <FormControl
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
                            {inputValues.classId !='' && inputValues.sectionId !='' ? (
                              <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <FormGroup>
                                    <FormLabel>Students *</FormLabel>
                                    <FormControl
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
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                              <label>Select Month</label>
                              <select className="select2"
                                value={inputValues.month}
                                onChange={(e) =>setInputValues({...inputValues,month:e.target.value})}
                              >
                                <option value={1}>January</option>
                                <option value={2}>February</option>
                                <option value={3}>March</option>
                                <option value={4}>April</option>
                                <option value={5}>May</option>
                                <option value={6}>June</option>
                                <option value={7}>July</option>
                                <option value={8}>August</option>
                                <option value={9}>September</option>
                                <option value={10}>October</option>
                                <option value={11}>November</option>
                                <option value={12}>December</option>
                              </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                              <label>Date </label>
                              <input type="Date" value={inputValues.date} onChange={(e) =>setInputValues({...inputValues,date:e.target.value})}  className="form-control" data-position="bottom right" />
                              {error != null && error.Date ? (<h6 className="addStudent-error">*{JSON.stringify(error.Date).replace(/[\[\]"]+/g,"")}</h6>):null}
                            </div>
                            <div className="col-12 form-group mg-t-8">
                              <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Filter</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
        );
}

export default StudentAttendenceFilter;
