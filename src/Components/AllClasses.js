import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllClasses
} from '../Redux/AllClasses/AllClassesActions'

function AllClasses() {
  // store data access start
  const classes = useSelector(state =>state.AllClasses)
  // store data access End

  console.log("classes",classes);
  const dispatch = useDispatch()     // for accessing the redux function

  // component all states define start
    const [classesResult,setClassesResult] = useState([])
    const [allClassesInfo,setClassesInfo] = useState([])
    console.log("allClassesInfo",allClassesInfo);
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
        label: 'Class Name',
        field: 'classname',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Medium Name',
        field: 'mediumname',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Total Section',
        field: 'totalsection',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Maximum Student In Class',
        field: 'maximumstudentinclass',
        sort: 'asc',
        width: 400
      }
    ],
    rows: []
  });

  // component all states define End


//hooks start
// fetch allClasses api hook start
  useEffect(() =>{
    dispatch(fetchAllClasses())
  },[dispatch])
// fetch allClasses api hook end

// add data of allClasses api into constant,hook start
  useMemo(()=>{
    if(classes && classes.all_classes && classes.all_classes.result){
      setClassesResult(classes.all_classes.result)
    }
  },[classes.all_classes.result])

  // add data of allClasses api into constant,hook end

// when allClassesResult data change than data add into constant,hook start
  useMemo(()=>{
    if(classesResult && classesResult.data){
          setClassesInfo(classesResult.data)
    }
  },[classesResult])
// when allClassesResult data change than data add into constant,hook End

  //when allClassesInfo data change than data add into constant,hook start
  useMemo(()=>{
    if(allClassesInfo && allClassesInfo.length > 0){
      let arrray = []
      allClassesInfo.map((item,index)=>{
        let new_object = {
          id:item.id,
          classname: item.ClassName,
          mediumname:item.MediumName,
          totalsection:item.TotalSection,
          maximumstudentinclass:item.StudentLimitInClass
        }
        console.log("new_object",new_object)
        arrray.push(new_object)
      })
      console.log("arrray",arrray)
      setRow(arrray)
    }

  },[allClassesInfo])
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
  const callbackFunction = (childData) => {
    setActivestate(childData)
  }
// component function End

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
              <h3>Classes</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>All Classes</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Class Table Area Start Here */}
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>All Class Schedules</h3>
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
                  className="all-classes-table"
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

export default AllClasses;
