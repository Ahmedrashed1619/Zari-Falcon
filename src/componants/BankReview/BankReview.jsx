import React, { useState } from 'react';
import { useEffect } from 'react';
// import imgNotFound from '../images/404 Error Page not Found.png';
import success from '../../componants/images/success.png';
import reject from '../../componants/images/reject.png';
import $ from 'jquery';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function BankReview({baseURL , setUserData}) {

    const navigate = useNavigate()

    // useEffect(() => {
    //     $('#navbar').addClass('d-none');
    //     $('#footer').addClass('d-none')
    
    //     return () => {
    //         $('#navbar').removeClass('d-none');
    //         $('#footer').removeClass('d-none')
    //     }
    // }, [])


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
        setTimeout(() => {
            setUserData(null);
            localStorage.removeItem('userToken');
            if(fetchData === true) {
                navigate('../home');
            }
            else {
                navigate('../checkout');
            }
        }, 7000);
    }, [])


    return (
            <>

                {/* header */}
                <header id="notfound" className="notfound-page">
                    <div className="bg-light">
                        <div className="container">
                            {fetchData === true ? 
                                <div className="img-notfound min-vh-70 d-flex align-items-center">
                                    <img src={success} className="w-50 mx-auto" alt="img-not-found"/>
                                </div>
                            :
                                <div className="img-notfound min-vh-70 d-flex align-items-center">
                                    <img src={reject} className="w-50 mx-auto" alt="img-not-found"/>
                                </div>
                        }
                        </div>
                    </div>
                </header>
            </>
    )
}

