import React from 'react';
// import { Link } from 'react-router-dom';
import { TbRoute } from 'react-icons/tb';
import { HiOutlineDownload } from 'react-icons/hi';
import imgreport from '../images/dashboard/report.png';



export default function Report({totalReport}) {
  return (
    <>
      <section className='dashpage sales-page py-5'>
          <div className="link-entries mb-5">
            <div className="row d-flex justify-content-center align-items-center gy-4">
              <div className="col-md-8 col-lg-9">
                <div className="row d-flex justify-content-center align-items-center gy-4">
                  <div className="col-6">
                    <select name="salesLocation" className='bg-input py-2 form-select' id="">
                      <option value="Ahmed Rashed">Ahmed Rashed</option>
                      <option value="Nader Salah">Nader Salah</option>
                      <option value="Mosad Hagag">Mosad Hagag</option>
                      <option value="Anas">Anas</option>
                      <option value="Samr">Samr</option>
                      <option value="Kholi">Kholi</option>
                    </select>
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
                    <button className='btn black-btn px-3 py-2 d-flex justify-content-center align-items-center w-100'>Find Report</button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="img-report">
            <img src={imgreport} alt="img-report" />
          </div> */}

          <div className="total-table">
            <table className="table text-center table-hover">
                <thead className="table-light">
                    <tr>
                      <th scope="col">Client Name</th>
                      <th scope="col">Location</th>
                      <th scope="col">Status</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Note</th>
                      <th scope="col">Invoice</th>
                    </tr>
                </thead>
                <tbody>
                    {totalReport.map((item , i) => (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.location}</td>
                        <td className={item.status === 'Visited' ? 'fw-semibold text-success' : 
                            item.status === 'Not Visited' ? 'fw-semibold text-danger' : ''}>{item.status}
                        </td>
                        <td>{item.amount}</td>
                        <td>{item.note}</td>
                        <td>
                          <button className='btn black-btn d-flex justify-content-center align-items-center mx-auto py-0'><HiOutlineDownload /></button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
          </div>

      </section>
    </>
  )
}

