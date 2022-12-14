import React , { useEffect , useState } from 'react';
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
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Contact from './componants/Contact/Contact';
import AddClients from './componants/AddClients/AddClients';
import AddCreate from './componants/AddCreate/AddCreate';
import View from './componants/View/View';
import Profile from './componants/Profile/Profile';
import Admins from './componants/Admins/Admins';
import AddAdmin from './componants/AddAdmin/AddAdmin';
import BankReview from './componants/BankReview/BankReview';




function App() {

  // let baseURL = 'https://zarimain.online/falcon/public/api/dashboard/';

  let baseURL = 'https://backend.zarifalcon.com/api/dashboard/';

  let token = localStorage.getItem('userToken') ;

  
  const activeLink = (e) => {

    if (e.target.innerHTML === 'Home' || e.target.innerHTML === 'الرئيسيــة') {
      $('.navbar .collapse .home').addClass('active');
      $('.navbar .collapse .features').removeClass('active');
      $('.navbar .collapse .app').removeClass('active');
      $('.navbar .collapse .plans').removeClass('active');
      $('html , body').animate({ scrollTop: 0 }, 300);
    }

    else if (e.target.innerHTML === 'Features' || e.target.innerHTML === 'المميـزات') {
      $('.navbar .collapse .features').addClass('active');
      $('.navbar .collapse .home').removeClass('active');
      $('.navbar .collapse .app').removeClass('active');
      $('.navbar .collapse .plans').removeClass('active');
      setTimeout(() => {
        $('html , body').animate({ scrollTop: $('#features').offset().top - 40 }, 300);
      }, 200);
    }

    else if (e.target.innerHTML === 'Our App' || e.target.innerHTML === 'التطبيــق') {
      $('.navbar .collapse .app').addClass('active');
      $('.navbar .collapse .features').removeClass('active');
      $('.navbar .collapse .home').removeClass('active');
      $('.navbar .collapse .plans').removeClass('active');
      setTimeout(() => {
        $('html , body').animate({ scrollTop: $('#app').offset().top - 40 }, 300);
      }, 200);
    }

    else if (e.target.innerHTML === 'Plans' || e.target.innerHTML === 'الخـطـط') {
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

    if (e.target.innerHTML === 'Home' || e.target.innerHTML === 'الرئيسيــة') {
      $('.navbar .collapse .home').addClass('active');
      $('.navbar .collapse .features').removeClass('active');
      $('.navbar .collapse .app').removeClass('active');
      $('.navbar .collapse .plans').removeClass('active');
      $('html , body').animate({ scrollTop: 0 }, 300);
    }

    else if (e.target.innerHTML === 'Features' || e.target.innerHTML === 'المميـزات') {
      $('.navbar .collapse .features').addClass('active');
      $('.navbar .collapse .home').removeClass('active');
      $('.navbar .collapse .app').removeClass('active');
      $('.navbar .collapse .plans').removeClass('active');
      setTimeout(() => {
        $('html , body').animate({ scrollTop: $('#features').offset().top - 40 }, 300);
      }, 200);
    }

    else if (e.target.innerHTML === 'Our App' || e.target.innerHTML === 'التطبيــق') {
      $('.navbar .collapse .app').addClass('active');
      $('.navbar .collapse .features').removeClass('active');
      $('.navbar .collapse .home').removeClass('active');
      $('.navbar .collapse .plans').removeClass('active');
      setTimeout(() => {
        $('html , body').animate({ scrollTop: $('#app').offset().top - 40 }, 300);
      }, 200);
    }

    else if (e.target.innerHTML === 'Plans' || e.target.innerHTML === 'الخـطـط') {
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
    await axios.get(`${baseURL}home`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
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
  }, []);


  // Statistic data 
  let [fetchStatistics, setFetchStatistics] = useState([]);
  const [objs, setObjs] = useState([]);
  const [objsNot, setObjsNot] = useState([]);


  const [objs2, setobjs2] = useState([]);
  const [objs2Not, setobjs2Not] = useState([]);


  async function getDataStatistics() {
    await axios.post(`${baseURL}statistic`, {}, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
      .then(res => {
        if (res.status === 200 && res.request.readyState === 4) {
          setFetchStatistics(res.data);
          setObjs(res.data.DailyVisited);
          setObjsNot(res.data.DailyNotVisited);
          setobjs2(res.data.MonthlyVisited);
          setobjs2Not(res.data.MonthlyNotVisited);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
  useEffect(() => {
    if(token) {
      getDataStatistics();
    }
  }, [token]);



  // Admins list

  const apiAdmins = `${baseURL}admins/list`;

  // const [pagesCountSales, setPagesCountSales] = useState(0);
  // const [countSales, setCountSales] = useState(1);
  // const [searchKeySales, setSearchKeySales] = useState(null);
  const [loadingAdmins, setLoadingAdmins] = useState(false)
  const [fetchAdmins, setFetchAdmins] = useState([])
  async function getTokenAdmins() {
    setLoadingAdmins(true);
    await axios.post(apiAdmins, {
      // IDPage: countSales,
      // SearchKey: searchKeySales
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
      .then(res => {
        setFetchAdmins(res.data.Admins);
        // setPagesCountSales(res.data.Pages);
        setLoadingAdmins(false);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  // const [fetchAdminsAll, setFetchAdminsAll] = useState([])
  // async function getTokenAdminsAll() {
  //   await axios.post(apiAdmins, {}, {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + token,
  //     }
  //   })
  //     .then(res => {
  //       setFetchAdminsAll(res.data.Admins);
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     });
  // }

  useEffect(() => {
    if(token) {
      getTokenAdmins();
    }
  // }, [token , countSales , pagesCountSales , searchKeySales]);
  }, [token]);

  // useEffect(() => {
  //   if(token) {
  //     getTokenAdminsAll()
  //   }
  //   }, [token])



      // sales list

  const api = `${baseURL}sales/list`;

  const [pagesCountSales, setPagesCountSales] = useState(0);
  const [countSales, setCountSales] = useState(1);
  const [searchKeySales, setSearchKeySales] = useState(null);
  const [loadingSales, setLoadingSales] = useState(false)
  const [fetchSales, setFetchSales] = useState([])
  async function getToken() {
    setLoadingSales(true);
    await axios.post(api, {
      IDPage: countSales,
      SearchKey: searchKeySales
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
      .then(res => {
        setFetchSales(res.data.Sales2);
        // setFetchSalesAll(res.data.Sales);
        setPagesCountSales(res.data.Pages);
        setLoadingSales(false);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const [fetchSalesAll, setFetchSalesAll] = useState([])
  async function getTokenSalesAll() {
    await axios.post(api, {}, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
      .then(res => {
        setFetchSalesAll(res.data.Sales);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
    if(token) {
      getToken();
    }
  }, [token , countSales , pagesCountSales , searchKeySales]);
  // }, [token]);

  useEffect(() => {
    if(token) {
      getTokenSalesAll()
    }
    }, [token])
  


   // settings list
    const apiSettings = `${baseURL}setting/list`;
  
    const [fetchsettings, setFetchSettings] = useState([])
    async function getSettings() {
      await axios.post(apiSettings, {}, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        }
      })
        .then(res => {
          setFetchSettings(res.data);
        })
        .catch((error) => {
        });
    }
    useEffect(() => {
      if(token) {
        getSettings();
      }
    }, [token]);



  
  // clients list
  const apiClients = `${baseURL}client/list`;

  const [pagesCount, setPagesCount] = useState(0);
  const [count, setCount] = useState(1);
  const [searchKey, setSearchKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchClients, setFetchClients] = useState([]);
  async function getClientsList() {
    setLoading(true);
    await axios.post(apiClients, {
      IDPage: count,
      SearchKey: searchKey
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
      .then(res => {
        setFetchClients(res.data.Clients2);
        setPagesCount(res.data.Pages);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const [fetchAllClients, setFetchAllClients] = useState([]);
  async function getTokenClientsAll() {
    await axios.post(apiClients, {}, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
      .then(res => {
        setFetchAllClients(res.data.Clients);
      })
      .catch((error) => {
        console.log(error)
      });
  }
  useEffect(() => {
    if(token) {
      getClientsList();
    }
  }, [token , count , pagesCount , searchKey]);
  // }, [token]);

  useEffect(() => {
    if(token) {
      getTokenClientsAll()
    }
    }, [token])


  // get countries
  const [fetchCountries, setFetchCountries] = useState([]);
  async function getCountries() {
    await axios.get(`${baseURL}country`)
    .then(res => {
      if (res.status === 200 && res.request.readyState === 4) {
        setFetchCountries(res.data);
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
  useEffect(() => {
      getCountries();
  }, [])


    // get avatars
    const [fetchavatars, setFetchAvatars] = useState([]);
    async function getavatars() {
      await axios.get(`${baseURL}avatars`)
      .then(res => {
        if (res.status === 200 && res.request.readyState === 4) {
          setFetchAvatars(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
    useEffect(() => {
        getavatars();
    }, [])



        // get update data
        const [fetchUpdateData, setFetchUpdateData] = useState([]);
        const apiProfile = `${baseURL}company/profile/show`;

        async function getUpdateData() {
          await axios.post(apiProfile, {}, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
              // 'Access-Control-Allow-Origin': '*',
              // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            }})
          .then(res => {
            if (res.status === 200 && res.request.readyState === 4) {
              setFetchUpdateData(res.data.User);
            }
          })
          .catch(err => {
            console.log(err);
          })
        }
        useEffect(() => {
          if(token) {
            getUpdateData();
          }
        }, [token])




  

  // user data from localstorage
  let [userData, setUserData] = useState(null);

  const saveUserData = () => {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }

  // for reload action
  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      saveUserData();
    }

  }, [])


  // for protected dashboard route
  function ProtectedRoute(props) {
    if (localStorage.getItem('userToken') === null) {
      return <Navigate to='/home' />
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



  return (
    <>
      <Navbar activeLink={activeLink} userData={userData} />

      <Routes>
        <Route path='/' element={Object.keys(fetchHome).length > 0 ? <Home fetchHome={fetchHome} /> : <div id="ready">
          <i className="fa fa-spinner fa-5x fa-spin"></i>
        </div>} />

        <Route path='home' element={Object.keys(fetchHome).length > 0 ? <Home fetchHome={fetchHome} /> : <div id="ready">
            <i className="fa fa-spinner fa-5x fa-spin"></i>
          </div>} />
        <Route path='signup' element={<Signup baseURL={baseURL} saveUserData={saveUserData} />} />
        <Route path='signin' element={<Signin baseURL={baseURL} saveUserData={saveUserData} />} />
        <Route path='checkout/:id' element={ <Checkout userData={userData} saveUserData={saveUserData} baseURL={baseURL} token={token} /> } />
        <Route path='contact' element={<Contact baseURL={baseURL} />} />
        <Route path='bankreview' element={<ProtectedRoute> <BankReview baseURL={baseURL} setUserData={setUserData} /> </ProtectedRoute>} />
        <Route path='dashboard' element={<ProtectedRoute> <Dashboard logOut={logOut} /> </ProtectedRoute>}>

          <Route path='' element={token && Object.keys(fetchStatistics).length > 0 ? <Statistics fetchStatistics={fetchStatistics} objs={objs} objsNot={objsNot} objs2={objs2} objs2Not={objs2Not} token={token} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />
          <Route path='statistics' element={token && Object.keys(fetchStatistics).length > 0 ? <Statistics fetchStatistics={fetchStatistics} objs={objs} objsNot={objsNot} objs2={objs2} objs2Not={objs2Not} token={token} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='admins' element={token && Object.keys(fetchCountries).length > 0 && Object.keys(fetchavatars).length > 0 ? <Admins fetchAdmins={fetchAdmins} getTokenAdmins={getTokenAdmins} baseURL={baseURL} fetchCountries={fetchCountries} fetchavatars={fetchavatars} loadingAdmins={loadingAdmins} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='addAdmin' element={token && Object.keys(fetchCountries).length > 0 && Object.keys(fetchavatars).length > 0 ? <AddAdmin getTokenAdmins={getTokenAdmins} baseURL={baseURL} fetchCountries={fetchCountries} fetchavatars={fetchavatars} token={token}/> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='sales' element={token && Object.keys(fetchCountries).length > 0 && Object.keys(fetchavatars).length > 0 ? <Sales fetchSales={fetchSales} fetchSalesAll={fetchSalesAll} getToken={getToken} baseURL={baseURL} fetchCountries={fetchCountries} fetchavatars={fetchavatars} pagesCountSales={pagesCountSales} countSales={countSales} setCountSales={setCountSales} setSearchKeySales={setSearchKeySales} loadingSales={loadingSales} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='addSales' element={token && Object.keys(fetchCountries).length > 0 && Object.keys(fetchavatars).length > 0 ? <AddSales getToken={getToken} baseURL={baseURL} fetchCountries={fetchCountries} fetchavatars={fetchavatars} token={token}/> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='view' element={<View fetchSalesAll={fetchSalesAll} baseURL={baseURL} token={token} />} />

          <Route path='settings' element={<Settings fetchsettings={fetchsettings} baseURL={baseURL} token={token} getSettings={getSettings}/>} />

          <Route path='location' element={<Location fetchSalesAll={fetchSalesAll} token={token} baseURL={baseURL}/>} />

          <Route path='profile' element={token ? <Profile token={token} getUpdateData={getUpdateData} baseURL={baseURL} fetchUpdateData={fetchUpdateData}/> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='clients' element={token ? <Clients getClientsList={getClientsList} fetchAllClients={fetchAllClients} token={token} baseURL={baseURL} fetchClients={fetchClients} pagesCount={pagesCount} count={count} setCount={setCount} setSearchKey={setSearchKey} loading={loading}/> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='addClients' element={token ? <AddClients baseURL={baseURL} token={token} getClientsList={getClientsList} /> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='map' element={token && Object.keys(fetchSalesAll).length > 0 ? <Map baseURL={baseURL} token={token} fetchSalesAll={fetchSalesAll}/> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='report' element={token ? <Report fetchSalesAll={fetchSalesAll} baseURL={baseURL} token={token}/> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='create' element={token ? <Create token={token} baseURL={baseURL} fetchSalesAll={fetchSalesAll}/> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='addCreate' element={token ? <AddCreate token={token} baseURL={baseURL} fetchAllClients={fetchAllClients} fetchSalesAll={fetchSalesAll}/> : <div id="ready">
              <i className="fa fa-spinner fa-5x fa-spin"></i>
            </div>} />

          <Route path='*' element={<Notfound />} />

        </Route>

        <Route path='*' element={<Notfound />} />

      </Routes>

      <Footer activeLink={activeLinkFooter} userData={userData} />
    </>
  );
}

export default App;
