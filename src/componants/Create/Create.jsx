import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlusSquare  } from 'react-icons/fi';
// import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import imgreport from '../images/dashboard/report.png';
import $ from 'jquery';
import { FaBars } from 'react-icons/fa';
// import { BsSearch } from 'react-icons/bs';
import { MdOutlineGpsFixed } from 'react-icons/md';
import userImg2 from '../images/home/Rectangle 143.png';
import { useContext } from 'react';
import { langContext } from '../context/store';
import { useEffect } from 'react';



function Create({token , baseURL , fetchSalesAll}) {


  let { isOpen , toggleOpen } = useContext(langContext);


  // const closeNavLink = () => {
  //   if(isOpen === false && $('body').width() < 570) {
  //       $('.sidebar').animate({'left' : '-240px'} , 500);
  //       setTimeout(() => {
  //           toggleOpen();
  //       }, 500);
  //   }
  // }
  
  
  function widthBody() {
      let width = $('body').width();
  
      if(isOpen === true) {
  
          if(width > 1000) {
              $('.sidebar').css({'width': '300px' , 'left' : '0px'});
              $('.sidebar .menu-links .cont-imgFooter').css({'width' : '130px' , 'height' : '110px'});
              $('.sidebar .menu-links ul>div').css('marginBottom' , '25px');
              $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'none');
              $('.dashboard .main').css({'width' : 'calc(100% - 300px)' , 'left' : '300px'});
              $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
          }
  
          if(width > 1200) {
              $('.dashboard .main .topbar .search-topbar').css('width' , '900px');
          }
  
          if(width > 1100) {
              $('.total-table').css('overflow-x' , 'auto');
          }
  
          // if(width < 1100 && width > 1000) {
          //     $('.total-table').css('overflow-x' , 'scroll');
          // }
  
          if(width < 1200 && width > 950) {
              $('.dashboard .main .topbar .search-topbar').css('width' , '650px');
          }
  
          if(width < 1000) {
              $('.sidebar').css({'width' : '240px' , 'left' : '-240px'});
              $('.sidebar .menu-links ul>div').css('marginBottom' , '20px');
              $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'flex');
              $('.sidebar .menu-links .cont-imgFooter').css({'width' : '130px' , 'height' : '110px'});
              $('.dashboard .main').css({'width' : '100%' , 'left' : '0'});
              $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
              $('.total-table').css('overflow-x' , 'auto');
              $('.total-table-clients').css('overflow-x' , 'auto');
          }
  
          if (width < 950 && width > 768) {
              $('.dashboard .main .topbar .search-topbar').css('width' , '550px');
          }
  
          if (width < 768 && width > 570) {
              $('.dashboard .main .topbar .search-topbar').css('width' , '500px');
          }
  
          if (width < 570) {
              $('.dashboard .main .topbar .search-topbar').css('width' , '300px');
              $('.dashboard .main .topbar .user-img').css({'width' : '45px' , 'height' : '45px'});
          }
      }
  
      else {
  
          if(width > 1000) {
              $('.sidebar').css({'width': '80px' , 'left' : '0px'});
              $('.sidebar .menu-links .cont-imgFooter').css({'width' : '60px' , 'height' : '60px'});
              $('.sidebar .menu-links ul>div').css('marginBottom' , '25px');
              $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'none');
              $('.dashboard .main').css({'width' : 'calc(100% - 80px)' , 'left' : '80px'});
              $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
          }
  
          if(width > 1200) {
              $('.dashboard .main .topbar .search-topbar').css('width' , '900px');
          }
  
          if(width < 1100 && width > 1000) {
              $('.total-table').css('overflow-x' , 'auto');
          }
  
          if(width < 1200 && width > 950) {
              $('.dashboard .main .topbar .search-topbar').css('width' , '650px');
          }
  
          if(width < 1000) {
              $('.sidebar').css({'width' : '240px' , 'left' : '0px'});
              $('.sidebar .menu-links ul>div').css('marginBottom' , '25px');
              $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'flex');
              $('.sidebar .menu-links .cont-imgFooter').css({'width' : '130px' , 'height' : '110px'});
              $('.dashboard .main').css({'width' : 'calc(100% - 240px)' , 'left' : '240px'});
              $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
              $('.total-table-clients').css('overflow-x' , 'auto');
          }
  
          if (width < 950 && width > 700) {
              $('.dashboard .main .topbar .search-topbar').css('width' , '400px');
          }
  
          if (width < 700 && width > 570) {
              $('.dashboard .main .topbar .user-img').css({'width' : '50px' , 'height' : '50px'});
              $('.dashboard .main .topbar .search-topbar').css('width' , '300px');
              $('.total-table-clients').css('overflow-x' , 'scroll');
          }
  
          if (width < 570) {
              $('.dashboard .main').css({'width' : '100%' , 'left' : '0'});
              $('.dashboard .main .topbar .search-topbar').css('width' , '300px');
              $('.dashboard .main .topbar .user-img').css({'width' : '45px' , 'height' : '45px'});
              $('.total-table-clients').css('overflow-x' , 'auto');
          }
      }
  }
  
  
  $(window).on('resize', () => {
      widthBody();
  });
  
  
  useEffect(() => {
      widthBody();
  }, [isOpen])








  const [idSales, setIdSales] = useState('');
  const [fromDate, setFromDate] = useState('');

  const [loadind, setLoadind] = useState(false);
  const [success, setSuccess] = useState('');
  const [show, setShow] = useState(true);

  const [routes, setRoutes] = useState([]);

  let apiURL = `${baseURL}route/list`;

  const getIDSales = (id) => {
    setIdSales(id)
  }

  const getFromDate = (index) => {
    setFromDate(index)
  }


  async function getRoute(e) {
    
    e.preventDefault();
    setLoadind(true);
    await axios.post(apiURL, {
      IDSales: idSales,
      RouteStartTime: fromDate,
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        // 'Access-Control-Allow-Origin': '*',
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      }
    })
    .then(res => {
      setSuccess(res.data.Success);
      setRoutes(res.data.Routes);
      setLoadind(false);
      setShow(false);
     })
     .catch((error) => {
       console.log(error)
     });
  }
  

  

  return (
    <>

      <div className="topbar">
          <div className="toggle-topbar" onClick={() => {
              toggleOpen();
              widthBody();
          }}>
              <FaBars />
          </div>
          {/* <div className="search-topbar">
              <div className="group">
                  <input type="text" placeholder='Search here..' />
                  <BsSearch />
              </div>
          </div> */}
          <div className="user-img">
              <img src={userImg2} alt="user" />
          </div>
      </div>

      <section className='dashpage sales-page py-5'>

          <div className="link-entries d-flex justify-content-between align-items-center mb-5">
            <div className="linkTo">
              <Link to='../addCreate'><FiPlusSquare /> Add</Link>
            </div>
            <div className="show-entires">
              {/* <p>Show ___ entires</p> */}
              <p></p>
            </div>
          </div>

          <div className="link-entries mb-5">
            <form onSubmit={getRoute}>
              <div className="row d-flex justify-content-center align-items-center gy-4">
                <div className="col-md-8 col-lg-9">
                  <div className="row d-flex justify-content-center align-items-center gy-4">
                    <div className="col-md-6 col-11">
                      {/* <div className="input-search position-relative">
                          <input type="text" className='bg-input form-control py-2 mx-auto' placeholder='Search by client or sale' required name="search-user" id="search-user" />
                          <BsSearch />
                      </div> */}
                      <label htmlFor="sales-name" className='mb-2 h6 fw-bold'>Saller Name</label>
                      <select onChange={(e) => {getIDSales(e.target.value)}}  name="salesLocation" required className='bg-input py-2 form-select' id="sales-name">
                        <option>Choose Name..</option>
                        {fetchSalesAll.map((item , i) => (
                          <option key={i} value={item.IDSales}>{item.Name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6 col-11">
                      {/* <div className="input-date">
                          <input type="date" className='bg-input form-control py-2 mx-auto' required name="date-user" id="date-user" />
                      </div> */}
                      <label htmlFor="fromdate" className='mb-2 h6 fw-bold'>Date</label>
                      <div className="input-date">
                          <input type="date" onChange={(e) => {getFromDate(e.target.value)}} className='bg-input form-control py-2 mx-auto' required name="fromdate" id="fromdate" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="btn-location">
                      <button type='submit' className='btn black-btn px-3 d-flex justify-content-center align-items-center w-100' style={{marginTop : '28px' , paddingTop : '9px' , paddingBottom : '9px'}} >
                        {loadind ? <i className="fa fa-spinner fa-spin text-white fs-3 px-4"></i> : 'Search'}</button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {show ?
            <div className="img-report">
              <img src={imgreport} alt="img-report" />
            </div> : 
            success === true && routes.length > 0 ?
            <div className="total-table">
              <table className="table text-center table-hover">
                  <thead className="bg-input">
                      <tr>
                        <th scope="col">Client Name</th>
                        <th scope="col">Saller Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Location</th>
                      </tr>
                  </thead>
                  <tbody>
                      {routes.map((item , i) => (
                        <tr key={i}>
                          <td>{item.ClientName}</td>
                          <td>{item.SalesName}</td>
                          <td>{item.Address}</td>
                          <td>{item.Date}</td>
                          <td>{item.Time}</td>
                          <td><a className='main-color' href={`http://maps.google.com/?q=${item.Lat},${item.Lng}`} target="_blank" rel="noopener noreferrer"><MdOutlineGpsFixed /></a></td>
                      </tr>
                      ))}
                  </tbody>
              </table>
            </div> :
            success === true && routes.length < 1 ? 
            <h2 className='fw-bold mb-0 text-center'>NOT DATA....</h2> :

            <h2 className='fw-bold mb-0 text-center'>Saller Not Found..</h2>}
          
      </section>
    </>
  )
}



export default Create;