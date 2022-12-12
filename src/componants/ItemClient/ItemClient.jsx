import React from 'react';
import { MdOutlineGpsFixed } from 'react-icons/md';


export default function ItemClient({ClientName , ClientAddress , ClientMobile , ClientLat , ClientLng}) {


    return (
        <>
            <tr>
                <td onClick={() => {
                }}>{ClientName}</td>
                <td>{ClientMobile}</td>
                {/* <td>Vendor Name</td> */}
                <td>{ClientAddress}</td>
                <td><a className='main-color' href={`http://maps.google.com/?q=${ClientLat},${ClientLng}`} target="_blank" rel="noopener noreferrer"><MdOutlineGpsFixed /></a></td>
            </tr>
        </>
    )
}

