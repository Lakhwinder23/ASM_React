import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllSubjects
} from '../Redux/AllSubjects/AllSubjectsActions'

function AllSubject(){
  const subjects = useSelector(state =>state.AllSubjects)
  console.log("subjects",subjects);
  const dispatch = useDispatch()
    const [allSubjectsInfo,setSubjectsInfo] = useState([])
    console.log("allSubjectsInfo",allSubjectsInfo);
    const class_id = "1"
    const medium_id = "1"
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
          label: 'Subject Name',
          field: 'subjectname',
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
          label: 'Medium',
          field: 'medium',
          sort: 'asc',
          width: 200
        }
      ],
      rows: []
    });

    useEffect(() =>{
      dispatch(fetchAllSubjects(class_id,medium_id))
    },[dispatch])

    useMemo(()=>{
      if(subjects && subjects.all_subjects && subjects.all_subjects.result){
        setSubjectsInfo(subjects.all_subjects.result)
      }
    },[subjects.all_subjects.result])
    //when allSubjectsInfo data change than data add into constant,hook start
    useMemo(()=>{
      if(allSubjectsInfo && allSubjectsInfo.length > 0){
        let arrray = []
        allSubjectsInfo.map((item,index)=>{
          let new_object = {
            id:item.id,
            subjectname: item.SubjectName,
            class:'',
            medium:''
          }
          console.log("new_object",new_object)
          arrray.push(new_object)
        })
        console.log("arrray",arrray)
        setRow(arrray)
      }

    },[allSubjectsInfo])
    //when allSubjectsInfo data change than data add into constant,hook end

    //when row data change than data add into constant,hook start
    useMemo(() =>{
      if(row && row.length > 0){
        setDatatable({...datatable,rows:row})
      }
    },[row])
    //when row data change than data add into constant,hook end

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
                            <h3>All Subjects</h3>
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

export default AllSubject;
