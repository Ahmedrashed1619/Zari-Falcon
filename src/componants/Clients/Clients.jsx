import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusSquare } from 'react-icons/fi';
import { MdOutlineGpsFixed } from 'react-icons/md';



export default function Clients({totalClients}) {

  

  return (
    <>
      <section className='dashpage sales-page py-5'>

          <div className="link-entries d-flex justify-content-between align-items-center mb-5">
            <div className="linkTo">
              <Link to='../addClients'><FiPlusSquare /> Add</Link>
            </div>
            <div className="show-entires">
              <p>Show ___ entires</p>
            </div>
          </div>

          <div className="total-table-clients">
            <table className="table text-center table-hover">
                <thead className="table-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {totalClients.map((item , i) => (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td className='d-flex justify-content-center align-items-center'><MdOutlineGpsFixed className='me-1'/>{item.location}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
          </div>
          
      </section>
    </>
  )
}

