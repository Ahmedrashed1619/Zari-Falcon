import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../context/store';
import visa from '../images/checkout/visa 1.png';
import masterCard from '../images/checkout/Master card Icon.png';
import $ from 'jquery';
import WOW from 'wowjs';
import AOS from 'aos';




export default function Checkout() {

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

            // $('.radio-input:not(:first-child)').css({'marginRight' : '20px' , 'marginLeft' : '0'});
            $('form label').css({'paddingRight' : '5px' , 'paddingLeft' : '0'});
            if (width < 768) {
                $('.input-group input').css({'paddingRight' : '10px' , 'paddingLeft' : '20px'});
            }
            else {
                $('.input-group input').css({'paddingRight' : '20px' , 'paddingLeft' : '40px'});
            }
            $('.input-group img').css({'left' : '10px' , 'right' : 'auto'});
            $('.input-group i').css({'left' : '15px' , 'right' : 'auto'});
        }

        else {

            // $('.radio-input:not(:first-child)').css({'marginRight' : '0' , 'marginLeft' : '20px'});
            $('form label').css({'paddingRight' : '0' , 'paddingLeft' : '5px'});
            if (width < 768) {
                $('.input-group input').css({'paddingRight' : '20px' , 'paddingLeft' : '10px'});
            }
            else {
                $('.input-group input').css({'paddingRight' : '40px' , 'paddingLeft' : '20px'});
            }
            $('.input-group img').css({'left' : 'auto' , 'right' : '10px'});
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
            <section className="check-out py-5" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container pt-5 pb-4">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="caption-check">
                                <h2 className="main-color fw-bold mb-4 wow fadeInDown" data-wow-duration="1s"><i className={`fa-solid ${isEng ? 'fa-angle-right' : 'fa-angle-left'}`}></i> Checkout</h2>
                                <p className="fw-bold fs-4 wow fadeInDown" data-wow-duration="1s">Payment Method</p>
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
                                            <label htmlFor="nameCard" className="fs-5 fw-bold mt-3">Name on card</label>
                                            <div className="input-group">
                                                <input id="nameCard" type="text" name="name" required className="bg-transparent mx-auto" />
                                            </div>
                                            {/* <div id="alertNameCard" className="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">enter your first name & last name Each of them isn't more than 12 characters</div> */}
                                        </div>
                                        <div className="number-card position-relative wow fadeInRight" data-wow-duration="1.5s">
                                            <label htmlFor="number" className="fs-5 fw-bold mt-3">Card number</label>
                                            <div className='input-group'>
                                                <input id="number" type="number" name="number" required className="bg-transparent mx-auto" />
                                                <img id="img-input" src={masterCard} alt="img-input" />
                                            </div>
                                                {/* <div id="alertNumberCard" className="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">enter your card numbers consists of 16 digits</div> */}
                                        </div>
                                        <div className="cv-exp row">
                                            <div className="col-md-6 date wow fadeInLeft" data-wow-duration="1.5s">
                                                <label htmlFor="date" className="fs-5 fw-bold mt-3">Expiration date</label>
                                                <div className="input-group">
                                                    <input id="date" type="text" name="date" required className="bg-transparent mx-auto" placeholder="MM/YY" />
                                                </div>
                                                {/* <div id="alertdateCard" className="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">enter Expiration date (month/year) for your card so it isn't more than 2028 & not less than 2023</div> */}
                                            </div>
                                            <div className="col-md-6 cvv wow fadeInRight" data-wow-duration="1.5s">
                                                <label htmlFor="passwordCvv" className="fs-5 fw-bold mt-3">CVV</label>
                                                <div className="input-group">
                                                    <input id="passwordCvv" type="password" name="password" required className="bg-transparent mx-auto" placeholder="123" />
                                                    <i className="fa-regular fa-eye" onClick={showHidePass}></i>
                                                </div>
                                                {/* <div id="alertpasswordCvvCard" className="alert alert-danger p-1 text-center mx-auto mt-1 mb-0">enter the last three digits of your crrdit card password</div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons text-center mx-auto mt-5 wow fadeInUp" data-wow-duration="1s">
                                        {/* <p id="alertConfirm" className="fs-6 mb-2 w-75 text-center mx-auto"></p> */}
                                        <button type='submit' className="btn second-btn text-capitalize">Confirm Payment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="offer" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-out-cubic">
                                <h3 className="name">Junior Plan</h3>
                                <div className={`cont-price ${isEng ? 'text-start' : 'text-end'}`}>
                                    <h6 className="salary"><span className="fs-2 main-color">20 $</span> /Month or 190 $ /Year</h6>
                                    <h4><span className="main-color">3</span> card design</h4>
                                    <h4><span className="main-color">3</span> Location</h4>
                                    <h4><span className="main-color">3</span> Subusers</h4>
                                    <h4>Card Customizations</h4>
                                    <h4 className="through">Unique customer Enroll</h4>
                                    <h4 className="through">Data Export</h4>
                                    <h4 className="through">Push Notifications</h4>
                                    <div className="buttons text-center my-3 mx-auto">
                                        <Link to='../home' onClick={goToPlansSection} className="btn black-btn text-capitalize">Change my Plan</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
