/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, useEffect, useRef } from "react";
import styled from "styled-components";
import { Button } from "../styles";
type PortfolioItemDetails = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  dateCreated: string;
  technologies: string[];
  role: string;
  domain: string;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
};
const PortfolioItemDetails = ({
  id,
  title,
  description,
  dateCreated,
  technologies,
  role,
  domain,
  imageUrl,
  setShowModal,
  showModal,
}: PortfolioItemDetails) => {
  const modalRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    modalRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [showModal]);
  return (
    <PortfolioItemDetailsContainer ref={modalRef}>
      <div className="pp-inner" key={id}>
        <div className="pp-content">
          <div className="pp-header">
            <button
              className="btn pp-close"
              onClick={() => setShowModal(false)}
            >
              <img src="/icons8-close.svg" alt="close"></img>
            </button>
            <div className="pp-thumbnail">
              <img src={imageUrl} alt={title} />
            </div>
            <h3>{title}</h3>
          </div>
          <div className="pp-body">
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="general-info">
              <ul>
                <li>
                  Created - <span>{dateCreated}</span>
                </li>
                <li>
                  Technologies used - <span>{technologies.join(", ")}</span>
                </li>
                <li>
                  Role - <span>{role}</span>
                </li>
                <li>
                  Website Link -{" "}
                  <span>
                    <a href="#" target="_blank">
                      {domain}
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

const PortfolioItemDetailsContainer = styled.section`
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
    backdrop-filter: var(--backdrop-filter-blur);
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
  .general-info > ul > li > span > a {
    text-transform: lowercase;
    color: var(--main-color);
  }
  button {
    ${Button}
  }
`;
