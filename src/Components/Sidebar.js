import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayDashboard: false,
      displaystudent : false,
      displayparents : false,
      displaydrivers : false,
      displayteachers : false,
      displaylibrary : false,
      displayAccount : false,
      displayclass : false,
      displayhostel : false,
      displaytransport:false,
      displaymedium:false,
      displayexam : false,
      displayuielements : false,
      displaymessage:false,
      displayattendence:false,
      displayprofession:false
    };

 this.showDropdownMenu = this.showDropdownMenu.bind(this);
 this.hideDropdownDashboard = this.hideDropdownDashboard.bind(this);
 this.hideDropdownuielements = this.hideDropdownuielements.bind(this);
 this.hideDropdownmessage = this.hideDropdownmessage.bind(this);
 this.hideDropdownexam = this.hideDropdownexam.bind(this);
 this.hideDropdownAccount = this.hideDropdownAccount.bind(this);
 this.hideDropdownclass = this.hideDropdownclass.bind(this);
 this.hideDropdownhostel = this.hideDropdownhostel.bind(this);
 this.hideDropdowntransport = this.hideDropdowntransport.bind(this);
 this.hideDropdownmedium = this.hideDropdownmedium.bind(this);
 this.hideDropdownprofession = this.hideDropdownprofession.bind(this);
 this.hideDropdownteachers = this.hideDropdownteachers.bind(this);
 this.hideDropdownlibrary = this.hideDropdownlibrary.bind(this);
 this.hideDropdownparents = this.hideDropdownparents.bind(this);
 this.hideDropdowndrivers = this.hideDropdowndrivers.bind(this);
 this.hideDropdownstudent = this.hideDropdownstudent.bind(this);
 this.hideDropdownattendence = this.hideDropdownattendence.bind(this);
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
  else if(value1 == 'driver'){
    return this.setState({ displaydrivers: true }, () => {
      document.addEventListener('click', this.hideDropdowndrivers);
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
  else if(value1 == 'medium'){
    return this.setState({ displaymedium: true }, () => {
      document.addEventListener('click', this.hideDropdownmedium);
      });
  }
  else if(value1 == 'hostel'){
    return this.setState({ displayhostel: true }, () => {
      document.addEventListener('click', this.hideDropdownhostel);
      });
  }
  else if(value1 == 'transport'){
    return this.setState({ displaytransport: true }, () => {
      document.addEventListener('click', this.hideDropdowntransport);
      });
  }
  else if(value1 == 'profession'){
    return this.setState({ displayprofession: true }, () => {
      document.addEventListener('click', this.hideDropdownprofession);
      });
  }
  else if(value1 == 'exam'){
    return this.setState({ displayexam: true }, () => {
      document.addEventListener('click', this.hideDropdownexam);
      });
  }
  else if(value1 == 'attendence'){
    return this.setState({ displayattendence: true }, () => {
      document.addEventListener('click', this.hideDropdownattendence);
      });
  }
  else if(value1 == 'ui-elements'){
    return this.setState({ displayuielements: true }, () => {
      document.addEventListener('click', this.hideDropdownuielements);
      });
  }
  else if(value1 == 'message'){
    return this.setState({ displaymessage: true }, () => {
      document.addEventListener('click', this.hideDropdownmessage);
      });
  }
  }
  hideDropdownuielements() {
    this.setState({ displayuielements: false }, () => {
      document.removeEventListener('click', this.hideDropdownuielements);
    });
  }
  hideDropdownmessage() {
    this.setState({ displaymessage: false }, () => {
      document.removeEventListener('click', this.hideDropdownmessage);
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
  hideDropdownhostel() {
    this.setState({ displayhostel: false }, () => {
      document.removeEventListener('click', this.hideDropdownhostel);
    });
  }
  hideDropdowntransport() {
    this.setState({ displaytransport: false }, () => {
      document.removeEventListener('click', this.hideDropdowntransport);
    });
  }
  hideDropdownmedium() {
    this.setState({ displaymedium: false }, () => {
      document.removeEventListener('click', this.hideDropdownmedium);
    });
  }
  hideDropdownprofession() {
    this.setState({ displayprofession: false }, () => {
      document.removeEventListener('click', this.hideDropdownprofession);
    });
  }
  hideDropdownattendence() {
    this.setState({ displayattendence: false }, () => {
      document.removeEventListener('click', this.hideDropdownattendence);
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
hideDropdowndrivers() {
  this.setState({ displaydrivers: false }, () => {
    document.removeEventListener('click', this.hideDropdowndrivers);
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
else if(selected_value == 'page-assign-incharge'){
  window.location='/assign-incharge';
}
else if(selected_value == 'page-all-assign-incharge'){
  window.location='/all-assign-incharge';
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
else if(selected_value == 'page-all-drivers'){
  window.location='/all-driver';
}
else if(selected_value == 'page-add-driver'){
  window.location='/add-driver';
}
else if(selected_value == 'page-all-books'){
  window.location='/all-books';
}
else if(selected_value == 'page-add-book'){
  window.location='/add-book';
}
else if(selected_value == 'page-assign-book'){
  window.location='/assign-book';
}
else if(selected_value == 'page-all-assign-book'){
  window.location='/all-assign-book';
}
else if(selected_value == 'page-return-assign-book'){
  window.location='/return-assign-book';
}
else if(selected_value == 'page-all-fees'){
  window.location='/all-fees';
}
else if(selected_value == 'page-add-fees-collection'){
  window.location='/add-fees-collection';
}
else if(selected_value == 'page-all-fees-collection'){
  window.location='/all-fees-collection';
}
else if(selected_value == 'page-accept-fees'){
  window.location='/accept-fees';
}

else if(selected_value == 'page-all-expense'){
  window.location='/all-expense';
}
else if(selected_value == 'page-add-expense'){
  window.location='/add-expense';
}
else if(selected_value == 'page-add-expense-type'){
  window.location='/add-expense-type';
}
else if(selected_value == 'page-all-expense-type'){
  window.location='/all-expense-type';
}

else if(selected_value == 'page-add-fees'){
  window.location='/add-fees';
}
else if(selected_value == 'page-all-classes'){
  window.location='/all-classes';
}
else if(selected_value == 'page-add-class'){
  window.location='/add-class';
}
else if(selected_value == 'page-all-assign-classes'){
  window.location='/all-assign-class';
}
else if(selected_value == 'page-assign-class'){
  window.location='/assign-class';
}
else if(selected_value == 'page-all-mediums'){
  window.location='/all-medium';
}
else if(selected_value == 'page-add-medium'){
  window.location='/add-medium';
}
else if(selected_value == 'page-add-vehicle'){
  window.location='/add-vehicle';
}
else if(selected_value == 'page-all-vehicle'){
  window.location='/all-vehicle';
}
else if(selected_value == 'page-add-transport'){
  window.location='/add-transport';
}
else if(selected_value == 'page-all-transport'){
  window.location='/all-transport';
}
else if(selected_value == 'page-all-hostels'){
  window.location='/all-hostel';
}
else if(selected_value == 'page-add-hostel'){
  window.location='/add-hostel';
}
else if(selected_value == 'page-all-rooms'){
  window.location='/all-room';
}
else if(selected_value == 'page-add-room'){
  window.location='/add-room';
}
else if(selected_value == 'page-assign-room'){
  window.location='/assign-room';
}
else if(selected_value == 'page-all-assign-room'){
  window.location='/all-assign-room';
}
else if(selected_value == 'page-all-professions'){
  window.location='/all-profession';
}
else if(selected_value == 'page-add-profession'){
  window.location='/add-profession';
}
else if(selected_value == 'page-all-attendence'){
  window.location='/all-attendence';
}
else if(selected_value == 'page-add-attendence'){
  window.location='/add-attendence';
}
else if(selected_value == 'page-exam-schedule'){
  window.location='/exam-schedule';
}
else if(selected_value == 'page-exam-grade'){
  window.location='/exam-grade';
}
else if(selected_value == 'page-exam-result'){
  window.location='/exam-result';
}
else if(selected_value == 'page-add-message'){
  window.location='/add-message';
}
else if(selected_value == 'page-all-message'){
  window.location='/all-message';
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
      console.log("display menu",this.props.detail_data);
        return (
            <>
            {this.props &&
              this.props.detail_data &&
              this.props.detail_data.specific_user_detail &&
              this.props.detail_data.specific_user_detail.success &&
              this.props.detail_data.specific_user_detail.result &&
              this.props.detail_data.specific_user_detail.result.Role ?(
                <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
                <div className="mobile-sidebar-header d-md-none">
                  <div className="header-logo">
                    <a href="/"><img src="img/logo1.png" alt="logo" /></a>
                  </div>
                </div>
                <div className="sidebar-menu-content">
                  <ul className="nav nav-sidebar-menu sidebar-toggle-view">
                  {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                    this.props.detail_data.specific_user_detail.result.Role === 2 ||
                    this.props.detail_data.specific_user_detail.result.Role === 3 ||
                    this.props.detail_data.specific_user_detail.result.Role === 4 ? (
                      <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"dashboard")}>
                        <a href="/" className="nav-link"><i className="flaticon-dashboard" /><span>Dashboard</span></a>
                        { this.state.displayDashboard == true ? (
                        <ul className="nav sub-group-menu">
                          <li className="nav-item" onClick={e => this.openPageHandler(e,"page-admin")}>
                            <a href="/" className="nav-link"><i className="fas fa-angle-right" />Admin</a>
                          </li>
                          {this.props.detail_data.specific_user_detail.result.Role === 1 || this.props.detail_data.specific_user_detail.result.Role === 3 ? (
                            <li className="nav-item" onClick={e => this.openPageHandler(e,"page-students")}>
                              <a href="/students" className="nav-link"><i className="fas fa-angle-right" />Students</a>
                            </li>
                          ):null}
                          {this.props.detail_data.specific_user_detail.result.Role === 1 || this.props.detail_data.specific_user_detail.result.Role === 4 ? (
                            <li className="nav-item" onClick={e => this.openPageHandler(e,"page-parents")}>
                              <a href="/parents" className="nav-link"><i className="fas fa-angle-right" />Parents</a>
                            </li>
                          ):null}
                          {this.props.detail_data.specific_user_detail.result.Role === 1 || this.props.detail_data.specific_user_detail.result.Role === 2 ? (
                            <li className="nav-item" onClick={e => this.openPageHandler(e,"page-teachers")}>
                              <a href="/teachers" className="nav-link"><i className="fas fa-angle-right" />Teachers</a>
                            </li>
                          ):null}

                        </ul>
                         ): (
                          null
                        )
                        }
                      </li>
                  ):null}
                  {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                    this.props.detail_data.specific_user_detail.result.Role === 2 ||
                    this.props.detail_data.specific_user_detail.result.Role === 3 ||
                    this.props.detail_data.specific_user_detail.result.Role === 4 ||
                    this.props.detail_data.specific_user_detail.result.Role === 5 ||
                    this.props.detail_data.specific_user_detail.result.Role === 6 ||
                    this.props.detail_data.specific_user_detail.result.Role === 7 ? (
                      <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"student")}>
                        <a href="/all-students" className="nav-link"><i className="flaticon-classmates" /><span >Students</span></a>
                        { this.state.displaystudent == true ? (
                        <ul className="nav sub-group-menu">
                        {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                          this.props.detail_data.specific_user_detail.result.Role === 2 ||
                          this.props.detail_data.specific_user_detail.result.Role === 3 ||
                          this.props.detail_data.specific_user_detail.result.Role === 4 ||
                          this.props.detail_data.specific_user_detail.result.Role === 5 ||
                          this.props.detail_data.specific_user_detail.result.Role === 6 ||
                          this.props.detail_data.specific_user_detail.result.Role === 7
                           ? (
                          <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-students")}>
                            <a href="/all-students" className="nav-link"><i className="fas fa-angle-right" />All
                              Students</a>
                          </li>
                        ):null}
                        {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                          this.props.detail_data.specific_user_detail.result.Role === 3 ? (
                          <li className="nav-item" onClick={e => this.openPageHandler(e,"page-student-detail")}>
                            <a href="/student-detail" className="nav-link"><i className="fas fa-angle-right" />Student Details</a>
                          </li>
                        ):null}
                        {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                          this.props.detail_data.specific_user_detail.result.Role === 2 ? (
                            <li className="nav-item" onClick={e => this.openPageHandler(e,"page-admission-form")}>
                              <a href="/admission-form" className="nav-link"><i className="fas fa-angle-right" />Admission Form</a>
                            </li>
                          ):null}
                          {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                            this.props.detail_data.specific_user_detail.result.Role === 2 ? (
                              <li className="nav-item" onClick={e => this.openPageHandler(e,"page-student-promotion")}>
                                <a href="/student-promotion" className="nav-link"><i className="fas fa-angle-right" />Student Promotion</a>
                              </li>
                            ):null}

                        </ul>
                         ): (
                          null
                        )
                        }
                      </li>
                    ):null}
                    {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                      this.props.detail_data.specific_user_detail.result.Role === 2 ||
                      this.props.detail_data.specific_user_detail.result.Role === 3 ||
                      this.props.detail_data.specific_user_detail.result.Role === 4 ||
                      this.props.detail_data.specific_user_detail.result.Role === 5 ||
                      this.props.detail_data.specific_user_detail.result.Role === 6 ||
                      this.props.detail_data.specific_user_detail.result.Role === 7 ? (
                        <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"teachers")}>
                          <a href="/all-teachers" className="nav-link"><i className="flaticon-multiple-users-silhouette" /><span >Teachers</span></a>
                          { this.state.displayteachers == true ? (
                          <ul className="nav sub-group-menu">
                          {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                            this.props.detail_data.specific_user_detail.result.Role === 2 ||
                            this.props.detail_data.specific_user_detail.result.Role === 3 ||
                            this.props.detail_data.specific_user_detail.result.Role === 4 ||
                            this.props.detail_data.specific_user_detail.result.Role === 5 ||
                            this.props.detail_data.specific_user_detail.result.Role === 6 ||
                            this.props.detail_data.specific_user_detail.result.Role === 7
                            ? (
                              <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-teachers")}>
                                <a href="/all-teachers" className="nav-link"><i className="fas fa-angle-right" />All
                                  Teachers</a>
                              </li>
                            ):null}
                            {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                              this.props.detail_data.specific_user_detail.result.Role === 2 ? (
                                <li className="nav-item" onClick={e => this.openPageHandler(e,"page-teacher-detail")}>
                                  <a href="/teacher-detail" className="nav-link"><i className="fas fa-angle-right" />Teacher Details</a>
                                </li>
                              ):null}
                              {this.props.detail_data.specific_user_detail.result.Role === 1  ? (
                                  <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-teacher")}>
                                    <a href="/add-teacher" className="nav-link"><i className="fas fa-angle-right" />Add
                                      Teacher</a>
                                  </li>
                                ):null}
                                {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 2 ? (
                                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-assign-incharge")}>
                                      <a href="/assign-incharge" className="nav-link"><i className="fas fa-angle-right" />Assign
                                        Incharge To Teacher</a>
                                    </li>
                                  ):null}
                                  {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                    this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                    this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                    this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                    this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                      <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-assign-incharge")}>
                                        <a href="/all-assign-incharge" className="nav-link"><i className="fas fa-angle-right" />All Assign
                                          Incharge To Teacher</a>
                                      </li>
                                    ):null}
                                    {this.props.detail_data.specific_user_detail.result.Role === 1  ? (
                                        <li className="nav-item" onClick={e => this.openPageHandler(e,"page-teacher-payment")}>
                                          <a href="/teacher-payment" className="nav-link"><i className="fas fa-angle-right" />Payment</a>
                                        </li>
                                      ):null}

                          </ul>
                           ): (
                            null
                          )
                          }
                        </li>
                      ):null}
                      {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                        this.props.detail_data.specific_user_detail.result.Role === 2 ||
                        this.props.detail_data.specific_user_detail.result.Role === 4 ||
                        this.props.detail_data.specific_user_detail.result.Role === 5 ||
                        this.props.detail_data.specific_user_detail.result.Role === 6 ||
                        this.props.detail_data.specific_user_detail.result.Role === 7 ? (
                          <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"parents")}>
                            <a href="/all-parents" className="nav-link"><i className="flaticon-couple" /><span >Parents</span></a>
                            { this.state.displayparents == true ? (
                            <ul className="nav sub-group-menu">
                            {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                              this.props.detail_data.specific_user_detail.result.Role === 2 ||
                              this.props.detail_data.specific_user_detail.result.Role === 4 ||
                              this.props.detail_data.specific_user_detail.result.Role === 5 ||
                              this.props.detail_data.specific_user_detail.result.Role === 6 ||
                              this.props.detail_data.specific_user_detail.result.Role === 7 ? (
                                <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-parents")}>
                                  <a href="/all-parents" className="nav-link"><i className="fas fa-angle-right" />All
                                    Parents</a>
                                </li>
                              ):null}
                              {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                this.props.detail_data.specific_user_detail.result.Role === 4 ? (
                                  <li className="nav-item" onClick={e => this.openPageHandler(e,"page-parents-detail")}>
                                    <a href="/parents-detail" className="nav-link"><i className="fas fa-angle-right" />Parents Details</a>
                                  </li>
                                ):null}
                                {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 2 ? (
                                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-parents")}>
                                      <a href="/add-parents" className="nav-link"><i className="fas fa-angle-right" />Add
                                        Parent</a>
                                    </li>
                                  ):null}

                            </ul>
                            ): (
                              null
                            )
                            }
                          </li>
                        ):null}
                        {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                          this.props.detail_data.specific_user_detail.result.Role === 2 ||
                          this.props.detail_data.specific_user_detail.result.Role === 4 ||
                          this.props.detail_data.specific_user_detail.result.Role === 5 ||
                          this.props.detail_data.specific_user_detail.result.Role === 6 ||
                          this.props.detail_data.specific_user_detail.result.Role === 7 ? (
                            <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"driver")}>
                              <a href="/all-parents" className="nav-link"><i className="flaticon-couple" /><span >Drivers</span></a>
                              { this.state.displaydrivers == true ? (
                              <ul className="nav sub-group-menu">
                              {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                this.props.detail_data.specific_user_detail.result.Role === 5 ||
                                this.props.detail_data.specific_user_detail.result.Role === 6 ||
                                this.props.detail_data.specific_user_detail.result.Role === 7 ? (
                                  <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-drivers")}>
                                    <a href="/all-driver" className="nav-link"><i className="fas fa-angle-right" />All
                                      Drivers</a>
                                  </li>
                                ):null}
                                {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-driver")}>
                                      <a href="/add-driver" className="nav-link"><i className="fas fa-angle-right" />Add
                                        Driver</a>
                                    </li>
                                  ):null}

                              </ul>
                              ): (
                                null
                              )
                              }
                            </li>
                          ):null}
                          {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                            this.props.detail_data.specific_user_detail.result.Role === 2 ||
                            this.props.detail_data.specific_user_detail.result.Role === 3 ||
                            this.props.detail_data.specific_user_detail.result.Role === 4 ||
                            this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                              <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"library")}>
                                <a href="/all-books" className="nav-link"><i className="flaticon-books" /><span >Library</span></a>
                                { this.state.displaylibrary == true ? (
                                <ul className="nav sub-group-menu">
                                {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-books")}>
                                      <a href="/all-books" className="nav-link"><i className="fas fa-angle-right" />All
                                        Book</a>
                                    </li>
                                  ):null}
                                  {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                    this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                      <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-book")}>
                                        <a href="/add-book" className="nav-link"><i className="fas fa-angle-right" />Add New
                                          Book</a>
                                      </li>
                                    ):null}
                                    {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                      this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                        <li className="nav-item" onClick={e => this.openPageHandler(e,"page-assign-book")}>
                                          <a href="/assign-book" className="nav-link"><i className="fas fa-angle-right" />Assign
                                            Book</a>
                                        </li>
                                      ):null}
                                      {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                          <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-assign-book")}>
                                            <a href="/all-assign-book" className="nav-link"><i className="fas fa-angle-right" />All Assign
                                              Book</a>
                                          </li>
                                        ):null}

                                        {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                          this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                            <li className="nav-item" onClick={e => this.openPageHandler(e,"page-return-assign-book")}>
                                              <a href="/return-assign-book" className="nav-link"><i className="fas fa-angle-right" />Return Assign
                                                Book</a>
                                            </li>
                                          ):null}

                                </ul>
                                 ): (
                                  null
                                )
                                }
                              </li>
                            ):null}
                            {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                              this.props.detail_data.specific_user_detail.result.Role === 5 ||
                              this.props.detail_data.specific_user_detail.result.Role === 4 ? (
                                <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"Account")}>
                                  <a href="/all-fees" className="nav-link"><i className="flaticon-technological" /><span >Account</span></a>
                                  { this.state.displayAccount == true ? (
                                  <ul className="nav sub-group-menu">
                                  {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                    this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                      <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-fees")}>
                                        <a href="/add-fees" className="nav-link"><i className="fas fa-angle-right" />Add Fees
                                          </a>
                                      </li>
                                    ):null}
                                    {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                      this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                      this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                        <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-fees")}>
                                          <a href="/all-fees" className="nav-link"><i className="fas fa-angle-right" />All Fees
                                            </a>
                                        </li>
                                      ):null}
                                      {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                          <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-fees-collection")}>
                                            <a href="/add-fees-collection" className="nav-link"><i className="fas fa-angle-right" />Add Fees
                                              Collection</a>
                                          </li>
                                        ):null}
                                        {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                          this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                            <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-fees-collection")}>
                                              <a href="/all-fees-collection" className="nav-link"><i className="fas fa-angle-right" />All Fees
                                                Collection</a>
                                            </li>
                                          ):null}
                                          {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                              <li className="nav-item" onClick={e => this.openPageHandler(e,"page-accept-fees")}>
                                                <a href="/accept-fees" className="nav-link"><i className="fas fa-angle-right" />Accept
                                                  Fees</a>
                                              </li>
                                            ):null}
                                            {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                              this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                                <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-expense")}>
                                                  <a href="/all-expense" className="nav-link"><i className="fas fa-angle-right" />All Expenses</a>
                                                </li>
                                              ):null}
                                              {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                                this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                                  <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-expense")}>
                                                    <a href="/add-expense" className="nav-link"><i className="fas fa-angle-right" />Add
                                                      Expenses</a>
                                                  </li>
                                                ):null}
                                                {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                                  this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-expense-type")}>
                                                      <a href="/add-expense-type" className="nav-link"><i className="fas fa-angle-right" />Add
                                                        Expenses Type</a>
                                                    </li>
                                                  ):null}
                                                  {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                                    this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                                      <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-expense-type")}>
                                                        <a href="/all-expense-type" className="nav-link"><i className="fas fa-angle-right" />All
                                                          Expenses Type</a>
                                                      </li>
                                                    ):null}

                                  </ul>
                                  ): (
                                    null
                                  )
                                  }
                                </li>
                              ):null}
                              {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                  <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"class")}>
                                    <a href="/all-classes" className="nav-link"><i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" /><span >Class</span></a>
                                    { this.state.displayclass == true ? (
                                    <ul className="nav sub-group-menu">
                                    {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                      this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                      this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                      this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                      this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                        <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-classes")}>
                                          <a href="/all-classes" className="nav-link"><i className="fas fa-angle-right" />All
                                            Classes</a>
                                        </li>
                                      ):null}
                                      {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 2 ? (
                                          <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-class")}>
                                            <a href="/add-class" className="nav-link"><i className="fas fa-angle-right" />Add New
                                              Class</a>
                                          </li>
                                        ):null}
                                        {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                          this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                          this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                          this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                          this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                            <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-assign-classes")}>
                                              <a href="/all-assign-class" className="nav-link"><i className="fas fa-angle-right" />All
                                              Assign Classes</a>
                                            </li>
                                          ):null}
                                          {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 2 ? (
                                              <li className="nav-item" onClick={e => this.openPageHandler(e,"page-assign-class")}>
                                                <a href="/assign-class" className="nav-link"><i className="fas fa-angle-right" />Assign
                                                  Class To Teacher</a>
                                              </li>
                                            ):null}

                                    </ul>
                                    ): (
                                      null
                                    )
                                    }
                                  </li>
                                ):null}
                                {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                    <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"medium")}>
                                      <a href="/all-classes" className="nav-link"><i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" /><span >Medium</span></a>
                                      { this.state.displaymedium == true ? (
                                      <ul className="nav sub-group-menu">
                                      {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                          <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-mediums")}>
                                            <a href="/all-medium" className="nav-link"><i className="fas fa-angle-right" />All
                                              Mediums</a>
                                          </li>
                                        ):null}
                                        {this.props.detail_data.specific_user_detail.result.Role === 1 ? (
                                            <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-medium")}>
                                              <a href="/add-medium" className="nav-link"><i className="fas fa-angle-right" />Add New
                                                Medium</a>
                                            </li>
                                          ):null}

                                      </ul>
                                      ): (
                                        null
                                      )
                                      }
                                    </li>
                                  ):null}
                                  {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                    this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                    this.props.detail_data.specific_user_detail.result.Role === 3 ? (
                                      <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"profession")}>
                                        <a href="/all-classes" className="nav-link"><i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" /><span >Profession</span></a>
                                        { this.state.displayprofession == true ? (
                                        <ul className="nav sub-group-menu">
                                        {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                          this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                          this.props.detail_data.specific_user_detail.result.Role === 3 ? (
                                            <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-professions")}>
                                              <a href="/all-profession" className="nav-link"><i className="fas fa-angle-right" />All
                                                Professions</a>
                                            </li>
                                          ):null}
                                          {this.props.detail_data.specific_user_detail.result.Role === 1 ? (
                                              <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-profession")}>
                                                <a href="/add-profession" className="nav-link"><i className="fas fa-angle-right" />Add New
                                                Profession</a>
                                              </li>
                                            ):null}

                                        </ul>
                                        ): (
                                          null
                                        )
                                        }
                                      </li>
                                    ):null}

                    {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                      this.props.detail_data.specific_user_detail.result.Role === 2 ||
                      this.props.detail_data.specific_user_detail.result.Role === 3 ||
                      this.props.detail_data.specific_user_detail.result.Role === 4 ||
                      this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                        <li className="nav-item">
                          <a href="/section" className="nav-link"><i className="flaticon-open-book" /><span>Section</span></a>
                        </li>
                      ):null}
                      {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                        this.props.detail_data.specific_user_detail.result.Role === 2 ||
                        this.props.detail_data.specific_user_detail.result.Role === 3 ||
                        this.props.detail_data.specific_user_detail.result.Role === 4 ||
                        this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                          <li className="nav-item">
                            <a href="/subject" className="nav-link"><i className="flaticon-open-book" /><span>Subject</span></a>
                          </li>
                        ):null}
                        {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                          this.props.detail_data.specific_user_detail.result.Role === 2 ||
                          this.props.detail_data.specific_user_detail.result.Role === 3 ||
                          this.props.detail_data.specific_user_detail.result.Role === 4 ||
                          this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                            <li className="nav-item">
                              <a href="/class-routine" className="nav-link"><i className="flaticon-calendar" /><span>Class
                                  Routine</span></a>
                            </li>
                          ):null}
                          {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                            this.props.detail_data.specific_user_detail.result.Role === 2 ||
                            this.props.detail_data.specific_user_detail.result.Role === 4 ? (
                              <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"attendence")}>
                                <a href="/all-classes" className="nav-link"><i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" /><span >Attendence</span></a>
                                { this.state.displayattendence == true ? (
                                <ul className="nav sub-group-menu">
                                {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 4 ? (
                                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-attendence")}>
                                      <a href="/all-attendence" className="nav-link"><i className="fas fa-angle-right" />All
                                        Attendence</a>
                                    </li>
                                  ):null}
                                  {this.props.detail_data.specific_user_detail.result.Role === 1 ? (
                                      <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-attendence")}>
                                        <a href="/add-attendence" className="nav-link"><i className="fas fa-angle-right" />Add
                                          Attendence</a>
                                      </li>
                                    ):null}

                                </ul>
                                ): (
                                  null
                                )
                                }
                              </li>
                            ):null}
                            {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                              this.props.detail_data.specific_user_detail.result.Role === 2 ||
                              this.props.detail_data.specific_user_detail.result.Role === 3 ||
                              this.props.detail_data.specific_user_detail.result.Role === 4 ? (
                                <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"exam")}>
                                  <a href="/exam-schedule" className="nav-link"><i className="flaticon-shopping-list" /><span >Exam</span></a>
                                  { this.state.displayexam == true ? (
                                  <ul className="nav sub-group-menu">
                                  {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                    this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                    this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                    this.props.detail_data.specific_user_detail.result.Role === 4 ? (
                                      <li className="nav-item" onClick={e => this.openPageHandler(e,"page-exam-schedule")}>
                                        <a href="/exam-schedule" className="nav-link"><i className="fas fa-angle-right" />Exam
                                          Schedule</a>
                                      </li>
                                    ):null}
                                    {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                      this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                      this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                      this.props.detail_data.specific_user_detail.result.Role === 4 ? (
                                        <li className="nav-item" onClick={e => this.openPageHandler(e,"page-exam-grade")}>
                                          <a href="/exam-grade" className="nav-link"><i className="fas fa-angle-right" />Exam
                                            Grades</a>
                                        </li>
                                      ):null}
                                      {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 4 ? (
                                          <li className="nav-item" onClick={e => this.openPageHandler(e,"page-exam-result")}>
                                            <a href="/exam-result" className="nav-link"><i className="fas fa-angle-right" />Exam
                                              Result</a>
                                          </li>
                                        ):null}

                                  </ul>
                                   ): (
                                    null
                                  )
                                  }
                                </li>
                              ):null}
                              {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                this.props.detail_data.specific_user_detail.result.Role === 5 ||
                                this.props.detail_data.specific_user_detail.result.Role === 6 ||
                                this.props.detail_data.specific_user_detail.result.Role === 7 ? (
                                  <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"transport")}>
                                    <a href="/" className="nav-link"><i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" /><span >Transport</span></a>
                                    { this.state.displaytransport == true ? (
                                    <ul className="nav sub-group-menu">
                                    {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                      this.props.detail_data.specific_user_detail.result.Role === 5 ||
                                      this.props.detail_data.specific_user_detail.result.Role === 7 ? (
                                        <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-vehicle")}>
                                          <a href="/add-vehicle" className="nav-link"><i className="fas fa-angle-right" />Add
                                            Vehicle</a>
                                        </li>
                                      ):null}
                                      {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 5 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 6 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 7 ? (
                                          <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-vehicle")}>
                                            <a href="/all-vehicle" className="nav-link"><i className="fas fa-angle-right" />All
                                              Vehicle</a>
                                          </li>
                                        ):null}
                                        {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                          this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                            <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-transport")}>
                                              <a href="/add-transport" className="nav-link"><i className="fas fa-angle-right" />Add Transport
                                              </a>
                                            </li>
                                          ):null}
                                          {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 5 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 6 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 7 ? (
                                              <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-transport")}>
                                                <a href="/all-transport" className="nav-link"><i className="fas fa-angle-right" />All Transport
                                                </a>
                                              </li>
                                            ):null}

                                    </ul>
                                    ): (
                                      null
                                    )
                                    }
                                  </li>
                                ):null}
                                {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 5 ||
                                  this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                    <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"hostel")}>
                                      <a href="/all-hostels" className="nav-link"><i className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" /><span >Hostel</span></a>
                                      { this.state.displayhostel == true ? (
                                      <ul className="nav sub-group-menu">
                                      {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 5 ||
                                        this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                          <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-hostels")}>
                                            <a href="/all-hostel" className="nav-link"><i className="fas fa-angle-right" />All
                                              Hostels</a>
                                          </li>
                                        ):null}
                                        {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                          this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                            <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-hostel")}>
                                              <a href="/add-hostel" className="nav-link"><i className="fas fa-angle-right" />Add New
                                                Hostel</a>
                                            </li>
                                          ):null}
                                          {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 5 ||
                                            this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                                              <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-rooms")}>
                                                <a href="/all-room" className="nav-link"><i className="fas fa-angle-right" />All
                                                  Rooms</a>
                                              </li>
                                            ):null}
                                            {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                              this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                                <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-room")}>
                                                  <a href="/add-room" className="nav-link"><i className="fas fa-angle-right" />Add New
                                                    Room</a>
                                                </li>
                                              ):null}
                                              {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                                this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                                  <li className="nav-item" onClick={e => this.openPageHandler(e,"page-assign-room")}>
                                                    <a href="/assign-room" className="nav-link"><i className="fas fa-angle-right" />Assign
                                                      Room To Student</a>
                                                  </li>
                                                ):null}
                                                {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                                  this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                                  this.props.detail_data.specific_user_detail.result.Role === 3 ||
                                                  this.props.detail_data.specific_user_detail.result.Role === 4 ||
                                                  this.props.detail_data.specific_user_detail.result.Role === 5 ? (
                                                    <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-assign-room")}>
                                                      <a href="/all-assign-room" className="nav-link"><i className="fas fa-angle-right" />All Assign
                                                        Room </a>
                                                    </li>
                                                  ):null}

                                      </ul>
                                      ): (
                                        null
                                      )
                                      }
                                    </li>
                                  ):null}

                    {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                      this.props.detail_data.specific_user_detail.result.Role === 2 ||
                      this.props.detail_data.specific_user_detail.result.Role === 3 ||
                      this.props.detail_data.specific_user_detail.result.Role === 4 ||
                      this.props.detail_data.specific_user_detail.result.Role === 5 ||
                      this.props.detail_data.specific_user_detail.result.Role === 6 ? (
                        <li className="nav-item">
                          <a href="/notice-board" className="nav-link"><i className="flaticon-script" /><span>Notice</span></a>
                        </li>
                      ):null}
                      {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                        this.props.detail_data.specific_user_detail.result.Role === 2 ||
                        this.props.detail_data.specific_user_detail.result.Role === 3 ? (
                          <li className="nav-item sidebar-nav-item" onClick={e => this.showDropdownMenu(e,"message")}>
                            <a href="#" className="nav-link"><i className="flaticon-menu-1" /><span >Message</span></a>
                            { this.state.displaymessage == true ? (
                            <ul className="nav sub-group-menu">
                            {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                              this.props.detail_data.specific_user_detail.result.Role === 2 ||
                              this.props.detail_data.specific_user_detail.result.Role === 3 ? (
                                <li className="nav-item" onClick={e => this.openPageHandler(e,"page-add-message")}>
                                  <a href="/add-message" className="nav-link"><i className="fas fa-angle-right" />Add Message</a>
                                </li>
                              ):null}
                              {this.props.detail_data.specific_user_detail.result.Role === 1 ||
                                this.props.detail_data.specific_user_detail.result.Role === 2 ||
                                this.props.detail_data.specific_user_detail.result.Role === 3 ? (
                                  <li className="nav-item" onClick={e => this.openPageHandler(e,"page-all-message")}>
                                    <a href="/all-message" className="nav-link"><i className="fas fa-angle-right" />All Message</a>
                                  </li>
                                ):null}


                            </ul>
                             ): (
                              null
                            )
                            }
                          </li>
                        ):null}

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
                  </ul>
                </div>
              </div>
              ):null
            }
          </>
        );
    }
}

const mapStateToProps = state => ({
  detail_data: state.SpecificUserDetail
});

export default connect(mapStateToProps, null)(Sidebar);;
