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
import {
  fetchAllTeachers
} from '../Redux/AllTeachers/AllTeachersActions'
import {
  fetchAllProfessions
} from '../Redux/AllProfessions/AllProfessionActions'

function AllTeachersOld(){
  const teachers = useSelector(state =>state.AllTeachers)
  const professions = useSelector(state =>state.AllProfession)
  console.log("teachers",teachers);
  const dispatch = useDispatch()
    const [teacherResult,setTeacherResult] = useState([])
    const [allTeachersInfo,setTeachersInfo] = useState([])
    const [allProfessionInfo,setProfessionInfo] = useState([])
    const [inputValues,setInputValues] = useState({
                                            teacherId:"undefined",
                                            professionId:"undefined",
    })
  const [activestate,setActivestate] = useState('')

  useEffect(() =>{
    dispatch(fetchAllTeachers())
    dispatch(fetchAllProfessions())
  },[dispatch])

  useMemo(()=>{
    if(teachers && teachers.all_teachers && teachers.all_teachers.success === true && teachers.all_teachers.result){
      setTeacherResult(teachers.all_teachers.result)
      setInputValues({
        ...inputValues,
        teacherId:"undefined",
      })
    }
    else{
      setTeacherResult([])
    }
  },[teachers.all_teachers.result])

  useMemo(()=>{
    if(teacherResult && teacherResult.data){
          setTeachersInfo(teacherResult.data)
    }
    else{
      setTeachersInfo([])
    }
  },[teacherResult])
  useMemo(()=>{
    if(professions && professions.all_professions && professions.all_professions.result && professions.all_professions.success === true){
      setProfessionInfo(professions.all_professions.result)
    }
  },[professions])

  const teacherFilterHandler = (event) =>{
    event.preventDefault();
    const teacher_info = inputValues
    dispatch(fetchAllTeachers(teacher_info))
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
                  <h3>Teacher</h3>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>All Teachers</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Teacher Table Area Start Here */}
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>All Teachers Data</h3>
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
                    <form className="mg-b-20" onSubmit={(e) =>teacherFilterHandler(e)}>
                      <div className="row gutters-8">
                        <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                        <FormGroup>
                            <FormControl
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,teacherId:e.target.value})}
                              as="select"
                            >
                            <option value="undefined">Search by ID ..."</option>
                            {allTeachersInfo ? allTeachersInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.id}</option>
                            )):null}
                            </FormControl>
                          </FormGroup>
                        </div>
                        <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                        <FormGroup>
                            <FormControl
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,professionId:e.target.value})}
                              as="select"
                            >
                            <option value="undefined">Search by Subject ..."</option>
                            {allProfessionInfo ? allProfessionInfo.map((item,index) =>(
                              <option value={item.id} key={index}>{item.ProfessionName}</option>
                            )):null}
                            </FormControl>
                          </FormGroup>
                        </div>
                        <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by Phone ..." className="form-control" />
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
                                <label className="form-check-label">ID</label>
                              </div>
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Section</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>E-mail</th>
                            <th />
                          </tr>
                        </thead>
                        {teachers.all_teachers_loading === false ? allTeachersInfo && allTeachersInfo.length > 0 ? (
                        <tbody>
                        {allTeachersInfo.map((item,index) =>(
                          <tr key={index}>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">#{item.id}</label>
                              </div>
                            </td>
                            <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                            <td>{item.TeacherName}</td>
                            <td>{item.Gender}</td>
                            <td>2</td>
                            <td>{item.ProfessionName}</td>
                            <td>A</td>
                            <td>{item.Address}</td>
                            <td>{item.Mobile}</td>
                            <td>{item.email}</td>
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
                {/* Teacher Table Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );
}

export default AllTeachersOld;
