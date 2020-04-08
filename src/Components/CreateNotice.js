import React, {useState,useMemo,useEffect}  from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux';
import { addNotice } from '../Redux/AddNotice/AddNoticeActions';
import { fetchAllClasses } from '../Redux/AllClasses/AllClassesActions';
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';
import { fetchAllTeachers } from '../Redux/AllTeachers/AllTeachersActions'

function CreateNotice() {
  // store data access start
  const add_notice_data = useSelector(state =>state.AddNotice)
  const classes = useSelector(state =>state.AllClasses)
  const sections = useSelector(state =>state.AllSections)
  const teachers = useSelector(state =>state.AllTeachers)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
  const [inputValues,setInputValues] = useState({title:'',
                                                noticeType:'',
                                                teacherId:undefined,
                                                classId:undefined,
                                                parentId:undefined,
                                                sectionId:undefined,
                                                studentId:undefined
                                                    })
  const [error,setError] = useState(null)
  const [successStatus,setSuccessStatus] = useState(null)
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [mediumId,setMediumId] = useState('')
  const [teacherResult,setTeacherResult] = useState([])
  const [allTeachersInfo,setTeachersInfo] = useState([])
   // component all states define End

   //hooks start
   useMemo(()=>{
     if(inputValues.noticeType && inputValues.noticeType == "5"){
      dispatch(fetchAllTeachers())
     }

   },[inputValues.noticeType])

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
     if(inputValues.noticeType == "6" || inputValues.noticeType == "8" ){
      dispatch(fetchAllClasses())
     }

   },[inputValues.noticeType])

   useMemo(()=>{
     if(classes && classes.all_classes && classes.all_classes.result){
       setClassesResult(classes.all_classes.result)
     }
   },[classes.all_classes.result])

   useMemo(() =>{
     if(mediumId !='' && inputValues.classId !='' && inputValues.noticeType == "8" ){
         dispatch(fetchAllSections(inputValues.classId,mediumId))
     }
   },[mediumId,inputValues.classId,inputValues.noticeType])

   useMemo(()=>{
     if(sections && sections.all_sections && sections.all_sections.result){
       setSectionsInfo(sections.all_sections.result)
     }
   },[sections.all_sections.result])

   useMemo(()=>{
     if(classesResult && classesResult.data){
           setClassesInfo(classesResult.data)
     }
   },[classesResult])


  useMemo(()=>{
    if(add_notice_data && add_notice_data.add_notice && add_notice_data.add_notice.error){
      setError(add_notice_data.add_notice.error)
    }

  },[add_notice_data.add_notice])

  useMemo(()=>{
    if(add_notice_data && add_notice_data.add_notice && add_notice_data.add_notice.success){
      setSuccessStatus(add_notice_data.add_notice.success)
    }

  },[add_notice_data.add_notice])

  //hooks end
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

   const noticeHandler = (event) =>{
   event.preventDefault()
   const notice_info = inputValues;
     dispatch(addNotice(notice_info))
 }

 const resetHandler = (event) =>{
   event.preventDefault()
   window.location.reload(false);
 }
        return (
            <div className="col-4-xxxl col-12">
                <div className="card height-auto">
                {add_notice_data && add_notice_data.add_notice_loading === false ? successStatus === false || successStatus === null  ? (
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Create A Notice</h3>
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
                    <form className="new-added-form" onSubmit={(e) =>noticeHandler(e)}>
                      <div className="row">
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Title</label>
                          <input type="text" value={inputValues.title} placeholder className="form-control" onChange={(e) =>setInputValues({...inputValues,title:e.target.value})} required/>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Notice Type *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,noticeType:e.target.value})}
                              as="select"
                            >
                            <option value="">Please Select Notice Type *</option>
                            <option value="1">All School</option>
                            <option value="2">All Classes</option>
                            <option value="3">All Teachers</option>
                            <option value="4">All Parents</option>
                            <option value="5">Single Teacher</option>
                            <option value="6">Single Class</option>
                            <option value="7">Single Parent</option>
                            <option value="8">Single Section</option>
                            <option value="9">Single Student</option>
                            </FormControl>
                            {error != null && error.NoticeType ? (<h6 className="addStudent-error">*{JSON.stringify(error.NoticeType).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </FormGroup>
                        </div>
                        {inputValues.noticeType && inputValues.noticeType == "5" ? (
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
                        ) : null}
                        {inputValues.noticeType == "6" || inputValues.noticeType == "8" || inputValues.noticeType == "9"  ? (
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
                        ): null}
                        {mediumId !='' && inputValues.classId !='' && inputValues.noticeType == "8"  ? (
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
                        {inputValues.noticeType && inputValues.noticeType == "9" ? (
                          <div className="col-xl-3 col-lg-6 col-12 form-group">
                            <label>Student Id *</label>
                            <input type="number" value={inputValues.studentId} onChange={(e) =>setInputValues({...inputValues,studentId:e.target.value})}  className="form-control" required/>
                            {error != null && error.StudentId ? (<h6 className="addStudent-error">*{JSON.stringify(error.StudentId).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </div>
                        ) : null }
                        {inputValues.noticeType && inputValues.noticeType == "7" ? (
                          <div className="col-xl-3 col-lg-6 col-12 form-group">
                            <label>Parent Id *</label>
                            <input type="number" value={inputValues.parentId} onChange={(e) =>setInputValues({...inputValues,parentId:e.target.value})}  className="form-control" required/>
                            {error != null && error.ParentId ? (<h6 className="addStudent-error">*{JSON.stringify(error.ParentId).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </div>
                        ) : null }
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
                      <h2>Notice Create Successfully!</h2>
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

export default CreateNotice;
