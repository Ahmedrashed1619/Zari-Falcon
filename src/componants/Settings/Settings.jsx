import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Switch } from 'antd';
import axios from 'axios';
import { FaBars } from 'react-icons/fa';
// import { BsSearch } from 'react-icons/bs';
import userImg2 from '../images/home/Rectangle 143.png';
import { useContext } from 'react';
import { langContext } from '../context/store';



export default function Settings({fetchsettings , baseURL , token , getSettings}) {


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





  let apiClient = `${baseURL}setting/client`;
  let apiInvoice = `${baseURL}setting/invoice`;
  let apiAmmont = `${baseURL}setting/ammount`;
  let apiNote = `${baseURL}setting/note`;
  let apiNoteRequired = `${baseURL}setting/note/required`;
  let apiRadius = `${baseURL}setting/radius`;

   const [changeRadiusSettings, setchangeRadiusSettings] = useState('');

   useEffect(() => {
     setchangeRadiusSettings(fetchsettings.Radius)
   }, [])
   



  async function clientSettings() {
    await axios.post(apiClient, {}, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
    .then(res => {
      getSettings();
     })
     .catch((error) => {
       console.log(error)
     });
  }


  async function AmmontSettings() {
    await axios.post(apiAmmont, {}, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
    .then(res => {
      getSettings();
     })
     .catch((error) => {
       console.log(error)
     });
  }


  async function InvoiceSettings() {
    await axios.post(apiInvoice, {}, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
    .then(res => {
      getSettings();
     })
     .catch((error) => {
       console.log(error)
     });
  }


  async function NoteSettings() {
    await axios.post(apiNote, {}, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
    .then(res => {
      getSettings();
     })
     .catch((error) => {
       console.log(error)
     });
  }

  async function NoterequiredSettings() {
    await axios.post(apiNoteRequired, {}, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
    .then(res => {
      getSettings();
     })
     .catch((error) => {
       console.log(error)
     });
  }


  async function RadiusSettings() {
    await axios.post(apiRadius, {
      CompanyCheckRadius: changeRadiusSettings,
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
      getSettings();
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

            <div className="dashpage addsales-page py-5">
                <div className="mb-5">
                    <div className="note-page">
                        <button>Settings</button>
                    </div>
                </div>
                
                <div className="total-table">
                  <table className="table text-center table-hover">
                      <thead className="bg-input">
                          <tr>
                            <th scope="col">Config. Name</th>
                            <th scope="col">Input</th>
                            <th scope="col">Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {/* <tr>
                            <td>Record</td>
                            <td>ــ</td>
                            <td> <Switch defaultChecked={fetchsettings.Record} checkedChildren={''} unCheckedChildren={''} /> </td>
                          </tr> */}
                          
                          <tr>
                            <td>Clients</td>
                            <td>ــ</td>
                            <td><Switch defaultChecked={fetchsettings.Clients} onClick={clientSettings} /></td>
                          </tr>

                          <tr>
                            <td>Sales amount</td>
                            <td>ــ</td>
                            <td><Switch defaultChecked={fetchsettings.Ammount} onClick={AmmontSettings} /></td>
                          </tr>

                          <tr>
                            <td>Invoice</td>
                            <td>ــ</td>
                            <td><Switch defaultChecked={fetchsettings.Invoice} onClick={InvoiceSettings} /></td>
                          </tr>

                          <tr>
                            <td>Note</td>
                            <td>ــ</td>
                            <td><Switch defaultChecked={fetchsettings.Note} onClick={NoteSettings} /></td>
                          </tr>

                          <tr>
                            <td>Note Required</td>
                            <td>ــ</td>
                            <td><Switch defaultChecked={fetchsettings.NoteRequired} onClick={NoterequiredSettings} /></td>
                          </tr>

                          <tr>
                            <td>Radius</td>
                            <td><input type="text" value={changeRadiusSettings} onChange={(e) => {
                              setchangeRadiusSettings(e.target.value)
                            }} className='form-control w-25 bg-light mx-auto text-center' required name="UserName" id="UserName" /></td>
                            <td><button className='btn black-btn px-4' onClick={RadiusSettings}>Edit</button></td>
                          </tr>
                      </tbody>
                  </table>
                </div>
            </div>
    </>
  )
}
