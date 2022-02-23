/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button, Section } from "../styles";
import { portfolio } from "../utils/data";
import PortfolioItemDetails from "./PortfolioItemDetails";

type ActiveObject = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  dateCreated: string;
  technologies: string[];
  role: string;
  domain: string;
};
const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeObject, setActiveObject] = useState<ActiveObject>(portfolio[0]);

  return (
    <PortfolioContainer>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>recent work</h2>
          </div>
        </div>
        <div className="row">
          {portfolio.map((item) => (
            <div className="portfolio-item" key={item.id}>
              <div className="portfolio-item-thumbnail">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <h3 className="portfolio-item-title">{item.title}</h3>
              <button
                className="view-project-button"
                onClick={() => {
                  setShowModal(true);
                  setActiveObject(item);
                }}
              >
                view project
              </button>
            </div>
          ))}
          {showModal && (
            <PortfolioItemDetails
              {...activeObject}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
        </div>
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio;
// section - portfolio-section
const PortfolioContainer = styled(Section)`
  padding-bottom: 50px;
  padding: 80px 0;
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
  .view-project-button {
    ${Button};
  }
  .portfolio-item {
    width: calc((100% / 3) - 30px);
    margin: 0 15px 30px;
  }
  .portfolio-item > h3 {
    font-size: 20px;
    text-transform: capitalize;
    margin: 20px 0;
  }
  .portfolio-item-thumbnail {
    padding: 10px;
    background-color: var(--white-alpha-25);
    border: 1px solid var(--white-alpha-40);
    border-radius: 10px;
  }
  .portfolio-item-thumbnail > img {
    width: 100%;
  }
  .portfolio-item-details {
    display: none;
  }
`;
