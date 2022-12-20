import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusSquare } from 'react-icons/fi';
import { useContext } from 'react';
import { useEffect } from 'react';
import { langContext } from '../context/store';
import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import userImg2 from '../images/home/Rectangle 143.png';
import $ from 'jquery';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
// import { HiOutlineDownload } from 'react-icons/hi';
import ItemClient from '../ItemClient/ItemClient';
import { Pagination } from 'antd';
// import ReactPaginate from 'react-paginate';
import axios from 'axios';



export default function Clients({ getClientsList , token , fetchClients , baseURL , pagesCount , count , setCount , setSearchKey , loading}) {

    let { isOpen , toggleOpen } = useContext(langContext);



    // const [invoice, setInvoice] = useState('');
    // const [amount, setAmount] = useState('');
    // const [note, setNote] = useState('');


    // const setItemDetails = (invoice , amount , note , callback ) => {
    //     localStorage.setItem('ItemInvoice' , (invoice));
    //     localStorage.setItem('ItemAmount' , (amount));
    //     localStorage.setItem('ItemNote' , (note));
    //     callback();
    // }

    // const getItemDetails = () => {
    //     setInvoice(localStorage.getItem('ItemInvoice'));
    //     setAmount(localStorage.getItem('ItemAmount'));
    //     setNote(localStorage.getItem('ItemNote'));
    // }


    // const closeNavLink = () => {
    //     if(isOpen === false && $('body').width() < 570) {
    //         $('.sidebar').animate({'left' : '-240px'} , 500);
    //         setTimeout(() => {
    //             toggleOpen();
    //         }, 500);
    //     }
    // }


// const showUpdate = () => {
//   $('.sales-page.position-relative').addClass('vh-105');
//   $('.update-section').removeClass('d-none');
//   $('.update-section').addClass('d-flex');
// }

// const hiddenUpdate = () => {
//   $('.sales-page.position-relative').removeClass('vh-105');
//   $('.update-section').addClass('d-none');
//   $('.update-section').removeClass('d-flex');
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


// let arr = [...fetchClients];

// function sortArrayByName(a , b) {
//   if(a.ClientName < b.ClientName) {
//     return -1;
//   }
//   if(a.ClientName > b.ClientName) {
//     return 1;
//   }
//   return 0;
// }

// arr = arr.sort(sortArrayByName);

// const [search, setSearch] = useState('')

const [valueSearch, setValueSearch] = useState('')

const handelSearch = () => {
    setSearchKey(valueSearch);
}


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


const [IdClient, setIdClientupdate] = useState('');
const [NameClient, setNameClientupdate] = useState('');
const [PhoneClient, setPhoneClientupdate] = useState('');
const [AddressClient, setAddressClientupdate] = useState('');
const [LatClient, setLatClient] = useState('');
const [LongClient, setLongClient] = useState('');


const [message, setMessage] = useState('');

const [loadind, setLoadind] = useState(false);

const [apiCode , setApiCode] = useState(null);


const setItemId = ( id , name , phone , address , lat , long , callback ) => {
    localStorage.setItem('ClientId' , (id));
    localStorage.setItem('ClientName' , (name));
    localStorage.setItem('ClientPhone' , (phone));
    localStorage.setItem('ClientAddress' , (address));
    localStorage.setItem('ClientLat' , (lat));
    localStorage.setItem('ClientLong' , (long));
    callback();
}

const getItemId = () => {
    setIdClientupdate(localStorage.getItem('ClientId'));
    setNameClientupdate(localStorage.getItem('ClientName'));
    setPhoneClientupdate(localStorage.getItem('ClientPhone'));
    setAddressClientupdate(localStorage.getItem('ClientAddress'));
    setLatClient(localStorage.getItem('ClientLat'));
    setLongClient(localStorage.getItem('ClientLong'));
}



async function registerUpdateForm(e) {

    e.preventDefault();
    setLoadind(true);
    const obj = {
        IDClient: IdClient,
        ClientName: NameClient,
        ClientPhone: PhoneClient,
        ClientAddress: AddressClient,
        ClientLatitude: LatClient,
        ClientLongitude: LongClient
    }

    // if(confirm === user.UserPassword) {
        let {data} = await axios({
            method: 'post',
            url: `${baseURL}client/edit`,
            data: obj,
            headers: { 
                    // 'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token, 
                    // 'Access-Control-Allow-Origin': '*',
                    // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
        });
            
        setMessage(data.ApiMsgEn);
        setLoadind(false);

        if(data.Success === true) {
            setApiCode(data.Success);
            getClientsList();
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
                <Link to='../addClients'><FiPlusSquare /> Add</Link>
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
                pageCount={pagesCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={2}
                onPageChange={handelPageChange}
                containerClassName={'pagination justify-content-center mb-4'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item d-none'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item d-none'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            /> */}
            <div className="pagi text-center mb-4">
                <Pagination 
                    total={pagesCount}
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
                    current={count}
                    onChange={(page) => {
                        setCount(page);
                        
                    }}
                    
                />
            </div>

            {loading ? <div id="ready">
                            <i className="fa fa-spinner fa-5x fa-spin"></i>
                        </div> 
                    : 
                <div className="total-table-clients">
                    <table className="table text-center table-hover table-striped">
                        <thead className="bg-input">
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile</th>
                            {/* <th scope="col">Vendor Name</th> */}
                            <th scope="col">Address</th>
                            <th scope="col">Location</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchClients
                            // .filter((item) => {
                            // return search.toLocaleLowerCase() === '' ? 
                            // item : item.ClientName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                            // })
                            .map((item , i) => (
                                <ItemClient 
                                    key={i} 
                                    // showUpdate={showUpdate} 
                                    ClientName={item.ClientName} 
                                    ClientMobile={item.ClientMobile}
                                    ClientAddress={item.ClientAddress}
                                    ClientLat={item.ClientLat}
                                    ClientLng={item.ClientLng}
                                    ClientId={item.IDClient}
                                    showUpdate={showUpdate}
                                    setItemId={setItemId}
                                    getItemId={getItemId}
                                    // ClientInvoice={invoice}
                                    // ClientAmount={amount}
                                    // ClientNote={note}
                                    // getItemDetails={getItemDetails}
                                    // setItemDetails={setItemDetails}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            }

        </section>

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
                                            <input type="text" className='bg-transparent mx-auto' value={NameClient} onChange={(e) => {setNameClientupdate(e.target.value)}} required name="UserName" id="UserName" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-11">
                                    <div className="group-add">
                                        <label className="fs-5 fw-bold text-white mb-1" htmlFor="UserPhone">Mobile</label>
                                        <div className="input-group">
                                            <input type="tel" className='bg-transparent mx-auto' value={PhoneClient} onChange={(e) => {setPhoneClientupdate(e.target.value)}} required name="UserPhone" id="UserPhone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-11">
                                    <div className="group-add">
                                        <label className="fs-5 fw-bold text-white mb-1" htmlFor="UserAddress">Address</label>
                                        <div className="input-group">
                                            <input type="text" className='bg-transparent mx-auto' value={AddressClient} onChange={(e) => {setAddressClientupdate(e.target.value)}} required name="UserAddress" id="UserAddress" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-11">
                                    <div className="group-add">
                                        <label className="fs-5 fw-bold text-white mb-1" htmlFor="UserLat">Client Latitude</label>
                                        <div className="input-group">
                                            <input type="tel" className='bg-transparent mx-auto' value={LatClient} onChange={(e) => {setLatClient(e.target.value)}} required name="UserPhone" id="UserPhone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-11">
                                    <div className="group-add">
                                        <label className="fs-5 fw-bold text-white mb-1" htmlFor="UserLong">Client Longitude</label>
                                        <div className="input-group">
                                            <input type="tel" className='bg-transparent mx-auto' value={LongClient} onChange={(e) => {setLongClient(e.target.value)}} required name="UserLong" id="UserLong" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {message.length > 0 ? <p id="alertSave" className={`alert ${apiCode === true ? 'alert-success' : 'alert-danger'} fs-6 py-2 mb-0 mt-3 w-50 text-center mx-auto`}>{message}</p> : ''}

                            <div className="submitAdd-buttons mt-4 d-flex justify-content-center align-items-center">
                                <button type='submit' className="btn black-btn py-2 me-4">{loadind ? <i className="fa fa-spinner fa-spin main-color fs-4"></i> : 'Save'}</button>
                                {/* <button onClick={resetForm} className="btn second-btn text-white py-2 px-3">Reset</button> */}
                                <Link to='../Clients' className="btn black-btn py-2">Cancel</Link>
                            </div>

                        </form>
                    </div>
                    </div>
                </div>

                </div>

        </>
    )
}

