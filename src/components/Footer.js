import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import styled from "styled-components";

const FooterSec = styled.section`
  .footer {
    height: 200px;
    padding-top: 50px;
  }
`;

const H1 = styled.h1`
  color: white;
  font-weight: 500;
`;

export const Footer = () => {
  return (
    <FooterSec>
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <H1>AGMAT</H1>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/kushal15/" target="_blank">
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="https://www.facebook.com/kushal.1593/" target="_blank">
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a href="https://www.instagram.com/the.kushal/" target="_blank">
                  <img src={navIcon3} alt="Icon" />
                </a>
              </div>
              <p>Developed by Kushal</p>
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </FooterSec>
  );
};
