import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, harga }) => {
  return (
    

    <Col size={12} sm={6} md={3}>
      {/* <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div> */}
     <div class="card-product" style={{ backgroundImage: `url(${imgUrl})` }}>
        <div class="overlay">
          <div class = "items"></div>
              <div class = "items head">
                <p>{title}</p>
                <hr></hr>
              </div>
              <div class = "items price">
                <span>{description}</span>
                <p class="old">Rp20.000</p>
                <p class="new">Rp{harga}</p>
              </div>
              <div class="items cart">
                <i class="fa fa-shopping-cart"></i>
                <span>BUY NOW</span>
              </div>
              </div>
          </div>
    </Col>
  )
}