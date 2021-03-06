import React, { useMemo,useState } from 'react';
import { loginCheck } from '../Redux/LoginCheck/LoginCheckActions';
import {useDispatch,useSelector } from 'react-redux'

function Header({parentCallback}){
  // store data access start
const specificUserDetailData = useSelector(state =>state.SpecificUserDetail)
// store data access End
  const dispatch = useDispatch()
  const [active,setActivestate] = useState(false)
  const [roleName,setRoleName] = useState("")

  useMemo(() =>{
    if(specificUserDetailData &&
      specificUserDetailData.specific_user_detail &&
      Object.keys(specificUserDetailData.specific_user_detail).length > 0 &&
      specificUserDetailData.specific_user_detail.success === true &&
      specificUserDetailData.specific_user_detail.result &&
      Object.keys(specificUserDetailData.specific_user_detail.result).length > 0 &&
      specificUserDetailData.specific_user_detail.result.Role
    ){
      if(specificUserDetailData.specific_user_detail.result.Role === 1){
        setRoleName("Admin")
      }
      else if(specificUserDetailData.specific_user_detail.result.Role === 2){
        setRoleName("Teacher")
      }
      else if(specificUserDetailData.specific_user_detail.result.Role === 3){
        setRoleName("Student")
      }
      else if(specificUserDetailData.specific_user_detail.result.Role === 4){
        setRoleName("Parent")
      }
      else if(specificUserDetailData.specific_user_detail.result.Role === 5){
        setRoleName("Clerk")
      }
      else if(specificUserDetailData.specific_user_detail.result.Role === 6){
        setRoleName("Librarian")
      }
      else if(specificUserDetailData.specific_user_detail.result.Role === 7){
        setRoleName("Bus Driver")
      }
    }

  },[specificUserDetailData])


  const toggleClass =() =>{
    setActivestate(!active)
  }

  const sendData = (value1) => {
    parentCallback(value1);
}

useMemo(() =>{
  sendData(active)
},[active])

const logout = () =>{
  localStorage.removeItem('user');
  localStorage.removeItem('access_token');
  const login_check_info = false
  dispatch(loginCheck(login_check_info))

  if (localStorage.getItem('user') === null && localStorage.getItem('access_token') === null){
    window.location.reload();

  }
}
  return(
    <div className="navbar navbar-expand-md header-menu-one bg-light">
    <div className="nav-bar-header-one">
      <div className="header-logo">
        <a href="/">
          <img src="img/logo.png" alt="logo" />
        </a>
      </div>
      <div className="toggle-button sidebar-toggle">
        <button type="button" className="item-link" onClick={() =>toggleClass()}>
          <span className="btn-icon-wrap">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </div>
    <div className="d-md-none mobile-nav-bar">
      <button className="navbar-toggler pulse-animation" type="button" data-toggle="collapse" data-target="#mobile-navbar" aria-expanded="false">
        <i className="far fa-arrow-alt-circle-down" />
      </button>
      <button type="button" className="navbar-toggler sidebar-toggle-mobile">
        <i className="fas fa-bars" />
      </button>
    </div>
    <div className="header-main-menu collapse navbar-collapse" id="mobile-navbar">
      <ul className="navbar-nav">
        <li className="navbar-item header-search-bar">
          <div className="input-group stylish-input-group">
            <span className="input-group-addon">
              <button type="submit">
                <span className="flaticon-search" aria-hidden="true" />
              </button>
            </span>
            <input type="text" className="form-control" placeholder="Find Something . . ." />
          </div>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="navbar-item dropdown header-admin">
          <a className="navbar-nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          {specificUserDetailData &&
             specificUserDetailData.specific_user_detail &&
              Object.keys(specificUserDetailData.specific_user_detail).length > 0 &&
              specificUserDetailData.specific_user_detail.success === true &&
              specificUserDetailData.specific_user_detail.result &&
              Object.keys(specificUserDetailData.specific_user_detail.result).length > 0 ? (
                <div className="admin-title">
                  <h5 className="item-title">{
                      specificUserDetailData.specific_user_detail.result.Firstname ?
                      specificUserDetailData.specific_user_detail.result.Firstname + " " + specificUserDetailData.specific_user_detail.result.Lastname
                      : null
                    }</h5>
                  <span>{roleName != "" ? roleName : null}</span>
                </div>
              ):null}
            <div className="admin-img">
              <img src="img/figure/admin.jpg" alt="Admin" />
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="item-header">
              <h6 className="item-title">{specificUserDetailData &&
                 specificUserDetailData.specific_user_detail &&
                  Object.keys(specificUserDetailData.specific_user_detail).length > 0 &&
                  specificUserDetailData.specific_user_detail.success === true &&
                  specificUserDetailData.specific_user_detail.result &&
                  Object.keys(specificUserDetailData.specific_user_detail.result).length > 0 ?
                  specificUserDetailData.specific_user_detail.result.Firstname + " " + specificUserDetailData.specific_user_detail.result.Lastname
                  :null
                }
                  </h6>
            </div>
            <div className="item-content">
              <ul className="settings-list">
                <li><a href="#"><i className="flaticon-user" />My Profile</a></li>
                <li><a href="#"><i className="flaticon-list" />Task</a></li>
                <li><a href="#"><i className="flaticon-chat-comment-oval-speech-bubble-with-text-lines" />Message</a></li>
                <li><a href="#"><i className="flaticon-gear-loading" />Account Settings</a></li>
                <li onClick={() =>logout()}><a href="#"><i className="flaticon-turn-off" />Log Out</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li className="navbar-item dropdown header-message">
          <a className="navbar-nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            <i className="far fa-envelope" />
            <div className="item-title d-md-none text-16 mg-l-10">Message</div>
            <span>5</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="item-header">
              <h6 className="item-title">05 Message</h6>
            </div>
            <div className="item-content">
              <div className="media">
                <div className="item-img bg-skyblue author-online">
                  <img src="img/figure/student11.png" alt="img" />
                </div>
                <div className="media-body space-sm">
                  <div className="item-title">
                    <a href="#">
                      <span className="item-name">Maria Zaman</span>
                      <span className="item-time">18:30</span>
                    </a>
                  </div>
                  <p>What is the reason of buy this item.
                    Is it usefull for me.....</p>
                </div>
              </div>
              <div className="media">
                <div className="item-img bg-yellow author-online">
                  <img src="img/figure/student12.png" alt="img" />
                </div>
                <div className="media-body space-sm">
                  <div className="item-title">
                    <a href="#">
                      <span className="item-name">Benny Roy</span>
                      <span className="item-time">10:35</span>
                    </a>
                  </div>
                  <p>What is the reason of buy this item.
                    Is it usefull for me.....</p>
                </div>
              </div>
              <div className="media">
                <div className="item-img bg-pink">
                  <img src="img/figure/student13.png" alt="img" />
                </div>
                <div className="media-body space-sm">
                  <div className="item-title">
                    <a href="#">
                      <span className="item-name">Steven</span>
                      <span className="item-time">02:35</span>
                    </a>
                  </div>
                  <p>What is the reason of buy this item.
                    Is it usefull for me.....</p>
                </div>
              </div>
              <div className="media">
                <div className="item-img bg-violet-blue">
                  <img src="img/figure/student11.png" alt="img" />
                </div>
                <div className="media-body space-sm">
                  <div className="item-title">
                    <a href="#">
                      <span className="item-name">Joshep Joe</span>
                      <span className="item-time">12:35</span>
                    </a>
                  </div>
                  <p>What is the reason of buy this item.
                    Is it usefull for me.....</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="navbar-item dropdown header-notification">
          <a className="navbar-nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            <i className="far fa-bell" />
            <div className="item-title d-md-none text-16 mg-l-10">Notification</div>
            <span>8</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="item-header">
              <h6 className="item-title">03 Notifiacations</h6>
            </div>
            <div className="item-content">
              <div className="media">
                <div className="item-icon bg-skyblue">
                  <i className="fas fa-check" />
                </div>
                <div className="media-body space-sm">
                  <div className="post-title">Complete Today Task</div>
                  <span>1 Mins ago</span>
                </div>
              </div>
              <div className="media">
                <div className="item-icon bg-orange">
                  <i className="fas fa-calendar-alt" />
                </div>
                <div className="media-body space-sm">
                  <div className="post-title">Director Metting</div>
                  <span>20 Mins ago</span>
                </div>
              </div>
              <div className="media">
                <div className="item-icon bg-violet-blue">
                  <i className="fas fa-cogs" />
                </div>
                <div className="media-body space-sm">
                  <div className="post-title">Update Password</div>
                  <span>45 Mins ago</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="navbar-item dropdown header-language">
          <a className="navbar-nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-globe-americas" />EN</a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">English</a>
            <a className="dropdown-item" href="#">Spanish</a>
            <a className="dropdown-item" href="#">Franchis</a>
            <a className="dropdown-item" href="#">Chiness</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  )
}


export default Header;
