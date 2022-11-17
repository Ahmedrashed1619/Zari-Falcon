import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import {v4 as uuid} from 'uuid';
import { useNavigate } from 'react-router-dom';



export default function AddClients({totalClients , setTotalClients}) {


    useEffect(() => {
        $('.sidebar .menu-links a').removeClass('active');
        $('.sidebar .menu-links a.clients').addClass('active');
    }, [])


    let navigate = useNavigate();


    const [user , setUser] = useState({
        id : '',
        name : '',
        company : '',
        phone : '',
        long : '',
        lat : ''
    });


    const getUserData = (e) => {
        let myUser = {...user};
        myUser[e.target.name] = e.target.value;
        setUser(myUser)
    }


    function registerAddForm(e) {

        e.preventDefault();
        let ids = uuid();
        let uniqeId = ids;

        let totalArr = [...totalClients];
        totalArr.push({
            id: uniqeId.slice(0,3), 
            name: user.name, 
            company: user.company, 
            phone: user.phone, 
            long: user.long, 
            lat: user.lat});

            setTotalClients(totalArr);

            setTimeout(() => {
                navigate('../clients');
            }, 1500);

    }


    const resetForm = () => {
        let inputs = Array.from(document.querySelectorAll('.addsales-page input'));
        inputs.forEach((input) => {
            input.value = '';
        })
    }





    return (
        <>
            <div className="dashpage addsales-page py-5">
                <div className="mb-4">
                    <div className="note-page">
                        <button>Add New Client</button>
                    </div>
                </div>

                <form onSubmit={registerAddForm}>
                    <div className="row d-flex justify-content-center align-items-center g-4">

                        <div className="col-12">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="name-user">Name</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="text" className='bg-transparent mx-auto' required name="name" id="name-user" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="Company-user">Company</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="text" className='bg-transparent mx-auto' required name="company" id="Company-user" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="phone-user">Mobile no.</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="tel" className='bg-transparent mx-auto' required name="phone" id="phone-user" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="long-user">Longtude</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="text" className='bg-transparent mx-auto' required name="long" id="long-user" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="lat-user">Latitude</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="text" className='bg-transparent mx-auto' required name="lat" id="lat-user" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="submitAdd-buttons mt-5 d-flex justify-content-center align-items-center">
                        <button type='submit' className="btn black-btn py-2 px-4 me-4">Save</button>
                        <button onClick={resetForm} className="btn second-btn py-2 px-3">Cancel</button>
                    </div>

                </form>
                
            </div>
        </>
    )
}

