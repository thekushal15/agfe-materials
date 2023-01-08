import React from "react";
import styled from "styled-components";
import Mushroom from "./Mushroom";
import banner from "../assets/img/banner-bg.png";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";

const HomeIntro = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  background: ${banner};

  .left {
    position: relative;
    left: 0;
    padding-left: 4vw;
    /* background: #28120f; */
    top: 0;
    margin: 0;
    min-height: 100vh;
    width: 66vw;
  }
  .right {
    position: relative;
    left: 0vw;
    /* background: pink; */
    top: -15vh;
    margin: 0;
    height: 100vh;
    width: 40vw;
    overflow: hidden;
    padding-top: -10vh;
  }

  .left p {
    color: #fffcfc;
    text-shadow: 0 0 4px 0 #2a292aa8;
    font-size: 1rem;
    font-weight: 600;
    backdrop-filter: blur(2rem);
    border-radius: 15px;
    padding: 15px;
  }

  a {
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    .right {
      display: none;
    }
    .left {
      width: 90vw;
      height: 100vh;

      .tagline {
        font-size: small;
      }
    }
    .left h1 {
      font-size: 30px;
    }
    .left p {
      font-size: 10px;
    }
  }
`;

const Intro = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Lectures", "Slides", "Assignments"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <HomeIntro className="banner" id="home">
      <div className="left">
        <span className="tagline">Welcome to AGMAT!</span>
        <h1>
          {`Hey! I am Foodie. I will provie you`}{" "}
          <span
            className="txt-rotate"
            dataPeriod="330"
            data-rotate='[ "Lectures.", "Slides.", "Assignments." ]'
          >
            <span className="wrap">{text}.</span>
          </span>
        </h1>
        <p>
          I own this website "AGMAT", which ia an abbreviation of Agriculture Materials. Like you
          humans, I also grow day-by-day and will try to help you more. Have a look at my
          library and don't forget to contribute, if you have any resources.{" "}
        </p>
        <a href="#autumnSem">
          <button onClick={() => console.log("connect")}>
            Let's study! <ArrowRightCircle size={25} />
          </button>
        </a>
      </div>
      <div className="right">
        <Mushroom />
      </div>
    </HomeIntro>
  );
};

export default Intro;
