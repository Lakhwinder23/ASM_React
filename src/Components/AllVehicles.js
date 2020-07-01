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
import { fetchAllVehicle } from '../Redux/AllVehicle/AllVehicleActions'

function AllVehicles() {
  // store data access start
const allVehicleData = useSelector(state =>state.AllVehicle)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allVehicleInfo,setVehicleInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  const [row,setRow] = useState([])
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Vehicle Name',
        field: 'vehiclename',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Vehicle Code',
        field: 'vehiclecode',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Total Seats',
        field: 'totalseats',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Bus Size',
        field: 'bussize',
        sort: 'asc',
        width: 200
      }
    ],
    rows: []
  });
  // component all states define End

   //hooks start
   // fetch allVehicle api hook start
   useEffect(() =>{
     dispatch(fetchAllVehicle())
   },[dispatch])
// fetch allVehicle api hook End

// add data of allVehicle api into constant,hook start
   useMemo(() =>{
     if(allVehicleData && allVehicleData.all_vehicle && allVehicleData.all_vehicle.result && allVehicleData.all_vehicle.success === true){
       setVehicleInfo(allVehicleData.all_vehicle.result)
     }
   },[allVehicleData])
// add data of allVehicle api into constant,hook End

//when allClassesInfo data change than data add into constant,hook start
useMemo(()=>{
  if(allVehicleInfo && allVehicleInfo.length > 0){
    let arrray = []
    allVehicleInfo.map((item,index)=>{
      let new_object = {
        id:item.id,
        vehiclename: item.VehicleNumber,
        vehiclecode:item.VehicleCode,
        totalseats:item.TotalSeats,
        bussize:item.BusSize
      }
      console.log("new_object",new_object)
      arrray.push(new_object)
    })
    console.log("arrray",arrray)
    setRow(arrray)
  }

},[allVehicleInfo])
//when allClassesInfo data change than data add into constant,hook end

//when row data change than data add into constant,hook start
useMemo(() =>{
  if(row && row.length > 0){
    setDatatable({...datatable,rows:row})
  }
},[row])
//when row data change than data add into constant,hook end

   //hooks end

// component function start


//callbackFunction function start
  const callbackFunction = (childData) => {
    setActivestate(childData)
}
//callbackFunction function End
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
              <li>All Vehicle</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Class Table Area Start Here */}
          <div className="card height-auto">
                   <div className="card-body">
                     <div className="heading-layout1">
                       <div className="item-title">
                         <h3>All Vehicle Lists</h3>
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

export default AllVehicles;
