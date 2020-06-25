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
import { fetchAllRooms } from '../Redux/AllRooms/AllRoomActions'
import {
  fetchAllHostels
} from '../Redux/AllHostels/AllHostelActions'

function AllRoom() {
  const rooms = useSelector(state =>state.AllRoom)
  const allHostel = useSelector(state =>state.AllHostel)
  console.log("rooms",rooms);
  const dispatch = useDispatch()
    const [roomResult,setRoomResult] = useState([])
    const [allRoomsInfo,setAllRoomsInfo] = useState([])
    const [hostelResult,setHostelResult] = useState([])
    const [allHostelInfo,setAllHostelInfo] = useState([])
      const [activestate,setActivestate] = useState('')
    console.log("allRoomsInfo",allRoomsInfo);

    const [inputValues,setInputValues] = useState({
                                          driverId:"",
                                          roomId:""
    })

    useEffect(() =>{
      dispatch(fetchAllRooms())
      dispatch(fetchAllHostels())
    },[dispatch])

    useMemo(()=>{
      if(rooms && rooms.all_rooms && rooms.all_rooms.success === true && rooms.all_rooms.result){
        setRoomResult(rooms.all_rooms.result)
      }
    },[rooms])

    useMemo(()=>{
      if(roomResult && roomResult.data){
            setAllRoomsInfo(roomResult.data)
      }
    },[roomResult])

    useMemo(()=>{
      if(allHostel && allHostel.all_hostels && allHostel.all_hostels.success === true && allHostel.all_hostels.result){
        setHostelResult(allHostel.all_hostels.result)
      }
    },[allHostel])

    useMemo(()=>{
      if(hostelResult && hostelResult.data){
            setAllHostelInfo(hostelResult.data)
      }
    },[hostelResult])

    // examHandler function start
       const allRoomFilterHandler = (event) =>{
       event.preventDefault()
       const all_rooms_info = inputValues;
         dispatch(fetchAllRooms(all_rooms_info))
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
                     <form className="mg-b-20" onSubmit={(e) =>allRoomFilterHandler(e)}>
                       <div className="row gutters-8">
                         <div className="col-lg-4 col-12 form-group">
                         <FormGroup>
                             <FormControl
                               type="text"
                               onChange={(e) =>setInputValues({...inputValues,hostelId:e.target.value})}
                               as="select"
                             >
                             <option value="">Search by Hostel ...</option>
                             {allHostelInfo && allHostelInfo.length > 0 ? allHostelInfo.map((item,index) =>(
                               <option value={item.id} key={index}>{item.HostelName}</option>
                             )):null}
                             </FormControl>
                           </FormGroup>
                         </div>
                         <div className="col-lg-3 col-12 form-group">
                           <input type="text" placeholder="Search by Room Number ..." className="form-control" />
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
                                 <label className="form-check-label">Hostel Name</label>
                               </div>
                             </th>
                             <th>Room No</th>
                             <th>Room Type</th>
                             <th>No Of Bed</th>
                             <th>Cost Per Bed</th>
                             <th>Maximum Student</th>
                             <th />
                           </tr>
                         </thead>
                         {rooms.all_rooms_loading === false ? allRoomsInfo && allRoomsInfo.length > 0 ? (
                         <tbody>
                         {allRoomsInfo.map((item,index) =>(
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
                             <td>{item.StudentLimit}</td>
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

export default AllRoom;
