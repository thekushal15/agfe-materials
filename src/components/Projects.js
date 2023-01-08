import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import styled from "styled-components";

import s31 from "../assets/img/s3/1.png";
import s32 from "../assets/img/s3/2.png";
import s33 from "../assets/img/s3/3.png";
import s34 from "../assets/img/s3/4.png";
import s35 from "../assets/img/s3/5.png";
import s36 from "../assets/img/s3/6.png";
import s37 from "../assets/img/s3/7.png";

import s51 from "../assets/img/s5/1.png";
import s52 from "../assets/img/s5/2.png";
import s53 from "../assets/img/s5/3.png";
import s54 from "../assets/img/s5/4.png";
import s55 from "../assets/img/s5/5.png";
import s56 from "../assets/img/s5/6.png";

import s71 from "../assets/img/s7/1.png";
import s72 from "../assets/img/s7/2.png";
import s73 from "../assets/img/s7/3.png";

const Resources = styled.section`
  position: relative;
  height: fit-content;
`;

export const Projects = () => {
  const projects = [
    {
      title: "Theory of Partial Differential equation",
      description: "Partial Diff. Eqn",
      imgUrl: s31,
      link: "https://drive.google.com/drive/folders/18DJto1QH9lhdIN5arI1xRSU0U_79GTM5?usp=sharing",
    },
    {
      title: "Probability and Statistics",
      description: "Prob and stats",
      imgUrl: s32,
      link: "https://drive.google.com/drive/folders/1xFNURt2GL-Upkk5jOLJk32eAyumx0fKx?usp=sharing",
    },
    {
      title: "Soil Tech",
      description: "Soil Tech",
      imgUrl: s33,
      link: "https://drive.google.com/drive/folders/1zAPoS82hUDFTay3eJu24ru78nTnEOm70?usp=sharing",
    },
    {
      title: "Fluid Mechanics",
      description: "Fluid Mech",
      imgUrl: s34,
      link: "https://drive.google.com/drive/folders/1k0Frhxvhd5npKfz68PUYN5FUvIb9Lnar?usp=sharing",
    },
    {
      title: "Theory of Machine Elements",
      description: "Machine Elements",
      imgUrl: s35,
      link: "https://drive.google.com/drive/folders/1fzphkz8viB6bUDGirdV00U_oTZIAK1lA?usp=sharing",
    },
    {
      title: "Soil Tech Lab",
      description: "Soil Tech Lab",
      imgUrl: s36,
      link: "https://drive.google.com/drive/folders/11D6Hcx_XCuQEac8-ckOeTOBmEmxaFXJt?usp=sharing",
    },
    {
      title: "Agricultural Biotechnology Lab",
      description: "Agri Biotech Lab",
      imgUrl: s37,
      link: "https://drive.google.com/drive/folders/1vRER9VfhJV5evER_11pP41nteMzjWX4Y?usp=sharing",
    },
  ];

  const projects1 = [
    {
      title: "Design of Farm Machinery",
      description: "Farm Machinery",
      imgUrl: s51,
      link: "https://drive.google.com/drive/folders/1Fnd7yD3CbHucxFQ1V73dIrT0nZ81LHth?usp=sharing",
    },
    {
      title: "Land and Water Resources",
      description: "Land and Water Resources",
      imgUrl: s52,
      link: "https://drive.google.com/drive/folders/1NDcYSa8QxlyuYDS3aH6o4S2ulyO9rDlG?usp=sharing",
    },
    {
      title: "Principle of Food Engineering",
      description: "Food Engineering",
      imgUrl: s53,
      link: "https://drive.google.com/drive/folders/1jLDPlaJWgjGbpad5gCYLUF6u7jxJMNIQ?usp=sharing",
    },
    {
      title: "Farm Machinery Lab",
      description: "FM Lab",
      imgUrl: s54,
      link: "https://drive.google.com/drive/folders/1vov-OX7Qki6e6ScO_XFj_LA2HiD-_d0G?usp=sharing",
    },
    {
      title: "Land & Water Resources Engineering LAB.",
      description: "LWR Lab",
      imgUrl: s55,
      link: "https://drive.google.com/drive/folders/1BY6-zfOsAdj8VxdRaueXYZlk_OCJZmiX?usp=sharing",
    },
    {
      title: "Food Engineering Lab",
      description: "Food Eng. Lab",
      imgUrl: s56,
      link: "https://drive.google.com/drive/folders/1eanVJ9B2LrN4-B5x88yRVvmpTIKHn-Z9?usp=sharing",
    },
  ];
  const projects2 = [
    {
      title: "Agro-Project Cash Flow Analysis and Finance",
      description: "Agro Cash Flow",
      imgUrl: s71,
      link: "https://drive.google.com/drive/folders/1ziOQk90qBmUwIyXsTkW8T75QERzfNUbC?usp=sharing",
    },
    {
      title: "Tubewell and Pumps",
      description: "Tubewell and Pump",
      imgUrl: s72,
      link: "https://drive.google.com/drive/folders/1dhKMiS3XJtlhj8HTGiVTbQ9i8yyaUGGf?usp=sharing",
    },
    {
      title: "Food Quality and Safety Standards",
      description: "Food",
      imgUrl: s73,
      link: "https://drive.google.com/drive/folders/1M8OBZZpC0kzrnurKXej_9wL5EhAVoln-?usp=sharing",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    //   link: "",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: s7,
    //   link: "",
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    //   link: "",
    // },
  ];
  return (
    <Resources>
      <section className="project" id="autumnSem">
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
                    <h2>Autumn Sem</h2>
                    <p>
                      Get the drive link of the courses from 3rd, 5th and 7th semester. You can find lecture links in the drive itself.
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
                          <p>More Courses Coming Super Soon.</p>
                          <Row>
                            {projects2.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
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
