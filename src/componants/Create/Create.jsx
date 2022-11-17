import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusSquare  } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';



export default function Create({totalCreate}) {

  

  return (
    <>
      <section className='dashpage sales-page py-5'>

          <div className="link-entries d-flex justify-content-between align-items-center mb-5">
            <div className="linkTo">
              <Link to='../addCreate'><FiPlusSquare /> Add</Link>
            </div>
            <div className="show-entires">
              <p>Show ___ entires</p>
            </div>
          </div>

          <div className="link-entries mb-5">
            <div className="row d-flex justify-content-center align-items-center gy-4">
              <div className="col-md-8 col-lg-9">
                <div className="row d-flex justify-content-center align-items-center gy-4">
                  <div className="col-6">
                    <div className="input-search position-relative">
                        <input type="text" className='bg-input form-control py-2 mx-auto' placeholder='Search by client or sale' required name="search-user" id="search-user" />
                        <BsSearch />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input-date">
                        <input type="date" className='bg-input form-control py-2 mx-auto' required name="date-user" id="date-user" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="btn-location">
                    <button className='btn black-btn px-3 py-2 d-flex justify-content-center align-items-center w-100'>Search</button>
                </div>
              </div>
            </div>
          </div>

          <div className="total-table">
            <table className="table text-center table-hover">
                <thead className="table-light">
                    <tr>
                      <th scope="col">Client Name</th>
                      <th scope="col">Seller Name</th>
                      <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {totalCreate.map((item , i) => (
                      <tr key={i}>
                        <td>{item.clientname}</td>
                        <td>{item.sallername}</td>
                        <td>{item.date}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
          </div>
          
      </section>
    </>
  )
}
