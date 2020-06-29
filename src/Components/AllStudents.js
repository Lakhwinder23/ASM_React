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
import { fetchAllStudents } from '../Redux/AllStudents/AllStudentsActions'

function AllStudents(){
  // store data access start
  const students = useSelector(state =>state.AllStudents)
  // store data access End

  const dispatch = useDispatch()  // for accessing the redux function
  const [activestate,setActivestate] = useState('')
  const [studentResult,setStudentResult] = useState([])
  const [allStudentsInfo,setAllStudentsInfo] = useState([])
  const [loader,setLoader] = useState(false)
  const [row,setRow] = useState([])
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Roll',
        field: 'roll',
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
        label: 'Class',
        field: 'class',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Section',
        field: 'section',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Parents',
        field: 'parents',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Father Occupation',
        field: 'fatheroccupation',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Religion',
        field: 'religion',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Address',
        field: 'address',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Date of Birth',
        field: 'dateofbirth',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Admission Date',
        field: 'admissiondate',
        sort: 'asc',
        width: 100
      }
    ],
    rows: []
  });

  useEffect(() =>{
    dispatch(fetchAllStudents())
  },[dispatch])

  useMemo(()=>{
    if(students && students.all_students && students.all_students.success === true && students.all_students.result){
      setStudentResult(students.all_students.result)
    }
    else(
      setStudentResult([])
    )
  },[students.all_students.result])

  useMemo(()=>{
      setLoader(students.all_students_loading)
  },[students])

  useMemo(()=>{
    if(studentResult && studentResult.data){
          setAllStudentsInfo(studentResult.data)
    }
    else{
      setAllStudentsInfo([])
    }
  },[studentResult])


  useMemo(()=>{
    if(allStudentsInfo && allStudentsInfo.length > 0){
      let arrray = []
      allStudentsInfo.map((item,index)=>{
        let new_object = {
          roll:item.RollNumber,
          name: item.StudentName,
          gender:item.Gender,
          class:item.ClassName,
          section:item.SectionName,
          fathername:item.FatherName,
          mothername:item.MotherName,
          fatheroccupation:item.FatherOccupation,
          religion:item.Religion,
          address:item.Address,
          dateofbirth:item.DateofBirth,
          email:item.email,
          admissiondate:item.AdmissionDate
        }
        arrray.push(new_object)
      })
      setRow(arrray)
    }

  },[allStudentsInfo])

  useMemo(() =>{
    if(row && row.length > 0){
      setDatatable({...datatable,rows:row})
    }
  },[row])

  const widerData = {
    columns: [
      ...datatable.columns.map((col) => {
        col.width = 200;
        return col;
      }),
    ],
    rows: [...datatable.rows],
  };


  const callbackFunction = (childData) => {
    setActivestate(childData)
  }
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
                  <h3>Students</h3>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>All Students</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Student Table Area Start Here */}
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>All Students Data</h3>
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
                {/* Student Table Area End Here */}
               <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );
}

export default AllStudents;
