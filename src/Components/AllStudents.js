import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllStudents
} from '../Redux/AllStudents/AllStudentsActions'

function AllStudents(){
  const students = useSelector(state =>state.AllStudents)
  console.log("students",students);
  const dispatch = useDispatch()
  const [activestate,setActivestate] = useState('')
  const [studentResult,setStudentResult] = useState([])
  console.log("studentResult",studentResult);
  const [allStudentsInfo,setAllStudentsInfo] = useState([])
  console.log("allStudentsInfo",allStudentsInfo);
  const [loader,setLoader] = useState(false)
  useEffect(() =>{
    dispatch(fetchAllStudents())
  },[dispatch])

  useMemo(()=>{
    if(students && students.all_students && students.all_students.result){
      setStudentResult(students.all_students.result)
    }
  },[students.all_students.result])

  useMemo(()=>{
      setLoader(students.all_students_loading)
  },[students])

  useMemo(()=>{
    if(studentResult && studentResult.data){
          setAllStudentsInfo(studentResult.data)
    }
  },[studentResult])
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
                    <form className="mg-b-20">
                      <div className="row gutters-8">
                        <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by Roll ..." className="form-control" />
                        </div>
                        <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by Name ..." className="form-control" />
                        </div>
                        <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by Class ..." className="form-control" />
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
                        <tbody>
                        {allStudentsInfo  ?  allStudentsInfo.map((item,index) =>(
                          <>
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
                          </>
                        )):(
                          <h6>No data available in table</h6>
                        ) }
                        </tbody>
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
