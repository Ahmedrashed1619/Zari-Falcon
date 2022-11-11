import React, { useContext } from 'react';
import WOW from 'wowjs';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { langContext } from '../context/store';
import $ from 'jquery';




export default function Contact({baseURL}) {

    let { isEng } = useContext(langContext);


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    useEffect(() => {
        $('nav .signin-btn').addClass('d-none');
        $('nav .signup-btn').removeClass('d-none');
    }, [])


    const [user, setUser] = useState({
        ContactName: '',
        ContactEmail: '',
        ContactPhone:'',
        ContactSubject:'',
        ContactMessage:'',
    })

    const [message, setMessage] = useState('');

    const [loadind, setLoadind] = useState(false);


    function getUserData(e) {
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    }


    async function registerContactForm(e) {

        e.preventDefault();
        setLoadind(true);
        let {data} = await axios({
            method: 'post',
            url: `${baseURL}contact`,
            data: user,
            headers: { "Content-Type": "multipart/form-data" },
        });

        if(isEng === true) {
            setMessage(data.MessageEn);
            setLoadind(false);
        }
        else {
            setMessage(data.MessageAr);
            setLoadind(false);
        }    
    }



    return (
        <>
            <section className="form-contact py-5 mb-5" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">
                    <div className="row gx-5 gy-4 d-flex justify-content-center align-items-center">
                        <div className="col-12">
                            <div className="main-title text-center mb-3 mt-5 pt-3 w-75 mx-auto wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <h2 className="fw-bold fs-1 mb-1 main-color">{isEng ? 'Ready to Get Started ?' : 'هل مستعــد للبــدء'}</h2>
                                <p className="mx-auto pb-0 mb-0 text-black">{isEng ? 'Your email address will not be published.' : 'لن يتم نشر عنوان بريدك الإلكتروني.'}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form encType="multipart/form-data" onSubmit={registerContactForm} className="p-5 form">

                                <label className="mb-1 wow fadeInLeft" data-wow-duration="1.5s" htmlFor="ContactName">{isEng ? 'Name' : 'الإســــم'}</label>
                                <input  onChange={getUserData} type="text" className="form-control p-2 wow fadeInLeft" data-wow-duration="1.5s" required name="ContactName" id="ContactName"/>

                                <label className=" mt-2 mb-1 wow fadeInLeft" data-wow-duration="1.5s" htmlFor="ContactEmail">{isEng ? 'Email' : 'البريــد الإلكترونــــي'}</label>
                                <input  onChange={getUserData} type="email" className="form-control p-2 wow fadeInLeft" data-wow-duration="1.5s" required name="ContactEmail" id="ContactEmail"/>

                                <label className=" mt-2 mb-1 wow fadeInLeft" data-wow-duration="1.5s" htmlFor="ContactPhone">{isEng ? 'Phone Number' : 'رقــم الهاتـــف'}</label>
                                <input  onChange={getUserData} type="tel" className="form-control p-2 wow fadeInLeft" data-wow-duration="1.5s" required name="ContactPhone" id="ContactPhone"/>

                                <label className="mt-2 mb-1 wow fadeInRight" data-wow-duration="1.5s" htmlFor="ContactSubject">{isEng ? 'Subject' : 'إســـم الشركــــة'}</label>
                                <input  onChange={getUserData} type="text" className="form-control p-2 wow fadeInRight" data-wow-duration="1.5s" required name="ContactSubject" id="ContactSubject"/>

                                <label className=" mt-2 mb-1 wow fadeInRight" data-wow-duration="1.5s" htmlFor="ContactMessage">{isEng ? 'Note' : 'ملاحظــــة'}</label>
                                <input  onChange={getUserData} type="text" className="form-control p-2 mb-2 wow fadeInRight" data-wow-duration="1.5s" required name="ContactMessage" id="ContactMessage"/>

                                {message.length > 0 ? <p id="alertSave" className={`alert ${message === 'Send Success' || message === 'تم الارسال بنجاح' ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{message}</p> : ''}

                                <div className="buttons text-center mt-4 wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <button className="btn black-btn py-3 w-100" type="submit" value="Send Message">{loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> : isEng ? 'Send Message' : 'إرســال رســالــة'}</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
