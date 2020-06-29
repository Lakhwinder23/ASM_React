import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllTeachers
} from '../Redux/AllTeachers/AllTeachersActions'


function AllTeachers(){
  const teachers = useSelector(state =>state.AllTeachers)

  console.log("teachers",teachers);
  const dispatch = useDispatch()
    const [teacherResult,setTeacherResult] = useState([])
    const [allTeachersInfo,setTeachersInfo] = useState([])

    const [row,setRow] = useState([])
  const [activestate,setActivestate] = useState('')
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
        label: 'Father Name',
        field: 'fathername',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Mother Name',
        field: 'monthername',
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
        label: 'Subject',
        field: 'subject',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Joining Date',
        field: 'joiningdate',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Address',
        field: 'address',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 100
      }
    ],
    rows: []
  });

  useEffect(() =>{
    dispatch(fetchAllTeachers())
  },[dispatch])

  useMemo(()=>{
    if(teachers && teachers.all_teachers && teachers.all_teachers.success === true && teachers.all_teachers.result){
      setTeacherResult(teachers.all_teachers.result)
    }
    else{
      setTeacherResult([])
    }
  },[teachers.all_teachers.result])

  useMemo(()=>{
    if(teacherResult && teacherResult.data){
          setTeachersInfo(teacherResult.data)
    }
    else{
      setTeachersInfo([])
    }
  },[teacherResult])

  useMemo(()=>{
    if(allTeachersInfo && allTeachersInfo.length > 0){
      let arrray = []
      allTeachersInfo.map((item,index)=>{
        let new_object = {
          id:item.id,
          name: item.TeacherName,
          fathername:item.FatherName,
          monthername:item.MotherName,
          gender:item.Gender,
          dateofbirth:item.DateofBirth,
          joiningdate:item.JoiningDate,
          subject:item.ProfessionName,
          address:item.Address,
          phone:item.Mobile,
          email:item.email
        }
        console.log("new_object",new_object)
        arrray.push(new_object)
      })
      console.log("arrray",arrray)
      setRow(arrray)
    }

  },[allTeachersInfo])

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
                  <h3>Teacher</h3>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>All Teachers</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Teacher Table Area Start Here */}
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>All Teachers Data</h3>
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

export default AllTeachers;
