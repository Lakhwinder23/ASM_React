import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
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
import { fetchAllAssignVehicle } from '../Redux/AllAssignVehicle/AllAssignVehicleActions'
import { fetchAllDriver } from '../Redux/AllDriver/AllDriverActions'

function AllTransport() {
  // store data access start
const allAssignVehicleData = useSelector(state =>state.AllAssignVehicle)
const allDriverData = useSelector(state =>state.AllDriver)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allssignVehicleResult,setssignVehicleResult] = useState([])
  const [allssignVehicleInfo,setssignVehicleInfo] = useState([])
  const [driverResult,setDriverResult] = useState([])
  const [allDriverInfo,setDriverInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  const [row,setRow] = useState([])
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Route Name',
        field: 'routename',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Vehicle Number',
        field: 'vehiclenumber',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Driver Name',
        field: 'drivername',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Driver License',
        field: 'driverlicense',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Contact Number',
        field: 'contactnumber',
        sort: 'asc',
        width: 200
      }
    ],
    rows: []
  });
  // component all states define End

   //hooks start
   // fetch allAssignVehicle and teachers api hook start
   useEffect(() =>{
     dispatch(fetchAllAssignVehicle())
     dispatch(fetchAllDriver())
   },[dispatch])
// fetch allAssignVehicle and teachers api hook End

// add data of allAssignVehicle api into constant,hook start
   useMemo(() =>{
     if(allAssignVehicleData && allAssignVehicleData.all_assign_vehicle && allAssignVehicleData.all_assign_vehicle.result && allAssignVehicleData.all_assign_vehicle.success === true){
       setssignVehicleResult(allAssignVehicleData.all_assign_vehicle.result)
     }
   },[allAssignVehicleData])
// add data of allAssignVehicle api into constant,hook End

// when allssignVehicleResult change add data into allssignVehicleInfo,hook start
 useMemo(()=>{
   if(allssignVehicleResult && allssignVehicleResult.data){
         setssignVehicleInfo(allssignVehicleResult.data)
   }
 },[allssignVehicleResult])
// when allssignVehicleResult change add data into allssignVehicleInfo,hook End

// add data of classes api into constant,hook start
 useMemo(() =>{
   if(allDriverData && allDriverData.all_driver && allDriverData.all_driver.result && allDriverData.all_driver.success === true){
     setDriverResult(allDriverData.all_driver.result)
   }
 },[allDriverData])
// add data of classes api into constant,hook End

// when classesResult change add data into classInfo,hook start
 useMemo(()=>{
   if(driverResult && driverResult.data){
         setDriverInfo(driverResult.data)
   }
 },[driverResult])
// when classesResult change add data into classInfo,hook End

//when allAssignBookInfo data change than data add into constant,hook start
useMemo(()=>{
  if(allssignVehicleInfo && allssignVehicleInfo.length > 0 && allDriverInfo && allDriverInfo.length > 0){
    let arrray = []
    allssignVehicleInfo.map((item,index)=>{
        allDriverInfo.filter(filteritem =>filteritem.id === item.DriverId).
          map((classitem,index) =>{
            let new_object = {
              routename:item.RouteName,
              vehiclenumber: item.VehicleNumber,
              drivername:classitem.ParentName,
              driverlicense:classitem.LicenseNumber,
              contactnumber:classitem.Mobile
            }
            arrray.push(new_object)
          })
    })
    setRow(arrray)
  }

},[allssignVehicleInfo,allDriverInfo])
//when allAssignBookInfo data change than data add into constant,hook end

//when row data change than data add into constant,hook start
useMemo(() =>{
  if(row && row.length > 0){
    setDatatable({...datatable,rows:row})
  }
},[row])
//when row data change than data add into constant,hook end
   //hooks end

// component function start

  const callbackFunction = (childData) => {
    setActivestate(childData)
}

// component function end

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
            <h3>Transport</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>All Transport</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Class Table Area Start Here */}
          <div className="card height-auto">
                   <div className="card-body">
                     <div className="heading-layout1">
                       <div className="item-title">
                         <h3>All Transport Lists</h3>
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

export default AllTransport;
