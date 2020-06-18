import React, {useState,useEffect,useMemo} from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector,useDispatch } from 'react-redux'
import { fetchAllAssignBook } from '../Redux/AllAssignBook/AllAssignBookActions'


function AllAssignBooks() {
  // store data access start
const allAssignBookData = useSelector(state =>state.AllAssignBook)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allAssignBookResult,setAssignBookResult] = useState([])
  const [allAssignBookInfo,setAssignBookInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  // component all states define End

   //hooks start
   // fetch allAssignBook  api hook start
   useEffect(() =>{
     dispatch(fetchAllAssignBook())
   },[dispatch])
// fetch allAssignBook  api hook End

// add data of allAssignBook api into constant,hook start
   useMemo(() =>{
     if(allAssignBookData && allAssignBookData.all_assign_book && allAssignBookData.all_assign_book.result && allAssignBookData.all_assign_book.success === true){
       setAssignBookResult(allAssignBookData.all_assign_book.result)
     }
   },[allAssignBookData])
// add data of allAssignBook api into constant,hook End

// when allAssignBookResult data change than data add into constant,hook start
   useMemo(() =>{
     if(allAssignBookResult && allAssignBookResult.data){
       setAssignBookInfo(allAssignBookResult.data)
     }
   },[allAssignBookResult])
// when allAssignBookResult data change than data add into constant,hook End
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
                  <h3>Library</h3>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>All Assign Books</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Teacher Table Area Start Here */}
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>All Assign Books</h3>
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
                          <input type="text" placeholder="Search by Phone ..." className="form-control" />
                        </div>
                        <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
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
                            <th>Book Name</th>
                            <th>Language</th>
                            <th>Book Type</th>
                            <th>Subject</th>
                            <th>Writter</th>
                            <th>Class</th>
                            <th>User Name</th>
                            <th>Book Return</th>
                            <th>Book Assign Date</th>
                            <th>Book Submit Date</th>
                            <th>Book Return Date</th>
                            <th>Book Charges</th>
                            <th />
                          </tr>
                        </thead>
                        {allAssignBookData.all_assign_book_loading === false ? allAssignBookInfo && allAssignBookInfo.length > 0 ? (
                        <tbody>
                        {allAssignBookInfo.map((item,index) =>(
                          <tr>
                            <td>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">{item.id}</label>
                              </div>
                            </td>
                            <td>{item.BookName}</td>
                            <td>{item.Language}</td>
                            <td>{item.BookType}</td>
                            <td>{item.SubjectName != null ? item.SubjectName : (<>-</>) }</td>
                            <td>{item.Writter}</td>
                            <td>{item.ClassName != null && item.MediumName != null ? item.ClassName + item.MediumName : (<>-</>) }</td>
                            <td>{item.name}</td>
                            <td>{item.BookReturn}</td>
                            <td>{item.BookAssignDate}</td>
                            <td>{item.BookSubmitDate}</td>
                            <td>{item.BookReturnDate}</td>
                            <td>{item.BookCharges}</td>
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
                {/* Teacher Table Area End Here */}
                <Footer />
              </div>
            </div>
            {/* Page Area End Here */}
          </div>
        );
}

export default AllAssignBooks;
