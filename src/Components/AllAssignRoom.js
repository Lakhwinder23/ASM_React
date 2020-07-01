import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
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
      const [row,setRow] = useState([])
      const [datatable, setDatatable] = useState({
        columns: [
          {
            label: 'Hostel Name',
            field: 'hostelname',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Room No',
            field: 'roomnumber',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Room Type',
            field: 'roomtype',
            sort: 'asc',
            width: 200
          },
          {
            label: 'No of Beds',
            field: 'noofbeds',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Cost Per Bed',
            field: 'costperbed',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Maximum Student',
            field: 'maximumstudent',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Student Name',
            field: 'Studentname',
            sort: 'asc',
            width: 100
          }
        ],
        rows: []
      });

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

    //when allAssignRoomInfo data change than data add into constant,hook start
    useMemo(()=>{
      if(allAssignRoomInfo && allAssignRoomInfo.length > 0){
        let arrray = []
        allAssignRoomInfo.map((item,index)=>{
          let new_object = {
            hostelname:item.HostelName,
            roomnumber:item.RoomNumber,
            roomtype:item.RoomType,
            noofbeds:item.TotalBeds,
            costperbed:item.CostPerBeds,
            maximumstudent:item.AllowedLimitofStudent,
            Studentname:item.StudentName
          }
          console.log("new_object",new_object)
          arrray.push(new_object)
        })
        console.log("arrray",arrray)
        setRow(arrray)
      }

    },[allAssignRoomInfo])
    //when allAssignRoomInfo data change than data add into constant,hook end

    //when row data change than data add into constant,hook start
    useMemo(() =>{
      if(row && row.length > 0){
        setDatatable({...datatable,rows:row})
      }
    },[row])
    //when row data change than data add into constant,hook end

    const callbackFunction = (childData) => {
      setActivestate(childData)
    }

    //constant of component Start
    const widerData = {
      columns: [
        ...datatable.columns.map((col) => {
          col.width = 200;
          return col;
        }),
      ],
      rows: [...datatable.rows],
    };
    //constant of component end
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
                     <MDBDataTable
                       responsive
                       responsiveSm
                       responsiveMd
                       responsiveLg
                       responsiveXl
                       scrollX
                       striped
                       hover
                       data={widerData}
                     />
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
