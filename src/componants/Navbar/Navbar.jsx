import React, { useContext } from 'react';
import imgLogo from '../images/ZARI LOGO-02.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { langContext } from '../context/store';
import { useEffect } from 'react';
import $ from 'jquery';
import WOW from 'wowjs';


export default function Navbar({activeLink, userData}) {


    useEffect(() => {

        new WOW.WOW().init();
    
    }, [])

    const [isActive, setActive] = useState(false);


    const handelClick = () => {
        setActive(!isActive);
    }


    const closeNavbar = () => {
        if(isActive === true && $('body, html').width() < 992) {
            setActive(!isActive)
            $('.navbar .navbar-toggler').attr('aria-expanded', 'false');
            $('.navbar .collapse').removeClass('show')
        }
    }


    let { isEng, changeLang } = useContext(langContext);


    function changeDir() {
        if (isEng === false) {

            $('.language i').css({'marginRight' : '0' , 'marginLeft' : '6px'});

        }

        else {

            $('.language i').css({'marginRight' : '6px' , 'marginLeft' : '0'});

        }
    }

    useEffect(() => {
        changeDir();

        return () => {
            changeDir();
        }
    }, [isEng]);


    return (
        <>
        {userData ? '' : <nav className="navbar navbar-expand-lg fixed-top bg-white py-2 nav-total" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container-fluid container-xl special-w">
                    <Link to='home' className="navbar-brand"><img src={imgLogo} alt="zari logo" /></Link>
                    <button className={`navbar-toggler wow fadeIn ${isActive ? 'convert' : ''}`} data-wow-duration="0.75s" onClick={handelClick} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav ${isEng ? 'me-auto' : 'ms-auto'} mb-2 mb-lg-0 ${isEng ? 'ms-0 ms-lg-3' : 'me-0 me-lg-3'} py-3 py-lg-0 fw-bold`}>
                            <li className="nav-item">
                                <Link to='home' onClick={(e) => {
                                    activeLink(e);
                                    closeNavbar();
                                }} className="nav-link home" aria-current="page">{isEng ? 'Home' : 'الرئيسيــة'}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='home' onClick={(e) => {
                                    activeLink(e);
                                    closeNavbar();
                                }} className="nav-link features">{isEng ? 'Features' : 'المميـزات'}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='home' onClick={(e) => {
                                    activeLink(e);
                                    closeNavbar();
                                }} className="nav-link app">{isEng ? 'Our App' : 'التطبيــق'}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='home' onClick={(e) => {
                                    activeLink(e);
                                    closeNavbar();
                                }} className="nav-link plans">{isEng ? 'Plans' : 'الخـطـط'}</Link>
                            </li>
                        </ul>
                        <div className="signup-btn text-center">
                            <Link to="signup" onClick={closeNavbar} className='btn black-btn px-4'>{isEng ? 'Sign Up' : 'إشتـــراك'}</Link>
                        </div>
                        <div className="signin-btn text-center">
                            <Link to="signin" onClick={closeNavbar} className='btn black-btn px-4'>{isEng ? 'Sign In' : 'تسجيل الدخول'}</Link>
                        </div>
                        <div className="custome d-flex justify-content-center align-items-center pb-4 pb-lg-0">
                            <div className="language py-2" onClick={() => {
                                changeLang();
                                closeNavbar()
                            }}>
                                <i className="fa-solid fa-globe fs-6"></i>
                                <button className='py-1'>{isEng ? 'العـربـيــة' : 'English'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>}
            
        </>
    )
}
