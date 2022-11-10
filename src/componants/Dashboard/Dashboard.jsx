import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
// import userImg from '../images/dashboard/user.png';
import userImg2 from '../images/dashboard/rashed4.jpg';
import $ from 'jquery';



export default function Dashboard({logOut}) {


    const toggleActive = () => {
        $('.sidebar').toggleClass('show-hide');
        $('.dashboard .main').toggleClass('show-hide');
        $('.sidebar .menu-links .cont-imgFooter').toggleClass('show-hide');
    }



    return (
        <section className='dashboard'>
                <Sidebar logOut={logOut}/>

                <div className="main d-flex flex-column">

                    {/* top bar */}
                    <div className="topbar">
                        <div className="toggle-topbar" onClick={toggleActive}>
                            <FaBars />
                        </div>
                        <div className="search-topbar">
                            <div className="group">
                                <input type="text" placeholder='Search here..' />
                                <BsSearch />
                            </div>
                        </div>
                        <div className="user-img">
                            <img src={userImg2} alt="user" />
                        </div>
                    </div>

                    {/* outlet */}
                    <Outlet></Outlet>                    
                </div>
        </section>
    )
}
