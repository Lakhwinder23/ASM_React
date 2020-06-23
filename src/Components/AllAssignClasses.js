import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux'
import { fetchAllAssignClasses } from '../Redux/AllAssignClasses/AllAssignClassActions'
import { fetchAllClasses } from '../Redux/AllClasses/AllClassesActions'
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';
import { fetchAllTeachers } from '../Redux/AllTeachers/AllTeachersActions'

function AllAssignClasses() {
  const assignClasses = useSelector(state =>state.AllAssignClass)
  const classes = useSelector(state =>state.AllClasses)
  const sections = useSelector(state =>state.AllSections)
  const teachers = useSelector(state =>state.AllTeachers)
  console.log("rooms",assignClasses);
  const dispatch = useDispatch()
    const [assignClassResult,setAssignClassResult] = useState([])
    console.log("assignClassResult",assignClassResult);
    const [allAssignClassInfo,setAllAssignClassInfo] = useState([])
    console.log("allAssignClassInfo",allAssignClassInfo);
    const [classesResult,setClassesResult] = useState([])
    const [allClassesInfo,setClassesInfo] = useState([])
    const [allSectionsInfo,setSectionsInfo] = useState([])
    const [teacherResult,setTeacherResult] = useState([])
    const [allTeachersInfo,setTeachersInfo] = useState([])
    const [mediumId,setMediumId] = useState('')
    const [inputValues,setInputValues] = useState({
                                            classId:"",
                                            sectionId:"",
                                            teacherId:"",
                                            isIncharge:""
    })

    const [activestate,setActivestate] = useState('')
    useEffect(() =>{
      dispatch(fetchAllAssignClasses())
      dispatch(fetchAllClasses())
      dispatch(fetchAllTeachers())
    },[dispatch])

    useMemo(()=>{
      if(assignClasses && assignClasses.all_assign_classes && assignClasses.all_assign_classes.success === true && assignClasses.all_assign_classes.result){
        setAssignClassResult(assignClasses.all_assign_classes.result)
      }
      else{
        setAssignClassResult([])
      }
    },[assignClasses])

    useMemo(()=>{
      if(assignClassResult && assignClassResult.data){
            setAllAssignClassInfo(assignClassResult.data)
      }
      else{
        setAllAssignClassInfo([])
      }
    },[assignClassResult])

    // add data of allclasses api into constant,hook start

    useMemo(()=>{
      if(classes && classes.all_classes && classes.all_classes.success === true && classes.all_classes.result){
        setClassesResult(classes.all_classes.result)
      }
    },[classes])

    // add data of allclasses api into constant,hook end

    // when classesResult data change than data add into constant,hook start
    useMemo(()=>{
      if(classesResult && classesResult.data){
            setClassesInfo(classesResult.data)
      }
    },[classesResult])
    // when classesResult data change than data add into constant,hook end

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
        setInputValues({...inputValues,classId:classInfo,subjectId:classInfo})
        setMediumId(null)
      }

    }
    // classHandler function END

    // examHandler function start
       const allAssignClassesFilterHandler = (event) =>{
       event.preventDefault()
       const all_assign_class_info = inputValues;
         dispatch(fetchAllAssignClasses(all_assign_class_info))
     }
    // examHandler function End
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
              <h3>Assign Class</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>All Assign Classes</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Teacher Table Area Start Here */}
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>All Assign Classes Data</h3>
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
                <form className="mg-b-20" onSubmit={(e) =>allAssignClassesFilterHandler(e)}>
                  <div className="row gutters-8">
                    <div className="col-2-xxxl col-xl-2 col-lg-2 col-12 form-group">
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
                    <div className="col-2-xxxl col-xl-2 col-lg-2 col-12 form-group">
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
                    <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                    <FormGroup>
                        <FormControl
                          type="text"
                          onChange={(e) =>setInputValues({...inputValues,teacherId:e.target.value})}
                          as="select"
                        >
                        <option value="">Search by Teacher ...</option>
                        {allTeachersInfo ? allTeachersInfo.map((item,index) =>(
                          <option value={item.id} key={index}>{item.TeacherName}</option>
                        )):null}
                        </FormControl>
                      </FormGroup>
                    </div>
                    <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                    <FormGroup>
                        <FormControl
                          type="text"
                          onChange={(e) =>setInputValues({...inputValues,isIncharge:e.target.value})}
                          as="select"
                        >
                        <option value="">Search by Incharge</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>

                        </FormControl>
                      </FormGroup>
                    </div>
                    <div className="col-1-xxxl col-xl-2 col-lg-2 col-12 form-group">
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
                        <th>ClassName</th>
                        <th>Total Section</th>
                        <th>Maximum Students</th>
                        <th>Medium Name</th>
                        <th>Section Name</th>
                        <th>Teacher Name</th>
                        <th>Profession Name</th>
                        <th>IsIncharge</th>
                        <th />
                      </tr>
                    </thead>
                    {assignClasses.all_assign_classes_loading === false ? allAssignClassInfo && allAssignClassInfo.length > 0 ? (
                    <tbody>
                    {allAssignClassInfo.map((item,index) =>(
                      <tr key={index}>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#{item.id}</label>
                          </div>
                        </td>
                        <td>{item.ClassName}</td>
                        <td>{item.TotalSection}</td>
                        <td>{item.StudentLimitInClass}</td>
                        <td>{item.MediumName}</td>
                        <td>{item.SectionName}</td>
                        <td>{item.TeacherName}</td>
                        <td>{item.ProfessionName}</td>
                        <td>{item.IsIncharge}</td>
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
                  (<tr><td colspan="9"><h6 className="text-center">No data available in table</h6></td></tr>)
                :(<tr>
                  <td colspan="9">
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
            {/* Teacher Table Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default AllAssignClasses;
