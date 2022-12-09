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
// import { AiOutlineClose } from 'react-icons/ai';
// import { HiOutlineDownload } from 'react-icons/hi';
import ItemClient from '../ItemClient/ItemClient';
import ReactPaginate from 'react-paginate';



export default function Clients({fetchClients , baseURL}) {

  let { isOpen , toggleOpen } = useContext(langContext);



  const [invoice, setInvoice] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');


  const setItemDetails = (invoice , amount , note , callback ) => {
    localStorage.setItem('ItemInvoice' , (invoice));
    localStorage.setItem('ItemAmount' , (amount));
    localStorage.setItem('ItemNote' , (note));
    callback();
  }

  const getItemDetails = () => {
    setInvoice(localStorage.getItem('ItemInvoice'));
    setAmount(localStorage.getItem('ItemAmount'));
    setNote(localStorage.getItem('ItemNote'));
  }


  const closeNavLink = () => {
    if(isOpen === false && $('body').width() < 570) {
        $('.sidebar').animate({'left' : '-240px'} , 500);
        setTimeout(() => {
            toggleOpen();
        }, 500);
    }
}


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


let arr = [...fetchClients];

function sortArrayByName(a , b) {
  if(a.ClientName < b.ClientName) {
    return -1;
  }
  if(a.ClientName > b.ClientName) {
    return 1;
  }
  return 0;
}

arr = arr.sort(sortArrayByName);



const [search, setSearch] = useState('')


const handelPageChange = (data) => {
    console.log(data.selected);
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
                      }} placeholder='Search by Name..' style={{fontSize: '14px'}}/>
                  <BsSearch />
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
              <p>Show ___ entires</p>
            </div>
          </div>

          {/* <ReactPaginate 
            previousLabel={'<<'}
            nextLabel={'>>'}
            breakLabel={'...'}
            pageCount={15}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handelPageChange}
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

          <div className="total-table-clients">
            <table className="table text-center table-hover">
                <thead className="bg-input">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Mobile</th>
                      {/* <th scope="col">Vendor Name</th> */}
                      <th scope="col">Address</th>
                      <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.filter((item) => {
                      return search.toLocaleLowerCase() === '' ? 
                      item : item.ClientName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                    }).map((item , i) => (
                        <ItemClient 
                            key={i} 
                            // showUpdate={showUpdate} 
                            ClientName={item.ClientName} 
                            ClientMobile={item.ClientMobile}
                            ClientAddress={item.ClientAddress}
                            ClientLat={item.ClientLat}
                            ClientLng={item.ClientLng}
                            ClientInvoice={invoice}
                            ClientAmount={amount}
                            ClientNote={note}
                            getItemDetails={getItemDetails}
                            setItemDetails={setItemDetails}
                        />
                    ))}
                </tbody>
            </table>
          </div>
      </section>


        {/* <div className="update-section d-none justify-content-center align-items-center" style={{backgroundColor: '#00000099'}}>
        <div className="row size-row">
                <div className="col-12">
                    <div className="cont-update position-relative bg-white p-4 rounded-4">
                        <AiOutlineClose onClick={hiddenUpdate} style={{padding: '2px', borderRadius: '50%', border: '1px solid #000', color : '#000', position : 'absolute', top : '3%', right : '5%', fontSize : '24px', cursor : 'pointer'}}/>
                        <h3 className='mb-3 text-center fw-bold'>Client Details</h3>
                        <label className='text-muted mb-2' htmlFor="invoice">Invoice</label>
                        <img src={userImg2} className='mb-4 w-100 rounded-4' style={{height: '250px'}} alt="invoice" />
                        <a href={invoice} download className='btn black-btn d-flex justify-content-center align-items-center mx-auto py-2'><HiOutlineDownload className='fs-5 me-2'/>Download Invoice</a>

                        <label htmlFor="amount" className='my-2'>Amount</label>
                        <input type="text" value={amount} name="amount" id="amount" className='mb-3 form-control bg-transparent mx-auto py-2 fs-5' readOnly/>

                        <label htmlFor="note" className='mb-2'>Note</label>
                        <textarea name="note" id="note" className='form-control bg-transparent mx-auto' value={note} readOnly></textarea>
                    </div>
                </div>
            </div>
        </div> */}
    </>
  )
}

