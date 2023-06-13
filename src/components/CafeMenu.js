import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import omlet from "../assets/img/product/omlet.jpg";
import kwetiaw from "../assets/img/product/kwetiaw.jpg";
import cheeseCake from "../assets/img/product/strawberrycake.jpg";
import manggoPuding from "../assets/img/product/manggo-puding.jpg";
import matchaShake from "../assets/img/product/matcha-shake.jpg";
import strawberryShake from "../assets/img/product/strawberry-sake.jpg";
import oreoShake from "../assets/img/product/oreo-shake.jpg";
import bananaShake from "../assets/img/product/banan-shake.jpg";
import caramelShake from "../assets/img/product/caramel-shake.jpg";
import catIcecream from "../assets/img/product/cat-ice-cream.jpg";
import frutieCake from "../assets/img/product/frutie-cake.jpg";
import roleCake from "../assets/img/product/role-cake.jpg";
import tartCake from "../assets/img/product/tart-cake.jpg";
import dragonPuding from "../assets/img/product/dragon-puding.jpg";
import cake from "../assets/img/product/cake.jpg";
import fruitPuding from "../assets/img/product/fruit-puding.jpg";
import honeyChicken from "../assets/img/product/honeyChicken.jpg";
import Pizza from "../assets/img/product/Pizza.png";
import catBread from "../assets/img/product/catBread.jpg";
import Pasta from "../assets/img/product/Pasta.jpg";
import Salad from "../assets/img/product/Salad.jpg";
import Coffee from "../assets/img/product/Coffee.jpg";
import JasmineTea from "../assets/img/product/JasmineTea.jpg";
import BlackTea from "../assets/img/product/BlackTea.jpg";
import TrackVisibility from 'react-on-screen';
import CafeHeader from "../components/CafeHeader";

export const CafeMenu = () => {

  const projects = [
    {
      title: "Omelette",
      description: "",
      imgUrl: omlet,
      harga : "20.000",
    },
    {
      title: "Kwetiaw",
      description: "",
      imgUrl: kwetiaw,
      harga : "35.000",
    },
    {
      title: "Honey Chicken Sesame",
      description: "",
      imgUrl: honeyChicken,
      harga : "30.000",
    },
    {
      title: "Pizza",
      description: "",
      imgUrl: Pizza,
      harga : "43.000",
    },
    {
      title: "Italian Salad",
      description: "",
      imgUrl: Salad,
      harga : "30.000",
    },
    {
      title: "Pasta",
      description: "",
      imgUrl: Pasta,
      harga : "27.000",
    },
  ];

  const beverages = [
    {
      title: "Coffee",
      description: "",
      imgUrl: Coffee,
      harga : "20.000",
    },
    {
      title: "Mint Choco Shake",
      description: "",
      imgUrl: matchaShake,
      harga : "21.000",
    },
    {
      title: "Jasmine Tea",
      description: "",
      imgUrl: JasmineTea,
      harga : "18.000",
    },
    {
      title: "Strawberry Shake",
      description: "",
      imgUrl: strawberryShake,
      harga : "19.000",
    },
    {
      title: "Oreo Shake",
      description: "",
      imgUrl: oreoShake,
      harga : "17.000",
    },
    {
      title: "Banana Shake",
      description: "",
      imgUrl: bananaShake,
      harga : "18.000",
    },
    {
      title: "Caramel Shake",
      description: "",
      imgUrl: caramelShake,
      harga : "18.800",
    },
    {
      title: "Cat-Shaped Ice Cream",
      description: "",
      imgUrl: catIcecream,
      harga : "20.000",
    },
    {
      title: "Black Tea",
      description: "",
      imgUrl: BlackTea,
      harga : "20.000",
    },
  ];

  const dessert = [
    {
      title: "Chocolate Brownie Cake",
      description: "",
      imgUrl: frutieCake,
      harga : "26.000",
    },
    {
      title: "Role Cake",
      description: "",
      imgUrl: roleCake,
      harga : "15.000",
    },
    {
      title: "Tart Cake",
      description: "",
      imgUrl: tartCake,
      harga : "24.900",
    },
    {
      title: "Dragon Fruit Pudding",
      description: "",
      imgUrl: dragonPuding,
      harga : "19.000",
    },
    {
      title: "Three-Layer Cake",
      description: "",
      imgUrl: cake,
      harga : "25.700",
    },
    {
      title: "Mix Fruit Pudding",
      description: "",
      imgUrl: fruitPuding,
      harga : "20.000",
    },
    {
      title: "Tri-Color Cat Bread",
      description: "",
      imgUrl: catBread,
      harga : "15.000",
    },
    {
      title: "Cheese Cake",
      description: "",
      imgUrl: cheeseCake,
      harga : "27.000",
    },
    {
      title: "Manggo Puding",
      description: "",
      imgUrl: manggoPuding,
      harga : "19.000",
    }
  ];


  return (
    <section className="project" id="project">
      <CafeHeader />
      <h1 className="MenuHeader">Cafe Menu</h1>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""} class="p-5">
               
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" style={{ fontWeight: 'bold' }}>Main Course</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{ fontWeight: 'bold' }}>Beverages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" style={{ fontWeight: 'bold' }}>Dessert</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Indulge in our delightful main course selection, crafted with love and care. Each dish is a symphony of flavors, combining fresh ingredients and culinary expertise. From savory classics to innovative creations, our main course offerings promise to take you on a memorable culinary journey.</p>
                      <Row xs={1} sm={2} md={3} className="justify-content-center">
                        {projects.map((project, index) => (
                            <Col key={index} className="justify-content-center" style={{ marginBottom: "20px" }}>
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Elevate your dining experience with our refreshing selection of beverages. From aromatic coffees and soothing teas to invigorating smoothies and handcrafted juices, our drink menu offers a delightful variety to suit every preference.</p>
                      <Row>
                        {
                          beverages.map((project, index) => {
                            return (
                              <Col className="item-center" style={{ marginBottom: "20px" }}>
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Each delectable treat is carefully crafted to perfection, combining the finest ingredients and culinary expertise. From rich and velvety cakes to creamy and fruity delights, our dessert menu offers a symphony of flavors.</p>
                      <Row xs={1} sm={2} md={3} className="justify-content-center">
                          {dessert.map((project, index) => (
                            <Col key={index} className="justify-content-center" style={{ marginBottom: "20px" }}>
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CafeMenu;