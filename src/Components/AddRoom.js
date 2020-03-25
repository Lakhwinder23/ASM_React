import React, {useState,useMemo,useEffect}  from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux';
import { addRoom } from '../Redux/AddRoom/AddRoomActions';
import {
  fetchAllHostels
} from '../Redux/AllHostels/AllHostelActions'
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";

function AddRoom(){
  // store data access start
  const addroom = useSelector(state =>state.AddRoom)
  const allHostel = useSelector(state =>state.AllHostel)
  // store data access End

   const dispatch = useDispatch()  // for accessing the redux function

   // component all states define start
  const [inputValues,setInputValues] = useState({hostelId:'',
                                                  roomNumber:'',
                                                  roomType:'',
                                                  totalBeds:'',
                                                  costPerBeds:''
                                                    })

  const [error,setError] = useState(null)

  const [successStatus,setSuccessStatus] = useState(null)
  const [hostelResult,setHostelResult] = useState([])
  const [allHostelInfo,setAllHostelInfo] = useState([])
  console.log("allHostelInfo",allHostelInfo);

   // component all states define End

   //hooks start
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

  useMemo(()=>{
    if(addroom && addroom.add_room && addroom.add_room.error){
      setError(addroom.add_room.error)
    }

  },[addroom.add_room])

  useMemo(()=>{
    if(addroom && addroom.add_room && addroom.add_room.success){
      setSuccessStatus(addroom.add_room.success)
    }

  },[addroom.add_room])

  //hooks end

    const roomHandler = (event) =>{
    event.preventDefault()
    const room_info = inputValues;
      dispatch(addRoom(room_info))
  }

  const resetHandler = (event) =>{
    event.preventDefault()
    window.location.reload(false);
  }
        return (
            <div className="col-4-xxxl col-12">
                <div className="card height-auto">
                {addroom && addroom.add_room_loading === false ? successStatus === false || successStatus === null  ? (
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Add New Room</h3>
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
                    <form className="new-added-form" onSubmit={(e) =>roomHandler(e)}>
                      <div className="row">
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                        <FormGroup>
                            <FormLabel>Hostel Name *</FormLabel>
                            <FormControl
                              required
                              type="text"
                              onChange={(e) =>setInputValues({...inputValues,hostelId:e.target.value})}
                              as="select"
                            >
                            <option value="">Please select Hostal Name *</option>
                            {allHostelInfo ? allHostelInfo.map((hostel,index) =>(
                              <option value={hostel.id}>{hostel.HostelName}</option>
                            )):null}
                            </FormControl>
                            {error != null && error.HostelId ? (<h6 className="addStudent-error">*{JSON.stringify(error.HostelId).replace(/[\[\]"]+/g,"")}</h6>):null}
                          </FormGroup>
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Room Number</label>
                          <input type="text" value={inputValues.roomNumber} onChange={(e) =>setInputValues({...inputValues,roomNumber:e.target.value})}  className="form-control" required/>
                          {error != null && error.RoomNumber ? (<h6 className="addStudent-error">*{JSON.stringify(error.RoomNumber).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <FormGroup>
                              <FormLabel>Room Type *</FormLabel>
                              <FormControl
                                required
                                type="text"
                                onChange={(e) =>setInputValues({...inputValues,roomType:e.target.value})}
                                as="select"
                              >
                              <option value="">Please select Room Type *</option>
                              <option value={1}>Big</option>
                              <option value={2}>Medium</option>
                              <option value={3}>Small</option>
                              </FormControl>
                              {error != null && error.RoomType ? (<h6 className="addStudent-error">*{JSON.stringify(error.RoomType).replace(/[\[\]"]+/g,"")}</h6>):null}
                            </FormGroup>
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Number Of Bed</label>
                          <input type="number" value={inputValues.totalBeds} onChange={(e) =>setInputValues({...inputValues,totalBeds:e.target.value})}  className="form-control" required/>
                          {error != null && error.TotalBeds ? (<h6 className="addStudent-error">*{JSON.stringify(error.TotalBeds).replace(/[\[\]"]+/g,"")}</h6>):null}
                        </div>
                        <div className="col-12-xxxl col-lg-6 col-12 form-group">
                          <label>Cost Per Bed</label>
                          <input type="text" value={inputValues.costPerBeds} onChange={(e) =>setInputValues({...inputValues,costPerBeds:e.target.value})}  className="form-control" required/>
                          {error != null && error.CostPerBeds ? (<h6 className="addStudent-error">*{JSON.stringify(error.CostPerBeds).replace(/[\[\]"]+/g,"")}</h6>):null}
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
                      <h2>Room Add Successfully!</h2>
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
              </div>
        );
}

export default AddRoom;
