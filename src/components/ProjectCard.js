import { Col } from "react-bootstrap";
import styled from "styled-components";


const Card=styled.div`
  margin-bottom: 3.3vh;

& a{
  text-decoration: none;
  color: #fff;

  & span{
    margin-top: 0vh;
    padding-top: 0vh;

    padding-bottom: 0px;
  }
}

.proj-imgbx{
  margin-bottom: 1vh;
}
`

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={120} sm={6} md={4}>
      <Card>

      <a href={link} target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            {/* <span>{description}</span> */}
          </div>
        </div>
        <span>{description}</span>
      </a>
      </Card>
    </Col>
  );
};

