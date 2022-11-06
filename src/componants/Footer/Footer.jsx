import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../context/store';
import imgFooter from '../images/2 (3).png';
import { useEffect } from 'react';
import $ from 'jquery';
import WOW from 'wowjs';





export default function Footer({activeLink}) {


    useEffect(() => {
        new WOW.WOW().init();
    }, [])
    

    let { isEng } = useContext(langContext);
    
    function changeDir() {
        let width = $('body').width();
        if (isEng === false) {
            $('.icons-footer a').css({'marginLeft' : '15px' , 'marginRight' : '0'});
            if(width > 992 && width < 1200) {
                $('.icons-footer a').css({'marginLeft' : '6px' , 'marginRight' : '0'});
            }
        }

        else {
            $('.icons-footer a').css({'marginLeft' : '0' , 'marginRight' : '15px'});
            if(width > 992 && width < 1200) {
                $('.icons-footer a').css({'marginLeft' : '0' , 'marginRight' : '6px'});
            }
        }
    }

    useEffect(() => {
        changeDir();
        return () => {
            changeDir();
        }
    }, [isEng]);

    $(window).on('resize', function() {
        changeDir();
    });



    return (
        <>
            <footer id="footer" className="footer py-5 bg-black position-relative" dir={isEng ? 'ltr' : 'rtl'}>
                <span id="btnTopFooter" className={`position-absolute top-0 end-0 translate-middle text-black`}><i
                        className="fa-solid fa-chevron-up fs-3 p-3 bg-span rounded-circle"></i></span>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="logo-footer">
                                <img src={imgFooter} className="w-50" alt="zari logo"/>
                                <p>{isEng ? `Zari is a Saudi-Egyptian company among a group of companies operating in more than one field
                                    in Saudi Arabia and the Middle East.` : 'حلول زاري لتقنية المعلومات شركة سعودية تعمل علي تطوير الأعمال وأن نكون شركاء نجاح مع قطاعات الأعمال المختلفة لتطوير أعمالهم من خلال تقديم حلول تقنية ةتسويقية. '}</p>
                                <h5 className="mb-4">{isEng ? 'Follow us' : 'تابعنــــا'}</h5>
                                <div className="icons-footer d-flex align-items-center mb-3">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ZARISolutionksa"><i
                                            className="fa-brands fa-facebook-f"></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/SolutionZari"><i
                                            className="fa-brands fa-twitter"></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/zarisolutionksa/"><i
                                            className="fa-brands fa-instagram"></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+966566770235"><i
                                            className="fa-brands fa-whatsapp"></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zari-solution-ksa-12717623b/"><i
                                            className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="navigate">
                                <h5 className="mb-5">{isEng ? 'Navigate' : 'التنقــــل'}</h5>
                                <div className="navbar-nav links-navigate d-flex justify-content-center flex-column">
                                    <li className="nav-item mb-1">
                                        <Link to='home' onClick={activeLink} className="nav-link mt-0 home" aria-current="page">{isEng ? 'Home' : 'الرئيسيــة'}</Link>
                                    </li>
                                    <li className="nav-item mb-1">
                                        <Link to='home' onClick={activeLink} className="nav-link mt-0 features">{isEng ? 'Features' : 'المميـزات'}</Link>
                                    </li>
                                    <li className="nav-item mb-1">
                                        <Link to='home' onClick={activeLink} className="nav-link mt-0 app">{isEng ? 'Our App' : 'التطبيــق'}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='home' onClick={activeLink} className="nav-link mt-0 plans">{isEng ? 'Plans' : 'الخـطـط'}</Link>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="navigate">
                                <h5 className="mb-5 contact">{isEng ? 'Contact us' : 'تواصــل معنـــا'}</h5>
                                <div className="d-flex justify-content-start align-items-center mb-4">
                                    <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-location-dot"></i></span>
                                    <a href="https://www.google.com/maps/place/24%C2%B049'57.9%22N+46%C2%B040'52.1%22E/@24.8327465,46.6789598,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xbb9f0e7b1014cb34!8m2!3d24.8327465!4d46.6811485?hl=en" target="_blank" rel="noopener noreferrer"><p className="lh-sm ksa mt-0">{isEng ? '8491 Othman Bin Affaan Road Al Narjas - Riyadh - KSA.' : '8491 طريق انس بن مالك تقاطع طريق عثمان بن عفان النرجس - الرياض - المملكة العربية السعودية.'}</p></a>
                                </div>
                                <div className="phone d-flex justify-content-start align-items-center mb-4">
                                    <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-phone"></i></span>
                                    <a className='mt-0' rel="noopener noreferrer" target="_blank" href="tel:+966920024403">{isEng ? ' +966 92 002 4403' : '4403 002 92 966+ '}</a>
                                </div>
                                <div className="phone d-flex justify-content-start align-items-center mb-4">
                                    <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-phone"></i></span>
                                    <a className='mt-0' rel="noopener noreferrer" target="_blank" href="tel:+966566770235">{isEng ? ' +966 56 677 0235' : '0235 677 56 966+ '}</a>
                                </div>
                                <div className="phone d-flex justify-content-start align-items-center mb-4">
                                    <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-phone"></i></span>
                                    <a className='mt-0' rel="noopener noreferrer" target="_blank" href="tel:+201151300867">{isEng ? ' 01151300867' : '01151300867 '}</a>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                    <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-envelope"></i></span>
                                    <a className='mt-0' rel="noopener noreferrer" target="_blank" href="mailto: info@zarisolution.com">info@zarisolution.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

