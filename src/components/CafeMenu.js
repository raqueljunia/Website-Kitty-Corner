import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import omlet from "../assets/img/product/omlet.jpg";
import kwetiaw from "../assets/img/product/kwetiaw.jpg";
import cheeseCake from "../assets/img/product/cheese-cake.jpg";
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
import TrackVisibility from 'react-on-screen';


export const CafeMenu = () => {

  const projects = [
    {
      title: "Omlet",
      description: "lalala",
      imgUrl: omlet,
      harga : "10.000",
    },
    {
      title: "Kwetiaw",
      description: "lalala",
      imgUrl: kwetiaw,
      harga : "15.000",
    },
    {
      title: "Cheese Cake",
      description: "lalala",
      imgUrl: cheeseCake,
      harga : "14.000",
    },
    {
      title: "Manggo Puding",
      description: "lalala",
      imgUrl: manggoPuding,
      harga : "19.000",
    },

  ];

  const beverages = [
    {
      title: "Matcha Shake",
      description: "lilili",
      imgUrl: matchaShake,
      harga : "17.200",
    },
    {
      title: "Strawberry Shake",
      description: "lilili",
      imgUrl: strawberryShake,
      harga : "18.000",
    },
    {
      title: "Oreo Shake",
      description: "lilili",
      imgUrl: oreoShake,
      harga : "16.000",
    },
    {
      title: "Banana Shake",
      description: "lilili",
      imgUrl: bananaShake,
      harga : "16.000",
    },
    {
      title: "Caramel Shake",
      description: "lilili",
      imgUrl: caramelShake,
      harga : "19.800",
    },
    {
      title: "Cat Ice Cream",
      description: "lilili",
      imgUrl: catIcecream,
      harga : "17.900",
    },
  ];

  const dessert = [
    {
      title: "Fruit Cake",
      description: "lululu",
      imgUrl: frutieCake,
      harga : "14.700",
    },
    {
      title: "Role Cake",
      description: "lululu",
      imgUrl: roleCake,
      harga : "11.300",
    },
    {
      title: "Tart Cake",
      description: "lululu",
      imgUrl: tartCake,
      harga : "12.900",
    },
    {
      title: "Dragon Puding",
      description: "lululu",
      imgUrl: dragonPuding,
      harga : "11.000",
    },
    {
      title: "Cake",
      description: "lululu",
      imgUrl: cake,
      harga : "18.700",
    },
    {
      title: "Fruit Puding",
      description: "lululu",
      imgUrl: fruitPuding,
      harga : "10.000",
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Cafe Menu</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Main Course</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Beverages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Dessert</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {
                          beverages.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {
                          dessert.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
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