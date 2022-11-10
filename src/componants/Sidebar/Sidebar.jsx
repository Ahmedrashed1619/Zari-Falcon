import React from 'react';
import imgFooter from '../images/2 (3).png';
import { NavLink } from 'react-router-dom';
import { FaChartPie, FaUsers, FaRegMap, FaMapMarkerAlt } from 'react-icons/fa';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { BiBarChartSquare } from 'react-icons/bi';
import { TbRoute, TbLogout } from 'react-icons/tb';
import $ from 'jquery';




export default function Sidebar({logOut}) {

    const closeActive = () => {
        $('.sidebar').removeClass('show-hide');
        $('.dashboard .main').removeClass('show-hide');
        $('.sidebar .menu-links .cont-imgFooter').removeClass('show-hide');
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
    ]


    return (
        <>
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
                                <li key={i} >
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
        </>
    )
}
