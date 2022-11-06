import React from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Checkout from './componants/Checkout/Checkout';
import Footer from './componants/Footer/Footer';
import Home from './componants/Home/Home';
import Navbar from './componants/Navbar/Navbar';
import Notfound from './componants/Notfound/Notfound';
import Signin from './componants/Signin/Signin';
import Signup from './componants/Signup/Signup';
import $ from 'jquery';
// import { useState } from 'react';
// import axios from 'axios';




function App() {

  // let baseURL = 'http://66.29.139.205/zarisales/public/api/dashboard/';
  // let baseURL = 'https://zarisolution.com/falcon/api/';


  const activeLink = (e) => {

    if(e.target.innerHTML === 'Home' || e.target.innerHTML === 'الرئيسيــة') {
      $('.navbar .collapse .home').addClass('active');
      $('.navbar .collapse .features').removeClass('active');
      $('.navbar .collapse .app').removeClass('active');
      $('.navbar .collapse .plans').removeClass('active');
      $('html , body').animate({ scrollTop: 0 }, 300);
    }

    else if(e.target.innerHTML === 'Features' || e.target.innerHTML === 'المميـزات') {
      $('.navbar .collapse .features').addClass('active');
      $('.navbar .collapse .home').removeClass('active');
      $('.navbar .collapse .app').removeClass('active');
      $('.navbar .collapse .plans').removeClass('active');
      setTimeout(() => {
        $('html , body').animate({ scrollTop: $('#features').offset().top - 40}, 300);
      }, 200);
    }

    else if(e.target.innerHTML === 'Our App' || e.target.innerHTML === 'التطبيــق') {
      $('.navbar .collapse .app').addClass('active');
      $('.navbar .collapse .features').removeClass('active');
      $('.navbar .collapse .home').removeClass('active');
      $('.navbar .collapse .plans').removeClass('active');
      setTimeout(() => {
        $('html , body').animate({ scrollTop: $('#app').offset().top - 40 }, 300);
      }, 200);
    }

    else if(e.target.innerHTML === 'Plans' || e.target.innerHTML === 'الخـطـط') {
      $('.navbar .collapse .plans').addClass('active');
      $('.navbar .collapse .features').removeClass('active');
      $('.navbar .collapse .app').removeClass('active');
      $('.navbar .collapse .home').removeClass('active');
      setTimeout(() => {
        $('html , body').animate({ scrollTop: $('#plans').offset().top - 40 }, 300);
      }, 200);
    }
  }

  const activeLinkFooter = (e) => {

    if(e.target.innerHTML === 'Home' || e.target.innerHTML === 'الرئيسيــة') {
      $('.navbar .collapse .home').addClass('active');
      $('.navbar .collapse .features').removeClass('active');
      $('.navbar .collapse .app').removeClass('active');
      $('.navbar .collapse .plans').removeClass('active');
      $('html , body').animate({ scrollTop: 0 }, 300);
    }

    else if(e.target.innerHTML === 'Features' || e.target.innerHTML === 'المميـزات') {
      $('.navbar .collapse .features').addClass('active');
      $('.navbar .collapse .home').removeClass('active');
      $('.navbar .collapse .app').removeClass('active');
      $('.navbar .collapse .plans').removeClass('active');
      setTimeout(() => {
        $('html , body').animate({ scrollTop: $('#features').offset().top - 40}, 300);
      }, 200);
    }

    else if(e.target.innerHTML === 'Our App' || e.target.innerHTML === 'التطبيــق') {
      $('.navbar .collapse .app').addClass('active');
      $('.navbar .collapse .features').removeClass('active');
      $('.navbar .collapse .home').removeClass('active');
      $('.navbar .collapse .plans').removeClass('active');
      setTimeout(() => {
        $('html , body').animate({ scrollTop: $('#app').offset().top - 40 }, 300);
      }, 200);
    }

    else if(e.target.innerHTML === 'Plans' || e.target.innerHTML === 'الخـطـط') {
      $('.navbar .collapse .plans').addClass('active');
      $('.navbar .collapse .features').removeClass('active');
      $('.navbar .collapse .app').removeClass('active');
      $('.navbar .collapse .home').removeClass('active');
      setTimeout(() => {
        $('html , body').animate({ scrollTop: $('#plans').offset().top - 40 }, 300);
      }, 200);
    }
  }

  useEffect(() => {

    $('#btnTopFooter').click(function () {
      $('html , body').animate({ scrollTop: 0 }, 300);
    })

    return () => {
      $('#btnTopFooter').click(function () {
        $('html , body').animate({ scrollTop: 0 }, 300);
      })
    }

  }, [])


  


      // Home data 
      // let [fetchHome, setFetchHome] = useState([]);
      // async function getDataHome() {
      //   await axios.get(`${baseURL}home`)
      //     .then(res => {
      //       if (res.status === 200 && res.request.readyState === 4) {
      //         setFetchHome(res.data);
      //       }
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     })
      // }
      // useEffect(() => {
  
      //   getDataHome();
  
      // }, [])








  return (
    <>
      <Navbar activeLink={activeLink} />

      <Routes>
          {/* <Route path='/' element={Object.keys(fetchHome).length > 0 ? <Home fetchHome={fetchHome} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='home' element={Object.keys(fetchHome).length > 0 ? <Home fetchHome={fetchHome} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} /> */}
          <Route path='/' element={<Home />}/>
          <Route path='home' element={<Home />}/>
          <Route path='signup' element={<Signup activeLink={activeLink}/>}/>
          <Route path='signin' element={<Signin />}/>
          <Route path='checkout' element={<Checkout />}/>
          <Route path='*' element={<Notfound />}/>
      </Routes>

      <Footer activeLink={activeLinkFooter}/>
    </>
  );
}

export default App;
