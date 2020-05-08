import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector,useDispatch } from 'react-redux'
import { fetchAllFeesCollection } from '../Redux/AllFeesCollection/AllFeesCollectionActions'

function AllFeesCollection() {
  // store data access start
  const allFeesCollectionData = useSelector(state =>state.AllFeesCollection)
  // store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allFeesCollectionResult,setFeesCollectionResult] = useState([])
  const [allFeesCollectionInfo,setFeesCollectionInfo] = useState([])
  console.log("allFeesCollectionInfo",allFeesCollectionInfo)
  const [activestate,setActivestate] = useState('')
  // component all states define End

   //hooks start
   // fetch allFeesCollection api hook start
   useEffect(() =>{
     dispatch(fetchAllFeesCollection())
   },[dispatch])
  // fetch allFeesCollection api hook End

  // add data of allFeesCollection api into constant,hook start
   useMemo(() =>{
     if(allFeesCollectionData && allFeesCollectionData.all_fees_collection && allFeesCollectionData.all_fees_collection.result && allFeesCollectionData.all_fees_collection.success === true){
       setFeesCollectionResult(allFeesCollectionData.all_fees_collection.result)
     }
   },[allFeesCollectionData])
  // add data of allFeesCollection api into constant,hook End

  // add data of allFeesCollection api into constant,hook start
   useMemo(() =>{
     if(allFeesCollectionResult && allFeesCollectionResult.data){
       setFeesCollectionInfo(allFeesCollectionResult.data)
     }
   },[allFeesCollectionResult])
  // add data of allFeesCollection api into constant,hook End
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
                  <h3>Accounts</h3>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Fees Collection List</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Fees Table Area Start Here */}
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>All Fees Collection List</h3>
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
                        <div className="col-3-xxxl col-xl-3 col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by ID ..." className="form-control" />
                        </div>
                        <div className="col-4-xxxl col-xl-4 col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by Name ..." className="form-control" />
                        </div>
                        <div className="col-4-xxxl col-xl-3 col-lg-3 col-12 form-group">
                          <input type="text" placeholder="Search by Phone" className="form-control" />
                        </div>
                        <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
                          <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                        </div>
                      </div>
                    </form>
                    <div className="table-responsive">
                      <table className="table data-table text-nowrap">
                        <thead>
                          <tr>
                            <th>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input checkAll" />
                                <label className="form-check-label">ID</label>
                              </div>
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Medium</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Expense</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>E-mail</th>
                            <th />
                          </tr>
                        </thead>
                        {allFeesCollectionData.all_fees_collection_loading === false ? allFeesCollectionInfo && allFeesCollectionInfo.length > 0 ? (
                        <tbody>
                          {allFeesCollectionInfo.map((item,index) =>(
                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">{item.id}</label>
                              </div>
                            </td>
                            <td><img src="img/figure/student2.png" alt="student" /></td>
                            <td>{item.StudentName}</td>
                            <td>{item.StudentGender}</td>
                            <td>{item.MediumName}</td>
                            <td>{item.ClassName}</td>
                            <td>{item.SectionName}</td>
                            <td>{Object.keys(allFeesCollectionInfo[index])[3]}</td>
                            <td>${item.MonthFees}</td>
                            {item.status == "paid" ? (
                              <td className="badge badge-pill badge-success d-block mg-t-8">{item.Status}</td>
                            ) : (
                              <td className="badge badge-pill badge-danger d-block mg-t-8">{item.Status}</td>
                            )}
                            <td>{item.StudentEmail}</td>
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
                      (<tr><td colspan="7"><h6 className="text-center">No data available in table</h6></td></tr>)
                    :(<tr>
                      <td colspan="7">
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
                {/* Fees Table Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );
}

export default AllFeesCollection;
