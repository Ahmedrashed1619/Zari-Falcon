import React, { useContext, useEffect } from 'react';
import imgFeatures from '../images/home/Advantages-rafiki 1.png';
import imgApp from '../images/home/Screenshot.png';
import { langContext } from '../context/store';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import AOS from 'aos';




export default function Home({fetchHome}) {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);

    useEffect(() => {
        $('nav .signin-btn').addClass('d-none');
        $('nav .signup-btn').removeClass('d-none');
    }, [])
    

    useEffect(() => {   
        AOS.init();
        AOS.refresh();
    }, [])
    
    // const feature = [
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'}
    // ]

    const animAos = [
        {fade: "fade-up-right", delay: 'ease-in'},
        {fade: "fade-up-left", delay: 'ease-out'},
        {fade: "fade-down-right", delay: 'ease-in'},
        {fade: "fade-down-left", delay: 'ease-out'},
        {fade: "fade-up-right", delay: 'ease-in'},
        {fade: "fade-up-left", delay: 'ease-out'},
        {fade: "fade-down-right", delay: 'ease-in'},
        {fade: "fade-down-left", delay: 'ease-out'}
    ]
    


    let { isEng } = useContext(langContext);


    // click on video button

    function toggleTrailer() {
        let trailer = document.querySelector('.trailer');
        // let video = document.querySelector('.trailer iframe');

        trailer.classList.toggle('play');
        // video.pause();
        // video.currentTime = 0;
    }

    const goToAppSection = () => {
        $('.navbar .collapse .app').addClass('active');
        $('.navbar .collapse .features').removeClass('active');
        $('.navbar .collapse .home').removeClass('active');
        $('.navbar .collapse .plans').removeClass('active');
        $('html , body').animate({ scrollTop: $('#app').offset().top - 40 }, 300);
    }


    
    return (
        <>
            {/* header section */}
            <header id="home" className="position-relative" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="total-header min-vh-70 d-flex justify-content-center align-items-end pb-5">
                    <div className="container">
                        <div className="caption text-center">
                            <h1 className="text-capitalize fw-bold mb-4 mx-auto" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in">{isEng ? fetchHome.top.Title : fetchHome.top.TitleAr}</h1>
                            <p className="mb-4 py-1 mx-auto text-muted" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-out">{isEng ? fetchHome.top.Text : fetchHome.top.TextAr}
                            </p>
                            <div className="buttons row d-flex justify-content-center align-items-center mx-auto">
                                <div className="col-6">
                                    <button onClick={goToAppSection} className="btn main-btn black-btn"  data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in">
                                        <i className={`fa-solid fa-download ${isEng ? 'me-1' : 'ms-1'}`}></i> {isEng ? fetchHome.top.BtnEn : fetchHome.top.BtnAr}
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button type="button" onClick={toggleTrailer} className="modal-btn btn second-btn" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-out">
                                        <i className={`fa-solid fa-circle-play ${isEng ? 'me-1' : 'ms-1'}`}></i> {isEng ? fetchHome.top.Btn2En : fetchHome.top.Btn2Ar}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="trailer">
                        <iframe src="https://www.youtube.com/embed/0EMTIXkuMOU" title="Zari Sales" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <i className="fa-solid fa-xmark close" onClick={toggleTrailer}></i>
                        </div>
                    </div>
                </div>
            </header>

            {/* features section */}
            <section id='features' className='py-5' dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">
                    <div className="row pt-5 g-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-4">
                            <div className="img-features mx-auto py-4 text-center" data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
                                <h2 className='fw-bold mb-4 text-white'>{isEng ? fetchHome.feature.Title : fetchHome.feature.TitleAr}</h2>
                                <img src={imgFeatures} className='w-100' alt="features-img" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="cont mx-auto">
                                <div className="row gx-5">
                                    {fetchHome.feature.Features.map((item , i) => (
                                        <div key={i} className="col-md-6">
                                            <div className="feature p-3 mx-auto bg-light" data-aos={animAos[i].fade} data-aos-duration="500" data-aos-easing={animAos[i].delay}>
                                                <span className={`${isEng ? 'me-3' : 'ms-3'}`}><img src={item.FeatureImage} alt="feature" /></span>
                                                <p className='mb-0'>{isEng ? item.FeatureNameEn : item.FeatureNameAr}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* our app section */}
            <section id='app' className='py-5' dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center gy-5">
                        <div className="col-lg-6">
                            <div className="caption-app" data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <h2 className='fw-bold mb-4 h1' data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in">{isEng ? fetchHome.app.Title : fetchHome.app.TitleAr}</h2>
                                <p className='mb-4 text-muted' data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-out">{isEng ? fetchHome.app.Text : fetchHome.app.TextAr}</p>
                                <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/eg/app/zari-on-time/id1625508325"
                                    className="btn w-75 main-btn-p d-flex justify-content-center align-items-center mb-4" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in">
                                    <i className={`fa-brands fa-apple ${isEng ? 'me-3' : 'ms-3'} fa-2x`}></i>
                                    <div className={`parag ${isEng ? 'text-start' : 'text-end'}`}>
                                        <p className="mb-0 h5 available">{isEng ? fetchHome.app.BtnEn : fetchHome.app.BtnAr}</p>
                                    </div>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.zari.zariontime"
                                    className="btn w-75 second-btn-p d-flex justify-content-center align-items-center" data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-out">
                                    <i className={`fa-brands fa-google-play ${isEng ? 'me-3' : 'ms-3'} fa-2x`}></i>
                                    <div className={`parag ${isEng ? 'text-start' : 'text-end'}`}>
                                        <p className="mb-0 h5 get-on">{isEng ? fetchHome.app.Btn2En : fetchHome.app.Btn2Ar}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="img-app text-center" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <img src={imgApp} className="w-75" alt="sales app" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* plans section */}
            <section id='plans' className='py-5' dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">
                    <h2 className="fw-bold fs-1 mb-5 mt-4 w-75 mx-auto text-center" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-in">{isEng ? fetchHome.plans.Title : fetchHome.plans.TitleAr}</h2>
                    <div className="row d-flex justify-content-center align-items-center g-5">
                        {fetchHome.plans.Plans.map((plan , i) => (
                            <div key={i} className="col-lg-4">
                                <Link className="offer" to='../Checkout' data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                    <h3 className="name" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in">{isEng ? plan.NameEn : plan.NameAr}</h3>
                                    <div className={`cont-price ${isEng ? 'text-start' : 'text-end'}`}>
                                        <h6 data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-in" className="salary"><span className="fs-2 main-color">20 $</span> /Month or 190 $ /Year</h6>
                                        <h4><span className="main-color">{plan.MinUsers}</span> Min Users</h4>
                                        <h4><span className="main-color">{plan.MaxUsers}</span> Max Users</h4>
                                        <h4><span className="main-color">{plan.HistoryLog}</span> History Log</h4>
                                        <h4><span className="main-color">{plan.ClientMaxNumber}</span> Client Max Number</h4>
                                        <h4>{isEng ? plan.DescEn : plan.DescAr}</h4>
                                        {/* <h4 className="through">Unique customer Enroll</h4>
                                        <h4 className="through">Data Export</h4>
                                        <h4 className="through">Push Notifications</h4> */}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="buttons text-center mx-auto pt-3 mt-5" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-out">
                        <button className="btn black-btn w-75 text-capitalize">{isEng ? 'For yearly Contract Contact Us' : 'لإبرام عقد سنوي تواصل معنـــا'}</button>
                    </div>
                </div>
            </section>
        </>
    )
}
