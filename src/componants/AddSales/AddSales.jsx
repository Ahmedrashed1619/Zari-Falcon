import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import {v4 as uuid} from 'uuid';
import { useNavigate } from 'react-router-dom';




export default function AddSales({totalUsers , setTotalUsers}) {


    useEffect(() => {
        $('.sidebar .menu-links a').removeClass('active');
        $('.sidebar .menu-links a.sales').addClass('active');
    }, [])
    

    let navigate = useNavigate()

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


    const [user , setUser] = useState({
        id : '',
        name : '',
        company : '',
        email : '',
        phone : '',
        role : '',
        status : ''
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

        let totalArr = [...totalUsers];
        totalArr.push({
            id: uniqeId.slice(0,3), 
            name: user.name, 
            company: user.company, 
            email: user.email, 
            phone: user.phone, 
            role: user.role, 
            status: user.status});

            setTotalUsers(totalArr);

            setTimeout(() => {
                navigate('../sales');
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
                        <button>Add New User</button>
                    </div>
                </div>

                <form onSubmit={registerAddForm}>
                    <div className="row d-flex justify-content-center align-items-center g-4">

                        <div className="col-md-6">
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
                                <label className="fs-5 fw-bold" htmlFor="Email-user">Email</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="email" className='bg-transparent mx-auto' required name="email" id="Email-user" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="phone-user">Mobile</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="tel" className='bg-transparent mx-auto' required name="phone" id="phone-user" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="Role-user">Role</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="text" className='bg-transparent mx-auto' required name="role" id="Role-user" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add">
                                <label className="fs-5 fw-bold" htmlFor="status-user">Status</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="text" className='bg-transparent mx-auto' required name="status" id="status-user" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add password">
                                <label className="fs-5 fw-bold" htmlFor="password-user">Password</label>
                                <div className="input-group">
                                    <input type="password" className='bg-transparent mx-auto' required name="password-user" id="password-user" />
                                    <i className="fa-regular fa-eye" onClick={showHidePass}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="group-add repaassword">
                                <label className="fs-5 fw-bold" htmlFor="repass-user">Confirm</label>
                                <div className="input-group">
                                    <input type="password" className='bg-transparent mx-auto' required name="repass-user" id="repass-user" />
                                    <i className="fa-regular fa-eye" onClick={showHideRePass}></i>
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
