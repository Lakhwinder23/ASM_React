import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
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
  const [row,setRow] = useState([])
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Book Name',
        field: 'bookname',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Language',
        field: 'language',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Book Type',
        field: 'booktype',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Subject',
        field: 'subject',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Writter',
        field: 'writter',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Class',
        field: 'class',
        sort: 'asc',
        width: 150
      },
      {
        label: 'User Name',
        field: 'username',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Book Return',
        field: 'bookreturn',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Book Assign Date',
        field: 'bookassigndate',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Book Submit Date',
        field: 'booksubmitdate',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Book Return Date',
        field: 'bookreturndate',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Book Charges',
        field: 'bookcharges',
        sort: 'asc',
        width: 100
      }
    ],
    rows: []
  });
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

//when allAssignBookInfo data change than data add into constant,hook start
useMemo(()=>{
  if(allAssignBookInfo && allAssignBookInfo.length > 0){
    let arrray = []
    allAssignBookInfo.map((item,index)=>{
      let new_object = {
        id:item.id,
        bookname: item.BookName,
        language:item.Language,
        booktype:item.BookType,
        subject:item.SubjectName != null ? item.SubjectName : '-',
        writter:item.Writter,
        class:item.ClassName != null && item.MediumName != null ? item.ClassName + item.MediumName : '-',
        username:item.name,
        bookreturn:item.BookReturn,
        bookassigndate:item.BookAssignDate,
        booksubmitdate:item.BookSubmitDate,
        bookreturndate:item.BookReturnDate,
        bookcharges:item.BookCharges
      }
      console.log("new_object",new_object)
      arrray.push(new_object)
    })
    console.log("arrray",arrray)
    setRow(arrray)
  }

},[allAssignBookInfo])
//when allAssignBookInfo data change than data add into constant,hook end

//when row data change than data add into constant,hook start
useMemo(() =>{
  if(row && row.length > 0){
    setDatatable({...datatable,rows:row})
  }
},[row])
//when row data change than data add into constant,hook end
   //hooks end

// component function start

  const callbackFunction = (childData) => {
    setActivestate(childData)
}

// component function end

//constant of component Start
const widerData = {
  columns: [
    ...datatable.columns.map((col) => {
      col.width = 200;
      return col;
    }),
  ],
  rows: [...datatable.rows],
};
//constant of component end
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
                    <MDBDataTable
                      responsive
                      responsiveSm
                      responsiveMd
                      responsiveLg
                      responsiveXl
                      scrollX
                      striped
                      hover
                      data={widerData}
                    />
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
