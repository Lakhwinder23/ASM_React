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
import { fetchAllStudents } from '../Redux/AllStudents/AllStudentsActions'
import { fetchAllClasses } from '../Redux/AllClasses/AllClassesActions';
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';

function AllStudents(){
  // store data access start
  const classes = useSelector(state =>state.AllClasses)
  const students = useSelector(state =>state.AllStudents)
  const sections = useSelector(state =>state.AllSections)
  // store data access End

  const dispatch = useDispatch()  // for accessing the redux function
  const [activestate,setActivestate] = useState('')
  const [studentResult,setStudentResult] = useState([])
  const [allStudentsInfo,setAllStudentsInfo] = useState([])
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [loader,setLoader] = useState(false)
  const [inputValues,setInputValues] = useState({
                                          classId:"",
                                          sectionId:"",
                                          studentId:""
  })
  const [mediumId,setMediumId] = useState('')

  useEffect(() =>{
    dispatch(fetchAllStudents())
    dispatch(fetchAllClasses())
  },[dispatch])

  useMemo(()=>{
    if(students && students.all_students && students.all_students.success === true && students.all_students.result){
      setStudentResult(students.all_students.result)
      setInputValues({...inputValues, studentId:""})
    }
    else(
      setStudentResult([])
    )
  },[students.all_students.result])

  useMemo(()=>{
      setLoader(students.all_students_loading)
  },[students])

  useMemo(()=>{
    if(studentResult && studentResult.data){
          setAllStudentsInfo(studentResult.data)
    }
    else{
      setAllStudentsInfo([])
    }
  },[studentResult])

  useMemo(()=>{
    if(classes && classes.all_classes && classes.all_classes.success === true && classes.all_classes.result){
      setClassesResult(classes.all_classes.result)
    }
  },[classes])

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
      setInputValues({...inputValues,classId:classInfo,sectionId:classInfo})
    }

  }

  const studentFilterHandler = (event) =>{
    event.preventDefault();
    const student_info = inputValues
    dispatch(fetchAllStudents(student_info))
  }
  const callbackFunction = (childData) => {
    setActivestate(childData)
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
                    <li>All Students</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Student Table Area Start Here */}
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>All Students Data</h3>
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
                    <form className="mg-b-20" onSubmit={(e) =>studentFilterHandler(e)}>
                      <div className="row gutters-8">
                        <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                        <FormGroup>
                            <FormControl
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,studentId:e.target.value})}
                              as="select"
                            >
                            <option value="">Search by Roll ..."</option>
                            {allStudentsInfo ? allStudentsInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.RollNumber}</option>
                            )):null}
                            </FormControl>
                          </FormGroup>
                        </div>
                        <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                        <FormGroup>
                            <FormControl
                              type="text"
                              onChange={(e) =>classHandler(e)}
                              as="select"
                            >
                            <option value="">Search by Class ...</option>
                            {allClassesInfo ? allClassesInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.ClassName} {item.MediumName}Medium</option>
                            )):null}
                            </FormControl>
                          </FormGroup>
                        </div>
                        <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                        {mediumId !='' && inputValues.classId !='' ? (
                        <FormGroup>
                            <FormControl
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,sectionId:e.target.value})}
                              as="select"
                            >
                            <option value="">Search by Section ...</option>
                            {allSectionsInfo ? allSectionsInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.SectionName}</option>
                            ) ): null}
                            </FormControl>
                          </FormGroup>
                          ) : null}
                        </div>

                        <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
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
                                <label className="form-check-label">Roll</label>
                              </div>
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Parents</th>
                            <th>Father Occupation</th>
                            <th>Religion</th>
                            <th>Address</th>
                            <th>Date Of Birth</th>
                            <th>E-mail</th>
                            <th>Admission Date</th>
                            <th />
                          </tr>
                        </thead>
                        {loader === false ? allStudentsInfo && allStudentsInfo.length > 0 ?(
                        <tbody>
                        {allStudentsInfo.map((item,index) =>(

                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">#{item.RollNumber}</label>
                              </div>
                            </td>
                            <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                            <td>{item.StudentName}</td>
                            <td>{item.Gender}</td>
                            <td>{item.ClassName}</td>
                            <td>{item.SectionName}</td>
                            <td>{item.FatherName}</td>
                            <td>{item.FatherOccupation}</td>
                            <td>{item.Religion}</td>
                            <td>{item.Address}</td>
                            <td>{item.DateofBirth}</td>
                            <td>{item.email}</td>
                            <td>{item.AdmissionDate}</td>
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
                      (<tr><td colspan="6"><h6 className="text-center">No data available in table</h6></td></tr>)
                    :(<tr>
                      <td colspan="6">
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
                {/* Student Table Area End Here */}
               <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );
}

export default AllStudents;
