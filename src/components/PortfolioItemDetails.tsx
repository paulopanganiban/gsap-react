/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { Button } from "../styles";
const PortfolioItemDetails = () => {
  return (
    <PortfolioItemDetailsContainer>
      <div className="pp-inner">
        <div className="pp-content">
          <div className="pp-header">
            <button className="btn pp-close">
              <img src="/icons8-close.svg" alt="close"></img>
            </button>
            <div className="pp-thumbnail">
              <img src="/portfolio/3.jpg" alt="thumbnail" />
            </div>
            <h3>app landing page</h3>
          </div>
          <div className="pp-body">
            <div className="description">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores rerum similique reprehenderit corporis aperiam enim
                possimus suscipit perferendis? Non, rerum.
              </p>
            </div>
            <div className="general-info">
              <ul>
                <li>
                  Created - <span>4 Dec 2020</span>
                </li>
                <li>
                  Technologies used - <span>html, css, reactJS</span>
                </li>
                <li>
                  Role - <span>Frontend</span>
                </li>
                <li>
                  Website Link -{" "}
                  <span>
                    <a href="#" target="_blank">
                      www.domain.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PortfolioItemDetailsContainer>
  );
};

export default PortfolioItemDetails;
// portfolio pop up
const PortfolioItemDetailsContainer = styled.section`
visibility: hidden;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 200;
  overflow-y: auto;
  .pp-inner {
    min-height: 100vh;
    padding: 40px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pp-content {
    background-color: var(--white-alpha-25);
    padding: 30px;
    border-radius: 30px;
    max-width: 900px;
    width: 100%;
    border: 1px solid var(--white-alpha-40);
    backdrop-filter: var(--backdrop-filter-blue);
    position: relative;
  }
  .pp-header {
  }
  .pp-header > h3 {
    font-size: 1.5625rem;
    text-transform: capitalize;
    margin: 20px 0 15px;
  }

  .pp-thumbnail > img {
    width: 100%;
    border-radius: 10px;
  }
  .pp-close {
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -40px;
    top: -40px;
  }
  .description {
      margin-bottom: 20px;
  }
  .general-info > ul > li {
    margin-bottom: 10px;
    font-weight: 600;
    text-transform: capitalize;
  }
  .general-info > ul > li > span {
      font-weight: 300;
  }
  .general-info > ul > li > span > a{
     text-transform: lowercase;
     color: var(--main-color);
  }
  button {
    ${Button}
  }
`;
