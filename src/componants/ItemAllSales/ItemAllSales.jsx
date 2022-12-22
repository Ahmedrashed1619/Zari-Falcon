import React from 'react';


export default function ItemSales({name , email , phone , status}) {


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
            </tr>
        </>
    )
}