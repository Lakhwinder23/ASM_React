import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector,useDispatch } from 'react-redux'
import {
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import { fetchAllBook } from '../Redux/AllBook/AllBookActions'



function AllBooks() {
  // store data access start
const allBookData = useSelector(state =>state.AllBook)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allBookResult,setBookResult] = useState([])
  const [allBookInfo,setBookInfo] = useState([])
  const [activestate,setActivestate] = useState('')
  const [row,setRow] = useState([])
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 100
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
        label: 'Total Books',
        field: 'totalbook',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Published',
        field: 'published',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Creating Date',
        field: 'creatingdate',
        sort: 'asc',
        width: 100
      }
    ],
    rows: []
  });
  // component all states define End

   //hooks start
   // fetch allBook  api hook start
   useEffect(() =>{
     dispatch(fetchAllBook())
   },[dispatch])
// fetch allBook api hook End

// add data of allFees api into constant,hook start
   useMemo(() =>{
     if(allBookData && allBookData.all_book && allBookData.all_book.result && allBookData.all_book.success === true){
       setBookResult(allBookData.all_book.result)
     }
     else{
       setBookResult([])
     }
   },[allBookData])
// add data of allFees api into constant,hook End

// when allBookResult data change than data add into constant,hook start
   useMemo(() =>{
     if(allBookData && allBookResult.data){
       setBookInfo(allBookResult.data)
     }
     else{
       setBookInfo([])
     }
   },[allBookResult])
// when allBookResult data change than data add into constant,hook End

//when allBookInfo data change than data add into constant,hook start
useMemo(()=>{
  if(allBookInfo && allBookInfo.length > 0){
    let arrray = []
    allBookInfo.map((item,index)=>{
      let new_object = {
        id:item.id,
        bookname: item.BookName,
        language:item.Language,
        booktype:item.BookType,
        subject:item.SubjectName != null ? item.SubjectName : '-',
        writter:item.Writter,
        class:item.ClassName != null && item.MediumName != null ? item.ClassName + item.MediumName : '-',
        totalbook:item.TotalBook,
        published:item.Published,
        creatingdate:item.Creatingdate
      }
      console.log("new_object",new_object)
      arrray.push(new_object)
    })
    console.log("arrray",arrray)
    setRow(arrray)
  }

},[allBookInfo])
//when allBookInfo data change than data add into constant,hook end

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
                    <li>All Library Books</li>
                  </ul>
                </div>
                {/* Breadcubs Area End Here */}
                {/* Teacher Table Area Start Here */}
                <div className="card height-auto">
                  <div className="card-body">
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3>All Books</h3>
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

export default AllBooks;
