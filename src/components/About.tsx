import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Section } from "../styles";
import { education, experience } from "../utils/data";
const About = () => {
  const tabs = ["education", "experience"];
  const [isActive, setIsActive] = useState(tabs[0]);
  const [currentTab, setCurrentTab] = useState("education");
  return (
    <AboutContainer active={isActive === currentTab}>
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
              <div className="skill-item">HTML</div>
              <div className="skill-item">JavaScript / TypeScript</div>
              <div className="skill-item">CSS</div>
              <div className="skill-item">ReactJS</div>
              <div className="skill-item">NextJS</div>
              <div className="skill-item">Google Firebase</div>
              <div className="skill-item">MongoDB</div>
              <div className="skill-item">PostgreSQL</div>
              <div className="skill-item">Adobe Photoshop</div>
              <div className="skill-item">Adobe Illustrator</div>
            </div>
            <div className="about-tabs">
              {tabs.map((item, index) => (
                <button
                  onClick={() => {
                    setIsActive(item);
                    setCurrentTab(item);
                  }}
                  key={item}
                  className={`tab-item ${currentTab === tabs[index] ? "active" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
            {currentTab === tabs[0] && (
              <div className="tab-content" id="education">
                <div className="timeline">
                  {education.map(({ school, date, degree, description }) => (
                    <div className="timeline-item" key={school}>
                      <span className="date">{date}</span>
                      <h4>
                        {degree} - <span>{school}</span>
                      </h4>
                      <p>{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {currentTab === tabs[1] && (
              <div className="tab-content" id="experience">
                <div className="timeline">
                  {experience.map(
                    ({ company, date, position, description }) => (
                      <div className="timeline-item" key={company}>
                        <span className="date">{date}</span>
                        <h4>
                          {company} - <span>{position}</span>
                        </h4>
                        <p>{description}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
// about-section sec-padding
type IAboutContainer = {
  active: boolean;
};
const AboutContainer = styled.section<IAboutContainer>`
  backdrop-filter: var(--backdrop-filter-blur);
  background-color: var(--white-alpha-25);
  border: 1px solid var(--white-alpha-40);
  min-height: 90vh;
  border-radius: 30px;
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
  .about-tabs {
    margin-top: 20px;
  }
  .tab-item {
    cursor: pointer;
    font-weight: 500;
    padding: 2px 0;
    background-color: transparent;
    border: none;
    text-transform: capitalize;
    display: inline-block;
    color: var(--blue-dark);
    font-size: 1.25rem;
    margin: 0 30px 0 0;
    position: relative;
    opacity: 0.5;
    transition: all 0.3s ease;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      background-color: var(--blue-dark);
      height: 1px;
      transition: width 0.3s ease;
    }
    &:hover::before {
      width: 100%;
    }
    &:last-child {
      margin: 0;
    }
    &.active {
      color: var(--main-color);
      opacity: 1;
      cursor: auto;
    }
    &.active::before {
      width: 100%;
      background-color: var(--main-color);
    }
  }
  .tab-content {
    display: block;
    padding: 40px 0;
  }
  .timeline {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 1px;
      top: 0;
      left: 5px;
      background-color: var(--main-color);
    }
  }
  .timeline-item {
    position: relative;
    margin-bottom: 30px;
    padding: 10px 0 0 40px;
    &:before {
      content: "";
      position: absolute;
      height: 11px;
      width: 11px;
      background-color: var(--main-color);
      left: 0;
      top: 16px;
      border-radius: 50%;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .timeline-item > .date {
    display: block;
    color: var(--main-color);
    font-weight: 400;
    margin: 0 0 10px;
  }
  .timeline-item > h4 {
    font-size: 1.125rem;
    margin: 0 0 10px;
    font-weight: 600;
  }
  .timeline-item > h4 > span {
    font-weight: 400;
  }
`;
