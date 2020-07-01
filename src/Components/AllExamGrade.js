import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllGrades} from '../Redux/AllGrade/AllGradeActions'


function AllExamGrade() {
  // store data access start
const allGrade = useSelector(state =>state.AllGrade)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allGradeInfo,setGradeInfo] = useState([])
  const [row,setRow] = useState([])
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Grade Name',
        field: 'gradename',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Grade Point',
        field: 'gradepoint',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Percent From',
        field: 'percentfrom',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Percent Upto',
        field: 'percentupto',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Comment',
        field: 'comment',
        sort: 'asc',
        width: 100
      }
    ],
    rows: []
  });
  // component all states define End

   //hooks start
   // fetch allexams api hook start
   useEffect(() =>{
     dispatch(fetchAllGrades())
   },[dispatch])
// fetch allexams api hook End

// add data of classes api into constant,hook start
   useMemo(() =>{
     if(allGrade && allGrade.all_grade && allGrade.all_grade.result && allGrade.all_grade.success === true){
       setGradeInfo(allGrade.all_grade.result)
     }
   },[allGrade])
// add data of classes api into constant,hook End

//when allGradeInfo data change than data add into constant,hook start
useMemo(()=>{
  if(allGradeInfo && allGradeInfo.length > 0){
    let arrray = []
    allGradeInfo.map((item,index)=>{
      let new_object = {
        gradename: item.GradeName,
        gradepoint:item.GradePoint,
        percentfrom:item.GradeFrom,
        percentupto:item.GradeUpto,
        comment:item.Comment
      }
      console.log("new_object",new_object)
      arrray.push(new_object)
    })
    console.log("arrray",arrray)
    setRow(arrray)
  }

},[allGradeInfo])
//when allGradeInfo data change than data add into constant,hook end

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
                            <h3>Exam Grade Lists</h3>
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

export default AllExamGrade;
