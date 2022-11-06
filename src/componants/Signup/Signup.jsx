import React, { useContext, useEffect } from 'react';
import { langContext } from '../context/store';
import signUp from '../images/sign/signup.png';
import $ from 'jquery';
import WOW from 'wowjs';


export default function Signup() {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);


    useEffect(() => {
        new WOW.WOW().init();
    }, [])


    useEffect(() => {
        $('nav .signin-btn').removeClass('d-none');
        $('nav .signup-btn').addClass('d-none');
    }, [])


    useEffect(() => {
        $('.navbar .collapse .home').removeClass('active');
        $('.navbar .collapse .features').removeClass('active');
        $('.navbar .collapse .app').removeClass('active');
        $('.navbar .collapse .plans').removeClass('active');
    }, [])


    let { isEng } = useContext(langContext);
    
    
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
        if($('.repassword .input-group i').hasClass('fa-eye-slash')) {
            $('.repassword .input-group i').removeClass('fa-eye-slash');
            $('.repassword .input-group i').addClass('fa-eye');
            $('.repassword .input-group input').attr('type', 'password');
        }
        else {
            $('.repassword .input-group i').removeClass('fa-eye');
            $('.repassword .input-group i').addClass('fa-eye-slash');
            $('.repassword .input-group input').attr('type', 'text');
        }
    }


    function changeDir() {
        let width = $('body').width();

        if (isEng === false) {

            $('form label').css({'paddingRight' : '5px' , 'paddingLeft' : '0'});
            if (width < 768) {
                $('.input-group input').css({'paddingRight' : '10px' , 'paddingLeft' : '20px'});
            }
            else {
                $('.input-group input').css({'paddingRight' : '20px' , 'paddingLeft' : '40px'});
            }
            $('.input-group i').css({'left' : '15px' , 'right' : 'auto'});
        }

        else {

            $('form label').css({'paddingRight' : '0' , 'paddingLeft' : '5px'});
            if (width < 768) {
                $('.input-group input').css({'paddingRight' : '20px' , 'paddingLeft' : '10px'});
            }
            else {
                $('.input-group input').css({'paddingRight' : '40px' , 'paddingLeft' : '20px'});
            }
            $('.input-group i').css({'left' : 'auto' , 'right' : '15px'});
        }
    }

    function widthBody() {
        let width = $('body').width();
        if (width > 768 && isEng === true) {
            $('.input-group input').css({'paddingRight' : '40px' , 'paddingLeft' : '20px'});
        }
        else if (width < 768 && isEng === true) {
            $('.input-group input').css({'paddingRight' : '20px' , 'paddingLeft' : '10px'});
        }
        else if (width > 768 && isEng === false) {
            $('.input-group input').css({'paddingRight' : '20px' , 'paddingLeft' : '40px'});
        }
        else if (width < 768 && isEng === false) {
            $('.input-group input').css({'paddingRight' : '10px' , 'paddingLeft' : '20px'});
        }
    }
    
    $(window).on('resize', function() {
        widthBody();
        changeDir();
    });

    useEffect(() => {
        changeDir();
        return () => {
            changeDir();
        }
    }, [isEng]);
    
    
    return (
        <>
            <section className="sign py-5" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container py-4">
                    <div className="row gy-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="img-sign text-center wow fadeInLeft" data-wow-duration="1.5s">
                                <img src={signUp} className='mx-auto' alt="sign up" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cont-form wow fadeInRight" data-wow-duration="1.5s">
                                <h2 className="main-color h1 fw-bold mb-1 text-center wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Sign Up' : 'إشتـــراك'}</h2>
                                <form>
                                    <div className="inputs-info">
                                        <div className="name-input wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="name" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Name' : 'الإســـــم'}</label>
                                            <div className="input-group">
                                                <input id="name" type="text" name="name" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your name..' : 'ادخـل اسمــك..'} />
                                            </div>
                                            {/* <div id="alertName" className="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">enter your first name & last name Each of them isn't more than 12 characters</div> */}
                                        </div>
                                        <div className="company-name wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="companyName" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Company Name' : 'إســــم الشركـــة'}</label>
                                            <div className="input-group">
                                                <input id="companyName" type="text" name="company-name" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your company name..' : 'ادخـل إســـم شركتـــك..'} />
                                            </div>
                                            {/* <div id="alertcompanyName" className="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">enter your first name & last name Each of them isn't more than 12 characters</div> */}
                                        </div>
                                        <div className="email wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="email" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Email' : 'البريــد الإلكترونـــي'}</label>
                                            <div className="input-group">
                                                <input id="email" type="email" name="email" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your email address..' : 'ادخــل بريدك الإلكترونـــي..'} />
                                            </div>
                                            {/* <div id="alertEmail" className="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">enter your first name & last name Each of them isn't more than 12 characters</div> */}
                                        </div>
                                        <div className="phone wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="phone" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Phone Number' : 'رقــم الهاتـــف'}</label>
                                            <div className="input-group">
                                                <input id="phone" type="tel" name="phone" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your phone number..' : 'ادخــل رقـــم هاتفـــك..'} />
                                            </div>
                                            {/* <div id="alertPhone" className="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">enter your first name & last name Each of them isn't more than 12 characters</div> */}
                                        </div>
                                        <div className="password wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="password" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Password' : 'كلمــة الســـر'}</label>
                                            <div className="input-group">
                                                <input id="password" type="password" name="password" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your strong password..' : 'ادخـــل كلمــة ســر قويــة..'} />
                                                <i className="fa-regular fa-eye" onClick={showHidePass}></i>
                                            </div>
                                            {/* <div id="alertPass" className="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">enter your first name & last name Each of them isn't more than 12 characters</div> */}
                                        </div>
                                        <div className="repassword wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="repassword" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Confirm Password' : 'تأكيـــد كلمــة الســـر'}</label>
                                            <div className="input-group">
                                                <input id="repassword" type="repassword" name="repassword" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your strong password..' : 'ادخـــل كلمــة ســر قويــة..'} />
                                                <i className="fa-regular fa-eye" onClick={showHideRePass}></i>
                                            </div>
                                            {/* <div id="alertPass" className="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">enter your first name & last name Each of them isn't more than 12 characters</div> */}
                                        </div>
                                    </div>
                                    <div className="buttons text-center mx-auto mt-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                        {/* <p id="alertSignup" className="fs-6 mb-2 w-75 text-center mx-auto"></p> */}
                                        <button type='submit' className="btn black-btn py-3 text-capitalize">{isEng ? 'Sign up' : 'إشتـــراك'}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
