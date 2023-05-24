import React from 'react'

const GMap = () => {
  return (
    <div class="container-fluid map-col">
    <div class="col-md-12 col-sm-12 map-col">
        <div class="google-maps">
            <div class="map-wrap">
            <iframe
                title="google-maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60238.51008173851!2d106.627325!3d-6.175110!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f17053a8a6d7%3A0x406bdbc33757790!2sTangerang%2C%20Banten!5e0!3m2!1sen!2sid!4v1653845709428!5m2!1sen!2sid"
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