import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable,MDBBadge  } from 'mdbreact';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSelector,useDispatch } from 'react-redux'
import { fetchAllExpense } from '../Redux/AllExpense/AllExpenseActions'

function AllExpense(){
  // store data access start
const allExpenseData = useSelector(state =>state.AllExpense)
// store data access End
  const dispatch = useDispatch()  // for accessing the redux function

  // component all states define start
  const [allExpenseResult,setAllExpenseResult] = useState([])
  const [allExpenseInfo,setAllExpenseInfo] = useState([])
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
        label: 'Expense Type',
        field: 'expensetype',
        sort: 'asc',
        width: 200
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
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 1000
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 100
      }
    ],
    rows: []
  });
  // component all states define End

   //hooks start
   // fetch allExpense  api hook start
   useEffect(() =>{
     dispatch(fetchAllExpense())
   },[dispatch])
// fetch allExpense  api hook End

// add data of allAssignBook api into constant,hook start
   useMemo(() =>{
     if(allExpenseData && allExpenseData.all_expense && allExpenseData.all_expense.result && allExpenseData.all_expense.success === true){
       setAllExpenseResult(allExpenseData.all_expense.result)
     }
   },[allExpenseData])
// add data of allAssignBook api into constant,hook End

// when allExpenseResult data change than data add into constant,hook start
   useMemo(() =>{
     if(allExpenseResult && allExpenseResult.data){
       setAllExpenseInfo(allExpenseResult.data)
     }
   },[allExpenseResult])
// when allExpenseResult data change than data add into constant,hook End

//when allExpenseInfo data change than data add into constant,hook start
useMemo(()=>{
  if(allExpenseInfo && allExpenseInfo.length > 0){
    let arrray = []
    allExpenseInfo.map((item,index)=>{
      let new_object = {
        id:item.Expenseid,
        name: item.Name,
        expensetype:item.ExpenseType,
        amount:item.Amount,
        status:(
        <MDBBadge pill color={item.Status == "Paid" ? 'success' : 'danger'} className={`p-7 ${item.Status == "Paid" ? 'pl-17 pr-17' : 'pl-10 pr-10'}`} key={index} searchvalue={item}>
          {item.Status}
        </MDBBadge>
      ),
        phone:item.Phone,
        email:item.Email,
        date:item.Date
      }
      console.log("new_object",new_object)
      arrray.push(new_object)
    })
    console.log("arrray",arrray)
    setRow(arrray)
  }

},[allExpenseInfo])
//when allExpenseInfo data change than data add into constant,hook end

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
// component function End

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
                  <a href="index-2.html">Home</a>
                </li>
                <li>All Expense</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Expanse Table Area Start Here */}
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>All Expenses</h3>
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
            {/* Expanse Table Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default AllExpense;
