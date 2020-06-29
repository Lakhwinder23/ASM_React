
import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllTeachers
} from '../Redux/AllTeachers/AllTeachersActions'


function Table(){
  const teachers = useSelector(state =>state.AllTeachers)
  const dispatch = useDispatch()
  const [teacherResult,setTeacherResult] = useState([])
  const [allTeachersInfo,setTeachersInfo] = useState([])
  const [row,setRow] = useState([])
  console.log("row",row)

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
  },[teachers])

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
          gender:item.Gender,
          class:'1',
          subject:item.ProfessionName,
          section:'A',
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
  const data = {
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
        label: 'Class',
        field: 'class',
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
        label: 'Section',
        field: 'section',
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
    rows: row
  };

return(
  <MDBDataTable
    striped
    bordered
    hover
    data={data}
  />

)
}

export default Table
