import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { langContext } from '../context/store';
import visa from '../images/checkout/visa 1.png';
import masterCard from '../images/checkout/Master card Icon.png';
import $ from 'jquery';
import WOW from 'wowjs';
import AOS from 'aos';
import axios from 'axios';
import { BsFillCheckCircleFill } from 'react-icons/bs';



export default function Checkout({userData , saveUserData , baseURL , token}) {



    useEffect(() => {
        new WOW.WOW().init();
        AOS.init();
        AOS.refresh();
    }, [])


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
        $('.navbar .collapse .plans').addClass('active');
        $('.navbar .collapse .features').removeClass('active');
        $('.navbar .collapse .home').removeClass('active');
        $('.navbar .collapse .app').removeClass('active');
    }, []);


    useEffect(() => {
        $('nav .signin-btn').removeClass('d-none');
        $('nav .signup-btn').addClass('d-none');
    }, [])


    const showHidePassSign = () => {
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


    const showHidePass = () => {
        if($('.cvv .input-group i').hasClass('fa-eye-slash')) {
            $('.cvv .input-group i').removeClass('fa-eye-slash');
            $('.cvv .input-group i').addClass('fa-eye');
            $('.cvv .input-group input').attr('type', 'password');
        }
        else {
            $('.cvv .input-group i').removeClass('fa-eye');
            $('.cvv .input-group i').addClass('fa-eye-slash');
            $('.cvv .input-group input').attr('type', 'text');
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


    const changeImg = (e) => {
        if(e.target.value === 'Master Card') {
            $('.number-card .input-group img').attr('src' , masterCard);
        }
        else if(e.target.value === 'Visa') {
            $('.number-card .input-group img').attr('src' , visa);
        }
    }


    const goToPlansSection = () => {
        $('.navbar .collapse .plans').addClass('active');
        $('.navbar .collapse .features').removeClass('active');
        $('.navbar .collapse .home').removeClass('active');
        $('.navbar .collapse .app').removeClass('active');
        setTimeout(() => {
            $('html , body').animate({ scrollTop: $('#plans').offset().top - 40 }, 300);
        }, 200);
    }


    let { isEng } = useContext(langContext);


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
            $('.input-group.pass-sign img').css({'left' : '10px' , 'right' : 'auto'});
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
            $('.input-group.pass-sign img').css({'left' : 'auto' , 'right' : '10px'});
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


    // get data plan

    const {id} = useParams();
    const api = `${baseURL}plan`;
    const [fetchDataPlan, setFetchDataPlan] = useState();

    async function getDataPlan() {
        await axios.post(api, {
            IDPlan: id
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(res => {
            setFetchDataPlan(res.data.Plan);
        })
        .catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        getDataPlan();
    }, [])
    


    // sign in post data

    const [isPayClick, setIsPayClick] = useState(false);

    const [user, setUser] = useState({
        UserEmail:'',
        UserPassword:'',
    });

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
                setIsPayClick(!isPayClick);
                payForPlan();
            }, 1500);
        }
        

    }


    // sign up post data

    const [userSignup, setUserSignup] = useState({
        UserName:'',
        CompanyName:'',
        UserEmail:'',
        UserPhone:'',
        UserPassword:'',
    })

    const [confirm, setConfirm] = useState('');

    function getConfirm(e) {
        e.target.name = e.target.value;
        setConfirm(e.target.value)
    }

    // const [message, setMessage] = useState('');

    // const [loadind, setLoadind] = useState(false);

    // const [apiCode , setApiCode] = useState(null);

    function getUserDataSignup(e) {
        let myUser = {...userSignup};
        myUser[e.target.name] = e.target.value;
        setUserSignup(myUser);
    }


    async function registerSignupForm(e) {

        e.preventDefault();
        setLoadind(true);
        if(confirm === userSignup.UserPassword) {
            let {data} = await axios({
                method: 'post',
                url: `${baseURL}register`,
                data: userSignup,
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
                localStorage.setItem('userToken' , data.AccessToken);
                saveUserData();
                setApiCode(data.Success);
                setTimeout(() => {
                    setIsPayClick(!isPayClick);
                    payForPlan();
                }, 1500);
            }

        }
        else if (confirm !== user.UserPassword) {
            if(isEng === true) {
                setMessage('password does not match..');
                setLoadind(false);
            }
            else {
                setMessage('كلمة المرور غير متطابقة..');
                setLoadind(false);
            }
        }

    }


    function showSignin () {
        $('.signin-checkout').removeClass('d-none');
        $('.signup-checkout').addClass('d-none');
        $('html , body').animate({ scrollTop: 0 }, 200);
    }

    function showSignup (){
        $('.signup-checkout').removeClass('d-none');
        $('.signin-checkout').addClass('d-none');
        $('html , body').animate({ scrollTop: 0 }, 200);
    }


        // pay for plan

        const apiPay = `${baseURL}payment/initiate`;
        const [messagePlanEn, setMessagePlanEn] = useState();
        const [messagePlanAr, setMessagePlanAr] = useState();
        const [statusPlan, setStatusPlan] = useState();
    
        async function payForPlan() {

            if(!userData) {
                $('html , body').animate({ scrollTop: 0 }, 200);
                setTimeout(() => {
                    setIsPayClick(!isPayClick);                    
                }, 1000);
            }
            else if(userData) {
                await axios.post(apiPay, {
                    IDPackage: id
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    }
                })
                .then(res => {
                    setMessagePlanAr(res.data.ApiMsgAr);
                    setMessagePlanEn(res.data.ApiMsgEn);
                    setStatusPlan(res.data.Status);
                    if(res.data.Status === true) {
                        setTimeout(() => {
                            // window.open(res.data.PaymentURL, '_blank', 'noreferrer');
                            window.location.href = res.data.PaymentURL;
                        }, 1000);
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
            }
        }



    return (
        <>
            <section className="check-out py-5" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container pt-5 pb-4">

                    {!isPayClick ? 
                        <div className="row d-flex justify-content-center align-items-center g-5">
                            {/* <div className="col-lg-8">
                                <div className="caption-check">
                                    <h2 className="main-color fw-bold mb-4 wow fadeInDown" data-wow-duration="1s"><i className={`fa-solid ${isEng ? 'fa-angle-right' : 'fa-angle-left'}`}></i> {isEng ? 'Checkout' : 'الدفــع'}</h2>
                                    <p className="fw-bold fs-4 wow fadeInDown" data-wow-duration="1s">{isEng ? 'Payment Method' : 'طريقة الدفع'}</p>
                                    <form>
                                        <div className="inputs-radio my-2 d-flex align-items-center row">
                                            <div className="col-6 col-md-4">
                                                <div className="radio-input wow fadeInLeft" data-wow-duration="1.5s" onClick={changeImg}>
                                                    <input type="radio" name="Payment" defaultChecked id="master" value="Master Card" />
                                                    <label htmlFor="master" className="fw-bold">
                                                        <img id="img1" src={masterCard} className="ms-4" alt="Master Card" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <div className="radio-input wow fadeInRight" data-wow-duration="1.5s" onClick={changeImg}>
                                                    <input type="radio" name="Payment" id="visa" value="Visa" />
                                                    <label htmlFor="visa" className="fw-bold">
                                                        <img id="img2" src={visa} className="ms-4" alt="Visa" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inputs-info">
                                            <div className="name-card wow fadeInLeft" data-wow-duration="1.5s">
                                                <label htmlFor="nameCard" className="fs-5 fw-bold mt-3">{isEng ? 'Name on card' : 'الإسم في البطاقة'}</label>
                                                <div className="input-group">
                                                    <input id="nameCard" type="text" name="name" required className="bg-transparent mx-auto" />
                                                </div>
                                            </div>
                                            <div className="number-card position-relative wow fadeInRight" data-wow-duration="1.5s">
                                                <label htmlFor="number" className="fs-5 fw-bold mt-3">{isEng ? 'Card number' : 'رقم البطاقة'}</label>
                                                <div className='input-group'>
                                                    <input id="text" type="text" name="number" required className="bg-transparent mx-auto" />
                                                    <img id="img-input" className={isEng ? 'left-auto' : 'right-auto'} src={masterCard} alt="img-input" />
                                                </div>
                                            </div>
                                            <div className="cv-exp row">
                                                <div className="col-md-6 date wow fadeInLeft" data-wow-duration="1.5s">
                                                    <label htmlFor="date" className="fs-5 fw-bold mt-3">{isEng ? 'Expiration date' : 'تاريخ إنتهاء الصلاحية'}</label>
                                                    <div className="input-group">
                                                        <input id="date" type="text" name="date" required className="bg-transparent mx-auto" placeholder="MM/YY" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 cvv wow fadeInRight" data-wow-duration="1.5s">
                                                    <label htmlFor="passwordCvv" className="fs-5 fw-bold mt-3">{isEng ? 'CVV' : 'رمز الأمان'}</label>
                                                    <div className="input-group">
                                                        <input id="passwordCvv" type="password" name="password" required className="bg-transparent mx-auto" placeholder="123" />
                                                        <i className={`fa-regular fa-eye ${isEng ? 'left-i-auto' : 'right-i-auto'}`} onClick={showHidePass}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="buttons text-center mx-auto mt-5 wow fadeInUp" data-wow-duration="1s">
                                            <button type='submit' className="btn second-btn text-capitalize">{isEng ? 'Confirm Payment' : 'تأكيد الدفع'}</button>
                                        </div>
                                    </form>
                                </div>
                            </div> */}
                            {fetchDataPlan ? 
                                <div className="col-xl-5 col-lg-6 col-md-8 col-10">
                                    <div className="offer" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-out-cubic">
                                        <h3 className="name">{isEng ? fetchDataPlan.PackageNameEn : fetchDataPlan.PackageNameAr}</h3>
                                        <div className={`cont-price ${isEng ? 'text-start' : 'text-end'}`}>
                                            <h6 className="salary"><span className="fs-3 main-color">{fetchDataPlan.PackagePrice} $</span> {isEng ? '/ per Month' : '/ في الشهر'}</h6>
                                            <h4><span className="main-color">{isEng ? fetchDataPlan.PackageDescEn : fetchDataPlan.PackageDescAr}</span></h4>
                                            <h4><span className="main-color">{fetchDataPlan.Admin}</span> {isEng ? 'Admins' : 'أدمــن'}</h4>
                                            <h4><span className="main-color">{fetchDataPlan.User}</span> {isEng ? 'Users' : 'مستخــدم'}</h4>
                                            <h4><span className="main-color">{fetchDataPlan.History} {isEng ? 'Days' : 'يــوم'}</span> {isEng ? 'Keep Data' : 'الإحتفاظ بالداتا'}</h4>
                                            <h4><span className="main-color">{fetchDataPlan.DailyReport > 0 ? <BsFillCheckCircleFill className='main-color'/> : <i className="fa-solid fa-circle-xmark main-color"></i>}</span> {isEng ? 'Daily Report' : 'تقارير يومية'}</h4>
                                            <h4><span className="main-color">{fetchDataPlan.FindLocation > 0 ? <BsFillCheckCircleFill className='main-color'/> : <i className="fa-solid fa-circle-xmark main-color"></i>}</span> {isEng ? 'Find Sales Location' : 'تحديد الموقع الحالي للمستخدمين'}</h4>
                                            <h4><span className="main-color">{fetchDataPlan.Route > 0 ? <BsFillCheckCircleFill className='main-color'/> : <i className="fa-solid fa-circle-xmark main-color"></i>}</span> {isEng ? 'Route' : 'تحديد مسار للمستخدمين'}</h4>
                                            <h4><span className="main-color">{fetchDataPlan.RouteCheckReport > 0 ? <BsFillCheckCircleFill className='main-color'/> : <i className="fa-solid fa-circle-xmark main-color"></i>}</span> {isEng ? 'Route Check Report' : 'تقرير المسار'}</h4>
                                            <h4><span className="main-color">{fetchDataPlan.RouteMapReport > 0 ? <BsFillCheckCircleFill className='main-color'/> : <i className="fa-solid fa-circle-xmark main-color"></i>}</span> {isEng ? 'Route Map Report' : 'تقرير المسار على الخريطة'}</h4>
                                            
                                            {/* {messagePlanEn || messagePlanAr ? <p id="alertPlan" className={`alert ${statusPlan === true ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{isEng ? messagePlanEn : messagePlanAr}</p> : ''} */}

                                            <div className="buttons d-flex text-center my-3 mx-auto">
                                                {/* <Link to='../home' onClick={goToPlansSection} className="btn black-btn mx-auto text-capitalize">{isEng ? 'Change my Plan' : 'تغيير الخطة'}</Link> */}
                                                <button onClick={payForPlan} className="btn second-btn mx-auto text-capitalize">{isEng ? 'Confirm Payment' : 'تأكيد الدفع'}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : 
                                <div id="ready">
                                    <i className="fa fa-spinner fa-5x fa-spin"></i>
                                </div>
                            }
                        </div> 
                        
                        :

                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 md-8 col-10">
                                <div className="p-4 shadow-lg rounded-4 signin-checkout">
                                    <h3 className='mb-3 text-center fw-bold text-center'>{isEng ? 'Sign In' : 'تسجيل الدخول'}</h3>
                                    <form onSubmit={registerSigninForm}>
                                        <div className="email wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="UserEmail" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Email' : 'البريــد الإلكترونـــي'}</label>
                                            <div className="input-group">
                                                <input id="UserEmailSignin" onChange={getUserData} type="email" name="UserEmail" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your email address..' : 'ادخــل بريدك الإلكترونـــي..'} />
                                            </div>
                                        </div>
                                        <div className="password wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="UserPassword" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Password' : 'كلمــة الســـر'}</label>
                                            <div className="input-group pass-sign">
                                                <input id="UserPasswordSignin" onChange={getUserData} type="password" name="UserPassword" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your password..' : 'ادخـــل كلمــة الســر..'} />
                                                <i className={`fa-regular fa-eye ${isEng ? 'left-i-auto' : 'right-i-auto'}`} onClick={showHidePassSign}></i>
                                            </div>
                                        </div>
    
                                        {message.length > 0 ? <p id="alertSaveSignin" className={`alert ${apiCode === true ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{message}</p> : ''}
    
                                        <div className="buttons text-center mx-auto mt-4 mb-2">
                                            <button type='submit' className="btn black-btn py-3 text-capitalize wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">{loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> : isEng ? 'Sign in' : 'تسجيل الدخول'}</button>
                                        </div>
    
                                        <h6 className='fw-bold mb-0 d-flex justify-content-center align-items-center'>{isEng ? 'Don’t have an account? ' : 'ليس لديك حســاب؟ '}
                                            <span onClick={showSignup} className={`fw-bold main-color mb-0 ${isEng ? 'ms-1' : 'me-1'} text-decoration-underline`}
                                                style={{cursor : 'pointer'}}>{isEng ? 'Sign up' : 'سجـل'}
                                            </span>
                                        </h6>
                                    </form>
                                </div>

                                <div className="p-4 shadow-lg rounded-4 signup-checkout d-none">
                                    <h3 className='mb-3 text-center fw-bold text-center'>{isEng ? 'Sign Up' : 'إشتــراك'}</h3>
    
                                    <form onSubmit={registerSignupForm}>

                                        <div className="name-input wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="UserName" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Name' : 'الإســـــم'}</label>
                                            <div className="input-group">
                                                <input id="UserName" onChange={getUserDataSignup} type="text" name="UserName" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your name..' : 'ادخـل اسمــك..'} />
                                            </div>
                                        </div>

                                        <div className="company-name wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="CompanyName" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Company Name' : 'إســــم الشركـــة'}</label>
                                            <div className="input-group">
                                                <input id="CompanyName" onChange={getUserDataSignup} type="text" name="CompanyName" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your company name..' : 'ادخـل إســـم شركتـــك..'} />
                                            </div>
                                        </div>

                                        <div className="email wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="UserEmail" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Email' : 'البريــد الإلكترونـــي'}</label>
                                            <div className="input-group">
                                                <input id="UserEmail" onChange={getUserDataSignup} type="email" name="UserEmail" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your email address..' : 'ادخــل بريدك الإلكترونـــي..'} />
                                            </div>
                                        </div>

                                        <div className="phone wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="UserPhone" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Phone Number' : 'رقــم الهاتـــف'}</label>
                                            <div className="input-group">
                                                <input id="UserPhone" onChange={getUserDataSignup} type="tel" name="UserPhone" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your phone number..' : 'ادخــل رقـــم هاتفـــك..'} />
                                            </div>
                                        </div>

                                        <div className="password wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="UserPassword" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Password' : 'كلمــة الســـر'}</label>
                                            <div className="input-group pass-sign">
                                                <input id="UserPassword" onChange={getUserDataSignup} type="password" name="UserPassword" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your strong password..' : 'ادخـــل كلمــة ســر قويــة..'} />
                                                <i className={`fa-regular fa-eye ${isEng ? 'left-i-auto' : 'right-i-auto'}`} onClick={showHidePassSign}></i>

                                            </div>
                                        </div>

                                        <div className="repassword wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <label htmlFor="confirmPassword" className="fs-4 fw-bold mt-3 mb-1">{isEng ? 'Confirm Password' : 'تأكيـــد كلمــة الســـر'}</label>
                                            <div className="input-group pass-sign">
                                                <input id="confirmPassword" onChange={getConfirm} type="password" name="confirmPassword" required className="bg-transparent mx-auto" placeholder={isEng ? 'Enter your strong password..' : 'ادخـــل كلمــة ســر قويــة..'} />
                                                <i className={`fa-regular fa-eye ${isEng ? 'left-i-auto' : 'right-i-auto'}`} onClick={showHideRePass}></i>
                                            </div>
                                        </div>

                                        {message.length > 0 ? <p id="alertSaveSignup" className={`alert ${apiCode === true ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{message}</p> : ''}

                                        <div className="buttons text-center mx-auto mt-4 mb-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <button type='submit' className="btn black-btn py-3 text-capitalize">{loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> : isEng ? 'Sign up' : 'إشتـــراك'}</button>
                                        </div>

                                        <h6 className='fw-bold mb-0 d-flex justify-content-center align-items-center'>{isEng ? 'Already have an account? ' : 'لديك بالفعل حســاب؟ '}
                                            <span onClick={showSignin} className={`fw-bold main-color mb-0 ${isEng ? 'ms-1' : 'me-1'} text-decoration-underline`}
                                                style={{cursor : 'pointer'}}>{isEng ? 'Sign in' : 'تسجيل الدخول'}
                                            </span>
                                        </h6>

                                    </form>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </section>
        </>
    )
}
