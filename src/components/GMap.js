import React from 'react'

const GMap = () => {
  return (
    <div class="container-fluid map-col">
    <div class="col-md-12 col-sm-12 map-col">
        <div class="google-maps">
            <div class="map-wrap">
            <iframe
                title="google-maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.208564863928!2d106.6184952!3d-6.2568619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb56b25975f9%3A0x50c7d605ba8542f5!2sMultimedia%20Nusantara%20University!5e0!3m2!1sen!2sid!4v1685587784254!5m2!1sen!2sid" 
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </div>
    </div>
    </div>
  )
}

export default GMap;