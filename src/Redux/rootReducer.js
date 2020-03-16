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
      AddProfession:AddProfessionReducers
})

export default rootReducer
