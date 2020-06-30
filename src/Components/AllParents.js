import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllParents
} from '../Redux/AllParents/AllParentsActions'

function AllParents() {
  const parents = useSelector(state =>state.AllParents)
  console.log("parents",parents);
  const dispatch = useDispatch()
    const [parentResult,setParentResult] = useState([])
    const [allParentsInfo,setParentsInfo] = useState([])
    console.log("allParentsInfo",allParentsInfo);
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
          label: 'Religion',
          field: 'religion',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Occupation',
          field: 'occupation',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Address',
          field: 'address',
          sort: 'asc',
          width: 250
        },
        {
          label: 'Phone',
          field: 'phone',
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
    useEffect(() =>{
      dispatch(fetchAllParents())
    },[dispatch])

    useMemo(()=>{
      if(parents && parents.all_parents && parents.all_parents.result){
        setParentResult(parents.all_parents.result)
      }
    },[parents.all_parents.result])

    useMemo(()=>{
      if(parentResult && parentResult.data){
            setParentsInfo(parentResult.data)
      }
    },[parentResult])


    useMemo(()=>{
      if(allParentsInfo && allParentsInfo.length > 0){
        let arrray = []
        allParentsInfo.map((item,index)=>{
          let new_object = {
            id:item.id,
            name: item.ParentName,
            gender:item.Gender,
            religion:item.Religion,
            occupation:item.SelfOccupation,
            address:item.Address,
            phone:item.Mobile,
            email:item.email
          }
          console.log("new_object",new_object)
          arrray.push(new_object)
        })
        console.log("arrray",arrray)
        setRow(arrray)
      }

    },[allParentsInfo])

    useMemo(() =>{
      if(row && row.length > 0){
        setDatatable({...datatable,rows:row})
      }
    },[row])

  const callbackFunction = (childData) => {
    setActivestate(childData)
  }

  const widerData = {
    columns: [
      ...datatable.columns.map((col) => {
        col.width = 200;
        return col;
      }),
    ],
    rows: [...datatable.rows],
  };
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
              <h3>Parents</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>All Parents</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Teacher Table Area Start Here */}
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>All Parents Data</h3>
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
            {/* Teacher Table Area End Here */}
            <Footer />
          </div>
        </div>
        {/* Page Area End Here */}
      </div>
        );
}

export default AllParents;
