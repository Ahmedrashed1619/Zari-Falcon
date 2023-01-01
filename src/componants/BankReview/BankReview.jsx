import React, { useState , useEffect , useContext } from 'react';
// import imgNotFound from '../images/404 Error Page not Found.png';
import success from '../../componants/images/success.png';
import reject from '../../componants/images/reject.png';
import $ from 'jquery';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { langContext } from '../context/store';



export default function BankReview({baseURL , setUserData}) {

    const navigate = useNavigate();

    let { isEng } = useContext(langContext);


    useEffect(() => {
        $('nav .signin-btn').removeClass('d-none');
        $('nav .signup-btn').addClass('d-none');
    }, [])


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
        $('.navbar .collapse .home').removeClass('active');
        $('.navbar .collapse .features').removeClass('active');
        $('.navbar .collapse .app').removeClass('active');
        $('.navbar .collapse .plans').removeClass('active');
        $('.sidebar .menu-links a').removeClass('active');
    }, []);


      // Home data 
    let [fetchData, setFetchData] = useState();
    let [fetchMSGAr, setFetchMSGAr] = useState();
    let [fetchMSGEn, setFetchMSGEn] = useState();

    const getData = async () => {
        await axios.get(`${baseURL}payment/callback`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        })
        .then(res => {
            if (res.status === 200 && res.request.readyState === 4) {
                setFetchData(res.data.Success);
                setFetchMSGAr(res.data.ApiMsgAr);
                setFetchMSGEn(res.data.ApiMsgEn);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        getData();
    }, []);


    useEffect(() => {

        if(fetchData === true) {
            setTimeout(() => {
                navigate('../home');
                setUserData(null);
                localStorage.removeItem('userToken');
            }, 7000);
        }
    }, [fetchData])


    return (
            <>

                {/* header */}
                <header id="notfound" className="notfound-page py-5" dir={isEng ? 'ltr' : 'rtl'}>
                    <div className="mt-5 mt-md-0">
                        <div className="container">
                            {fetchData === true ? 
                                <div className="min-vh-70 row d-flex justify-content-center align-items-center g-0">
                                    <div className="col-md-3">
                                        <h1 className='mb-0 text-center text-success fw-bold'>{isEng ? fetchMSGEn : fetchMSGAr}</h1>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="img-notfound d-flex align-items-center">
                                            <img src={success} className="w-50 mx-auto" alt="bankreview"/>
                                        </div>
                                    </div>
                                </div>
                            :
                            <div className="min-vh-70 row d-flex justify-content-center align-items-center g-0">
                                <div className="col-md-3">
                                    <h1 className='mb-0 text-center text-danger fw-bold'>{isEng ? fetchMSGEn : fetchMSGAr}</h1>
                                </div>
                                <div className="col-md-9">
                                    <div className="img-notfound d-flex align-items-center">
                                        <img src={reject} className="w-50 mx-auto" alt="bankreview"/>
                                    </div>
                                </div>
                            </div>
                        }
                        </div>
                    </div>
                </header>
            </>
    )
}

