import React,{useMemo,useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './Redux/store';
import { loginCheck } from './Redux/LoginCheck/LoginCheckActions';
import { fetchSpecificUserDetail } from './Redux/SpecificUserDetail/SpecificUserDetailActions';
import { Redirect } from "react-router-dom";
import { Provider } from 'react-redux';

//Login portion
import Login from './Components/Login';


//admin portion
import App from './App';


// student portion
import AllStudents from './Components/AllStudents';
import StudentDetail from './Components/StudentDetail';
import AdmissionForm from './Components/AdmissionForm';
import StudentPromotion from './Components/StudentPromotion';
import Students from './Components/Students';

//parents portion
import Parents from './Components/Parents';
import AllParents from './Components/AllParents';
import ParentsDetail from './Components/ParentsDetail';
import AddParents from './Components/AddParents';

//Teachers portion
import Teachers from './Components/Teachers';
import AllTeachers from './Components/AllTeachers';
import TeacherDetails from './Components/TeacherDetails';
import AddTeacher from './Components/AddTeacher';
import TeacherPayment from './Components/TeacherPayment';
import AssignIncharge from './Components/AssignIncharge';
import AllAssignIncharge from './Components/AllAssignIncharge';

//Driver Portion
import AddDriver from './Components/AddDriver';
import AllDriver from './Components/AllDriver';


//Book portion
import AllBooks from './Components/AllBooks';
import AddBook from './Components/AddBook';
import AssignBook from './Components/AssignBook';
import AllAssignBooks from './Components/AllAssignBooks';
import ReturnAssignBook from './Components/ReturnAssignBook';


//Fees portion
import AddFees from './Components/AddFees';
import AllFees from './Components/AllFees';
import AddFeesCollection from './Components/AddFeesCollection';
import AllFeesCollection from './Components/AllFeesCollection';
import AcceptFees from './Components/AcceptFees';


//Expense portion
import AllExpense from './Components/AllExpense';
import AddExpense from './Components/AddExpense';
import AddExpenseType from './Components/AddExpenseType';
import AllExpenseType from './Components/AllExpenseType';

//class portion
import AllClasses from './Components/AllClasses';
import ClassRoutine from './Components/ClassRoutine';
import AllAssignClasses from './Components/AllAssignClasses';
import AssignClass from './Components/AssignClass';
import AddClass from './Components/AddClass';


//Medium portion
import AddMedium from './Components/AddMedium';
import AllMediums from './Components/AllMediums';

//profession portion
import AddProfession from './Components/AddProfession';
import AllProfessions from './Components/AllProfessions';

//section portion
import AllSections from './Components/AllSections';

//subject portion
import Subject from './Components/Subject';

//Attendence portion
import AllAttendence from './Components/AllAttendence';
import AddAttendence from './Components/AddAttendence';

//Exam portion
import ExamSchedule from './Components/ExamSchedule';
import ExamGrade from './Components/ExamGrade';
import ExamResult from './Components/ExamResult';
import AllExamResultOfStudent from './Components/AllExamResultOfStudent';

//Transport portion
import Transport from './Components/Transport';
import AddVehicle from './Components/AddVehicle';
import AllVehicles from './Components/AllVehicles';
import AddTransport from './Components/AddTransport';
import AllTransport from './Components/AllTransport';


//Hostel portion
import Hostel from './Components/Hostel';
import AddRoom from './Components/AddRoom';
import AddHostel from './Components/AddHostel';
import AllRoom from './Components/AllRoom';
import AllHostel from './Components/AllHostel';
import AssignRoom from './Components/AssignRoom';
import AllAssignRoom from './Components/AllAssignRoom';

//Notice portion
import Notice from './Components/Notice';

//Message portion
import Message from './Components/Message';
import AllMessages from './Components/AllMessages';



import Button from './Components/Button';
import Grid from './Components/Grid';
import Tab from './Components/Tab';
import ProgressBar from './Components/ProgressBar';
import Map from './Components/Map';
import Table from './Components/Table';


function Root(){
  const [isLogin,setIsLogin] = useState(false)
  const [role,setRole] = useState(null)
  console.log("isLogin",store.getState().LoginCheck.is_Login)
  store.subscribe(() => {
    if(store.getState() &&
    store.getState().LoginCheck &&
    store.getState().LoginCheck.is_Login
  ){
    setIsLogin(store.getState().LoginCheck.is_Login)
  }
});

store.subscribe(() => {
  if(store.getState() &&
  store.getState().SpecificUserDetail &&
  store.getState().SpecificUserDetail.specific_user_detail &&
  store.getState().SpecificUserDetail.specific_user_detail.result &&
  store.getState().SpecificUserDetail.specific_user_detail.result.Role
){
  setRole(store.getState().SpecificUserDetail.specific_user_detail.result.Role)
}
});

  useEffect(() =>{
    if(localStorage.getItem("access_token") != undefined && localStorage.getItem("user_email") != undefined){
      const login_check_info = true
      store.dispatch(loginCheck(login_check_info))
      store.dispatch(fetchSpecificUserDetail())
    }
  },[])
        return (
          <Provider store={store}>
            <Router>
            <Switch>
              //login route
                <Route path="/login"  exact render={()=>(
                localStorage.getItem("access_token") != undefined && localStorage.getItem("user_email") != undefined ? (alert("You can't login if you are logged in!"), (<Redirect to="/"/>)) : (<Login/>)
            )}/>
                {localStorage.getItem("access_token") != undefined && localStorage.getItem("user_email") != undefined ? (
                  <>
                  {/*Admin route */}
                  <Route exact path="/"  component={App}/>


                  {role != null ? (
                      <>
                      {console.log("neha route",role)}
                      {role === 3 ?
                        (
                           <>
                          <Route path="/students" component={Students} />
                          <Route path="/student-detail" component={StudentDetail} />
                        <Route path="/all-students" component={AllStudents} />
                        <Route path="/all-teachers" component={AllTeachers} />
                        <Route path="/all-assign-incharge" component={AllAssignIncharge} />
                        <Route path="/all-books" component={AllBooks} />
                        <Route path="/all-classes" component={AllClasses} />
                        <Route path="/class-routine" component={ClassRoutine} />
                        <Route path="/all-assign-class" component={AllAssignClasses} />
                        <Route path="/all-medium" component={AllMediums} />
                        <Route path="/all-profession" component={AllProfessions} />
                        <Route path="/all-driver" component={AllDriver} />
                        <Route path="/section" component={AllSections} />
                        <Route path="/subject" component={Subject} />
                        <Route path="/exam-schedule" component={ExamSchedule} />
                        <Route path="/exam-grade" component={ExamGrade} />
                        <Route path="/exam-result" component={ExamResult} />
                        <Route path="/all-transport" component={AllTransport} />
                        <Route path="/all-vehicle" component={AllVehicles} />
                        <Route path="/all-room" component={AllRoom} />
                        <Route path="/all-hostel" component={AllHostel} />
                        <Route path="/all-assign-room" component={AllAssignRoom} />
                        <Route path="/notice-board" component={Notice} />
                        <Route path="/add-message" component={Message} />
                        <Route path="/all-message" component={AllMessages} />
                        </>
                      ) :role === 1 ? (
                        <>
                        {/* student portion routes */ }
                        <Route path="/students" component={Students} />
                        <Route path="/student-detail" component={StudentDetail} />
                        <Route path="/admission-form" component={AdmissionForm} />
                        <Route path="/student-promotion" component={StudentPromotion} />
                        <Route path="/all-students" component={AllStudents} />

                        {/* Teachers portion Routes */}
                        <Route path="/all-teachers" component={AllTeachers} />
                        <Route path="/teacher-detail" component={TeacherDetails} />
                        <Route path="/add-teacher" component={AddTeacher} />
                        <Route path="/teacher-payment" component={TeacherPayment} />
                        <Route path="/teachers" component={Teachers} />
                        <Route path="/assign-incharge" component={AssignIncharge} />
                        <Route path="/all-assign-incharge" component={AllAssignIncharge} />

                        {/*Parents portion Routes */}
                        <Route path="/parents" component={Parents} />
                        <Route path="/all-parents" component={AllParents} />
                        <Route path="/parents-detail" component={ParentsDetail} />
                        <Route path="/add-parents" component={AddParents} />

                        {/*Driver portion Routes */}
                        <Route path="/add-driver" component={AddDriver} />
                        <Route path="/all-driver" component={AllDriver} />

                        { /*Book Portion Routes */}
                        <Route path="/all-books" component={AllBooks} />
                        <Route path="/add-book" component={AddBook} />
                        <Route path="/assign-book" component={AssignBook} />
                        <Route path="/all-assign-book" component={AllAssignBooks} />
                        <Route path="/return-assign-book" component={ReturnAssignBook} />

                        { /*Fees portion routes */}
                        <Route path="/add-fees" component={AddFees} />
                        <Route path="/all-fees" component={AllFees} />
                        <Route path="/add-fees-collection" component={AddFeesCollection} />
                        <Route path="/all-fees-collection" component={AllFeesCollection} />
                        <Route path="/accept-fees" component={AcceptFees} />

                        { /*Expense portion routes */}
                        <Route path="/all-expense" component={AllExpense} />
                        <Route path="/add-expense" component={AddExpense} />
                        <Route path="/add-expense-type" component={AddExpenseType} />
                        <Route path="/all-expense-type" component={AllExpenseType} />

                        { /*class portion routes*/}
                        <Route path="/all-classes" component={AllClasses} />
                        <Route path="/class-routine" component={ClassRoutine} />
                        <Route path="/add-class" component={AddClass} />
                        <Route path="/all-assign-class" component={AllAssignClasses} />
                        <Route path="/assign-class" component={AssignClass} />

                        {/* Medium portion routes*/}
                        <Route path="/add-medium" component={AddMedium} />
                        <Route path="/all-medium" component={AllMediums} />

                        {/*Profession portion routes */}
                        <Route path="/add-profession" component={AddProfession} />
                        <Route path="/all-profession" component={AllProfessions} />

                        {/*Section portion routes */}
                        <Route path="/section" component={AllSections} />

                        {/* subject portion routes */}
                        <Route path="/subject" component={Subject} />

                        {/* attendence portion routes */}
                        <Route path="/add-attendence" component={AddAttendence} />
                        <Route path="/all-attendence" component={AllAttendence} />

                        {/* exam portion Routes */}
                        <Route path="/exam-schedule" component={ExamSchedule} />
                        <Route path="/exam-grade" component={ExamGrade} />
                        <Route path="/exam-result" component={ExamResult} />

                        {/* transport portion routes */}
                         <Route path="/add-transport" component={AddTransport} />
                        <Route path="/all-transport" component={AllTransport} />
                        <Route path="/add-vehicle" component={AddVehicle} />
                        <Route path="/all-vehicle" component={AllVehicles} />

                        {/* Hostel portion routes */}
                        <Route path="/add-room" component={AddRoom} />
                        <Route path="/add-hostel" component={AddHostel} />
                        <Route path="/all-room" component={AllRoom} />
                        <Route path="/all-hostel" component={AllHostel} />
                        <Route path="/assign-room" component={AssignRoom} />
                        <Route path="/all-assign-room" component={AllAssignRoom} />

                        {/* notice portion routes */}
                        <Route path="/notice-board" component={Notice} />

                       {/* message portion routes */}
                        <Route path="/add-message" component={Message} />
                        <Route path="/all-message" component={AllMessages} />
                        <Route path="/table" component={Table} />

                        </>
                      ): role === 2 ? (
                        <>
                        <Route path="/all-students" component={AllStudents} />
                        <Route path="/admission-form" component={AdmissionForm} />
                        <Route path="/student-promotion" component={StudentPromotion} />
                        <Route path="/all-teachers" component={AllTeachers} />
                        <Route path="/teacher-detail" component={TeacherDetails} />
                        <Route path="/teachers" component={Teachers} />
                        <Route path="/assign-incharge" component={AssignIncharge} />
                        <Route path="/all-assign-incharge" component={AllAssignIncharge} />
                        <Route path="/all-parents" component={AllParents} />
                        <Route path="/add-parents" component={AddParents} />
                        <Route path="/all-driver" component={AllDriver} />
                        <Route path="/all-books" component={AllBooks} />
                        <Route path="/all-classes" component={AllClasses} />
                        <Route path="/class-routine" component={ClassRoutine} />
                        <Route path="/add-class" component={AddClass} />
                        <Route path="/all-assign-class" component={AllAssignClasses} />
                        <Route path="/assign-class" component={AssignClass} />
                        <Route path="/all-medium" component={AllMediums} />
                        <Route path="/all-profession" component={AllProfessions} />
                        {/*Section portion routes */}
                        <Route path="/section" component={AllSections} />

                        {/* subject portion routes */}
                        <Route path="/subject" component={Subject} />
                        {/* attendence portion routes */}
                        <Route path="/add-attendence" component={AddAttendence} />
                        <Route path="/all-attendence" component={AllAttendence} />
                        {/* exam portion Routes */}
                        <Route path="/exam-schedule" component={ExamSchedule} />
                        <Route path="/exam-grade" component={ExamGrade} />
                        <Route path="/exam-result" component={ExamResult} />

                        <Route path="/all-transport" component={AllTransport} />
                        <Route path="/all-vehicle" component={AllVehicles} />
                        <Route path="/all-room" component={AllRoom} />
                        <Route path="/all-hostel" component={AllHostel} />
                        <Route path="/all-assign-room" component={AllAssignRoom} />
                        {/* notice portion routes */}
                        <Route path="/notice-board" component={Notice} />

                       {/* message portion routes */}
                        <Route path="/add-message" component={Message} />
                        <Route path="/all-message" component={AllMessages} />
                        </>
                      ): role === 4 ? (
                        <>
                          <Route path="/all-students" component={AllStudents} />
                          <Route path="/all-teachers" component={AllTeachers} />
                          <Route path="/parents" component={Parents} />
                          <Route path="/all-parents" component={AllParents} />
                          <Route path="/parents-detail" component={ParentsDetail} />
                          <Route path="/all-assign-incharge" component={AllAssignIncharge} />
                          <Route path="/all-driver" component={AllDriver} />
                          <Route path="/all-books" component={AllBooks} />
                          <Route path="/all-assign-book" component={AllAssignBooks} />
                          <Route path="/all-fees" component={AllFees} />
                          <Route path="/all-classes" component={AllClasses} />
                          <Route path="/class-routine" component={ClassRoutine} />
                          <Route path="/all-assign-class" component={AllAssignClasses} />
                          <Route path="/all-medium" component={AllMediums} />
                          {/*Section portion routes */}
                          <Route path="/section" component={AllSections} />

                          {/* subject portion routes */}
                          <Route path="/subject" component={Subject} />
                          <Route path="/all-attendence" component={AllAttendence} />
                          <Route path="/exam-schedule" component={ExamSchedule} />
                          <Route path="/exam-grade" component={ExamGrade} />
                          <Route path="/exam-result" component={ExamResult} />
                          <Route path="/all-transport" component={AllTransport} />
                          <Route path="/all-vehicle" component={AllVehicles} />
                          <Route path="/all-room" component={AllRoom} />
                          <Route path="/all-hostel" component={AllHostel} />
                          <Route path="/all-assign-room" component={AllAssignRoom} />
                          {/* notice portion routes */}
                          <Route path="/notice-board" component={Notice} />
                        </>
                      ):role === 5 ? (
                        <>
                        <Route path="/all-students" component={AllStudents} />
                        <Route path="/all-teachers" component={AllTeachers} />
                        <Route path="/add-driver" component={AddDriver} />
                        <Route path="/all-driver" component={AllDriver} />
                        <Route path="/all-parents" component={AllParents} />

                          { /*Fees portion routes */}
                        <Route path="/add-fees" component={AddFees} />
                        <Route path="/all-fees" component={AllFees} />
                        <Route path="/add-fees-collection" component={AddFeesCollection} />
                        <Route path="/all-fees-collection" component={AllFeesCollection} />
                        <Route path="/accept-fees" component={AcceptFees} />

                          { /*Expense portion routes */}
                        <Route path="/all-expense" component={AllExpense} />
                        <Route path="/add-expense" component={AddExpense} />
                        <Route path="/add-expense-type" component={AddExpenseType} />
                        <Route path="/all-expense-type" component={AllExpenseType} />

                        {/* transport portion routes */}
                         <Route path="/add-transport" component={AddTransport} />
                        <Route path="/all-transport" component={AllTransport} />
                        <Route path="/add-vehicle" component={AddVehicle} />
                        <Route path="/all-vehicle" component={AllVehicles} />

                        {/* Hostel portion routes */}
                        <Route path="/add-room" component={AddRoom} />
                        <Route path="/add-hostel" component={AddHostel} />
                        <Route path="/all-room" component={AllRoom} />
                        <Route path="/all-hostel" component={AllHostel} />
                        <Route path="/assign-room" component={AssignRoom} />
                        <Route path="/all-assign-room" component={AllAssignRoom} />

                        {/* notice portion routes */}
                        <Route path="/notice-board" component={Notice} />

                        </>
                      ):role === 6 ? (
                          <>
                          <Route path="/all-students" component={AllStudents} />
                          <Route path="/all-teachers" component={AllTeachers} />
                          <Route path="/all-parents" component={AllParents} />
                          <Route path="/all-driver" component={AllDriver} />
                          { /*Book Portion Routes */}
                          <Route path="/all-books" component={AllBooks} />
                          <Route path="/add-book" component={AddBook} />
                          <Route path="/assign-book" component={AssignBook} />
                          <Route path="/all-assign-book" component={AllAssignBooks} />
                          <Route path="/return-assign-book" component={ReturnAssignBook} />
                          <Route path="/all-classes" component={AllClasses} />
                          <Route path="/class-routine" component={ClassRoutine} />
                          <Route path="/all-assign-class" component={AllAssignClasses} />
                          <Route path="/all-medium" component={AllMediums} />
                          {/*Section portion routes */}
                          <Route path="/section" component={AllSections} />

                          {/* subject portion routes */}
                          <Route path="/subject" component={Subject} />

                          <Route path="/all-transport" component={AllTransport} />
                          <Route path="/all-vehicle" component={AllVehicles} />

                          <Route path="/all-room" component={AllRoom} />
                          <Route path="/all-hostel" component={AllHostel} />
                          {/* notice portion routes */}
                          <Route path="/notice-board" component={Notice} />
                          </>
                      ):role === 7 ? (
                        <>
                        <Route path="/all-driver" component={AllDriver} />
                        <Route path="/all-students" component={AllStudents} />
                        <Route path="/all-teachers" component={AllTeachers} />
                        <Route path="/all-parents" component={AllParents} />

                        {/* transport portion routes */}
                        <Route path="/all-transport" component={AllTransport} />
                        <Route path="/add-vehicle" component={AddVehicle} />
                        <Route path="/all-vehicle" component={AllVehicles} />
                        </>
                      ):null}

                      </>
                    ) : null
                  }


                   <Route path="/grid" component={Grid} />
                   <Route path="/tab" component={Tab} />
                   <Route path="/Progress-Bar" component={ProgressBar} />
                   <Route path="/map" component={Map} />
                   <Route path="/button" component={Button} />


                   </>
                ):(<>
                  <Route  path={"/" |
                  "/students" |
                  "/parents" |
                  "/all-students" |
                  "/student-detail" |
                  "/admission-form" |
                  "/student-promotion" |
                  "/all-teachers" |
                  "/teacher-detail" |
                  "/add-teacher" |
                  "/teacher-payment" |
                  "/all-parents" |
                  "/parents-detail" |
                  "/add-parents" |
                  "/all-books" |
                  "/add-book"
                }  render={() => (window.location = "/login")}/>
                  </>)}




            </Switch>
        </Router>
        </Provider>
        );
}

export default Root;
