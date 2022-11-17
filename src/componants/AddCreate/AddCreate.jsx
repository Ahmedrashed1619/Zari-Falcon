import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import {v4 as uuid} from 'uuid';
import { useNavigate } from 'react-router-dom';




export default function AddCreate({totalCreate , setTotalCreate}) {


    useEffect(() => {
        $('.sidebar .menu-links a').removeClass('active');
        $('.sidebar .menu-links a.create').addClass('active');
    }, [])
    

    let navigate = useNavigate();


    const [user , setUser] = useState({
        id : '',
        clientname : '',
        sallername : '',
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

        let totalArr = [...totalCreate];
        totalArr.push({
            id: uniqeId.slice(0,3), 
            clientname: user.clientname,
            sallername: user.sallername,
            date: user.date,
            });

            setTotalCreate(totalArr);

            setTimeout(() => {
                navigate('../create');
            }, 1500);

    }


    // const resetForm = () => {
    //     let inputs = Array.from(document.querySelectorAll('.addsales-page input'));
    //     inputs.forEach((input) => {
    //         input.value = '';
    //     })
    // }





    return (
        <>
            <div className="dashpage addsales-page py-5">
                <div className="mb-5">
                    <div className="note-page">
                        <button>Add New Route</button>
                    </div>
                </div>

                <form onSubmit={registerAddForm}>
                    <div className="row d-flex justify-content-center align-items-center g-4">

                        <div className="col-12">
                            <div className="group-add">
                                <label className="fs-5 fw-bold mb-1" htmlFor="clientname">Client Name</label>
                                <div className="input-group">
                                    <select onChange={getUserData} className='bg-transparent py-2 form-select' required name="clientname" id="clientname">
                                        <option value="Ahmed Rashed">Ahmed Rashed</option>
                                        <option value="Nader Salah">Nader Salah</option>
                                        <option value="Mosad Hagag">Mosad Hagag</option>
                                        <option value="Anas">Anas</option>
                                        <option value="Samr">Samr</option>
                                        <option value="Kholi">Kholi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="group-add">
                                <label className="fs-5 fw-bold mb-1" htmlFor="sallername">Saller Name</label>
                                <div className="input-group">
                                    <select onChange={getUserData} className='bg-transparent py-2 form-select' required name="sallername" id="sallername">
                                        <option value="Ahmed Rashed">Ahmed Rashed</option>
                                        <option value="Nader Salah">Nader Salah</option>
                                        <option value="Mosad Hagag">Mosad Hagag</option>
                                        <option value="Anas">Anas</option>
                                        <option value="Samr">Samr</option>
                                        <option value="Kholi">Kholi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="group-add">
                                <label className="fs-5 fw-bold mb-1" htmlFor="date">Date</label>
                                <div className="input-group">
                                    <input onChange={getUserData} type="date" className='bg-transparent mx-auto' required name="date" id="date" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="submitAdd-buttons mt-5 d-flex justify-content-center align-items-center">
                        <button type='submit' className="btn black-btn py-2 px-4">Save</button>
                        {/* <button onClick={resetForm} className="btn second-btn py-2 px-3">Cancel</button> */}
                    </div>

                </form>
                
            </div>
        </>
    )
}

