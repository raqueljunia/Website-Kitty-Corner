import React from 'react'

const GMap = () => {
  return (
    <div class="container-fluid map-col">
    <div class="col-md-12 col-sm-12 map-col">
        <div class="google-maps">
            <div class="map-wrap">
            <iframe
                title="google-maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5630603985!2d88.0495328251319!3d22.675752087592436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1653845709428!5m2!1sen!2sin"
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