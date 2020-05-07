import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './Redux/store';
import { Provider } from 'react-redux';
import App from './App';
import Students from './Components/Students';
import Parents from './Components/Parents';
import Teachers from './Components/Teachers';
import AllStudents from './Components/AllStudents';
import StudentDetail from './Components/StudentDetail';
import AdmissionForm from './Components/AdmissionForm';
import StudentPromotion from './Components/StudentPromotion';
import AllTeachers from './Components/AllTeachers';
import TeacherDetails from './Components/TeacherDetails';
import AddTeacher from './Components/AddTeacher';
import TeacherPayment from './Components/TeacherPayment';
import AllParents from './Components/AllParents';
import ParentsDetail from './Components/ParentsDetail';
import AddParents from './Components/AddParents';
import AllBooks from './Components/AllBooks';
import AddBook from './Components/AddBook';
import AddFees from './Components/AddFees';
import AllFees from './Components/AllFees';
import AddFeesCollection from './Components/AddFeesCollection';
import AllFeesCollection from './Components/AllFeesCollection';
import AllExpense from './Components/AllExpense';
import AddExpense from './Components/AddExpense';
import AddExpenseType from './Components/AddExpenseType';
import AllClasses from './Components/AllClasses';
import Subject from './Components/Subject';
import ClassRoutine from './Components/ClassRoutine';
import AllAttendence from './Components/AllAttendence';
import ExamSchedule from './Components/ExamSchedule';
import ExamGrade from './Components/ExamGrade';
import ExamResult from './Components/ExamResult';
import AllExamResultOfStudent from './Components/AllExamResultOfStudent';

import Transport from './Components/Transport';
import Hostel from './Components/Hostel';
import Notice from './Components/Notice';
import Message from './Components/Message';
import Button from './Components/Button';
import Grid from './Components/Grid';
import Tab from './Components/Tab';
import ProgressBar from './Components/ProgressBar';
import Map from './Components/Map';
import Account from './Components/Account';
import AddClass from './Components/AddClass';
import AllSections from './Components/AllSections';
import AddProfession from './Components/AddProfession';
import AddMedium from './Components/AddMedium';
import AllProfessions from './Components/AllProfessions';
import AllMediums from './Components/AllMediums';
import AddRoom from './Components/AddRoom';
import AddHostel from './Components/AddHostel';
import AllRoom from './Components/AllRoom';
import AllHostel from './Components/AllHostel';
import AllAssignClasses from './Components/AllAssignClasses';
import AssignClass from './Components/AssignClass';
import AssignIncharge from './Components/AssignIncharge';
import AssignRoom from './Components/AssignRoom';
import AddAttendence from './Components/AddAttendence';





function Root(){
        return (
          <Provider store={store}>
            <Router>
            <Switch>
                <Route exact path="/"  component={App}/>
                 <Route path="/students" component={Students} />
                 <Route path="/parents" component={Parents} />
                 <Route path="/teachers" component={Teachers} />
                 <Route path="/all-students" component={AllStudents} />
                 <Route path="/student-detail" component={StudentDetail} />
                 <Route path="/admission-form" component={AdmissionForm} />
                 <Route path="/student-promotion" component={StudentPromotion} />
                 <Route path="/all-teachers" component={AllTeachers} />
                 <Route path="/teacher-detail" component={TeacherDetails} />
                 <Route path="/add-teacher" component={AddTeacher} />
                 <Route path="/teacher-payment" component={TeacherPayment} />
                 <Route path="/all-parents" component={AllParents} />
                 <Route path="/parents-detail" component={ParentsDetail} />
                 <Route path="/add-parents" component={AddParents} />
                 <Route path="/all-books" component={AllBooks} />
                 <Route path="/add-book" component={AddBook} />
                 <Route path="/add-fees" component={AddFees} />
                 <Route path="/all-fees" component={AllFees} />
                 <Route path="/add-fees-collection" component={AddFeesCollection} />
                 <Route path="/all-fees-collection" component={AllFeesCollection} />
                 <Route path="/all-expense" component={AllExpense} />
                 <Route path="/add-expense" component={AddExpense} />
                 <Route path="/add-expense-type" component={AddExpenseType} />
                 <Route path="/all-classes" component={AllClasses} />
                 <Route path="/subject" component={Subject} />
                 <Route path="/class-routine" component={ClassRoutine} />
                 <Route path="/all-attendence" component={AllAttendence} />
                 <Route path="/exam-schedule" component={ExamSchedule} />
                 <Route path="/exam-grade" component={ExamGrade} />
                 <Route path="/exam-result" component={ExamResult} />
                 <Route path="/student-exam-result" component={AllExamResultOfStudent} />
                 <Route path="/transport" component={Transport} />
                 <Route path="/hostal" component={Hostel} />
                 <Route path="/notice-board" component={Notice} />
                 <Route path="/message" component={Message} />
                 <Route path="/grid" component={Grid} />
                 <Route path="/tab" component={Tab} />
                 <Route path="/Progress-Bar" component={ProgressBar} />
                 <Route path="/map" component={Map} />
                 <Route path="/account" component={Account} />
                 <Route path="/button" component={Button} />
                 <Route path="/add-class" component={AddClass} />
                 <Route path="/section" component={AllSections} />
                 <Route path="/add-profession" component={AddProfession} />
                 <Route path="/all-profession" component={AllProfessions} />
                 <Route path="/add-medium" component={AddMedium} />
                 <Route path="/all-medium" component={AllMediums} />
                 <Route path="/add-room" component={AddRoom} />
                 <Route path="/add-hostel" component={AddHostel} />
                 <Route path="/all-room" component={AllRoom} />
                 <Route path="/all-hostel" component={AllHostel} />
                 <Route path="/all-assign-class" component={AllAssignClasses} />
                 <Route path="/assign-class" component={AssignClass} />
                 <Route path="/assign-incharge" component={AssignIncharge} />
                 <Route path="/assign-room" component={AssignRoom} />
                 <Route path="/add-attendence" component={AddAttendence} />



            </Switch>
        </Router>
        </Provider>
        );
}

export default Root;
