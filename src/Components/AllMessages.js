import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSelector,useDispatch } from 'react-redux'
import { fetchAllMessage } from '../Redux/AllMessage/AllMessageActions'

function AllMessages() {
  // store data access start
const allMessageData = useSelector(state =>state.AllMessage)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allMessageInfo,setMessageInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  // component all states define End

   //hooks start
   // fetch allFees and teachers api hook start
   useEffect(() =>{
     dispatch(fetchAllMessage())
   },[dispatch])
// fetch allFees and teachers api hook End

// add data of allFees api into constant,hook start
   useMemo(() =>{
     if(allMessageData && allMessageData.all_message && allMessageData.all_message.result && allMessageData.all_message.success === true){
       setMessageInfo(allMessageData.all_message.result)
     }
   },[allMessageData])
// add data of allFees api into constant,hook End


   //hooks end

// component function start

  const callbackFunction = (childData) => {
    setActivestate(childData)
}

// component function end
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
            <h3>Messaging</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>All Message</li>
            </ul>
          </div>
          {/* Breadcubs Area End Here */}
          {/* Class Table Area Start Here */}
          <div className="card height-auto">
                   <div className="card-body">
                     <div className="heading-layout1">
                       <div className="item-title">
                         <h3>All Message Lists</h3>
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
                         <div className="col-lg-4 col-12 form-group">
                          <input type="text" placeholder="Search by Sender ..." className="form-control" />
                         </div>
                         <div className="col-lg-4 col-12 form-group">
                          <input type="text" placeholder="Search by Receiver" className="form-control" />
                         </div>
                         <div className="col-lg-2 col-12 form-group"></div>
                         <div className="col-lg-2 col-12 form-group">
                           <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                         </div>
                       </div>
                     </form>
                     <div className="table-responsive">
                       <table className="table display data-table text-nowrap">
                         <thead>
                           <tr>
                             <th>
                               <div className="form-check">
                                 <input type="checkbox" className="form-check-input checkAll" />
                                 <label className="form-check-label">ID</label>
                               </div>
                             </th>
                             <th>Sender</th>
                             <th>Receiver</th>
                             <th>Title</th>
                             <th>Message</th>
                             <th />
                           </tr>
                         </thead>
                         {allMessageData.all_message_loading === false ? allMessageInfo && allMessageInfo.length > 0 ? (
                         <tbody>
                         {allMessageInfo.map((item,index) =>(
                           <tr key={index}>
                             <td>
                               <div className="form-check">
                                 <input type="checkbox" className="form-check-input" />
                                 <label className="form-check-label">{item.id}</label>
                               </div>
                             </td>
                              <td>{item.CreatedById}</td>
                             <td>{item.UserId}</td>
                             <td>{item.title}</td>
                             <td>{item.message}</td>
                             <td>
                               <div className="dropdown">
                                 <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                   <span className="flaticon-more-button-of-three-dots" />
                                 </a>
                                 <div className="dropdown-menu dropdown-menu-right">
                                   <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red" />Close</a>
                                   <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green" />Edit</a>
                                   <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel" />Refresh</a>
                                 </div>
                               </div>
                             </td>
                           </tr>
                         ))}
                         </tbody>
                       ):
                       (<tr><td colspan="6"><h6 className="text-center">No data available in table</h6></td></tr>)
                     :(<tr>
                       <td colspan="6">
                     <Loader
                     className = "student-detail-loader"
                   type="MutatingDots"
                   color="#fea801"
                   height={100}
                   width={100}

                     />
                     </td>
                     </tr>)}
                       </table>
                     </div>
                   </div>
                 </div>
          {/* Class Table Area End Here */}
          <Footer />
        </div>
      </div>
      {/* Page Area End Here */}
    </div>
        );
}

export default AllMessages;
