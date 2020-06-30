import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllAssignClasses
} from '../Redux/AllAssignClasses/AllAssignClassActions'

function AllAssignIncharge() {
  const assignClasses = useSelector(state =>state.AllAssignClass)
  console.log("rooms",assignClasses);
  const dispatch = useDispatch()
    const [assignClassResult,setAssignClassResult] = useState([])
    console.log("assignClassResult",assignClassResult);
    const [allAssignClassInfo,setAllAssignClassInfo] = useState([])
    console.log("allAssignClassInfo",allAssignClassInfo);
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
            label: 'Total Section',
            field: 'totalsection',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Maximum Students',
            field: 'maximumstudents',
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
            label: 'Section Name',
            field: 'sectionname',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Teacher Name',
            field: 'teachername',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Profession Name',
            field: 'professionname',
            sort: 'asc',
            width: 200
          },
          {
            label: 'IsIncharge',
            field: 'isincharge',
            sort: 'asc',
            width: 150
          }
        ],
        rows: []
      });
    useEffect(() =>{
      const all_assign_class_info = {
        isIncharge:true
      }
      dispatch(fetchAllAssignClasses(all_assign_class_info))
    },[dispatch])

    useMemo(()=>{
      if(assignClasses && assignClasses.all_assign_classes && assignClasses.all_assign_classes.result){
        setAssignClassResult(assignClasses.all_assign_classes.result)
      }
    },[assignClasses.all_assign_classes.result])

    useMemo(()=>{
      if(assignClassResult && assignClassResult.data){
            setAllAssignClassInfo(assignClassResult.data)
      }
    },[assignClassResult])

    useMemo(()=>{
      if(allAssignClassInfo && allAssignClassInfo.length > 0){
        let arrray = []
        allAssignClassInfo.map((item,index)=>{
          let new_object = {
            id:item.id,
            classname: item.ClassName,
            totalsection:item.TotalSection,
            maximumstudents:item.StudentLimitInClass,
            mediumname:item.MediumName,
            sectionname:item.SectionName,
            teachername:item.TeacherName,
            professionname:item.ProfessionName,
            isincharge:item.IsIncharge
          }
          console.log("new_object",new_object)
          arrray.push(new_object)
        })
        console.log("arrray",arrray)
        setRow(arrray)
      }

    },[allAssignClassInfo])

    useMemo(() =>{
      if(row && row.length > 0){
        setDatatable({...datatable,rows:row})
      }
    },[row])

  const callbackFunction = (childData) => {
    setActivestate(childData)
  }
  const widerData = {
    columns: [
      ...datatable.columns.map((col) => {
        col.width = 200;
        return col;
      }),
    ],
    rows: [...datatable.rows],
  };
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
              <h3>Assign Incharge</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>All Assign Incharge</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Teacher Table Area Start Here */}
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>All Assign Incharge Data</h3>
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

export default AllAssignIncharge;
