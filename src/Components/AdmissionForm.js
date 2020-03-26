import React, {useState,useMemo,useEffect}  from 'react';
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
import { useSelector,useDispatch } from 'react-redux';
import { addStudentHandler } from '../Redux/AdmissionForm/AdmissionFormActions';
import { fetchAllClasses } from '../Redux/AllClasses/AllClassesActions';
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';

function AdmissionForm() {
  // store data access start
  const classes = useSelector(state =>state.AllClasses)
  const addStudent = useSelector(state =>state.AdmissionForm)
  const sections = useSelector(state =>state.AllSections)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  const [inputValues,setInputValues] = useState({name:'',
                                                email:'',
                                                password:'',
                                                c_password:'',
                                                role:'3',
                                                religion:'',
                                                gender:'',
                                                dateofBirth:'',
                                                address:'',
                                                professionId:undefined,
                                                fatherName:'',
                                                motherName:'',
                                                fatherOccupation:'',
                                                classId:'',
                                                sectionId:'',
                                                selfOccupation:undefined,
                                                parentDetails:'',
                                                parentDateofBirth:'',
                                                parentMobile:'',
                                                parentEmail:'',
                                                parentExsits:'',
                                                parentId:''
                                                    })
  const [alreadyParent,setAlreadyParent] = useState('parentNotExist')
  const [mediumId,setMediumId] = useState('')
  const [error,setError] = useState(null)
  if(error != null){
    console.log("error--",typeof error)
  }
  const [successStatus,setSuccessStatus] = useState(null)

   // component all states define End

   //hooks start

  useEffect(() =>{
    dispatch(fetchAllClasses())
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
    if(alreadyParent === 'parentNotExist'){
      setInputValues({...inputValues,parentId : undefined,parentExsits:"1"})
    }
    if(alreadyParent === 'parentExist'){
      setInputValues({...inputValues,fatherName : undefined,motherName : undefined,fatherOccupation : undefined,parentDateofBirth : undefined,parentMobile : undefined,parentEmail : undefined,parentExsits:"2",parentDetails:undefined})
    }
  },[alreadyParent])

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
    if(addStudent && addStudent.add_student && addStudent.add_student.error){
      setError(addStudent.add_student.error)
    }

  },[addStudent.add_student])

  useMemo(()=>{
    if(addStudent && addStudent.add_student && addStudent.add_student.success){
      setSuccessStatus(addStudent.add_student.success)
    }

  },[addStudent.add_student])

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
    const studentHandler = (event) =>{
    event.preventDefault()
    const student_info = inputValues;
      dispatch(addStudentHandler(student_info))
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
              <h3>Students</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Student Admit Form</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Admit Form Area Start Here */}
            <div className="card height-auto">
              {addStudent && addStudent.add_student_loading === false ? successStatus === false || successStatus === null  ? (
                <div className="card-body">
                  <div className="heading-layout1">
                    <div className="item-title">
                      <h3>Add New Students</h3>
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
                  <form className="new-added-form" onSubmit={(e) =>studentHandler(e)}>
                    <div className="row">
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Name *</label>
                        <input type="text" value={inputValues.name} onChange={(e) =>setInputValues({...inputValues,name:e.target.value})}  className="form-control" required/>
                        {error != null && error.name ? (<h6 className="addStudent-error">*{JSON.stringify(error.name).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Email *</label>
                        <input type="email" value={inputValues.email} onChange={(e) =>setInputValues({...inputValues,email:e.target.value})}  className="form-control" required/>
                          {error != null && error.email ? (<h6 className="addStudent-error">*{JSON.stringify(error.email).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Password *</label>
                        <input type="password" value={inputValues.password} onChange={(e) =>setInputValues({...inputValues,password:e.target.value})}  className="form-control" required/>
                          {error != null && error.password ? (<h6 className="addStudent-error">*{JSON.stringify(error.password).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Confirm Password *</label>
                        <input type="password" value={inputValues.c_password} onChange={(e) =>setInputValues({...inputValues,c_password:e.target.value})}  className="form-control" required/>
                        {error != null && error.c_password ? (<h6 className="addStudent-error">*{JSON.stringify(error.c_password).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Religion</label>
                        <input type="text" value={inputValues.religion} onChange={(e) =>setInputValues({...inputValues,religion:e.target.value})}  className="form-control" required/>
                        {error != null && error.Religion ? (<h6 className="addStudent-error">*{JSON.stringify(error.Religion).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <FormGroup>
                          <FormLabel>Gender *</FormLabel>
                          <FormControl
                            required
                            type="text"
                            onChange={(e) =>setInputValues({...inputValues,gender:e.target.value})}
                            as="select"
                          >
                          <option value="">Please Select Gender *</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                          </FormControl>
                          {error != null && error.Gender ? (<h6 className="addStudent-error">*{JSON.stringify(error.Gender).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </FormGroup>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Date Of Birth *</label>
                        <input type="Date" value={inputValues.dateofBirth} onChange={(e) =>setInputValues({...inputValues,dateofBirth:e.target.value})}  className="form-control" data-position="bottom right" required/>
                        {error != null && error.DateofBirth ? (<h6 className="addStudent-error">*{JSON.stringify(error.DateofBirth).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Adress</label>
                        <textarea type="text" value={inputValues.address} onChange={(e) =>setInputValues({...inputValues,address:e.target.value})}  className="form-control" required></textarea>
                        {error != null && error.Address ? (<h6 className="addStudent-error">*{JSON.stringify(error.Address).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Mobile</label>
                        <input type="number" value={inputValues.mobile} onChange={(e) =>setInputValues({...inputValues,mobile:e.target.value})}  className="form-control" required/>
                        {error != null && error.Mobile ? (<h6 className="addStudent-error">*{JSON.stringify(error.Mobile).replace(/[\[\]"]+/g,"")}</h6>):null}
                      </div>
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
                      <label className = "parent-label-main">Parents Detail *</label>
                        <div className="row">
                          <div className="col-md-2">
                          <input type="radio" name="parent" checked={alreadyParent === "parentNotExist" ? "checked" : undefined } value="parentNotExist" onClick={(e) =>setAlreadyParent(e.target.value)}   className="form-control parent-info" required/>
                          </div>
                          <div className="col-md-10">
                          <label className="parent-label">New *</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                        <input type="radio" name="parent" checked={alreadyParent === "parentExist" ? "checked" : undefined }  value="parentExist" onClick={(e) =>setAlreadyParent(e.target.value)}  className="form-control parent-info" required/>
                          </div>
                          <div className="col-md-10">
                          <label className = "parent-label">Existing*</label>
                          </div>
                        </div>
                      </div>
                      {alreadyParent === 'parentNotExist' ? (<>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Father Name *</label>
                          <input type="text" value={inputValues.fatherName} onChange={(e) =>setInputValues({...inputValues,fatherName:e.target.value})}  className="form-control" required/>
                            {error != null && error.FatherName ? (<h6 className="addStudent-error">*{JSON.stringify(error.FatherName).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Mother Name *</label>
                          <input type="text" value={inputValues.motherName} onChange={(e) =>setInputValues({...inputValues,motherName:e.target.value})}  className="form-control" required/>
                          {error != null && error.MotherName ? (<h6 className="addStudent-error">*{JSON.stringify(error.MotherName).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label>Father Occupation</label>
                          <input type="text" value={inputValues.fatherOccupation} onChange={(e) =>setInputValues({...inputValues,fatherOccupation:e.target.value})}  className="form-control" required/>
                          {error != null && error.FatherOccupation ? (<h6 className="addStudent-error">*{JSON.stringify(error.FatherOccupation).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label className = "parent-label-main">Please select your Parents *</label>
                          <div className="row">
                            <div className="col-md-2">
                            <input type="radio" name="parents" value="1" onClick={(e) =>setInputValues({...inputValues,parentDetails:e.target.value})}   className="form-control parent-info" required/>
                            </div>
                            <div className="col-md-10">
                            <label className="parent-label">Father *</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-2">
                          <input type="radio" name="parents"  value="2" onClick={(e) =>setInputValues({...inputValues,parentDetails:e.target.value})}  className="form-control parent-info" required/>
                            </div>
                            <div className="col-md-10">
                            <label className = "parent-label">Mother*</label>
                            </div>
                          </div>
                        </div>
                        {inputValues.parentDetails !='' && inputValues.parentDetails != undefined ? (<>
                          <div className="col-xl-3 col-lg-6 col-12 form-group">
                            <label>Parent Date Of Birth *</label>
                            <input type="date" value={inputValues.parentDateofBirth} onChange={(e) =>setInputValues({...inputValues,parentDateofBirth:e.target.value})} placeholder="dd/mm/yyyy" className="form-control" data-position="bottom right" required/>
                            {error != null && error.ParentDateofBirth ? (<h6 className="addStudent-error">*{JSON.stringify(error.ParentDateofBirth).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </div>
                          <div className="col-xl-3 col-lg-6 col-12 form-group">
                            <label>Parent Email *</label>
                            <input type="email" value={inputValues.parentEmail} onChange={(e) =>setInputValues({...inputValues,parentEmail:e.target.value})} className="form-control" required/>
                            {error != null && error.ParentEmail ? (<h6 className="addStudent-error">*{JSON.stringify(error.ParentEmail).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </div>
                          <div className="col-xl-3 col-lg-6 col-12 form-group">
                            <label> Parent Mobile</label>
                            <input type="number" value={inputValues.parentMobile} onChange={(e) =>setInputValues({...inputValues,parentMobile:e.target.value})}  className="form-control" required/>
                            {error != null && error.ParentMobile ? (<h6 className="addStudent-error">*{JSON.stringify(error.ParentMobile).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </div>
                          </>):null}

                        </>) : null}
                      {alreadyParent === 'parentExist' ? (
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <label> Parent Id</label>
                          <input type="number" value={inputValues.parentId} onChange={(e) =>setInputValues({...inputValues,parentId:e.target.value})}  className="form-control" required/>
                          {error != null && error.ParentId ? (<h6 className="addStudent-error">*{JSON.stringify(error.ParentId).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </div>
                      ) : null}

                      <div className="col-lg-6 col-12 form-group mg-t-30">
                        <label className="text-dark-medium">Upload Student Photo (150px X 150px)</label>
                        <input type="file" className="form-control-file" />
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
                    <h2>Student Add Successfully!</h2>
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

export default AdmissionForm;
