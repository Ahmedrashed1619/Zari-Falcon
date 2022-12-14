import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlusSquare } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import $ from 'jquery';
import ItemSales from '../ItemSales/ItemSales';
import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import { langContext } from '../context/store';
import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import userImg2 from '../images/home/Rectangle 143.png';
import { Pagination } from 'antd';

// import ReactPaginate from 'react-paginate';



export default function Sales({fetchSales , getToken , baseURL , fetchCountries , fetchavatars , pagesCountSales , countSales , setCountSales , setSearchKeySales , loadingSales}) {

    const token = localStorage.getItem('userToken');
    
    const [message, setMessage] = useState('');

    const [loadind, setLoadind] = useState(false);

    const [apiCode , setApiCode] = useState(null);

    // const showHidePass = () => {
    //   if($('.password .input-group i').hasClass('fa-eye-slash')) {
    //       $('.password .input-group i').removeClass('fa-eye-slash');
    //       $('.password .input-group i').addClass('fa-eye');
    //       $('.password .input-group input').attr('type', 'password');
    //   }
    //   else {
    //       $('.password .input-group i').removeClass('fa-eye');
    //       $('.password .input-group i').addClass('fa-eye-slash');
    //       $('.password .input-group input').attr('type', 'text');
    //   }
    // }

    // const showHideRePass = () => {
    //   if($('.repassword .input-group i').hasClass('fa-eye-slash')) {
    //       $('.repassword .input-group i').removeClass('fa-eye-slash');
    //       $('.repassword .input-group i').addClass('fa-eye');
    //       $('.repassword .input-group input').attr('type', 'password');
    //   }
    //   else {
    //       $('.repassword .input-group i').removeClass('fa-eye');
    //       $('.repassword .input-group i').addClass('fa-eye-slash');
    //       $('.repassword .input-group input').attr('type', 'text');
    //   }
    // }


    const resetForm = () => {
        let inputs = Array.from(document.querySelectorAll('.update-section input'));
        let selects = Array.from(document.querySelectorAll('.update-section select'));
        inputs.forEach((input) => {
            input.value = '';
        })
        selects.forEach((select) => {
            select.value = '';
        })
    }


    const showUpdate = () => {
        $('.sales-page.position-relative').addClass('vh-105');
        $('.update-section').removeClass('d-none');
        $('.update-section').addClass('d-flex');
    }

    const hiddenUpdate = () => {
        $('.sales-page.position-relative').removeClass('vh-105');
        $('.update-section').addClass('d-none');
        $('.update-section').removeClass('d-flex');
    }



    let { isOpen , toggleOpen } = useContext(langContext);


    //   const closeNavLink = () => {
    //     if(isOpen === false && $('body').width() < 570) {
    //         $('.sidebar').animate({'left' : '-240px'} , 500);
    //         setTimeout(() => {
    //             toggleOpen();
    //         }, 500);
    //     }
    // }


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



    
    const [Name, setNameupdate] = useState('');
    const [Email, setEmailupdate] = useState('');
    const [Phone, setPhoneupdate] = useState('');
    const [IDCountry, setCountryupdate] = useState('');
    // const [avatarupdate, setAvatarupdate] = useState('');
    // const [imageupdate, setImageupdate] = useState('');
    // const [passwordupdate, setPasswordupdate] = useState('');
    const [IDSales, setIdupdate] = useState(null);


    const setItemId = (id , name , email , phone , country , callback ) => {
        localStorage.setItem('ItemId' , (id));
        localStorage.setItem('ItemName' , (name));
        localStorage.setItem('ItemEmail' , (email));
        localStorage.setItem('ItemPhone' , (phone));
        localStorage.setItem('ItemCountry' , (country));
        // localStorage.setItem('ItemAvatar' , (avatar));
        // localStorage.setItem('ItemImg' , (img));
        // localStorage.setItem('ItemPassword' , (password));
        callback();
    }

    const getItemId = () => {
        setIdupdate(localStorage.getItem('ItemId'));
        setNameupdate(localStorage.getItem('ItemName'));
        setEmailupdate(localStorage.getItem('ItemEmail'));
        setPhoneupdate(localStorage.getItem('ItemPhone'));
        setCountryupdate(localStorage.getItem('ItemCountry'));
        // setAvatarupdate(localStorage.getItem('ItemAvatar'));
        // setImageupdate(localStorage.getItem('ItemImg'));
        // setPasswordupdate(localStorage.getItem('ItemPassword'));
    }


    // let avatarImg = $('.avatar select').val();


    // const [confirm, setConfirm] = useState('');

    // function getConfirm(e) {
    //     e.target.name = e.target.value;
    //     setConfirm(e.target.value)
    // }


    async function registerUpdateForm(e) {

        e.preventDefault();
        setLoadind(true);
        const obj = {
        UserName: Name,
        UserEmail: Email,
        UserPhone: Phone,
        IDCountry: IDCountry,
        IDSales: IDSales
        }

        // if(confirm === user.UserPassword) {
            let {data} = await axios({
                method: 'post',
                url: `${baseURL}sales/edit`,
                data: obj,
                headers: { 
                        // 'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token, 
                        // 'Access-Control-Allow-Origin': '*',
                        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                },
            });
                
            setMessage(data.ApiMsgEn);
            setLoadind(false);

            if(data.Success === true) {
                setApiCode(data.Success);
                getToken();
                setTimeout(() => {
                    hiddenUpdate();
                }, 3000);
            }

        // }
        // else if (confirm !== user.UserPassword) {
        //     setMessage('password does not match..');
        //     setLoadind(false);

        // }

    }


    // sort by name

    // let arr = [...fetchSales];

    // function sortArrayByName(a , b) {
    //     if(a.Name < b.Name) {
    //     return -1;
    //     }
    //     if(a.Name > b.Name) {
    //     return 1;
    //     }
    //     return 0;
    // }
    
    // arr = arr.sort(sortArrayByName);


    // const [search, setSearch] = useState('');

    const [valueSearch, setValueSearch] = useState('')

    const handelSearch = () => {
        setSearchKeySales(valueSearch);
    }



    return (
        <>

            <div className="topbar">
                <div className="toggle-topbar" onClick={() => {
                    toggleOpen();
                    widthBody();
                }}>
                    <FaBars />
                </div>
                <div className="search-topbar">
                    <div className="group">
                        <input type="text"
                            onChange={(e) => {
                                setValueSearch(e.target.value);
                            }}
                            placeholder='Search by Name / Number..' style={{fontSize: '14px'}}
                        />
                        <BsSearch onClick={handelSearch} style={{cursor: 'pointer'}}/>
                    </div>
                </div>
                <div className="user-img">
                    <img src={userImg2} alt="user" />
                </div>
            </div>

            <section className='dashpage sales-page py-5 position-relative'>

                <div className="link-entries d-flex justify-content-between align-items-center mb-5">
                <div className="linkTo">
                    <Link to='../addSales'><FiPlusSquare /> Add</Link>
                </div>
                <div className="show-entires">
                    {/* <p>Show ___ entires</p> */}
                    <p></p>
                </div>
                </div>

                {/* <ReactPaginate 
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    pageCount={15}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handelPageChangeSales}
                    containerClassName={'pagination justify-content-center mb-3'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                /> */}

                <div className="pagi text-center mb-4">
                    <Pagination 
                        total={pagesCountSales}
                        pageSize={1}
                        // showQuickJumper={true}
                        // hideOnSinglePage={true}
                        // defaultCurrent={10}
                        // showSizeChanger
                        showLessItems={true}
                        itemRender={(page , type) => {
                            if(type === 'next') {
                                return <span>{'>>'}</span>
                            }
                            else if(type === 'prev') {
                                return <span>{'<<'}</span>
                            }
                            else if(type === 'page') {
                                return <span>{page}</span>
                            }
                        }}
                        current={countSales}
                        onChange={(page) => {
                            setCountSales(page);
                            
                        }}
                        
                    />
                </div>


                {loadingSales ? 
                    <div id="ready">
                        <i className="fa fa-spinner fa-5x fa-spin"></i>
                    </div> 
                    : 
                    <div className="total-table">
                        {token && Object.keys(fetchSales).length > 0 ? <table className="table text-center table-hover">
                            <thead className="bg-input">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {fetchSales
                            //   .filter((item) => {
                            //     return search.toLocaleLowerCase() === '' ? 
                            //     item : item.Name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                            //   })
                            .map((item, i) => (
                                <ItemSales 
                                    key={i}
                                    id={item.IDSales}
                                    name={item.Name}
                                    email={item.Email}
                                    phone={item.Mobile}
                                    status={item.Status}
                                    country={item.IDCountry}
                                    // avatar={item.IDAvatar}
                                    // password={item.Password}
                                    item={item}
                                    showUpdate={showUpdate}
                                    getItemId={getItemId}
                                    setItemId={setItemId}
                                />
                                ))
                            }
                            </tbody>
                        </table> : <h2 className='text-center mt-fixed py-4'>Your Table is Empty..</h2>}
                    </div>
                }

                <div className="update-section d-none justify-content-center align-items-center">
                <div className="cont-update position-relative ">
                    <AiOutlineClose onClick={() => hiddenUpdate()} style={{color : '#fff', position : 'absolute', top : '10%', right : '10%', fontSize : '26px', cursor : 'pointer'}}/>
                    <div className="row d-flex justify-content-center align-items-center py-5">
                    <div className="col-lg-8 col-10 py-sm-5 py-0">
                        <form onSubmit={registerUpdateForm} className='py-5'>
                            <div className="row d-flex justify-content-center align-items-center gx-5 gy-3">

                                <div className="col-sm-6 col-11">
                                    <div className="group-add">
                                        <label className="fs-5 fw-bold text-white mb-1" htmlFor="UserName">Name</label>
                                        <div className="input-group">
                                            <input type="text" className='bg-transparent mx-auto' value={Name} onChange={(e) => {setNameupdate(e.target.value)}} required name="UserName" id="UserName" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-11">
                                    <div className="group-add">
                                        <label className="fs-5 fw-bold text-white mb-1" htmlFor="UserEmail">Email</label>
                                        <div className="input-group">
                                            <input type="email" className='bg-transparent mx-auto' value={Email} onChange={(e) => {setEmailupdate(e.target.value)}} required name="UserEmail" id="UserEmail" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-11">
                                    <div className="group-add">
                                        <label className="fs-5 fw-bold text-white mb-1" htmlFor="UserPhone">Mobile</label>
                                        <div className="input-group">
                                            <input type="tel" className='bg-transparent mx-auto' value={Phone} onChange={(e) => {setPhoneupdate(e.target.value)}} required name="UserPhone" id="UserPhone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-11">
                                    <div className="group-add">
                                    <label className="fs-5 fw-bold text-white mb-1" htmlFor="IDCountry">Country</label>
                                    <div className="input-group">
                                        <select value={IDCountry} onChange={(e) => {setCountryupdate(e.target.value)}} className='w-100 bg-transparent mx-auto py-3 px-2' required name="IDCountry" id="IDCountry">
                                            <option>choose your country</option>
                                            {fetchCountries.map((item , i) => (
                                                <option key={i} value={item.IDCountry} >{item.NameEn}</option>
                                            ))}
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                {/* <div className="col-sm-6 col-11">
                                    <div className="group-add">
                                        <label className="fs-5 fw-bold" htmlFor="UserAvatar">Avatar</label>
                                        <div className="input-group avatar">
                                            <select value={avatarupdate} onChange={getUserData} className='w-100 bg-transparent mx-auto py-3 px-2' required name="UserAvatar" id="UserAvatar">
                                                <option>choose your avatar</option>
                                                {fetchavatars.map((item , i) => (
                                                    <option key={i} value={item.IDAvatar} >Avatar {item.IDAvatar}</option>
                                                ))}
                                            </select>
                                            <img src={
                                                avatarImg === '1' ? fetchavatars[0].Image : 
                                                avatarImg === '2' ? fetchavatars[1].Image :
                                                avatarImg === '3' ? fetchavatars[2].Image :
                                                avatarImg === '4' ? fetchavatars[3].Image :
                                                avatarImg === '5' ? fetchavatars[4].Image : 
                                                avatarImg === '6' ? fetchavatars[5].Image :
                                                avatarImg === '7' ? fetchavatars[6].Image :
                                                avatarImg === '8' ? fetchavatars[7].Image :
                                                avatarImg === '9' ? fetchavatars[8].Image :
                                                avatarImg === '10' ? fetchavatars[9].Image : 
                                                avatarImg === '11' ? fetchavatars[10].Image :
                                                avatarImg === '12' ? fetchavatars[11].Image : "haven't avatar"} alt="avatar image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-11">
                                    <div className="group-add">
                                        <label className="fs-5 fw-bold" htmlFor="UserImage">Image</label>
                                        <div className="input-group avatar">
                                            <input value={imageupdate} onChange={getUserData} type="file" accept='png , jpg' className='bg-transparent mx-auto' name="UserImage" id="UserImage" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-11">
                                    <div className="group-add password">
                                        <label className="fs-5 fw-bold" htmlFor="UserPassword">Password</label>
                                        <div className="input-group">
                                            <input value={passwordupdate} onChange={getUserData} type="password" className='bg-transparent mx-auto' required name="UserPassword" id="UserPassword" />
                                            <i className="fa-regular fa-eye" onClick={showHidePass}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-11">
                                    <div className="group-add repaassword">
                                        <label className="fs-5 fw-bold" htmlFor="repass-user">Confirm</label>
                                        <div className="input-group">
                                            <input type="password" onChange={getConfirm} className='bg-transparent mx-auto' required name="repass-user" id="repass-user" />
                                            <i className="fa-regular fa-eye" onClick={showHideRePass}></i>
                                        </div>
                                    </div>
                                </div> */}

                            </div>

                            {message.length > 0 ? <p id="alertSave" className={`alert ${apiCode === true ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{message}</p> : ''}

                            <div className="submitAdd-buttons mt-4 d-flex justify-content-center align-items-center">
                                <button type='submit' className="btn black-btn py-2 px-4 me-4">{loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> : 'Save'}</button>
                                <button onClick={resetForm} className="btn second-btn text-white py-2 px-3">Cancel</button>
                            </div>

                        </form>
                    </div>
                    </div>
                </div>

                </div>

            </section>
        </>
    )
}
