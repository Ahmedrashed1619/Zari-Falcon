import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusSquare , FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';


export default function Sales({totalUsers}) {

  

  return (
    <>
      <section className='dashpage sales-page py-5'>

          <div className="link-entries d-flex justify-content-between align-items-center mb-5">
            <div className="linkTo">
              <Link to='../addSales'><FiPlusSquare /> Add</Link>
            </div>
            <div className="show-entires">
              <p>Show ___ entires</p>
            </div>
          </div>

          <div className="total-table">
            <table className="table text-center table-hover">
                <thead className="table-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Company</th>
                      <th scope="col">Email</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Role</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {totalUsers.map((item , i) => (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.company}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.role}</td>
                        <td className={item.status === 'Active' ? 'text-success' : 
                          item.status === 'inActive' ? 'text-muted' : 
                          item.status === 'Pending' ? 'text-warning' : 
                          item.status === 'Blocked' ? 'text-danger' : ''}>{item.status}</td>
                        <td>
                          <AiOutlineDelete className='me-3 text-danger'/>
                          <FiEdit3 className='main-color'/>
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
