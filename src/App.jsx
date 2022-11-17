import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Checkout from './componants/Checkout/Checkout';
import Footer from './componants/Footer/Footer';
import Home from './componants/Home/Home';
import Navbar from './componants/Navbar/Navbar';
import Notfound from './componants/Notfound/Notfound';
import Signin from './componants/Signin/Signin';
import Signup from './componants/Signup/Signup';
import Dashboard from './componants/Dashboard/Dashboard';
import Statistics from './componants/Statistics/Statistics';
import Sales from './componants/Sales/Sales';
import AddSales from './componants/AddSales/AddSales'
import Settings from './componants/Settings/Settings';
import Location from './componants/Location/Location';
import Clients from './componants/Clients/Clients';
import Map from './componants/Map/Map';
import Report from './componants/Report/Report';
import Create from './componants/Create/Create';
import $ from 'jquery';
import { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Contact from './componants/Contact/Contact';
import AddClients from './componants/AddClients/AddClients';
import AddCreate from './componants/AddCreate/AddCreate';




function App() {

  let baseURL = 'https://zarimain.online/falcon/public/api/dashboard/';


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
      let [fetchHome, setFetchHome] = useState([]);
      const getDataHome = async () => {
        await axios.get(`${baseURL}home`)
          .then(res => {
            if (res.status === 200 && res.request.readyState === 4) {
              setFetchHome(res.data);
            }
          })
          .catch(err => {
            console.log(err);
          })
      }
      useEffect(() => {
          getDataHome();
      }, [])


      // user data from localstorage
      let [userData, setUserData] = useState(null);

      const saveUserData = () => {
        let encodedToken = localStorage.getItem('userToken');
        let decodedToken = jwtDecode(encodedToken);
        setUserData(decodedToken);
      }

      // for reload action
      useEffect(() => {
        if(localStorage.getItem('userToken')) {
          saveUserData();
        }

      }, [])
      

      // for protected dashboard route
      function ProtectedRoute (props) {
        if(localStorage.getItem('userToken') === null) {
          return <Navigate to='/home'/>
        }
        else {
          return props.children;
        }
      }


      // for log out action
      let navigate = useNavigate();

      const logOut = () => {
        setUserData(null);
        localStorage.removeItem('userToken');
        navigate('/signin');
      }



      const [totalUsers, setTotalUsers] = useState([
        {
            id : '1',
            name : 'Ahmed Rashed',
            company : 'Zarisolution.eg',
            email : 'ahmed@gmail.com',
            phone : '01092999658',
            role : 'sales',
            status : 'Active'
        },
        {
            id : '2',
            name : 'Anas',
            company : 'Zarisolution.eg',
            email : 'anas@gmail.com',
            phone : '01123456789',
            role : 'sales',
            status : 'Pending'
        },
        {
            id : '3',
            name : 'Nader',
            company : 'Zarisolution.eg',
            email : 'nader@gmail.com',
            phone : '01234567890',
            role : 'sales',
            status : 'inActive'
        },
        {
            id : '4',
            name : 'Mosad Hagag',
            company : 'Zarisolution.eg',
            email : 'mosad@gmail.com',
            phone : '010234567895',
            role : 'sales',
            status : 'Blocked'
        }
      ])


      const [totalClients, setTotalClients] = useState([
        {
            id : '1',
            name : 'Ahmed Rashed',
            phone : '01092999658',
            location : 'Hay El-sefarat, Nasr City',
        },
        {
            id : '2',
            name : 'Anas',
            phone : '01123456789',
            location : 'Hay El-sefarat, Nasr City',
        },
        {
            id : '3',
            name : 'Nader',
            phone : '01234567890',
            location : 'Hay El-sefarat, Nasr City',
        },
        {
            id : '4',
            name : 'Mosad Hagag',
            phone : '010234567895',
            location : 'Hay El-sefarat, Nasr City',
        }
      ])


      const [totalReport, setTotalReport] = useState([
        {
            id : '1',
            name : 'Ahmed Rashed',
            status : 'Visited',
            location : 'Hay El-sefarat, Nasr City',
            amount : '123',
            note : 'jjjjjjj',
        },
        {
            id : '2',
            name : 'Mosad Hagag',
            status : 'Not Visited',
            location : 'Hay El-sefarat, Nasr City',
            amount : '456',
            note : 'ffffff',
        },
        {
            id : '1',
            name : 'Nader Salah',
            status : 'Visited',
            location : 'Hay El-sefarat, Nasr City',
            amount : '789',
            note : 'eeeeeee',
        },
        {
            id : '1',
            name : 'Ahmed Rashed',
            status : 'Not Visited',
            location : 'Hay El-sefarat, Nasr City',
            amount : '147',
            note : 'kkkkkk',
        }
      ])


      const [totalCreate, setTotalCreate] = useState([
        {
            id : '1',
            clientname : 'Ahmed Rashed',
            sallername : 'Mosad Hagag',
            date : '1/9/1997',
        },
        {
            id : '2',
            clientname : 'Mosad Hagag',
            sallername : 'Ahmed Rashed',
            date : '1/9/2000',
        },
        {
            id : '3',
            clientname : 'Kholi',
            sallername : 'Nader',
            date : '21/7/1993',
        },
        {
            id : '4',
            clientname : 'Samr',
            sallername : 'Anas',
            date : '17/3/2022',
        },
        {
            id : '5',
            clientname : 'Ahmed Rashed',
            sallername : 'Visited',
            date : '1/9/1997',
        },
      ])




  return (
    <>
      <Navbar activeLink={activeLink} userData={userData}/>

      <Routes>
          <Route path='/' element={userData? <Navigate to='dashboard' />  : Object.keys(fetchHome).length > 0 ? <Home fetchHome={fetchHome} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='home' element={Object.keys(fetchHome).length > 0 ? <Home fetchHome={fetchHome} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />
          <Route path='signup' element={<Signup baseURL={baseURL} saveUserData={saveUserData}/>}/>
          <Route path='signin' element={<Signin baseURL={baseURL} saveUserData={saveUserData}/>}/>
          <Route path='checkout' element={<Checkout />}/>
          <Route path='contact' element={<Contact baseURL={baseURL}/>}/>
          <Route path='dashboard' element={<ProtectedRoute> <Dashboard logOut={logOut}/> </ProtectedRoute>}>
              <Route path='' element={<Statistics />}/>
              <Route path='statistics' element={<Statistics />}/>
              <Route path='sales' element={<Sales totalUsers={totalUsers} />}/>
              <Route path='addSales' element={<AddSales totalUsers={totalUsers} setTotalUsers={setTotalUsers} />}/>
              <Route path='settings' element={<Settings />}/>
              <Route path='location' element={<Location />}/>
              <Route path='clients' element={<Clients totalClients={totalClients}/>}/>
              <Route path='addClients' element={<AddClients totalClients={totalClients} setTotalClients={setTotalClients}/>}/>
              <Route path='map' element={<Map />}/>
              <Route path='report' element={<Report totalReport={totalReport}/>}/>
              <Route path='create' element={<Create totalCreate={totalCreate} />}/>
              <Route path='addCreate' element={<AddCreate totalCreate={totalCreate} setTotalCreate={setTotalCreate}/>}/>
              <Route path='*' element={<Notfound />}/>
          </Route>
          <Route path='*' element={<Notfound />}/>
      </Routes>

      <Footer activeLink={activeLinkFooter} userData={userData}/>
    </>
  );
}

export default App;
