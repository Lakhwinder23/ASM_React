import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector,useDispatch } from 'react-redux'
import { fetchAllDriver } from '../Redux/AllDriver/AllDriverActions'


function AllDriver() {
  // store data access start
const allDriverData = useSelector(state =>state.AllDriver)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allDriverResult,setDriverResult] = useState([])
  const [allDriverInfo,setDriverInfo] = useState([])
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
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Gender',
        field: 'gender',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Date of Birth',
        field: 'dateofbirth',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Address',
        field: 'address',
        sort: 'asc',
        width: 1000
      },
      {
        label: 'Religion',
        field: 'religion',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 100
      },
      {
        label: 'License Number',
        field: 'licensenumber',
        sort: 'asc',
        width: 100
      }
    ],
    rows: []
  });
  // component all states define End

   //hooks start
   // fetch allDriver api hook start
   useEffect(() =>{
     dispatch(fetchAllDriver())
   },[dispatch])
// fetch allDriver api hook End

// add data of allDriverData api into constant,hook start
   useMemo(() =>{
     if(allDriverData && allDriverData.all_driver && allDriverData.all_driver.result && allDriverData.all_driver.success === true){
       setDriverResult(allDriverData.all_driver.result)
     }
   },[allDriverData])
// add data of allDriverData api into constant,hook End

// when allAssignBookResult data change than data add into constant,hook start
   useMemo(() =>{
     if(allDriverResult && allDriverResult.data){
       setDriverInfo(allDriverResult.data)
     }
   },[allDriverResult])
// when allAssignBookResult data change than data add into constant,hook End

//when allDriverInfo data change than data add into constant,hook start
useMemo(()=>{
  if(allDriverInfo && allDriverInfo.length > 0){
    let arrray = []
    allDriverInfo.map((item,index)=>{
      let new_object = {
        id:item.id,
        name: '',
        gender:item.Gender,
        dateofbirth:item.DateofBirth,
        phone:item.Mobile,
        address:item.Address,
        religion:item.Religion,
        email:item.email,
        licensenumber:item.LicenseNumber
      }
      console.log("new_object",new_object)
      arrray.push(new_object)
    })
    console.log("arrray",arrray)
    setRow(arrray)
  }

},[allDriverInfo])
//when allDriverInfo data change than data add into constant,hook end

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
                  <h3>Drivers</h3>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>All Driver </li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Teacher Table Area Start Here */}
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>All Driver List</h3>
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
                {/* Teacher Table Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );
}

export default AllDriver;
