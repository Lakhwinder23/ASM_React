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
import {fetchAllExamsResult} from '../Redux/AllExamsResult/AllExamsResultActions'
import {fetchAllClasses} from '../Redux/AllClasses/AllClassesActions'
import { fetchAllSections } from '../Redux/AllSections/AllSectionsActions';
import {fetchAllExams} from '../Redux/AllExams/AllExamsActions'


function AllExamResult() {
  // store data access start
const allExamResult = useSelector(state =>state.AllExamsResult)
const classes = useSelector(state =>state.AllClasses)
const exams = useSelector(state =>state.AllExams)
const sections = useSelector(state =>state.AllSections)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allExamResultInfo,setExamResultInfo] = useState([])
  const [classesResult,setClassesResult] = useState([])
  const [allClassesInfo,setClassesInfo] = useState([])
  const [allSectionsInfo,setSectionsInfo] = useState([])
  const [examsResult,setExamsResult] = useState([])
  const [allExamsInfo,setExamsInfo] = useState([])
  const [inputValues,setInputValues] = useState({
                                        classId:"",
                                        sectionId:"",
                                        examId:"",
                                        year:""
  })
  const [mediumId,setMediumId] = useState('')
  const [row,setRow] = useState([])
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Class Name',
        field: 'classname',
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
        label: 'Exam Name',
        field: 'examname',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Student Result',
        field: 'studentresult',
        sort: 'asc',
        width: 1000
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
   // fetch allexams api hook start
   useEffect(() =>{
     dispatch(fetchAllExamsResult())
     dispatch(fetchAllClasses())
     dispatch(fetchAllExams())
   },[dispatch])
// fetch allexams api hook End

// add data of classes api into constant,hook start
   useMemo(() =>{
     if(allExamResult && allExamResult.all_exams_result && allExamResult.all_exams_result.result && allExamResult.all_exams_result.success === true){
       setExamResultInfo(allExamResult.all_exams_result.result)
     }
   },[allExamResult])
// add data of classes api into constant,hook End

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

// fetch allSections and allsubject api,hook start
   useMemo(() =>{
     if(mediumId !='' && inputValues.classId !=''){
         dispatch(fetchAllSections(inputValues.classId,mediumId))
     }
   },[mediumId,inputValues.classId])
// fetch allSections and allsubject api,hook End

// add data of allSections api into constant,hook start
   useMemo(()=>{
     if(sections && sections.all_sections && sections.all_sections.result && sections.all_sections.success === true){
       setSectionsInfo(sections.all_sections.result)
     }
   },[sections])
// add data of allSections api into constant,hook End

//when allAssignBookInfo data change than data add into constant,hook start
useMemo(()=>{
  if(allExamResultInfo && allExamResultInfo.length > 0 && allClassesInfo && allClassesInfo.length > 0 && allExamsInfo && allExamsInfo.length > 0){
    let arrray = []
    allExamResultInfo.map((item,index)=>{
        allClassesInfo.filter(filteritem =>filteritem.id === item.ClassId).
          map((classitem,index) =>{
            allExamsInfo.filter(examitemfilter =>examitemfilter.id === item.ExamId).
            map((examitem,index)=>{
              let new_object = {
                classname: classitem.ClassName,
                sectionname:'',
                examname:examitem.ExamName,
                studentresult:item.StudentResult,
                session:item.Season
              }
            arrray.push(new_object)
              })
          })
    })
    setRow(arrray)
  }

},[allExamResultInfo,allClassesInfo,allExamsInfo])
//when allAssignBookInfo data change than data add into constant,hook end

//when row data change than data add into constant,hook start
useMemo(() =>{
  if(row && row.length > 0){
    setDatatable({...datatable,rows:row})
  }
},[row])
//when row data change than data add into constant,hook end
// classHandler function start
   const classHandler = (event) =>{

     const classInfo = event.target.value
     console.log("classInfo",event.target.value)
     if(classInfo !=""){
       setInputValues({...inputValues,classId:classInfo})
       allClassesInfo.filter(classid =>classid.id ==
          classInfo).map((item,index) =>{
         setMediumId(item.ClassMediumId)
       })

     }
     else{
       setInputValues({...inputValues,classId:classInfo,subjectId:classInfo,sectionId:classInfo})
       setMediumId("")
     }

   }
// classHandler function End

// examHandler function start
   const examResultFilterHandler = (event) =>{
   event.preventDefault()
   const exams_result_info = inputValues;
     dispatch(fetchAllExamsResult(exams_result_info))
 }
// examHandler function End

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
                            <h3>All Exam Result Lists</h3>
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
                        className="all-exam-result-table"
                          responsive
                          responsiveSm
                          responsiveMd
                          responsiveLg
                          responsiveXl
                          scrollX
                          striped
                          hover
                          data={datatable}
                        />
                      </div>
                    </div>
                  </div>
        );
}

export default AllExamResult;
