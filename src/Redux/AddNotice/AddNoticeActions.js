import {
  ADD_NOTICE_REQUEST,
  ADD_NOTICE_SUCCESS,
  ADD_NOTICE_FALIURE
} from './AddNoticeConstants'
import {config} from '../config'

export const addNoticeRequest = (notice_info) =>{
  return{
    type : ADD_NOTICE_REQUEST,
    payload : notice_info
  }
}

export const addNoticeSuccess = (add_notice_success) =>{
  return{
    type : ADD_NOTICE_SUCCESS,
    payload : add_notice_success
  }
}

export const addNoticeFaliure = (error) =>{
  return{
    type : ADD_NOTICE_FALIURE,
    payload : error
  }
}

export const addNotice = (notice_info) =>{
    return(dispatch) => {
      dispatch(addNoticeRequest(notice_info))
      const url =`${config.api_root}/add_notice`;
      const request_option = {
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+ config.token,
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        Title : notice_info.title,
        NoticeType : notice_info.noticeType,
        TeacherId:notice_info.teacherId == undefined ? undefined : notice_info.teacherId,
        ClassId:notice_info.classId == undefined ? undefined : notice_info.classId,
        ParentId:notice_info.parentId == undefined ? undefined : notice_info.parentId,
        SectionId:notice_info.sectionId == undefined ? undefined : notice_info.sectionId,
        StudentId:notice_info.studentId == undefined ? undefined : notice_info.studentId,
      })
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(add_notice_res =>{
      const add_notice_success = add_notice_res
      dispatch(addNoticeSuccess(add_notice_success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(addNoticeFaliure(errorMsg))
    })
    }
}
