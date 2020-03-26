import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllHostels
} from '../Redux/AllHostels/AllHostelActions'

function AllHostel() {
  const allHostel = useSelector(state =>state.AllHostel)
  console.log("allHostel",allHostel);
  const dispatch = useDispatch()
  const [hostelResult,setHostelResult] = useState([])
  const [allHostelInfo,setAllHostelInfo] = useState([])
      const [activestate,setActivestate] = useState('')
    console.log("allHostelInfo",allHostelInfo);

    useEffect(() =>{
      dispatch(fetchAllHostels())
    },[dispatch])

    useMemo(()=>{
      if(allHostel && allHostel.all_hostels && allHostel.all_hostels.result){
        setHostelResult(allHostel.all_hostels.result)
      }
    },[allHostel.all_hostels.result])

    useMemo(()=>{
      if(hostelResult && hostelResult.data){
            setAllHostelInfo(hostelResult.data)
      }
    },[hostelResult])

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
            <h3>Hotel</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>All Rooms</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Class Table Area Start Here */}
          <div className="card height-auto">
                   <div className="card-body">
                     <div className="heading-layout1">
                       <div className="item-title">
                         <h3>Hostel Room Lists</h3>
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
                         <div className="col-lg-4 col-12 form-group">
                           <input type="text" placeholder="Search by Hostel ..." className="form-control" />
                         </div>
                         <div className="col-lg-3 col-12 form-group">
                           <input type="text" placeholder="Search by Room ..." className="form-control" />
                         </div>
                         <div className="col-lg-3 col-12 form-group">
                           <input type="text" placeholder="Search by Bed ..." className="form-control" />
                         </div>
                         <div className="col-lg-2 col-12 form-group">
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
                             <th>Hostal Name</th>
                             <th />
                           </tr>
                         </thead>
                         <tbody>
                         {allHostelInfo ? allHostelInfo.map((item,index) =>(
                           <tr key={index}>
                             <td>
                               <div className="form-check">
                                 <input type="checkbox" className="form-check-input" />
                                 <label className="form-check-label">{item.id}</label>
                               </div>
                             </td>
                             <td>{item.HostelName}</td>
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
          {/* Class Table Area End Here */}
          <Footer />
        </div>
      </div>
      {/* Page Area End Here */}
    </div>
        );
}

export default AllHostel;
