import React, { useContext, useEffect } from 'react';
import { langContext } from '../context/store';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import { BsSearch } from 'react-icons/bs';
import { FaChartPie, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { BiBarChartSquare } from 'react-icons/bi';
import { TbRoute, TbLogout } from 'react-icons/tb';
import { AiOutlineUser } from 'react-icons/ai';
// import userImg from '../images/dashboard/user.png';
// FaRegMap
import imgFooter from '../images/zari-logo-white.png';
// import userImg2 from '../images/home/Rectangle 143.png';
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
            class: 'statistics',
            icon : <FaChartPie />
        },
        {
            path : '/sales',
            name : 'Sales',
            class: 'sales',
            icon : <FiUsers />
        },
        {
            path : '/view',
            name : 'View Report',
            class: 'view',
            icon : <BiBarChartSquare />
        },
        {
            path : '/settings',
            name : 'Settings',
            class: 'settings',
            icon : <FiSettings />
        },
        {
            path : '/location',
            name : 'Location',
            class: 'location',
            icon : <FaMapMarkerAlt />
        },
        {
            path : '/clients',
            name : 'Clients',
            class: 'clients',
            icon : <FaUsers />
        },
        // {
        //     path : '/map',
        //     name : 'Map Review',
        //     class: 'map',
        //     icon : <FaRegMap />
        // },
        {
            path : '/report',
            name : 'Routing Report',
            class: 'report',
            icon : <BiBarChartSquare />
        },
        {
            path : '/create',
            name : 'Make Route',
            class: 'create',
            icon : <TbRoute />
        },
        // {
        //     path : '/profile',
        //     name : 'Profile',
        //     class: 'profile',
        //     icon : <AiOutlineUser />
        // },
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

            if(width > 1000) {
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

            if(width > 1100) {
                $('.total-table').css('overflow-x' , 'auto');
            }

            // if(width < 1100 && width > 1000) {
            //     $('.total-table').css('overflow-x' , 'scroll');
            // }
    
            if(width < 1200 && width > 950) {
                $('.dashboard .main .topbar .search-topbar').css('width' , '650px');
            }
    
            if(width < 1000) {
                $('.sidebar').css({'width' : '240px' , 'left' : '-240px'});
                $('.sidebar .menu-links ul>div').css('marginBottom' , '20px');
                $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'flex');
                $('.sidebar .menu-links .cont-imgFooter').css({'width' : '130px' , 'height' : '110px'});
                $('.dashboard .main').css({'width' : '100%' , 'left' : '0'});
                $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
                $('.total-table').css('overflow-x' , 'auto');
                $('.total-table-clients').css('overflow-x' , 'auto');
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

            if(width > 1000) {
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

            if(width < 1100 && width > 1000) {
                $('.total-table').css('overflow-x' , 'auto');
            }
    
            if(width < 1200 && width > 950) {
                $('.dashboard .main .topbar .search-topbar').css('width' , '650px');
            }
    
            if(width < 1000) {
                $('.sidebar').css({'width' : '240px' , 'left' : '0px'});
                $('.sidebar .menu-links ul>div').css('marginBottom' , '25px');
                $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'flex');
                $('.sidebar .menu-links .cont-imgFooter').css({'width' : '130px' , 'height' : '110px'});
                $('.dashboard .main').css({'width' : 'calc(100% - 240px)' , 'left' : '240px'});
                $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
                $('.total-table-clients').css('overflow-x' , 'auto');
            }
    
            if (width < 950 && width > 700) {
                $('.dashboard .main .topbar .search-topbar').css('width' , '400px');
            }
    
            if (width < 700 && width > 570) {
                $('.dashboard .main .topbar .user-img').css({'width' : '50px' , 'height' : '50px'});
                $('.dashboard .main .topbar .search-topbar').css('width' , '300px');
                $('.total-table-clients').css('overflow-x' , 'scroll');
            }
    
            if (width < 570) {
                $('.dashboard .main').css({'width' : '100%' , 'left' : '0'});
                $('.dashboard .main .topbar .search-topbar').css('width' , '300px');
                $('.dashboard .main .topbar .user-img').css({'width' : '45px' , 'height' : '45px'});
                $('.total-table-clients').css('overflow-x' , 'auto');
            }
        }
    }


    $(window).on('resize', () => {
        widthBody();
    });


    useEffect(() => {
        widthBody();
    }, [isOpen])
    

    // $(window).on('scroll' , () => {
    //     if($(window).scrollTop() > 50) {
    //         $('.topbar').css({'backgroundColor' : '#000' , 'position' : 'fixed'});
    //     }
    //     else {
    //         $('.topbar').css({'backgroundColor' : 'transparent' , 'position' : 'static'});
    //     }
        
    // })



    return (
        <section className='dashboard'>

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
                                        <NavLink to={`/dashboard${item.path}`} className={`link ${item.class}`}>
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
                    {/* <div className="topbar">
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
                    </div> */}

                    {/* outlet */}
                    <div >
                        <Outlet></Outlet>
                    </div>
                </div>
        </section>
    )
}
