import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable,MDBBadge  } from 'mdbreact';
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
  const [row,setRow] = useState([])
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 20,
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Gender',
        field: 'gender',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Medium',
        field: 'medium',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Class',
        field: 'class',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Section',
        field: 'section',
        sort: 'asc',
        width: 1000
      },
      {
        label: 'Expense',
        field: 'expense',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Amount',
        field: 'amount',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 100
      }
    ],
    rows: []
  });
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

  //when allFeesCollectionInfo data change than data add into constant,hook start
  useMemo(()=>{
    if(allFeesCollectionInfo && allFeesCollectionInfo.length > 0){
      let arrray = []
      allFeesCollectionInfo.map((item,index)=>{
        let new_object = {
          id:item.id,
          name: item.StudentName,
          gender:item.StudentGender,
          medium:item.MediumName,
          class:item.ClassName,
          section:item.SectionName,
          expense:Object.keys(allFeesCollectionInfo[index])[3],
          amount:item.MonthFees,
          status:(
          <MDBBadge pill color={item.Status == "Paid" ? 'success' : 'danger'} className={`p-7 ${item.Status == "Paid" ? 'pl-17 pr-17' : 'pl-10 pr-10'}`} key={index} searchvalue={item}>
            {item.Status}
          </MDBBadge>
        ),
          email:item.StudentEmail
        }
        console.log("new_object",new_object)
        arrray.push(new_object)
      })
      console.log("arrray",arrray)
      setRow(arrray)
    }

  },[allFeesCollectionInfo])
  //when allFeesCollectionInfo data change than data add into constant,hook end

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
                    <MDBDataTable
                      responsive
                      responsiveSm
                      responsiveMd
                      responsiveLg
                      responsiveXl
                      scrollX
                      striped
                      hover
                      autoWidth
                      data={widerData}
                    />
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
