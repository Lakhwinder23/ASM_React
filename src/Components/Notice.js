import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import CreateNotice from './CreateNotice';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllNotices
} from '../Redux/AllNotices/AllNoticeActions'
import * as moment from 'moment';


function Notice() {

  const notice_data = useSelector(state =>state.AllNotice)
  console.log("notice_data",notice_data);
  const dispatch = useDispatch()
    const [noticeResult,setNoticeResult] = useState([])
    console.log("noticeResult",noticeResult);
    let previous_color = "bg-skyblue"
    useEffect(() =>{
      dispatch(fetchAllNotices())
    },[dispatch])

    useMemo(()=>{
      if(notice_data && notice_data.all_notice && notice_data.all_notice.result){
        setNoticeResult(notice_data.all_notice.result)
      }
    },[notice_data.all_notice.result])



  const [activestate,setActivestate] = useState('')
  const callbackFunction = (childData) => {
    setActivestate(childData)
}
        return (
            <div id="wrapper" className={activestate ? 'wrapper bg-ash sidebar-collapsed': 'wrapper bg-ash'}>
        {/* Header Menu Area Start Here */}
       <Header parentCallback = {() =>callbackFunction()}/>
        {/* Header Menu Area End Here */}
        {/* Page Area Start Here */}
        <div className="dashboard-page-one">
          {/* Sidebar Area Start Here */}
         <Sidebar />
          {/* Sidebar Area End Here */}
          <div className="dashboard-content-one">
            {/* Breadcubs Area Start Here */}
            <div className="breadcrumbs-area">
              <h3>Notice Board</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Notice</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            <div className="row">
              {/* Add Notice Area Start Here */}
              <CreateNotice />
              {/* Add Notice Area End Here */}
              {/* All Notice Area Start Here */}
              <div className="col-8-xxxl col-12">
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>Notice Board</h3>
                      </div>
                      <div className="dropdown">
                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">...</a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                          <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                          <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                        </div>
                      </div>
                    </div>
                    <form className="mg-b-20">
                      <div className="row gutters-8">
                        <div className="col-lg-5 col-12 form-group">
                          <input type="text" placeholder="Search by Date ..." className="form-control" />
                        </div>
                        <div className="col-lg-5 col-12 form-group">
                          <input type="text" placeholder="Search by Title ..." className="form-control" />
                        </div>
                        <div className="col-lg-2 col-12 form-group">
                          <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                        </div>
                      </div>
                    </form>
                    <div className="notice-board-wrap">
                    {notice_data.all_notice_loading === false ? noticeResult ? noticeResult.map((item,index) =>{
                      const split_data = (item.created_at).split(" ")
                      const date = split_data[0]
                      const converted_date = moment(date).format('DD MMM, YYYY');
                      const currentDate = moment()
                      const given_date_time = moment(item.created_at)
                      const time_left = moment(given_date_time.diff(currentDate))
                      console.log("time_left",time_left.minutes())
                      let next_color = ""
                      if(previous_color == "bg-skyblue"){
                        next_color = "bg-yellow"
                        previous_color = next_color
                      }
                      else if(previous_color == "bg-yellow"){
                        next_color = "bg-pink"
                        previous_color = next_color
                      }
                      else if(previous_color == "bg-pink"){
                        next_color = "bg-skyblue"
                        previous_color = next_color
                      }
                      console.log("next_color",next_color)
                      return (
                        <div className="notice-list" key={index}>
                          <div className={`post-date  ${next_color}`}>{converted_date}</div>
                          <h6 className="notice-title"><a href="#">{item.Title}</a></h6>
                          <div className="entry-meta">  Admin / <span>{time_left.minutes()} min ago</span></div>
                        </div>
                      )

                    }):(<h6>No data available</h6>):(
                      <Loader
                      className = "student-detail-loader"
                    type="MutatingDots"
                    color="#fea801"
                    height={100}
                    width={100}

       />
                    )}
                    </div>
                  </div>
                </div>
              </div>
              {/* All Notice Area End Here */}
            </div>
           <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default Notice;
