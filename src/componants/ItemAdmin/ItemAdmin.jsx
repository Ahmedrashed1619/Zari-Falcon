import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
// import { AiOutlineDelete } from 'react-icons/ai';


export default function ItemAdmin({name , email , phone , country , status , item , id , getItemId , showUpdate , setItemId}) {


    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td className={status === 'ACTIVE' ? 'text-success' : 
                    status === 'INACTIVE' ? 'text-muted' : 
                    status === 'PENDING' ? 'text-warning' : 
                    status === 'BLOCKED' ? 'text-danger' : ''}>{status}
                </td>
                <td>
                    {/* <AiOutlineDelete className='me-3 text-danger' onClick={() => {deleteHandler(id)}}/> */}
                    <FiEdit3 className='main-color' onClick={() => {
                        showUpdate();
                        setItemId(id , name , email , phone , country , getItemId);
                    }}/>
                </td>
            </tr>
        </>
    )
}

