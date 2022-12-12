import React from 'react';
import $ from 'jquery';
// import { Link } from 'react-router-dom';
import { TbRoute } from 'react-icons/tb';
import Google from '../Google/Google';
import { FaBars } from 'react-icons/fa';
// import { BsSearch } from 'react-icons/bs';
import userImg2 from '../images/home/Rectangle 143.png';
import { useContext } from 'react';
import { langContext } from '../context/store';
import { useEffect } from 'react';


export default function Map({token , baseURL , fetchSales}) {


  let { isOpen , toggleOpen } = useContext(langContext);


//   const closeNavLink = () => {
//     if(isOpen === false && $('body').width() < 570) {
//         $('.sidebar').animate({'left' : '-240px'} , 500);
//         setTimeout(() => {
//             toggleOpen();
//         }, 500);
//     }
//   }
  
  
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
          <div className="link-entries mb-4">
            <div className="row d-flex justify-content-center align-items-center gy-4">
              <div className="col-md-8 col-lg-9">
                <div className="row d-flex justify-content-center align-items-center gy-4">
                  <div className="col-sm-6 col-11">
                    <select  name="salesLocation" required className='bg-input py-2 form-select' id="sales-name">
                      <option>Choose Name..</option>
                      {fetchSales.map((item , i) => (
                        <option key={i} value={item.IDSales}>{item.Name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-sm-6 col-11">
                    <div className="input-date">
                        <input type="date" className='bg-input form-control py-2 mx-auto' required name="date-user" id="date-user" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="btn-location">
                    <button className='btn black-btn px-3 py-2 d-flex justify-content-center align-items-center w-100'><TbRoute className='me-2' /> Find Route</button>
                </div>
              </div>
            </div>
          </div>

          {/* <iframe src={`https://www.google.com/maps?q=30,31&hl=es;&output=embed`} frameBorder="0" width="100%" height="500px"></iframe> */}
          <Google />

      </section>
    </>
  )
}

