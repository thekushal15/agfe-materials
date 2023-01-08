import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import s61 from "../assets/img/s6/1.png";
import s62 from "../assets/img/s6/2.png";
import s63 from "../assets/img/s6/3.png";
import s64 from "../assets/img/s6/4.png";
import s65 from "../assets/img/s6/5.png";
import s66 from "../assets/img/s6/6.png";
import s67 from "../assets/img/s6/7.png";

import s41 from "../assets/img/s4/1.png";
import s42 from "../assets/img/s4/2.png";
import s43 from "../assets/img/s4/3.png";
import s44 from "../assets/img/s4/4.png";
import s45 from "../assets/img/s4/5.png";
import s46 from "../assets/img/s4/6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import styled from "styled-components";

const Resources = styled.section`
  position: relative;
  /* top: -35vh; */
  height: fit-content;

  .hline {
    position: relative;
    top: 0%;
    height: 6px;
    width: 100vw;
    left: 0;
    background: linear-gradient(90.21deg, #ff7865 -5.91%, #9b4665 111.58%);
  }
`;

export const Projects2 = () => {
  const projects = [
    {
      title: "Basic Thermodynamics",
      description: "ThermoD",
      imgUrl: s41,
      link: "https://drive.google.com/drive/folders/1rZs-85kvLoBqWSbjTWjqbWBIMNjrIGn7?usp=sharing",
    },
    {
      title: "Basic Electronics",
      description: "Basic Electronics",
      imgUrl: s42,
      link: "https://drive.google.com/drive/folders/1R2SLvpvBHbVBfvsZ9PUCPOQP7PQQBEQg?usp=sharing",
    },
    {
      title: "Crop Production Tech",
      description: "Crop Prod. Tech",
      imgUrl: s43,
      link: "https://drive.google.com/drive/folders/1NSCzz4QMjc9_z8rNv9kyGzTVh3_FsFbf?usp=sharing",
    },
    {
      title: "Economics",
      description: "Economics",
      imgUrl: s44,
      link: "https://drive.google.com/drive/folders/1bG-7qmsIGZJ7thUABCW-l8drHdxUuR-C?usp=sharing",
    },
    {
      title: "Basic Electronics Lab",
      description: "Electronics Lab",
      imgUrl: s45,
      link: "https://drive.google.com/drive/folders/1jpPhaYC72jmKRVOzu_XTcQWKZgQwTP3F?usp=sharing",
    },
    {
      title: "Crop Prod Lab",
      description: "Crop Prod. Lab",
      imgUrl: s46,
      link: "https://drive.google.com/drive/folders/1t1zWNoZ3V4TQvYIRoHp1yhacTimg4sk3?usp=sharing",
    },
  ];

  const projects1 = [
    {
      title: "Food Science and Technology",
      description: "Food Science",
      imgUrl: s61,
      link: "https://drive.google.com/drive/folders/1h4gNg_SvCW7EkwjAhn1xy5RUzabAvsfw?usp=sharing",
    },
    {
      title: "Irrigation & Drainage Engineering",
      description: "Irrigation & Drainage",
      imgUrl: s62,
      link: "https://drive.google.com/drive/folders/1ihpmtHF1j_AaOqIqZu20u0ULyJiNhNNd?usp=sharing",
    },
    {
      title: "Post Harvest Engineering",
      description: "Post Harvest Engineering",
      imgUrl: s63,
      link: "https://drive.google.com/drive/folders/1BVPvBaJYZXt46Caygpbdx2-0Z7c_rpee?usp=sharing",
    },
    {
      title: "Tractor and Power Theory",
      description: "Tractor and Power",
      imgUrl: s64,
      link: "https://drive.google.com/drive/folders/1Jbw4DtpxPAr5pN1QIkl1pL3Je05tSABh?usp=sharing",
    },
    {
      title: "Food Science and Technology Lab",
      description: "Food Science Lab",
      imgUrl: s65,
      link: "https://drive.google.com/drive/folders/1sClEwBA_DoU_D2NqgNUrnlPehMSkvX8W?usp=sharing",
    },
    {
      title: "Irrigation & Drainage Engineering Lab",
      description: "Irrigation Lab",
      imgUrl: s66,
      link: "https://drive.google.com/drive/folders/1eZzo1KPnhXF8aJgQmsse17i8fQjRiIrf?usp=sharing",
    },
    {
      title: "Tractor and Power Theory Lab",
      description: "Tractor and Power Theory Lab",
      imgUrl: s67,
      link: "https://drive.google.com/drive/folders/1NhruGxE8VOuvCUW_3ok2H0NiZotuJVV8?usp=sharing",
    },
  ];
  const projects2 = [
    // {
    //   title: "coming super soon",
    //   description: "Design & Development",
    //   imgUrl: "",
    //   link: "/",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: "",
    //   link: "",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: "",
    //   link: "",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: "",
    //   link: "",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: "",
    //   link: "",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: "",
    //   link: "",
    // },
  ];
  return (
    <Resources>
      <div className="hline"></div>
      <section className="project" id="springSem">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Spring Sem</h2>
                    <p>
                      Get the drive link of the courses from 4th, 6th and 8th
                      semester. You can find lecture links in the drive itself.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">2nd year</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">3rd year</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">4th Year</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          {/* <p>Coming super soon.</p> */}
                          <Row>
                            {projects1.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>Coming super soon.</p>
                          {/* <Row>
                            {
                              projects2.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row> */}
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    </Resources>
  );
};
