import React, { useContext, useEffect, useState } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import signIn from '../images/sign/signin.png';
import WOW from 'wowjs';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';




export default function Signin({baseURL, saveUserData}) {


    const [user, setUser] = useState({
        UserEmail:'',
        UserPassword:'',
    });


    let navigate = useNavigate();

    const [message, setMessage] = useState('');

    const [loadind, setLoadind] = useState(false);

    const [apiCode , setApiCode] = useState(null);

    function getUserData(e) {
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    }


    async function registerSigninForm(e) {

        e.preventDefault();
        setLoadind(true);
        let {data} = await axios({
            method: 'post',
            url: `${baseURL}login`,
            data: user,
            headers: { "Content-Type": "multipart/form-data" },
        });
            
        if(isEng === true) {
            setMessage(data.ApiMsgEn);
            setLoadind(false);
        }
        else {
            setMessage(data.ApiMsgAr);
            setLoadind(false);
        }

        if(data.Success === true) {
            localStorage.setItem('userToken', data.AccessToken);
            saveUserData();
            setApiCode(data.Success);
            setTimeout(() => {
                navigate('../dashboard');
            }, 1500);
        }

    }





    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);


    useEffect(() => {
        new WOW.WOW().init();
    }, [])


    useEffect(() => {
        $('nav .signin-btn').addClass('d-none');
        $('nav .signup-btn').removeClass('d-none');
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


    function changeDir() {
        let width = $('body').width();

        if (isEng === false) {

            $('form label').css({'paddingRight' : '5px' , 'paddingLeft' : '0'});
            if (width < 768) {
            $('.input-group input').css({'paddingRight' : '10px' , 'paddingLeft' : '20px'});
            }
            else {
                $('.input-group input').css({'paddingRight' : '20px' , 'paddingLeft' : '30px'});
            }
            $('.input-group.pass-sign i').css({'left' : '15px' , 'right' : 'auto'});
        }

        else {

            $('form label').css({'paddingRight' : '0' , 'paddingLeft' : '5px'});
            if (width < 768) {
            $('.input-group input').css({'paddingRight' : '20px' , 'paddingLeft' : '10px'});
            }
            else {
                $('.input-group input').css({'paddingRight' : '30px' , 'paddingLeft' : '20px'});
            }
            $('.input-group.pass-sign i').css({'left' : 'auto' , 'right' : '15px'});
        }
    }

    function widthBody() {
        let width = $('body').width();
        if (width > 768 && isEng === true) {
            $('.input-group input').css({'paddingRight' : '30px' , 'paddingLeft' : '20px'});
        }
        else if (width < 768 && isEng === true) {
            $('.input-group input').css({'paddingRight' : '20px' , 'paddingLeft' : '10px'});
        }
        else if (width > 768 && isEng === false) {
            $('.input-group input').css({'paddingRight' : '20px' , 'paddingLeft' : '30px'});
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
                            <div className="img-sign-in text-center wow fadeInLeft" data-wow-duration="1.5s">
                                <img src={signIn} className='mx-auto' alt="sign in" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cont-form wow fadeInRight" data-wow-duration="1.5s">
                                <h2 className="main-color h1 fw-bold mb-1 text-center wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Sign In' : 'تسجيل الدخول'}</h2>
                                <form onSubmit={registerSigninForm}>
                                    <div className="email wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                        <label htmlFor="UserEmail" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Email' : 'البريــد الإلكترونـــي'}</label>
                                        <div className="input-group">
                                            <input id="UserEmail" onChange={getUserData} type="email" name="UserEmail" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your email address..' : 'ادخــل بريدك الإلكترونـــي..'} />
                                        </div>
                                        {/* <div id="alertEmail" className="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">enter your first name & last name Each of them isn't more than 12 characters</div> */}
                                    </div>
                                    <div className="password wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                        <label htmlFor="UserPassword" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Password' : 'كلمــة الســـر'}</label>
                                        <div className="input-group pass-sign">
                                            <input id="UserPassword" onChange={getUserData} type="password" name="UserPassword" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your password..' : 'ادخـــل كلمــة الســر..'} />
                                            <i className="fa-regular fa-eye" onClick={showHidePass}></i>
                                        </div>
                                        {/* <div id="alertPass" className="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">enter your first name & last name Each of them isn't more than 12 characters</div> */}
                                    </div>

                                    {message.length > 0 ? <p id="alertSave" className={`alert ${apiCode === true ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{message}</p> : ''}

                                    <div className="buttons text-center mx-auto mt-4 mb-2">
                                        {/* <p id="alertSignin" className="fs-6 mb-2 w-75 text-center mx-auto"></p> loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> :  */}
                                        <button type='submit' className="btn black-btn py-3 text-capitalize wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">{loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> : isEng ? 'Sign in' : 'تسجيل الدخول'}</button>
                                    </div>

                                    <h6 className='fw-bold mb-0 d-flex justify-content-center align-items-center'>{isEng ? 'Don’t have an account? ' : 'ليس لديك حســاب؟ '}
                                        <Link to='../signup' className={`fw-bold main-color mb-0 ${isEng ? 'ms-1' : 'me-1'} text-decoration-underline`}
                                            style={{cursor : 'pointer'}}>{isEng ? 'Sign up' : 'سجـل'}
                                        </Link>
                                    </h6>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
