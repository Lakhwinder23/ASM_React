import {
  ADD_STUDENT_REQUEST,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FALIURE
} from './AdmissionFormConstants'
import {config} from '../config'

export const addStudentRequest = (student_info) =>{
  return{
    type : ADD_STUDENT_REQUEST,
    payload : student_info
  }
}

export const addStudentSuccess = (add_student_success) =>{
  return{
    type : ADD_STUDENT_SUCCESS,
    payload : add_student_success
  }
}

export const addStudentFaliure = (error) =>{
  return{
    type : ADD_STUDENT_FALIURE,
    payload : error
  }
}

export const addStudent = (student_info) =>{
    return(dispatch) => {
      dispatch(addStudentRequest(student_info))
      const url =`${config.api_root}/add_user`;
      const request_option = {
      method: "POST",
      body: JSON.stringify({
        name : student_info.name,
        email :student_info.email,
        password : student_info.password,
        c_password :student_info.c_password,
        Role : student_info.role,
        Religion :student_info.religion,
        Gender : student_info.gender,
        DateofBirth :student_info.dateofBirth,
        Address : student_info.address,
        Mobile :student_info.mobile,
        ProfessionId : student_info.professionId,
        fatherName :student_info.fatherName,
        MotherName :student_info.motherName,
        FatherOccupation :student_info.fatherOccupation,
        ClassId :student_info.classId,
        SectionId :student_info.sectionId,
        SelfOccupation :student_info.selfOccupation,
        ParentDetails :student_info.parentDetails,
        ParentDateofBirth :student_info.parentDateofBirth,
        ParentMobile :student_info.parentMobile,
        ParentEmail :student_info.parentEmail,
        ParentExsits :student_info.parentExsits,
        ParentId :student_info.parentId
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_student_res =>{
      const add_student_success = add_student_res
      dispatch(addStudentSuccess(add_student_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addStudentFaliure(errorMsg))
    })
    }
}
