import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllExams} from '../Redux/AllExams/AllExamsActions'

function AllExamSchedule() {
  // store data access start
const exams = useSelector(state =>state.AllExams)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [examsResult,setExamsResult] = useState([])
  const [allExamsInfo,setExamsInfo] = useState([])
  const [row,setRow] = useState([])
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Exam Name',
        field: 'examname',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Subject',
        field: 'subject',
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
        width: 100
      },
      {
        label: 'Time',
        field: 'time',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 400
      }
    ],
    rows: []
  });

  console.log("allExamsInfo",allExamsInfo)
  // component all states define End

   //hooks start
   // fetch allexams api hook start
   useEffect(() =>{
     dispatch(fetchAllExams())
   },[dispatch])
// fetch allexams api hook End

// add data of allexams api into constant,hook start
   useMemo(() =>{
     if(exams && exams.all_exams && exams.all_exams.result && exams.all_exams.success === true){
       setExamsResult(exams.all_exams.result)
     }
   },[exams])
// add data of allexams api into constant,hook End

// when examsResult change add data into classInfo,hook start
   useMemo(()=>{
     if(examsResult && examsResult.data){
           setExamsInfo(examsResult.data)
     }
   },[examsResult])
// when examsResult change add data into classInfo,hook End

//when allExamsInfo data change than data add into constant,hook start
useMemo(()=>{
  if(allExamsInfo && allExamsInfo.length > 0){
    let arrray = []
    allExamsInfo.map((item,index)=>{
      let new_object = {
        examname: item.ExamName,
        subject:item.SubjectName,
        class:item.ClassName,
        section:item.SectionName,
        time:item.ExamTime,
        date:item.ExamDate,
      }
      console.log("new_object",new_object)
      arrray.push(new_object)
    })
    console.log("arrray",arrray)
    setRow(arrray)
  }

},[allExamsInfo])
//when allExamsInfo data change than data add into constant,hook end

//when row data change than data add into constant,hook start
useMemo(() =>{
  if(row && row.length > 0){
    setDatatable({...datatable,rows:row})
  }
},[row])
//when row data change than data add into constant,hook end

   //hooks end

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
            <div className="col-8-xxxl col-12">
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>All Exam Schedule</h3>
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
              </div>
        );
}

export default AllExamSchedule;
