import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllParents
} from '../Redux/AllParents/AllParentsActions'

function AllParents() {
  const parents = useSelector(state =>state.AllParents)
  console.log("parents",parents);
  const dispatch = useDispatch()
    const [parentResult,setParentResult] = useState([])
    const [allParentsInfo,setParentsInfo] = useState([])
    console.log("allParentsInfo",allParentsInfo);
    const [activestate,setActivestate] = useState('')
    useEffect(() =>{
      dispatch(fetchAllParents())
    },[dispatch])

    useMemo(()=>{
      if(parents && parents.all_parents && parents.all_parents.result){
        setParentResult(parents.all_parents.result)
      }
    },[parents.all_parents.result])

    useMemo(()=>{
      if(parentResult && parentResult.data){
            setParentsInfo(parentResult.data)
      }
    },[parentResult])


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
              <h3>Parents</h3>
              <ul>
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>All Parents</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Teacher Table Area Start Here */}
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>All Parents Data</h3>
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
                      <input type="text" placeholder="Search by ID ..." className="form-control" />
                    </div>
                    <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                      <input type="text" placeholder="Search by Name ..." className="form-control" />
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
                        <th>Religion</th>
                        <th>Occupation</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                    {allParentsInfo ? allParentsInfo.map((item,index) =>(
                      <tr key={index}>
                        <td>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">#{item.id}</label>
                          </div>
                        </td>
                        <td className="text-center"><img src="img/figure/student2.png" alt="student" /></td>
                        <td>{item.ParentName}</td>
                        <td>{item.Gender}</td>
                        <td>{item.Religion}</td>
                        <td>{item.SelfOccupation}</td>
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
                    )):(
                      <h6>No data available in table</h6>
                    )}
                    </tbody>
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

export default AllParents;
