import {combineReducers} from 'redux';
import AllStudentsReducers from './AllStudents/AllStudentsReducers'
import AdmissionFormReducers from './AdmissionForm/AdmissionFormReducers'
import AllTeachersReducers from './AllTeachers/AllTeachersReducers'
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
import AddExpenseReducers from './AddExpense/AddExpenseReducers'
import AddExpenseTypeReducers from './AddExpenseType/AddExpenseTypeReducers'
import AddFeesReducers from './AddFees/AddFeesReducers'
import AddFeesColletionReducers from './AddFeesCollection/AddFeesCollectionReducers'
import AddExamReducers from './AddExam/AddExamReducers'
import AddExamResultReducers from './AddExamResult/AddExamResultReducers'
import AddGradeReducers from './AddGrade/AddGradeReducers'
import AddVehicleReducers from './AddVehicle/AddVehicleReducers'
import AddBookReducers from './AddBook/AddBookReducers'
import AddMessageReducers from './AddMessage/AddMessageReducers'
import AcceptFeesReducers from './AcceptFees/AcceptFeesReducers'
import AssignVehicleReducers from './AssignVehicle/AssignVehicleReducers'
import AssignBookReducers from './AssignBook/AssignBookReducers'
import AllFeesReducers from './AllFees/AllFeesReducers'
import AllFeesCollectionReducers from './AllFeesCollection/AllFeesCollectionReducers'
import AllExamsReducers from './AllExams/AllExamsReducers'
import AllExamsResultReducers from './AllExamsResult/AllExamsResultReducers'
import AllExamsResultStudentReducers from './AllExamsResultStudent/AllExamsResultStudentReducers'
import AllGradeReducers from './AllGrade/AllGradeReducers'
import AllVehicleReducers from './AllVehicle/AllVehicleReducers'
import AllBookReducers from './AllBook/AllBookReducers'
import AllMessageReducers from './AllMessage/AllMessageReducers'
import ReturnAssignBookReducers from './ReturnAssignBook/ReturnAssignBookReducers'
import LoginReducers from './Login/LoginReducers'
import LoginCheckReducers from './LoginCheck/LoginCheckReducers'
import SpecificUserDetailReducers from './SpecificUserDetail/SpecificUserDetailReducers'
import AllExpenseTypeReducers from './AllExpenseType/AllExpenseTypeReducers'
import AllDriverReducers from './AllDriver/AllDriverReducers'
import AllExpenseReducers from './AllExpense/AllExpenseReducers'
import AllAssignRoomReducers from './AllAssignRoom/AllAssignRoomReducers'
import AllAssignBookReducers from './AllAssignBook/AllAssignBookReducers'
import AllAssignVehicleReducers from './AllAssignVehicle/AllAssignVehicleReducers'


const rootReducer = combineReducers({
      AllStudents:AllStudentsReducers,
      AdmissionForm:AdmissionFormReducers,
      AllTeachers:AllTeachersReducers,
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
      AddNotice:AddNoticeReducers,
      AddExpense:AddExpenseReducers,
      AddExpenseType:AddExpenseTypeReducers,
      AddFees:AddFeesReducers,
      AddFeesCollection:AddFeesColletionReducers,
      AddExam:AddExamReducers,
      AddExamResult:AddExamResultReducers,
      AddGrade:AddGradeReducers,
      AddVehicle:AddVehicleReducers,
      AddBook:AddBookReducers,
      AddMessage:AddMessageReducers,
      AcceptFees:AcceptFeesReducers,
      AssignVehicle:AssignVehicleReducers,
      AssignBook:AssignBookReducers,
      AllFees:AllFeesReducers,
      AllFeesCollection:AllFeesCollectionReducers,
      AllExams:AllExamsReducers,
      AllExamsResult:AllExamsResultReducers,
      AllExamsResultStudent:AllExamsResultStudentReducers,
      AllGrade:AllGradeReducers,
      AllVehicle:AllVehicleReducers,
      AllBook:AllBookReducers,
      AllMessage:AllMessageReducers,
      ReturnAssignBook:ReturnAssignBookReducers,
      Login:LoginReducers,
      LoginCheck:LoginCheckReducers,
      SpecificUserDetail:SpecificUserDetailReducers,
      AllExpenseType:AllExpenseTypeReducers,
      AllDriver:AllDriverReducers,
      AllExpense:AllExpenseReducers,
      AllAssignRoom:AllAssignRoomReducers,
      AllAssignBook:AllAssignBookReducers,
      AllAssignVehicle:AllAssignVehicleReducers
})

export default rootReducer
