import React from 'react';
import { MdOutlineGpsFixed } from 'react-icons/md';
import { FiEdit3 } from 'react-icons/fi';


export default function ItemClient({ ClientId , ClientName , ClientAddress , ClientMobile , ClientLat , ClientLng , setItemId , getItemId , showUpdate }) {


    return (
        <>
            <tr>
                <td>{ClientName}</td>
                <td>{ClientMobile}</td>
                {/* <td>Vendor Name</td> */}
                <td>{ClientAddress}</td>
                <td><a className='main-color' href={`http://maps.google.com/?q=${ClientLat},${ClientLng}`} target="_blank" rel="noopener noreferrer"><MdOutlineGpsFixed /></a></td>
                <td>
                    <FiEdit3 className='main-color' onClick={() => {
                        console.log('ffff');
                        showUpdate();
                        setItemId(ClientId , ClientName , ClientMobile , ClientAddress , ClientLat , ClientLng , getItemId);
                    }}/>
                </td>
            </tr>
        </>
    )
}

