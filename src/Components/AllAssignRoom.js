import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllAssignRoom
} from '../Redux/AllAssignRoom/AllAssignRoomActions'

function AllAssignRoom() {
  const allAssignRoomData = useSelector(state =>state.AllAssignRoom)
  const dispatch = useDispatch()
    const [allAssignRoomResult,setAllAssignRoomResult] = useState([])
    const [allAssignRoomInfo,setAllAssignRoomInfo] = useState([])
      const [activestate,setActivestate] = useState('')

    useEffect(() =>{
      dispatch(fetchAllAssignRoom())
    },[dispatch])

    useMemo(()=>{
      if(allAssignRoomData && allAssignRoomData.all_assign_room && allAssignRoomData.all_assign_room.result){
        setAllAssignRoomResult(allAssignRoomData.all_assign_room.result)
      }
    },[allAssignRoomData])

    useMemo(()=>{
      if(allAssignRoomResult && allAssignRoomResult.data){
            setAllAssignRoomInfo(allAssignRoomResult.data)
      }
    },[allAssignRoomResult])

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
            <h3>Hostel</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>All Assign Rooms</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Class Table Area Start Here */}
          <div className="card height-auto">
                   <div className="card-body">
                     <div className="heading-layout1">
                       <div className="item-title">
                         <h3>All Assign Rooms Lists</h3>
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
                         <div className="col-lg-4 col-12 form-group">
                           <input type="text" placeholder="Search by Student ..." className="form-control" />
                         </div>
                         <div className="col-lg-2 col-12 form-group">
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
                                 <label className="form-check-label">Hostel Name</label>
                               </div>
                             </th>
                             <th>Room No</th>
                             <th>Room Type</th>
                             <th>Number Of Beds</th>
                             <th>Cost Per Bed</th>
                             <th>Maximum Student</th>
                             <th>Student Name</th>
                             <th />
                           </tr>
                         </thead>
                         {allAssignRoomData.all_assign_room_loading === false ? allAssignRoomInfo && allAssignRoomInfo.length > 0 ? (
                         <tbody>
                         {allAssignRoomInfo.map((item,index) =>(
                           <tr key={index}>
                             <td>
                               <div className="form-check">
                                 <input type="checkbox" className="form-check-input" />
                                 <label className="form-check-label">{item.HostelName}</label>
                               </div>
                             </td>
                             <td>{item.RoomNumber}</td>
                             <td>{item.RoomType}</td>
                             <td>{item.TotalBeds}</td>
                             <td>{item.CostPerBeds}</td>
                             <td>{item.AllowedLimitofStudent}</td>
                             <td>{item.StudentName}</td>
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
                       (<tr><td colspan="7"><h6 className="text-center">No data available in table</h6></td></tr>)
                     :(<tr>
                       <td colspan="7">
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
          {/* Class Table Area End Here */}
          <Footer />
        </div>
      </div>
      {/* Page Area End Here */}
    </div>
        );
}

export default AllAssignRoom;
