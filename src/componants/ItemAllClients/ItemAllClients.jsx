import React from 'react';


export default function ItemClient({AllClientName , AllClientAddress , AllClientMobile }) {


    return (
        <>
            <tr>
                <td>{AllClientName}</td>
                <td>{AllClientMobile}</td>
                <td>{AllClientAddress}</td>
            </tr>
        </>
    )
}
