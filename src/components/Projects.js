import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Instruments } from './Instruments';
import { Gallery } from './Gallery';
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Modulul 1: Teorie",
      description: "Familiarizarea cu materialele.",
      imgUrl: projImg1,
    },
    {
      title: "Modulul 2: Animalistică",
      description: "Desenăn animale în diferite tehnici.",
      imgUrl: projImg2,
    },
    {
      title: "Modulul 3: Botanică",
      description: "Desenăn flori utilizând merkere de alcool.",
      imgUrl: projImg3,
    },
    {
      title: "Modulul 4. Food-sketching",
      description: "Schițarea alimentelor prin acuarelă și markere.",
      imgUrl: projImg4,
    },
    {
      title: "Modulul 5. Schițarea obiectelor",
      description: "Compoziție și detalii selective, textură și reflexii.",
      imgUrl: projImg5,
    },
    {
      title: "Modulul 6. Oameni",
      description: "Modele de construcție umană.",
      imgUrl: projImg6,
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
                <h2>Program de studiu</h2>
                <p>Nu este vorba de un simplu curs online în formatul obișnuit "privește și fă", ci de o serie de lecții, ateliere de lucru și interacțiune personală cu profesorul, concepute pentru a vă asigura că învățați toată teoria, că stăpâniți noi tehnici și că vă consolidați cunoștințele în practică.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Module</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Instrumente</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Galerie</Nav.Link>
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
                      <h2>Veți avea nevoie de</h2><br />
                      <Instruments />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2>Lucrări din cadrul cursului</h2>
                      <Gallery />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
