import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayDashboard: false,
      displaystudent : false,
      displayparents : false,
      displayteachers : false,
      displaylibrary : false,
      displayAccount : false,
      displayclass : false,
      displayexam : false,
      displayuielements : false
    };

 this.showDropdownMenu = this.showDropdownMenu.bind(this);
 this.hideDropdownDashboard = this.hideDropdownDashboard.bind(this);
 this.hideDropdownuielements = this.hideDropdownuielements.bind(this);
 this.hideDropdownexam = this.hideDropdownexam.bind(this);
 this.hideDropdownAccount = this.hideDropdownAccount.bind(this);
 this.hideDropdownclass = this.hideDropdownclass.bind(this);
 this.hideDropdownteachers = this.hideDropdownteachers.bind(this);
 this.hideDropdownlibrary = this.hideDropdownlibrary.bind(this);
 this.hideDropdownparents = this.hideDropdownparents.bind(this);
 this.hideDropdownstudent = this.hideDropdownstudent.bind(this);
  }

  showDropdownMenu(event,value1) {
    console.log("showDropdownMenu");
    event.preventDefault();
    if(value1 == 'dashboard'){
      return this.setState({ displayDashboard: true }, () => {
        document.addEventListener('click',this.hideDropdownDashboard);
        });
    }
  else if(value1 == 'student'){
    return this.setState({ displaystudent: true }, () => {
      document.addEventListener('click', this.hideDropdownstudent);
      });
  }
  else if(value1 == 'teachers'){
    return this.setState({ displayteachers: true }, () => {
      document.addEventListener('click', this.hideDropdownteachers);
      });
  }
  else if(value1 == 'parents'){
    return this.setState({ displayparents: true }, () => {
      document.addEventListener('click', this.hideDropdownparents);
      });
  }
  else if(value1 == 'library'){
    return this.setState({ displaylibrary: true }, () => {
      document.addEventListener('click', this.hideDropdownlibrary);
      });
  }
  else if(value1 == 'Account'){
    return this.setState({ displayAccount: true }, () => {
      document.addEventListener('click', this.hideDropdownAccount);
      });
  }
  else if(value1 == 'class'){
    return this.setState({ displayclass: true }, () => {
      document.addEventListener('click', this.hideDropdownclass);
      });
  }
  else if(value1 == 'exam'){
    return this.setState({ displayexam: true }, () => {
      document.addEventListener('click', this.hideDropdownexam);
      });
  }
  else if(value1 == 'ui-elements'){
    return this.setState({ displayuielements: true }, () => {
      document.addEventListener('click', this.hideDropdownuielements);
      });
  }
  }
  hideDropdownuielements() {
    this.setState({ displayuielements: false }, () => {
      document.removeEventListener('click', this.hideDropdownuielements);
    });
  }
  hideDropdownexam() {
    this.setState({ displayexam: false }, () => {
      document.removeEventListener('click', this.hideDropdownexam);
    });
  }
  hideDropdownclass() {
    this.setState({ displayclass: false }, () => {
      document.removeEventListener('click', this.hideDropdownclass);
    });
  }
  hideDropdownAccount() {
    this.setState({ displayAccount: false }, () => {
      document.removeEventListener('click', this.hideDropdownAccount);
    });
  }

  hideDropdownlibrary() {
    this.setState({ displaylibrary: false }, () => {
      document.removeEventListener('click', this.hideDropdownlibrary);
    });
  }
  hideDropdownDashboard() {
    this.setState({ displayDashboard: false }, () => {
      document.removeEventListener('click', this.hideDropdownDashboard);
    });
  }
    hideDropdownstudent() {
      this.setState({ displaystudent: false }, () => {
        document.removeEventListener('click', this.hideDropdownstudent);
      });

  }
  hideDropdownteachers() {
    this.setState({ displayteachers: false }, () => {
      document.removeEventListener('click', this.hideDropdownteachers);
    });
}
hideDropdownparents() {
  this.setState({ displayparents: false }, () => {
    document.removeEventListener('click', this.hideDropdownparents);
  });
}
openPageHandler = (event,selected_value) =>{
  event.preventDefault();
  if(selected_value == 'page-admin'){
    window.location='/';
  }
else if(selected_value == 'page-students'){
    window.location='/students';
}
else if(selected_value == 'page-teachers'){
  window.location='/teachers';
}
else if(selected_value == 'page-parents'){
  window.location='/parents';
}
else if(selected_value == 'page-all-students'){
  window.location='/all-students';
}
else if(selected_value == 'page-student-detail'){
  window.location='/student-detail';
}
else if(selected_value == 'page-admission-form'){
  window.location='/admission-form';
}
else if(selected_value == 'page-student-promotion'){
  window.location='/student-promotion';
}
else if(selected_value == 'page-all-teachers'){
  window.location='/all-teachers';
}
else if(selected_value == 'page-teacher-detail'){
  window.location='/teacher-detail';
}
else if(selected_value == 'page-add-teacher'){
  window.location='/add-teacher';
}
else if(selected_value == 'page-teacher-payment'){
  window.location='/teacher-payment';
}
else if(selected_value == 'page-all-parents'){
  window.location='/all-parents';
}
else if(selected_value == 'page-parents-detail'){
  window.location='/parents-detail';
}
else if(selected_value == 'page-add-parents'){
  window.location='/add-parents';
}
else if(selected_value == 'page-all-books'){
  window.location='/all-books';
}
else if(selected_value == 'page-add-book'){
  window.location='/add-book';
}
else if(selected_value == 'page-all-fees'){
  window.location='/all-fees';
}
else if(selected_value == 'page-all-expense'){
  window.location='/all-expense';
}
else if(selected_value == 'page-all-classes'){
  window.location='/all-classes';
}
else if(selected_value == 'page-add-class'){
  window.location='/add-class';
}
else if(selected_value == 'page-exam-schedule'){
  window.location='/exam-schedule';
}
else if(selected_value == 'page-exam-grade'){
  window.location='/exam-grade';
}
else if(selected_value == 'page-button'){
  window.location='/button';
}
else if(selected_value == 'page-grid'){
  window.location='/grid';
}
else if(selected_value == 'page-tab'){
  window.location='/tab';
}
else if(selected_value == 'page-Progress-Bar'){
  window.location='/Progress-Bar';
}
}
    render() {
      console.log("display menu",this.state.displayDashboard);
        return (

            <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
            <div className="mobile-sidebar-header d-md-none">
              <div className="header-logo">
                <a href="/"><img src="img/logo1.png" alt="logo" /></a>
              </div>
            </div>
            <div className="sidebar-menu-content">
              <ul className="nav nav-sidebar-menu sidebar-toggle-view">
                <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"dashboard")}>
                  <a href="/" className="nav-link"><i className="flaticon-dashboard" /><span>Dashboard</span></a>
                  { this.state.displayDashboard == true ? (
                  <ul className="nav sub-group-menu">
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-admin")}>
                      <a href="/" className="nav-link"><i className="fas fa-angle-right" />Admin</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-students")}>
                      <a href="/students" className="nav-link"><i className="fas fa-angle-right" />Students</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-parents")}>
                      <a href="/parents" className="nav-link"><i className="fas fa-angle-right" />Parents</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-teachers")}>
                      <a href="/teachers" className="nav-link"><i className="fas fa-angle-right" />Teachers</a>
                    </li>
                  </ul>
                   ): (
                    null
                  )
                  }
                </li>
                <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"student")}>
                  <a href="/all-students" className="nav-link"><i className="flaticon-classmates" /><span >Students</span></a>
                  { this.state.displaystudent == true ? (
                  <ul className="nav sub-group-menu">
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-students")}>
                      <a href="/all-students" className="nav-link"><i className="fas fa-angle-right" />All
                        Students</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-student-detail")}>
                      <a href="/student-detail" className="nav-link"><i className="fas fa-angle-right" />Student Details</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-admission-form")}>
                      <a href="/admission-form" className="nav-link"><i className="fas fa-angle-right" />Admission Form</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-student-promotion")}>
                      <a href="/student-promotion" className="nav-link"><i className="fas fa-angle-right" />Student Promotion</a>
                    </li>
                  </ul>
                   ): (
                    null
                  )
                  }
                </li>
                <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"teachers")}>
                  <a href="/all-teachers" className="nav-link"><i className="flaticon-multiple-users-silhouette" /><span >Teachers</span></a>
                  { this.state.displayteachers == true ? (
                  <ul className="nav sub-group-menu">
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-teachers")}>
                      <a href="/all-teachers" className="nav-link"><i className="fas fa-angle-right" />All
                        Teachers</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-teacher-detail")}>
                      <a href="/teacher-detail" className="nav-link"><i className="fas fa-angle-right" />Teacher Details</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-teacher")}>
                      <a href="/add-teacher" className="nav-link"><i className="fas fa-angle-right" />Add
                        Teacher</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-teacher-payment")}>
                      <a href="/teacher-payment" className="nav-link"><i className="fas fa-angle-right" />Payment</a>
                    </li>
                  </ul>
                   ): (
                    null
                  )
                  }
                </li>
                <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"parents")}>
                  <a href="/all-parents" className="nav-link"><i className="flaticon-couple" /><span >Parents</span></a>
                  { this.state.displayparents == true ? (
                  <ul className="nav sub-group-menu">
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-parents")}>
                      <a href="/all-parents" className="nav-link"><i className="fas fa-angle-right" />All
                        Parents</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-parents-detail")}>
                      <a href="/parents-detail" className="nav-link"><i className="fas fa-angle-right" />Parents Details</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-parents")}>
                      <a href="/add-parents" className="nav-link"><i className="fas fa-angle-right" />Add
                        Parent</a>
                    </li>
                  </ul>
                  ): (
                    null
                  )
                  }
                </li>
                <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"library")}>
                  <a href="/all-books" className="nav-link"><i className="flaticon-books" /><span >Library</span></a>
                  { this.state.displaylibrary == true ? (
                  <ul className="nav sub-group-menu">
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-books")}>
                      <a href="/all-books" className="nav-link"><i className="fas fa-angle-right" />All
                        Book</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-book")}>
                      <a href="/add-book" className="nav-link"><i className="fas fa-angle-right" />Add New
                        Book</a>
                    </li>
                  </ul>
                   ): (
                    null
                  )
                  }
                </li>
                <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"Account")}>
                  <a href="/all-fees" className="nav-link"><i className="flaticon-technological" /><span >Acconunt</span></a>
                  { this.state.displayAccount == true ? (
                  <ul className="nav sub-group-menu">
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-fees")}>
                      <a href="/all-fees" className="nav-link"><i className="fas fa-angle-right" />All Fees
                        Collection</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-expense")}>
                      <a href="/all-expense" className="nav-link"><i className="fas fa-angle-right" />Expenses</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-expense")}>
                      <a href="/add-expense" className="nav-link"><i className="fas fa-angle-right" />Add
                        Expenses</a>
                    </li>
                  </ul>
                  ): (
                    null
                  )
                  }
                </li>
                <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"class")}>
                  <a href="/all-classes" className="nav-link"><i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" /><span >Class</span></a>
                  { this.state.displayclass == true ? (
                  <ul className="nav sub-group-menu">
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-classes")}>
                      <a href="/all-classes" className="nav-link"><i className="fas fa-angle-right" />All
                        Classes</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-class")}>
                      <a href="/add-class" className="nav-link"><i className="fas fa-angle-right" />Add New
                        Class</a>
                    </li>
                  </ul>
                  ): (
                    null
                  )
                  }
                </li>
                <li className="nav-item">
                  <a href="/subject" className="nav-link"><i className="flaticon-open-book" /><span>Subject</span></a>
                </li>
                <li className="nav-item">
                  <a href="/class-routine" className="nav-link"><i className="flaticon-calendar" /><span>Class
                      Routine</span></a>
                </li>
                <li className="nav-item">
                  <a href="/attendence" className="nav-link"><i className="flaticon-checklist" /><span>Attendence</span></a>
                </li>
                <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"exam")}>
                  <a href="/exam-schedule" className="nav-link"><i className="flaticon-shopping-list" /><span >Exam</span></a>
                  { this.state.displayexam == true ? (
                  <ul className="nav sub-group-menu">
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-exam-schedule")}>
                      <a href="/exam-schedule" className="nav-link"><i className="fas fa-angle-right" />Exam
                        Schedule</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-exam-grade")}>
                      <a href="/exam-grade" className="nav-link"><i className="fas fa-angle-right" />Exam
                        Grades</a>
                    </li>
                  </ul>
                   ): (
                    null
                  )
                  }
                </li>
                <li className="nav-item">
                  <a href="/transport" className="nav-link"><i className="flaticon-bus-side-view" /><span>Transport</span></a>
                </li>
                <li className="nav-item">
                  <a href="/hostal" className="nav-link"><i className="flaticon-bed" /><span>Hostel</span></a>
                </li>
                <li className="nav-item">
                  <a href="/notice-board" className="nav-link"><i className="flaticon-script" /><span>Notice</span></a>
                </li>
                <li className="nav-item">
                  <a href="/message" className="nav-link"><i className="flaticon-chat" /><span>Messeage</span></a>
                </li>
                <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"ui-elements")}>
                  <a href="#" className="nav-link"><i className="flaticon-menu-1" /><span >UI Elements</span></a>
                  { this.state.displayuielements == true ? (
                  <ul className="nav sub-group-menu">
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-button")}>
                      <a href="/button" className="nav-link"><i className="fas fa-angle-right" />Button</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-grid")}>
                      <a href="/grid" className="nav-link"><i className="fas fa-angle-right" />Grid</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-tab")}>
                      <a href="/tab" className="nav-link"><i className="fas fa-angle-right" />Tab</a>
                    </li>
                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-Progress-Bar")}>
                      <a href="/Progress-Bar" className="nav-link"><i className="fas fa-angle-right" />Progress Bar</a>
                    </li>
                  </ul>
                   ): (
                    null
                  )
                  }
                </li>
                <li className="nav-item">
                  <a href="/map" className="nav-link"><i className="flaticon-planet-earth" /><span>Map</span></a>
                </li>
                <li className="nav-item">
                  <a href="/account" className="nav-link"><i className="flaticon-settings" /><span>Account</span></a>
                </li>
              </ul>
            </div>
          </div>

        );
    }
}

export default Sidebar;