import React from 'react';
// import { Link } from 'react-router-dom';
import { TbRoute } from 'react-icons/tb';



export default function Map() {
  return (
    <>
      <section className='dashpage location-page py-5'>
          <div className="link-entries mb-4">
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
                    <button className='btn black-btn px-3 py-2 d-flex justify-content-center align-items-center w-100'><TbRoute className='me-2' /> Find Route</button>
                </div>
              </div>
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

