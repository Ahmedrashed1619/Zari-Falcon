import React, { useEffect, useState } from 'react';
import $ from 'jquery';
// import {v4 as uuid} from 'uuid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaBars } from 'react-icons/fa';
// import { BsSearch } from 'react-icons/bs';
import userImg2 from '../images/home/Rectangle 143.png';
import { useContext } from 'react';
import { langContext } from '../context/store';



export default function AddCreate({fetchSalesAll , fetchClients , baseURL , token}) {


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











    useEffect(() => {
        $('.sidebar .menu-links a').removeClass('active');
        $('.sidebar .menu-links a.create').addClass('active');
    }, [])
    

    let navigate = useNavigate();

    const [message, setMessage] = useState('');

    const [loadind, setLoadind] = useState(false);

    const [apiCode , setApiCode] = useState(null);


    const [user , setUser] = useState({
        // id : '',
        IDSales : '',
        IDClient : '',
        RouteStartTime : ''
    });


    const getUserData = (e) => {
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser)
    }


    async function registerAddForm(e) {

        e.preventDefault();
        setLoadind(true);
        let {data} = await axios({
            method: 'post',
            url: `${baseURL}route/make`,
            data: user,
            headers: { 
                    // 'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    // 'Access-Control-Allow-Origin': '*',
                    // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
        });
            
        setMessage(data.ApiMsgEn);
        setLoadind(false);

        if(data.Success === true) {

            setApiCode(data.Success);
            setTimeout(() => {
                navigate('../create');
            }, 2000);
        }

    }


    // const resetForm = () => {
    //     let inputs = Array.from(document.querySelectorAll('.addsales-page input'));
    //     inputs.forEach((input) => {
    //         input.value = '';
    //     })
    // }





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
                        <button>Add New Route</button>
                    </div>
                </div>

                <form onSubmit={registerAddForm}>
                    <div className="row d-flex justify-content-center align-items-center g-4">

                        <div className="col-12">
                            <div className="group-add">
                                <label className="fs-5 fw-bold mb-1" htmlFor="IDClient">Client Name</label>
                                <div className="input-group">
                                    <select onChange={getUserData} className='bg-transparent py-2 form-select' required name="IDClient" id="IDClient">
                                        <option>Choose Name..</option>
                                        {fetchClients.map((item , i) => (
                                            <option key={i} value={item.IDClient}>{item.ClientName}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="group-add">
                                <label className="fs-5 fw-bold mb-1" htmlFor="IDSales">Vendor Name</label>
                                <div className="input-group">
                                    <select onChange={getUserData} className='bg-transparent py-2 form-select' required name="IDSales" id="IDSales">
                                        <option>Choose Name..</option>
                                        {fetchSalesAll.map((item , i) => (
                                            <option key={i} value={item.IDSales}>{item.Name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="group-add">
                                <label className="fs-5 fw-bold mb-1" htmlFor="RouteStartTime">Date</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="date" className='bg-transparent mx-auto' required name="RouteStartTime" id="RouteStartTime" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {message.length > 0 ? <p id="alertSave" className={`alert ${apiCode === true ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{message}</p> : ''}

                    <div className="submitAdd-buttons mt-4 d-flex justify-content-center align-items-center">
                        <button type='submit' className="btn black-btn py-2 px-4">{loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> : 'Save'}</button>
                        {/* <button onClick={resetForm} className="btn second-btn py-2 px-3">Cancel</button> */}
                    </div>

                </form>
                
            </div>
        </>
    )
}

