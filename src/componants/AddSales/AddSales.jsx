import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaBars } from 'react-icons/fa';
// import { BsSearch } from 'react-icons/bs';
import userImg2 from '../images/home/Rectangle 143.png';
import { useContext } from 'react';
import { langContext } from '../context/store';



export default function AddSales({getToken , baseURL , fetchCountries , fetchavatars , token}) {


    useEffect(() => {
        $('.sidebar .menu-links a').removeClass('active');
        $('.sidebar .menu-links a.sales').addClass('active');
    }, [])




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
    





    
    // const token = localStorage.getItem('userToken');

    let navigate = useNavigate();

    const [message, setMessage] = useState('');

    const [loadind, setLoadind] = useState(false);

    const [apiCode , setApiCode] = useState(null);

    const showHidePass = () => {
        if($('.password .input-group i').hasClass('fa-eye-slash')) {
            $('.password .input-group i').removeClass('fa-eye-slash');
            $('.password .input-group i').addClass('fa-eye');
            $('.password .input-group input').attr('type', 'password');
        }
        else {
            $('.password .input-group i').removeClass('fa-eye');
            $('.password .input-group i').addClass('fa-eye-slash');
            $('.password .input-group input').attr('type', 'text');
        }
    }

    const showHideRePass = () => {
        if($('.repaassword .input-group i').hasClass('fa-eye-slash')) {
            $('.repaassword .input-group i').removeClass('fa-eye-slash');
            $('.repaassword .input-group i').addClass('fa-eye');
            $('.repaassword .input-group input').attr('type', 'password');
        }
        else {
            $('.repaassword .input-group i').removeClass('fa-eye');
            $('.repaassword .input-group i').addClass('fa-eye-slash');
            $('.repaassword .input-group input').attr('type', 'text');
        }
    }

    const [user , setUser] = useState({
        IDCountry : '',
        UserName : '',
        UserEmail : '',
        UserPhone : '',
        UserPassword : '',
        UserAvatar : '',
        UserImage : [],
    });

    const getUserData = (e) => {
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        if(e.target.name === 'UserImage'){
            myUser[e.target.name] = e.target.files[0];
        }
        else{
            myUser[e.target.name] = e.target.value;
        }
        setUser(myUser)
    }


    const [confirm, setConfirm] = useState('');

    function getConfirm(e) {
        e.target.name = e.target.value;
        setConfirm(e.target.value)
    }


    async function registerAddForm(e) {

        e.preventDefault();
        setLoadind(true);
        if(confirm === user.UserPassword) {
            let {data} = await axios({
                method: 'post',
                url: `${baseURL}sales/add`,
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
                getToken();
                setTimeout(() => {
                    navigate('../sales');
                }, 2000);
            }

        }
        else if (confirm !== user.UserPassword) {
            setMessage('password does not match..');
            setLoadind(false);

        }

    }



    const resetForm = () => {
        let inputs = Array.from(document.querySelectorAll('.addsales-page input'));
        let selects = Array.from(document.querySelectorAll('.addsales-page select'));
        inputs.forEach((input) => {
            input.value = '';
        })
        selects.forEach((select) => {
            select.value = '';
        })
    }


    let avatarImg = $('.avatar select').val();





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
                <div className="mb-4">
                    <div className="note-page">
                        <button>Add New User</button>
                    </div>
                </div>

                <form onSubmit={registerAddForm}>
                    <div className="row d-flex justify-content-center align-items-center g-4">

                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="UserName">Name</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="text" className='bg-transparent mx-auto' required name="UserName" id="UserName" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="UserEmail">Email</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="email" className='bg-transparent mx-auto' required name="UserEmail" id="UserEmail" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="UserPhone">Mobile</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="tel" className='bg-transparent mx-auto' required name="UserPhone" id="UserPhone" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="IDCountry">Country</label>
                                <div className="input-group">
                                    <select onChange={getUserData} className='w-100 bg-transparent mx-auto py-3 px-2' required name="IDCountry" id="IDCountry">
                                            <option>choose your country</option>
                                        {fetchCountries.map((item , i) => (
                                            <option key={i} value={item.IDCountry} >{item.NameEn}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="UserAvatar">Avatar</label>
                                <div className="input-group avatar">
                                    <select onChange={getUserData} className='w-100 bg-transparent mx-auto py-3 px-2' required name="UserAvatar" id="UserAvatar">
                                        <option>choose your avatar</option>
                                        {fetchavatars.map((item , i) => (
                                            <option key={i} value={item.IDAvatar} >Avatar {item.IDAvatar}</option>
                                        ))}
                                    </select>
                                    <img src={
                                        avatarImg === '1' ? fetchavatars[0].Image : 
                                        avatarImg === '2' ? fetchavatars[1].Image :
                                        avatarImg === '3' ? fetchavatars[2].Image :
                                        avatarImg === '4' ? fetchavatars[3].Image :
                                        avatarImg === '5' ? fetchavatars[4].Image : 
                                        avatarImg === '6' ? fetchavatars[5].Image :
                                        avatarImg === '7' ? fetchavatars[6].Image :
                                        avatarImg === '8' ? fetchavatars[7].Image :
                                        avatarImg === '9' ? fetchavatars[8].Image :
                                        avatarImg === '10' ? fetchavatars[9].Image : 
                                        avatarImg === '11' ? fetchavatars[10].Image :
                                        avatarImg === '12' ? fetchavatars[11].Image : fetchavatars[0].Image} alt="avatar" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="UserImage">Image</label>
                                <div className="input-group avatar">
                                    <input onChange={getUserData}  type="file" accept='png , jpg' className='bg-transparent mx-auto' name="UserImage" id="UserImage" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add password">
                                <label className="fs-5 fw-bold" htmlFor="UserPassword">Password</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="password" className='bg-transparent mx-auto' required name="UserPassword" id="UserPassword" />
                                    <i className="fa-regular fa-eye" onClick={showHidePass}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add repaassword">
                                <label className="fs-5 fw-bold" htmlFor="repass-user">Confirm</label>
                                <div className="input-group">
                                    <input type="password" onChange={getConfirm} className='bg-transparent mx-auto' required name="repass-user" id="repass-user" />
                                    <i className="fa-regular fa-eye" onClick={showHideRePass}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {message.length > 0 ? <p id="alertSave" className={`alert ${apiCode === true ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{message}</p> : ''}

                    <div className="submitAdd-buttons mt-4 d-flex justify-content-center align-items-center">
                        <button type='submit' className="btn black-btn py-2 px-4 me-4">{loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> : 'Save'}</button>
                        <button onClick={resetForm} className="btn second-btn py-2 px-3">Cancel</button>
                    </div>

                </form>
                
            </div>
        </>
    )
}
