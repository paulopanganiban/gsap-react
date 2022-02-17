import React, { useState } from "react";
import styled from "styled-components";
import { Section } from "../styles";
import { education, experience } from "../utils/data";
const Tabs = () => {
  const tabs = ["education", "experience"];
  const [isActive, setIsActive] = useState(tabs[0]);
  const [currentTab, setCurrentTab] = useState("education");
  return (
    <TabsContainer>
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
      <div className="tab-content" id="experience">
        <div className="timeline">
          {experience.map(({ company, date, position, description }) => (
            <div className="timeline-item" key={company}>
              <span className="date">{date}</span>
              <h4>
                {company} - <span>{position}</span>
              </h4>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </TabsContainer>
  );
};

export default Tabs;
const TabsContainer = styled.nav`
  margin-top: 20px;
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
