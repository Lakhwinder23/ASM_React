import {combineReducers} from 'redux';
import AllStudentsReducers from './AllStudents/AllStudentsReducers'
import StudentDetailReducers from './StudentDetail/StudentDetailReducers'
import AdmissionFormReducers from './AdmissionForm/AdmissionFormReducers'
import AllTeachersReducers from './AllTeachers/AllTeachersReducers'
import TeacherDetailReducers from './TeacherDetail/TeacherDetailReducers'
import AllParentsReducers from './AllParents/AllParentsReducers'
import AddMediumReducers from './AddMedium/AddMediumReducers'
import AddClassReducers from './AddClass/AddClassReducers'
import AllClassesReducers from './AllClasses/AllClassesReducers'
import AddSubjectReducers from './AddSubject/AddSubjectReducers'
import AllSubjectsReducers from './AllSubjects/AllSubjectsReducers'
import AllSectionsReducers from './AllSections/AllSectionsReducers'
import AddProfessionReducers from './AddProfession/AddProfessionReducers'
import AllMediumReducers from './AllMediums/AllMediumReducers'
import AllProfessionReducers from './AllProfessions/AllProfessionReducers'
import AllHostelReducers from './AllHostels/AllHostelReducers'
import AllRoomReducers from './AllRooms/AllRoomReducers'
import AllAttendenceReducers from './AllAttendence/AllAttendenceReducers'
import AllNoticeReducers from './AllNotices/AllNoticeReducers'
import AllAssignClassReducers from './AllAssignClasses/AllAssignClassReducers'
import AddHostelReducers from './AddHostel/AddHostelReducers'
import AddRoomReducers from './AddRoom/AddRoomReducers'
import AddAttendenceReducers from './AddAttendence/AddAttendenceReducers'
import AssignClassReducers from './AssignClass/AssignClassReducers'
import AssignInchargeReducers from './AssignIncharge/AssignInchargeReducers'
import AssignRoomReducers from './AssignRoom/AssignRoomReducers'
import AddNoticeReducers from './AddNotice/AddNoticeReducers'



const rootReducer = combineReducers({
      AllStudents:AllStudentsReducers,
      StudentDetail:StudentDetailReducers,
      AdmissionForm:AdmissionFormReducers,
      AllTeachers:AllTeachersReducers,
      TeacherDetail:TeacherDetailReducers,
      AllParents:AllParentsReducers,
      AddMedium:AddMediumReducers,
      AddClass:AddClassReducers,
      AllClasses:AllClassesReducers,
      AddSubject:AddSubjectReducers,
      AllSubjects:AllSubjectsReducers,
      AllSections:AllSectionsReducers,
      AddProfession:AddProfessionReducers,
      AllMedium:AllMediumReducers,
      AllProfession:AllProfessionReducers,
      AllHostel:AllHostelReducers,
      AllRoom:AllRoomReducers,
      AllAttendence:AllAttendenceReducers,
      AllNotice:AllNoticeReducers,
      AllAssignClass:AllAssignClassReducers,
      AddHostel:AddHostelReducers,
      AddRoom:AddRoomReducers,
      AddAttendence:AddAttendenceReducers,
      AssignClass:AssignClassReducers,
      AssignIncharge:AssignInchargeReducers,
      AssignRoom:AssignRoomReducers,
      AddNotice:AddNoticeReducers

})

export default rootReducer
