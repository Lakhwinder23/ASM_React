import React, {useState,useEffect,useMemo} from 'react';
import { MDBDataTable } from 'mdbreact';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSelector,useDispatch } from 'react-redux'
import {
  fetchAllMediums
} from '../Redux/AllMediums/AllMediumActions'

function AllMediums() {
  const mediums = useSelector(state =>state.AllMedium)
  console.log("mediums",mediums);
  const dispatch = useDispatch()
    const [allMediumsInfo,setAllMediumsInfo] = useState([])
    console.log("allMediumsInfo",allMediumsInfo);
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
          label: 'Medium Name',
          field: 'mediumname',
          sort: 'asc',
          width: 200
        }
      ],
      rows: []
    });
    useEffect(() =>{
      dispatch(fetchAllMediums())
    },[dispatch])

    useMemo(()=>{
      if(mediums && mediums.all_mediums && mediums.all_mediums.success === true && mediums.all_mediums.result){
        setAllMediumsInfo(mediums.all_mediums.result)
      }
    },[mediums])

    //when allMediumsInfo data change than data add into constant,hook start
    useMemo(()=>{
      if(allMediumsInfo && allMediumsInfo.length > 0){
        let arrray = []
        allMediumsInfo.map((item,index)=>{
          let new_object = {
            id:item.id,
            mediumname:item.MediumName
          }
          console.log("new_object",new_object)
          arrray.push(new_object)
        })
        console.log("arrray",arrray)
        setRow(arrray)
      }

    },[allMediumsInfo])
    //when allMediumsInfo data change than data add into constant,hook end

    //when row data change than data add into constant,hook start
    useMemo(() =>{
      if(row && row.length > 0){
        setDatatable({...datatable,rows:row})
      }
    },[row])
    //when row data change than data add into constant,hook end


  const callbackFunction = (childData) => {
    setActivestate(childData)
  }

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
              <h3>Medium</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>All Mediums</li>
              </ul>
            </div>
            {/* Breadcubs Area End Here */}
            {/* Teacher Table Area Start Here */}
            <div className="card height-auto">
              <div className="card-body">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>All Mediums Data</h3>
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

export default AllMediums;
