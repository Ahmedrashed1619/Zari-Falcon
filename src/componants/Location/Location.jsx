import React from 'react';
// import { Link } from 'react-router-dom';
import { MdOutlineGpsFixed } from 'react-icons/md';



export default function Location() {
  return (
    <>
      <section className='dashpage location-page py-5'>
          <div className="link-entries d-flex justify-content-between align-items-center mb-5">
              <div className="w-lg-75 w-50">
                <select name="salesLocation" className='bg-input py-2 form-select' id="">
                  <option value="Ahmed Rashed">Ahmed Rashed</option>
                  <option value="Nader Salah">Nader Salah</option>
                  <option value="Mosad Hagag">Mosad Hagag</option>
                  <option value="Anas">Anas</option>
                  <option value="Samr">Samr</option>
                  <option value="Kholi">Kholi</option>
                </select>
              </div>

              <div className="btn-location">
                  <button className='btn black-btn px-3 py-2 d-flex justify-content-center align-items-center'><MdOutlineGpsFixed className='me-2'/> Find Location</button>
              </div>
          </div>

          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe class="gmap_iframe" style={{width : '100%' , height :'450px'}} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='10','20'&hl=es&z=14&amp;output=embed"></iframe>
              {/* src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" */}
            </div>
            
          </div>

      </section>
    </>
  )
}
