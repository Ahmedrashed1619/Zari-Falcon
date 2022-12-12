import React, { useContext, useEffect, useState } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import { FaBars } from 'react-icons/fa';
// import { BsSearch } from 'react-icons/bs';
import userImg2 from '../images/home/Rectangle 143.png';
import axios from 'axios';


export default function Profile({token , getUpdateData , baseURL , fetchUpdateData}) {

        
    useEffect(() => {
        $('.sidebar .menu-links a.profile').addClass('active');

        return () => {
            $('.sidebar .menu-links a.profile').removeClass('active');
        }
    }, [])
    
    
    let { isOpen , toggleOpen } = useContext(langContext);


    const closeNavLink = () => {
        if(isOpen === false && $('body').width() < 570) {
            $('.sidebar').animate({'left' : '-240px'} , 500);
            setTimeout(() => {
                toggleOpen();
            }, 500);
        }
    }


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


    const [message, setMessage] = useState('');

    const [loadind, setLoadind] = useState(false);

    const [status , setStatus] = useState(null);


    const showHideOldPass = () => {
        if($('.old-password .input-group i').hasClass('fa-eye-slash')) {
            $('.old-password .input-group i').removeClass('fa-eye-slash');
            $('.old-password .input-group i').addClass('fa-eye');
            $('.old-password .input-group input').attr('type', 'password');
        }
        else {
            $('.old-password .input-group i').removeClass('fa-eye');
            $('.old-password .input-group i').addClass('fa-eye-slash');
            $('.old-password .input-group input').attr('type', 'text');
        }
    }

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


    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    useEffect(() => {
        setUserName(fetchUpdateData.UserName);
        setUserEmail(fetchUpdateData.UserEmail);
        setCompanyName(fetchUpdateData.Company);
        setUserPhone(fetchUpdateData.UserPhone);
    }, [])
    


    // const getUserData = (e) => {
    //     let myUser = {...user};
    //     myUser[e.target.name] = e.target.value;
    //     setUser(myUser)
    // }


    async function registerUpdateForm(e) {

        e.preventDefault();
        setLoadind(true);
        let {data} = await axios({
            method: 'post',
            url: `${baseURL}company/profile/edit`,
            data: {
                UserName: userName,
                UserEmail: userEmail,
                CompanyName: companyName,
                UserPhone: userPhone,
                OldPassword: oldPassword,
                NewPassword: newPassword,
                ConfirmPassword: confirmPassword
            },
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
        localStorage.setItem('userToken', data.AccessToken);
        if(data.Success === true) {
            getUpdateData();
            setStatus(data.Success);
        }

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
                        <button>Personal Information</button>
                    </div>
                </div>

                <form onSubmit={registerUpdateForm}>
                    <div className="row d-flex align-items-center g-4">

                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="UserName">Name</label>
                                <div className="input-group">
                                    <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} className='bg-transparent mx-auto' name="UserName" id="UserName" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="company-name">Company Name</label>
                                <div className="input-group">
                                    <input type="text" value={companyName} onChange={(e) => {setCompanyName(e.target.value)}} className='bg-transparent mx-auto' name="CompanyName" id="company-name" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="UserEmail">Email</label>
                                <div className="input-group">
                                    <input type="email" value={userEmail} onChange={(e) => {setUserEmail(e.target.value)}} className='bg-transparent mx-auto' name="UserEmail" id="UserEmail" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="UserPhone">Phone Number</label>
                                <div className="input-group">
                                    <input type="tel" value={userPhone} onChange={(e) => {setUserPhone(e.target.value)}} className='bg-transparent mx-auto' name="UserPhone" id="UserPhone" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add old-password">
                                <label className="fs-5 fw-bold" htmlFor="OldPassword">Old Password</label>
                                <div className="input-group">
                                    <input type="password" onChange={(e) => {setOldPassword(e.target.value)}} className='bg-transparent mx-auto' name="OldPassword" id="OldPassword" />
                                    <i className="fa-regular fa-eye" onClick={showHideOldPass}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add password">
                                <label className="fs-5 fw-bold" htmlFor="UserPassword">New Password</label>
                                <div className="input-group">
                                    <input type="password" onChange={(e) => {setNewPassword(e.target.value)}} className='bg-transparent mx-auto' name="NewPassword" id="UserPassword" />
                                    <i className="fa-regular fa-eye" onClick={showHidePass}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add repaassword">
                                <label className="fs-5 fw-bold" htmlFor="repass-user">Confirm New Password</label>
                                <div className="input-group">
                                    <input type="password" onChange={(e) => {setConfirmPassword(e.target.value)}} className='bg-transparent mx-auto' name="repass-user" id="repass-user" />
                                    <i className="fa-regular fa-eye" onClick={showHideRePass}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {message.length > 0 ? <p id="alertSave" className={`alert ${status === true ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{message}</p> : ''}

                    <div className="submitAdd-buttons mt-4 d-flex justify-content-center align-items-center">
                        <button type='submit' className="btn black-btn py-2 px-4 me-4">{loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> : 'Save'}</button>
                    </div>

                </form>
                
            </div>

        </>
    )
}
