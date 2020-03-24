import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllRooms
} from '../Redux/AllRooms/AllRoomActions'

function AllRoom() {
  const rooms = useSelector(state =>state.AllRoom)
  console.log("rooms",rooms);
  const dispatch = useDispatch()
    const [roomResult,setRoomResult] = useState([])
    const [allRoomsInfo,setAllRoomsInfo] = useState([])
    console.log("allRoomsInfo",allRoomsInfo);

    useEffect(() =>{
      dispatch(fetchAllRooms())
    },[dispatch])

    useMemo(()=>{
      if(rooms && rooms.all_rooms && rooms.all_rooms.result){
        setRoomResult(rooms.all_rooms.result)
      }
    },[rooms.all_rooms.result])

    useMemo(()=>{
      if(roomResult && roomResult.data){
            setAllRoomsInfo(roomResult.data)
      }
    },[roomResult])

        return (
            <div className="col-8-xxxl col-12">
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
                        <tbody>
                        {allRoomsInfo ? allRoomsInfo.map((item,index) =>(
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
                        )):(
                          <h6>No data available in table</h6>
                        )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
        );
}

export default AllRoom;
