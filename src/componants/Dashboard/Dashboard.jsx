import React, { useContext, useEffect } from 'react';
import { langContext } from '../context/store';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { FaChartPie, FaUsers, FaRegMap, FaMapMarkerAlt } from 'react-icons/fa';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { BiBarChartSquare } from 'react-icons/bi';
import { TbRoute, TbLogout } from 'react-icons/tb';
// import userImg from '../images/dashboard/user.png';
import imgFooter from '../images/2 (3).png';
import userImg2 from '../images/dashboard/rashed4.jpg';
import $ from 'jquery';



export default function Dashboard({logOut}) {


    let { isOpen , toggleOpen } = useContext(langContext);


    const closeActive = () => {
        toggleOpen();
    }


    const menuItems = [
        {
            path : '/statistics',
            name : 'Statistics',
            icon : <FaChartPie />
        },
        {
            path : '/sales',
            name : 'Sales',
            icon : <FiUsers />
        },
        {
            path : '/settings',
            name : 'Settings',
            icon : <FiSettings />
        },
        {
            path : '/location',
            name : 'Location',
            icon : <FaMapMarkerAlt />
        },
        {
            path : '/clients',
            name : 'Clients',
            icon : <FaUsers />
        },
        {
            path : '/map',
            name : 'Map Review',
            icon : <FaRegMap />
        },
        {
            path : '/report',
            name : 'Routing Report',
            icon : <BiBarChartSquare />
        },
        {
            path : '/create',
            name : 'Make Route',
            icon : <TbRoute />
        },
    ];


    const closeNavLink = () => {
        if(isOpen === false && $('body').width() < 570) {
            $('.sidebar').animate({'left' : '-240px'} , 500);
            setTimeout(() => {
                toggleOpen();
            }, 500);
        }
    }


    function widthBody() {
        let width = $('body').width();

        if(isOpen === true) {

            if(width > 991) {
                $('.sidebar').css({'width': '300px' , 'left' : '0px'});
                $('.sidebar .menu-links .cont-imgFooter').css({'width' : '130px' , 'height' : '110px'});
                $('.sidebar .menu-links ul>div').css('marginBottom' , '25px');
                $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'none');
                $('.dashboard .main').css({'width' : 'calc(100% - 300px)' , 'left' : '300px'});
                $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
            }
    
            if(width > 1200) {
                $('.dashboard .main .topbar .search-topbar').css('width' , '900px');
            }
    
            if(width < 1200 && width > 950) {
                $('.dashboard .main .topbar .search-topbar').css('width' , '650px');
            }
    
            if(width < 991) {
                $('.sidebar').css({'width' : '240px' , 'left' : '-240px'});
                $('.sidebar .menu-links ul>div').css('marginBottom' , '20px');
                $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'flex');
                $('.sidebar .menu-links .cont-imgFooter').css({'width' : '130px' , 'height' : '110px'});
                $('.dashboard .main').css({'width' : '100%' , 'left' : '0'});
                $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
            }
    
            if (width < 950 && width > 768) {
                $('.dashboard .main .topbar .search-topbar').css('width' , '550px');
            }
    
            if (width < 768 && width > 570) {
                $('.dashboard .main .topbar .search-topbar').css('width' , '500px');
            }
    
            if (width < 570) {
                $('.dashboard .main .topbar .search-topbar').css('width' , '300px');
                $('.dashboard .main .topbar .user-img').css({'width' : '45px' , 'height' : '45px'});
            }
        }

        else {

            if(width > 991) {
                $('.sidebar').css({'width': '80px' , 'left' : '0px'});
                $('.sidebar .menu-links .cont-imgFooter').css({'width' : '60px' , 'height' : '60px'});
                $('.sidebar .menu-links ul>div').css('marginBottom' , '25px');
                $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'none');
                $('.dashboard .main').css({'width' : 'calc(100% - 80px)' , 'left' : '80px'});
                $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
            }
    
            if(width > 1200) {
                $('.dashboard .main .topbar .search-topbar').css('width' , '900px');
            }
    
            if(width < 1200 && width > 950) {
                $('.dashboard .main .topbar .search-topbar').css('width' , '650px');
            }
    
            if(width < 991) {
                $('.sidebar').css({'width' : '240px' , 'left' : '0px'});
                $('.sidebar .menu-links ul>div').css('marginBottom' , '25px');
                $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'flex');
                $('.sidebar .menu-links .cont-imgFooter').css({'width' : '130px' , 'height' : '110px'});
                $('.dashboard .main').css({'width' : 'calc(100% - 240px)' , 'left' : '240px'});
                $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
            }
    
            if (width < 950 && width > 700) {
                $('.dashboard .main .topbar .search-topbar').css('width' , '400px');
            }
    
            if (width < 700 && width > 570) {
                $('.dashboard .main .topbar .user-img').css({'width' : '50px' , 'height' : '50px'});
                $('.dashboard .main .topbar .search-topbar').css('width' , '300px');
            }
    
            if (width < 570) {
                $('.dashboard .main').css({'width' : '100%' , 'left' : '0'});
                $('.dashboard .main .topbar .search-topbar').css('width' , '300px');
                $('.dashboard .main .topbar .user-img').css({'width' : '45px' , 'height' : '45px'});
            }
        }
    }


    $(window).on('resize', () => {
        widthBody();
    });


    useEffect(() => {
        widthBody();
    }, [isOpen])
    



    return (
        <section className='dashboard'>
                {/* <Sidebar logOut={logOut}/> */}

                <div className="sidebar">
                    <div className='menu-links'>
                        
                        <ul className='list-unstyled'>
                            <div>
                                <span className='cont-imgFooter'>
                                    <img src={imgFooter} className="w-75" alt="zari falcon logo"/>
                                </span>
                                <span className='closeSidebar' onClick={closeActive}>
                                    <i className="fa-solid fa-xmark"></i>
                                </span>
                            </div>
                        {
                            menuItems.map((item, i) => (
                                    <li key={i} onClick={closeNavLink}>
                                        <NavLink to={`/dashboard${item.path}`} className='link'>
                                            <span className="icon">{item.icon}</span>
                                            <span className="title">{item.name}</span>
                                        </NavLink>
                                    </li>
                            ))
                        }
                            <li>
                                <div className='logOut' onClick={logOut}>
                                    <span className="icon">
                                        <TbLogout />
                                    </span>
                                    <span className="title">Log Out</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="main d-flex flex-column">

                    {/* top bar */}
                    <div className="topbar">
                        <div className="toggle-topbar" onClick={() => {
                            toggleOpen();
                            widthBody();
                        }}>
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
