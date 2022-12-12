import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineDownload } from 'react-icons/hi';
import userImg2 from '../images/home/Rectangle 143.png';
import $ from 'jquery';
import { useContext } from 'react';
import { useEffect } from 'react';
import { langContext } from '../context/store';
import ItemView from '../ItemView/ItemView';
import axios from 'axios';
import imgreport from '../images/dashboard/report.png';



export default function View({fetchSales , token , baseURL}) {


    let { isOpen , toggleOpen } = useContext(langContext);


    const closeNavLink = () => {
      if(isOpen === false && $('body').width() < 570) {
          $('.sidebar').animate({'left' : '-240px'} , 500);
          setTimeout(() => {
              toggleOpen();
          }, 500);
      }
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


    const [invoice, setInvoice] = useState('');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');

    const [loadind, setLoadind] = useState(false);
    const [status, setStatus] = useState('');
    const [show, setShow] = useState(true);
  
    const [fetchData, setFetchData] = useState([]);


    const setItemDetails = (invoice , amount , note , callback ) => {
        localStorage.setItem('ViewInvoice' , (invoice));
        localStorage.setItem('ViewAmount' , (amount));
        localStorage.setItem('ViewNote' , (note));
        callback();
    }

    const getItemDetails = () => {
        setInvoice(localStorage.getItem('ViewInvoice'));
        setAmount(localStorage.getItem('ViewAmount'));
        setNote(localStorage.getItem('ViewNote'));
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
    


    const [search, setSearch] = useState('')

    const [idSales, setIdSales] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const getIDSales = (id) => {
        setIdSales(id)
    }

    const getFromDate = (index) => {
    setFromDate(index)
    }

    const getToDate = (index) => {
    setToDate(index)
    }

    let apiURL = `${baseURL}report/visit`;



    async function getReport(e) {
    e.preventDefault();
    setLoadind(true);
    await axios.post(apiURL, {
        IDSales: idSales,
        DateFrom: fromDate,
        DateTo: toDate,
    }, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        // 'Access-Control-Allow-Origin': '*',
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    }
    })
    .then(res => {
        setStatus(res.data.Status);
        setFetchData(res.data.Shifts);
        setLoadind(false);
        setShow(false);
        })
        .catch((error) => {
        console.log(error)
        });
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
                        <input type="text" onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        placeholder='Search by Name..' style={{fontSize: '14px'}}/>
                        <BsSearch />
                    </div>
                </div>
                <div className="user-img">
                    <img src={userImg2} alt="user" />
                </div>
            </div>


            <section className='dashpage sales-page py-5 position-relative'>

                <div className="link-entries mb-5">
                    <form onSubmit={getReport}>
                        <div className="row d-flex justify-content-center align-items-center gy-4">

                            <div className="col-12">
                                <div className="row d-flex justify-content-center align-items-center gy-4">
                                    <div className="col-md-4 col-11">
                                        <label htmlFor="sales-name" className='mb-2 h6 fw-bold'>Vendor Name</label>
                                        <select  name="salesLocation" onChange={(e) => {getIDSales(e.target.value)}} required className='bg-input py-2 form-select' id="sales-name">
                                            <option>Choose Name..</option>
                                            {fetchSales.map((item , i) => (
                                                <option key={i} value={item.IDSales}>{item.Name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-md-4 col-11">
                                        <label htmlFor="fromdate" className='mb-2 h6 fw-bold'>From Date</label>
                                        <div className="input-date">
                                            <input type="date" onChange={(e) => {getFromDate(e.target.value)}} className='bg-input form-control py-2 mx-auto' required name="fromdate" id="fromdate" />
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-11">
                                        <label htmlFor="enddate" className='mb-2 h6 fw-bold'>To Date</label>
                                        <div className="input-date">
                                            <input type="date" onChange={(e) => {getToDate(e.target.value)}} className='bg-input form-control py-2 mx-auto' required name="enddate" id="enddate" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="btn-location">
                                    <button type='submit' className='btn black-btn px-3 d-flex justify-content-center align-items-center w-100' style={{marginTop : '20px' , paddingTop : '9px' , paddingBottom : '9px'}} >
                                        {loadind ? <i className="fa fa-spinner fa-spin text-white fs-3 px-4"></i> : 'Find Route'}
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>

                { show ? 
                <div className="img-report">
                    <img src={imgreport} alt="img-report" />
                </div>
                :
                status === true && fetchData.length > 0 ? 
                <>
                    {fetchData.map((item , i) => (
                        <React.Fragment key={i} >
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h6 className='mb-0 text-muted fw-bold'>Start Date: <a className='main-color' href={`http://maps.google.com/?q=${item.UserShiftStartLatitude},${item.UserShiftStartLongitude}`} target="_blank" rel="noopener noreferrer">{item.StartDate}</a></h6>
                                <h6 className='mb-0 text-muted fw-bold'>End Date: <a className='main-color' href={`http://maps.google.com/?q=${item.UserShiftEndLatitude},${item.UserShiftEndLongitude}`} target="_blank" rel="noopener noreferrer">{item.EndDate}</a></h6>
                            </div>            
                            <div className="total-table mb-5">
                                <table className="table text-center table-hover">
                                    <thead className="bg-input">
                                        <tr>
                                        <th scope="col">Client Name</th>
                                        <th scope="col">Mobile Number</th>
                                        <th scope="col">Check-In</th>
                                        <th scope="col">Check-Out</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <ItemView
                                                // key={i}
                                                showUpdate={showUpdate}
                                                setItemDetails={setItemDetails}
                                                getItemDetails={getItemDetails}
                                                Visits={item.Visits}
                                            />
                                    </tbody>
                                </table>
                            </div>
                        </React.Fragment>
                    ))}
                </> : 
                
                status === true && fetchData.length < 1 ? 
                <h2 className='fw-bold mb-0 text-center'>NOT DATA....</h2> : 
                <h2 className='fw-bold mb-0 text-center'>Vendor Not Found..</h2>
                }

            </section>



            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content p-4 position-relative">

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <h3 className='mb-3 text-center fw-bold'>Client Details</h3>
                            {invoice ?  <>
                                            <label className='text-muted mb-2' htmlFor="invoice">Invoice</label>
                                            <img src={invoice} className='mb-4 w-100 rounded-4' style={{height: '250px'}} alt="invoice" />
                                            <a href={invoice} download className='btn black-btn d-flex justify-content-center align-items-center mx-auto py-2'><HiOutlineDownload className='fs-5 me-2'/>Download Invoice</a>
                                        </> : ''
                            }

                            <label htmlFor="amount" className='my-2'>Amount</label>
                            <input type="text" value={amount} name="amount" id="amount" className='mb-3 form-control bg-transparent mx-auto py-2 fs-5' readOnly/>

                            <label htmlFor="note" className='mb-2'>Note</label>
                            <textarea name="note" id="note" className='form-control bg-transparent mx-auto' value={note} readOnly></textarea>

                    </div>
                </div>
            </div>

        </>
    )
}
