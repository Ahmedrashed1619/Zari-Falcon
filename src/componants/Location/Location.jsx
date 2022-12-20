import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { MdOutlineGpsFixed } from 'react-icons/md';
import $ from 'jquery';
import axios from 'axios';
import { FaBars } from 'react-icons/fa';
// import { BsSearch } from 'react-icons/bs';
import userImg2 from '../images/home/Rectangle 143.png';
import { useContext } from 'react';
import { langContext } from '../context/store';
import { useEffect } from 'react';



export default function Location({fetchSalesAll , token , baseURL}) {


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

  const [lng, setLng] = useState(1);
  const [lat, setLat] = useState(1);
  const [date, setDate] = useState(null);
  const [loadind, setLoadind] = useState(false);


  let apiNotification = `${baseURL}location/notification`;
  let apiLocation = `${baseURL}location/found`;

  const getIDSales = (id) => {
    setIdSales(id)
  }
  

  async function setLocation() {
    setLoadind(true);
    await axios.post(apiNotification, {
      IDSales: idSales,
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
      setTimeout(() => {
        getLocation();
      }, 5000);
     })
     .catch((error) => {
       console.log(error)
     });
  }

  async function getLocation() {
    await axios.post(apiLocation, {
      IDSales: idSales,
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
    .then(res => {
      setLoadind(false);
      setLng(res.data.SalesLng);
      setLat(res.data.SalesLat);
      setDate(res.data.Date);
    })
    .catch((error) => {
      console.log(error);
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

      <section className='dashpage location-page py-5'>
          <div className="link-entries d-flex justify-content-between align-items-center mb-5">
            
              <div className="w-lg-75 w-50">
                <label htmlFor="salesLocation" className='mb-2 h6 fw-bold'>Saller Name</label>
                <select value={fetchSalesAll.IDSales} onChange={() => {getIDSales($('select').val())}} name="salesLocation" required className='bg-input py-2 form-select' id="salesLocation">
                  <option>Choose Name..</option>
                  {fetchSalesAll.map((item , i) => (
                    <option key={i} value={item.IDSales}>{item.Name}</option>
                  ))}
                </select>
              </div>

              <div className="btn-location">
                  <button className='btn black-btn px-3 py-2 d-flex justify-content-center align-items-center' onClick={setLocation}>
                    {loadind ? <i className="fa fa-spinner fa-spin text-white fs-3 px-4"></i> : <><MdOutlineGpsFixed className='me-2' /> Find Location</>}
                    
                  </button>
              </div>
          </div>

          <div className='d-flex justify-content-center align-items-center flex-column'>
            {lng === 0 || lat === 0 ? 
              <h4 className='fw-bold mb-0 mb-4'>User doesn't have Location..</h4> :
              <>
                {date ? <h4 className='fw-bold mb-4'>Last Seen: {date}</h4> : ''}
              </>
            }
            <iframe title='google-map' src={`https://www.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`} frameBorder="0" width="100%" height="500px"></iframe>
          </div>

      </section>
    </>
  )
}
