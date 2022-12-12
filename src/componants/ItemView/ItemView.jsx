import React from 'react'

export default function ItemView({ setItemDetails , getItemDetails , Visits}) {
    

  return (
    <>
        {Visits.map((item , i) => (
            <tr key={i}>
                <td style={{cursor : 'pointer'}}  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(() => {
                    // showUpdate();
                    setItemDetails( item.VisitImage , item.VisitAmmount , item.Note , getItemDetails)
                })}>{item.Client}</td>
                <td>{item.Phone}</td>
                <td><a className='main-color' href={`http://maps.google.com/?q=${item.CheckinLat},${item.CheckinLong}`} target="_blank" rel="noopener noreferrer">{item.Checkin}</a></td>
                <td><a className='main-color' href={`http://maps.google.com/?q=${item.CheckoutLat},${item.CheckoutLong}`} target="_blank" rel="noopener noreferrer">{item.Checkout}</a></td>
            </tr>
        ))}
    </>
  )
}