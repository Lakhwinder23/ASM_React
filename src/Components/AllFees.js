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
import { fetchAllFees } from '../Redux/AllFees/AllFeesActions'
import {fetchAllClasses} from '../Redux/AllClasses/AllClassesActions'


function AllFees() {
  // store data access start
const allFeesData = useSelector(state =>state.AllFees)
const classes = useSelector(state =>state.AllClasses)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allFeesInfo,setFeesInfo] = useState([])
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  const [row,setRow] = useState([])
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Class Name',
        field: 'classname',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Monthly Fees',
        field: 'monthlyfees',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Admission Fees',
        field: 'admissionfees',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Session',
        field: 'session',
        sort: 'asc',
        width: 200
      }
    ],
    rows: []
  });
  // component all states define End

   //hooks start
   // fetch allFees and teachers api hook start
   useEffect(() =>{
     dispatch(fetchAllFees())
     dispatch(fetchAllClasses())
   },[dispatch])
// fetch allFees and teachers api hook End

// add data of allFees api into constant,hook start
   useMemo(() =>{
     if(allFeesData && allFeesData.all_fees && allFeesData.all_fees.result && allFeesData.all_fees.success === true){
       setFeesInfo(allFeesData.all_fees.result)
     }
   },[allFeesData])
// add data of allFees api into constant,hook End

// add data of classes api into constant,hook start
 useMemo(() =>{
   if(classes && classes.all_classes && classes.all_classes.result && classes.all_classes.success === true){
     setClassesResult(classes.all_classes.result)
   }
 },[classes])
// add data of classes api into constant,hook End

// when classesResult change add data into classInfo,hook start
 useMemo(()=>{
   if(classesResult && classesResult.data){
         setClassesInfo(classesResult.data)
   }
 },[classesResult])
// when classesResult change add data into classInfo,hook End

//when allAssignBookInfo data change than data add into constant,hook start
useMemo(()=>{
  if(allFeesInfo && allFeesInfo.length > 0 && allClassesInfo && allClassesInfo.length > 0){
    let arrray = []
    allFeesInfo.map((item,index)=>{
        allClassesInfo.filter(filteritem =>filteritem.id === item.ClassId).
          map((classitem,index) =>{
            let new_object = {
              id:item.id,
              classname: classitem.ClassName,
              monthlyfees:item.MonthlyFees,
              admissionfees:item.AdmissionFees,
              session:item.Session
            }
            arrray.push(new_object)
          })
    })
    setRow(arrray)
  }

},[allFeesInfo,allClassesInfo])
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
            <h3>Account</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>All Fees</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Class Table Area Start Here */}
          <div className="card height-auto">
                   <div className="card-body">
                     <div className="heading-layout1">
                       <div className="item-title">
                         <h3>All Fees Lists</h3>
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

export default AllFees;
