import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, harga }) => {
  return (
    <Col>
     <div class="card-product" style={{ backgroundImage: `url(${imgUrl})` }}>
        <div class="overlay">
          <div class = "items"></div>
              <div class = "items head">
                <p>{title}</p>
                <hr></hr>
              </div>
              <div class = "items price">
                <span>{description}</span>
                <p class="old">Rp45.000</p>
                <p class="new">Rp{harga}</p>
              </div>
              <div class="items cart">
                <i class="fa fa-shopping-cart"></i>
              </div>
              </div>
          </div>
    </Col>
  )
}