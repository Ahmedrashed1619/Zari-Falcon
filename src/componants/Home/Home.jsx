import React, { useContext, useEffect } from 'react';
import imgFeatures from '../images/home/Advantages-rafiki 1.png';
import imgApp from '../images/home/Screenshot.png';
import { langContext } from '../context/store';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import AOS from 'aos';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState } from 'react';
// import Package from '../Package/Package';
import { BsFillCheckCircleFill } from 'react-icons/bs'




export default function Home({fetchHome}) {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);

    useEffect(() => {
        $('nav .signup-btn').addClass('d-none');
        $('nav .signin-btn').removeClass('d-none');
    }, [])
    

    useEffect(() => {   
        AOS.init();
        AOS.refresh();
    }, [])
    

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
    

    const [arr, setArr] = useState([])

    useEffect(() => {
        setArr(fetchHome.plans.Plans)
    }, [arr])

    
    // const plans = {
    //     items: arr.length,
    //     responsiveClass: true,
    //     nav: false,
    //     dots: false,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 5000,
    //     autoplayHoverPause: true,
    //     mouseDrag: true,
    //     touchDrag: true,
    //     stagePadding: 50,
    //     margin: 30,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         992: {
    //             items: 2,
    //         },
    //         1250: {
    //             items: 3,
    //         }
    //     },
    // }


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
                            <iframe src={fetchHome.top.Video} title="تطبيق Zari Falcon هو التطبيق الأهم في عالم المبيعات" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                                {/* <h1>{html}</h1> */}
                                <img src={fetchHome.feature.Image ? fetchHome.feature.Image : imgFeatures} className='w-100' alt="features-img" />
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
                                {/* <p className='mb-4 text-muted' data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-out">{isEng ? fetchHome.app.Text : fetchHome.app.TextAr}</p> */}
                                <button
                                    className="btn w-75 main-btn-p d-flex justify-content-center align-items-center mb-4" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in">
                                    <i className={`fa-brands fa-apple ${isEng ? 'me-3' : 'ms-3'} fa-2x`}></i>
                                    <div className={`parag ${isEng ? 'text-start' : 'text-end'}`}>
                                        <p className="mb-0 h5 available">{isEng ? fetchHome.app.BtnEn : fetchHome.app.BtnAr}</p>
                                    </div>
                                </button>
                                <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.zari.sales.outdoor"
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

                    {/* <OwlCarousel className="slider-items owl-carousel wow fadeInRight" data-wow-duration="1.5s" {...plans}>
                        {fetchHome.plans.Plans.map((item , i) => (
                            <Package 
                                key={i} 
                                AdminNum={item.AdminNum} 
                                CheckReport={item.CheckReport} 
                                ClientNum={item.ClientNum} 
                                DailyReport={item.DailyReport}
                                DescAr={item.DescAr}
                                DescEn={item.DescEn}
                                FindLocation={item.FindLocation}
                                HistoryLog={item.HistoryLog}
                                id={item.ID}
                                MakeRoute={item.MakeRoute}
                                NameAr={item.NameAr}
                                NameEn={item.NameEn}
                                Price={item.Price}
                                RouteReport={item.RouteReport}
                                SalesNum={item.SalesNum}
                            />
                        ))}
                    </OwlCarousel> */}


                    {/* <table class="table table-borderless table-striped table-hover text-center table-responsive">
                        <thead>
                            <tr>
                                <th scope="col-4" class="head-th">Features</th>
                                <th scope="col-2" class="head-th">Starter</th>
                                <th scope="col-4" class="most-pop-th-td head-th">Growth</th>
                                <th scope="col-2" class="head-th">Ultimate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="color: grey">Branch</td>
                                <td>1</td>
                                <td class="most-pop-th-td">2</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td style="color: grey">Card Design</td>
                                <td>1</td>
                                <td class="most-pop-th-td">3</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td style="color: grey">Location</td>
                                <td>3</td>
                                <td class="most-pop-th-td">5</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td style="color: grey">Individual Messages</td>
                                <td><i class="fa-solid fs-4 fa-check"></i></td>
                                <td class="most-pop-th-td"><i class="fa-solid fs-4 fa-check"></i></td>
                                <td><i class="fa-solid fs-4 fa-check"></i></td>
                            </tr>
                            <tr>
                                <td style="color: grey">Group Messages</td>
                                <td><i class="fa-solid fs-4 fa-xmark"></i></td>
                                <td class="most-pop-th-td"><i class="fa-solid fs-4 fa-check"></i></td>
                                <td><i class="fa-solid fs-4 fa-check"></i></td>
                            </tr>
                            <tr>
                                <td style="color: grey">User</td>
                                <td>2</td>
                                <td class="most-pop-th-td">5</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td style="color: grey">Import&Export Data</td>
                                <td><i class="fa-solid fs-4 fa-xmark"></i></td>
                                <td class="most-pop-th-td"><i class="fa-solid fs-4 fa-check"></i></td>
                                <td><i class="fa-solid fs-4 fa-check"></i></td>
                            </tr>
                            <tr>
                                <td style="color: grey">Design Edit</td>
                                <td><i class="fa-solid fs-4 fa-xmark"></i></td>
                                <td class="most-pop-th-td"><i class="fa-solid fs-4 fa-xmark"></i></td>
                                <td><i class="fa-solid fs-4 fa-check"></i></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><a href="./check.html" class="btn main-btn w-75 fw-bold">Order</a></td>
                                <td class="most-pop-th-td"><a href="./check.html" class="btn main-btn w-100 fw-bold">Order</a></td>
                                <td><a href="./check.html" class="btn main-btn w-75 fw-bold">Order</a></td>
                            </tr>
                        </tbody>
                    </table> */}

                    {/* <div className="buttons text-center mx-auto pt-3 mt-5" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-out">
                        <Link to='../contact' className="btn black-btn w-75 text-capitalize">{isEng ? 'For yearly Contract Contact Us' : 'لإبرام عقد سنوي تواصل معنـــا'}</Link>
                    </div> */}

                    <div className="table-scroll" data-aos="fade-in" data-aos-duration="1500" data-aos-easing="ease-in">
                        <table className="table table-home borderless table-striped table-hover table-responsive text-center">
                            
                            <thead>
                                <tr>
                                    <th scope='col-4' className={isEng ? 'side-en' : 'side-ar'} style={{backgroundColor: 'var(--mainColor)'}}>{isEng ? fetchHome.plans2.Plans[0].TitleEn : fetchHome.plans2.Plans[0].TitleAr}</th>
                                    {isEng ? 
                                        fetchHome.plans2.Plans[0].DataEn.map((item , i) => (
                                            <th key={i} scope='col-2'>{item}</th>
                                        )) : 
                                        fetchHome.plans2.Plans[0].DataAr.map((item , i) => (
                                            <th key={i} scope='col-2'>{item}</th>
                                        ))
                                    }
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className='most-pop-th-td'>{isEng ? fetchHome.plans2.Plans[1].TitleEn : fetchHome.plans2.Plans[1].TitleAr}</td>                                
                                    {fetchHome.plans2.Plans[1].DataEn.map((item , i) => (
                                        <td key={i}>{item} {isEng ? 'Admins' : 'أدمـن'}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className='most-pop-th-td'>{isEng ? fetchHome.plans2.Plans[2].TitleEn : fetchHome.plans2.Plans[2].TitleAr}</td>
                                    {fetchHome.plans2.Plans[2].DataEn.map((item , i) => (
                                        <td key={i}>{isEng && item === 'Unlimited' ? <span className='h2 fw-bold'>∞</span> : !isEng && item === 'Unlimited' ? <span className='h2 fw-bold'>∞</span> : item}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className='most-pop-th-td'>{isEng ? fetchHome.plans2.Plans[3].TitleEn : fetchHome.plans2.Plans[3].TitleAr}</td>
                                    {fetchHome.plans2.Plans[3].DataEn.map((item , i) => (
                                        <td key={i}>{isEng && item === 'Unlimited' ? <span className='h2 fw-bold'>∞</span> : !isEng && item === 'Unlimited' ? <span className='h2 fw-bold'>∞</span> : item} {isEng && item <= 12 && item > 1 ? 'Months' : isEng && item === 1 ? 'Month' : isEng && item === 'Unlimited' ? '' :
                                            !isEng && item <= 12 && item > 2 ? 'شهــور' : !isEng && item === 1 ? 'شهــر' : !isEng && item === 2 ? 'شهــرين' :  !isEng && item === 'Unlimited' ? '' : ''}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className='most-pop-th-td'>{isEng ? fetchHome.plans2.Plans[4].TitleEn : fetchHome.plans2.Plans[4].TitleAr}</td>
                                    {fetchHome.plans2.Plans[4].DataEn.map((item , i) => (
                                        <td key={i}>{item === '1' ? <BsFillCheckCircleFill className='fs-4 main-color'/> : <i className="fa-solid fa-circle-xmark fs-4 main-color"></i> }</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className='most-pop-th-td'>{isEng ? fetchHome.plans2.Plans[5].TitleEn : fetchHome.plans2.Plans[5].TitleAr}</td>
                                    {fetchHome.plans2.Plans[5].DataEn.map((item , i) => (
                                        <td key={i}>{item === '1' ? <BsFillCheckCircleFill className='fs-4 main-color'/> : <i className="fa-solid fa-circle-xmark fs-4 main-color"></i> }</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className='most-pop-th-td'>{isEng ? fetchHome.plans2.Plans[6].TitleEn : fetchHome.plans2.Plans[6].TitleAr}</td>
                                    {fetchHome.plans2.Plans[6].DataEn.map((item , i) => (
                                        <td key={i}>{item === '1' ? <BsFillCheckCircleFill className='fs-4 main-color'/> : <i className="fa-solid fa-circle-xmark fs-4 main-color"></i> }</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className='most-pop-th-td'>{isEng ? fetchHome.plans2.Plans[7].TitleEn : fetchHome.plans2.Plans[7].TitleAr}</td>
                                    {fetchHome.plans2.Plans[7].DataEn.map((item , i) => (
                                        <td key={i}>{item === '1' ? <BsFillCheckCircleFill className='fs-4 main-color'/> : <i className="fa-solid fa-circle-xmark fs-4 main-color"></i> }</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className='most-pop-th-td'>{isEng ? fetchHome.plans2.Plans[8].TitleEn : fetchHome.plans2.Plans[8].TitleAr}</td>
                                    {fetchHome.plans2.Plans[8].DataEn.map((item , i) => (
                                        <td key={i}>{item === '1' ? <BsFillCheckCircleFill className='fs-4 main-color'/> : <i className="fa-solid fa-circle-xmark fs-4 main-color"></i> }</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className='most-pop-th-td'>{isEng ? fetchHome.plans2.Plans[9].TitleEn : fetchHome.plans2.Plans[9].TitleAr}</td>
                                    {fetchHome.plans2.Plans[9].DataEn.map((item , i) => (
                                        <td key={i}>{item !== '' ? item : <Link to='../contact' className='btn black-btn w-75' style={{paddingTop: '0.7rem' , paddingBottom: '0.7rem' , fontWeight: '600'}}>{isEng ? 'Contact us' : 'تواصل معنــا'}</Link>} {item !== '' ? <span className='text-muted' style={{fontWeight: 600}}>{isEng ? '$ per month' : '$ في الشهر'}</span> : ''}</td>
                                    ))}
                                </tr>
                            </tbody>

                            {/* <tfoot>
                                <tr>
                                    <td className='last'>{isEng ? fetchHome.plans2.Plans[10].TitleEn : fetchHome.plans2.Plans[10].TitleAr}</td>
                                    {fetchHome.plans2.Plans[10].DataEn.map((item , i) => (
                                        item === 1 ? 
                                        <td key={i} className='last'><Link to='../contact' className='btn black-btn w-75' style={{paddingTop: '0.7rem' , paddingBottom: '0.7rem' , fontWeight: '600'}}>{isEng ? 'Contact us' : 'تواصل معنــا'}</Link></td>
                                        :
                                        <td key={i} className='last'><button className='btn black-btn w-75' style={{paddingTop: '0.7rem' , paddingBottom: '0.7rem' , fontWeight: '600'}}>{isEng ? 'Order' : 'اطلــب'}</button></td>
                                    ))}
                                </tr>
                            </tfoot> */}

                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
