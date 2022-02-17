import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button, Section } from "../styles";
import { education, experience, skills } from "../utils/data";
import Tabs from "./Tabs";
const About = () => {
  const tabs = ["education", "experience"];
  const [isActive, setIsActive] = useState(tabs[0]);
  const [currentTab, setCurrentTab] = useState("education");
  return (
    <AboutContainer>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>about me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box">
              <img src="/about-img.png" alt="about" />
            </div>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint
              quidem architecto, corporis ipsum earum, nobis porro consequuntur
              eligendi maxime quia? Distinctio, quisquam? Odit, nihil corrupti
              maxime esse mollitia sint temporibus a dicta! Quasi illo
              temporibus dignissimos sequi sunt nostrum voluptas minus numquam
              fugit quam. Nemo libero cumque odit non?
            </p>
            <h3>skills</h3>
            <div className="skills">
              {skills.map((skill) => (
                <div className="skill-item" key={skill}>{skill}</div>
              ))}
            </div>
            <Tabs />
            <a href="#">download cv</a>
            <a href="#">contact me</a>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled(Section)`
  padding: 80px 0;
  .row {
    align-items: flex-start;
  }
  .section-title {
    padding: 0 15px;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  .section-title > h2 {
    font-size: 2.5rem;
    text-transform: capitalize;
  }
  .about-img {
    width: 40%;
    padding: 0 15px;
  }
  .about-text {
    width: 60%;
    padding: 0 15px;
  }
  .img-box {
    background-color: var(--white-alpha-25);
    max-width: 380px;
    border: 1px solid var(--white-alpha-40);
    margin: auto;
    border-radius: 10px;
  }
  .img-box > img {
    width: 100%;
  }
  .about-text > h3 {
    text-transform: capitalize;
    font-size: 1.25rem;
    margin: 20px 0;
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
  }
  .skill-item {
    background-color: var(--white-alpha-25);
    border: 1px solid var(--white-alpha-40);
    padding: 5px 15px;
    text-transform: capitalize;
    margin: 0 10px 10px 0;
    border-radius: 20px;
  }
  a {
    ${Button};
  }
`;
