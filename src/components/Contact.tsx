import React from "react";
import styled from "styled-components";
import { Button, Section } from "../styles";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Contact = () => {
  return (
    <ContactContainer>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>contact me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            <form action="">
              <div className="row">
                <div className="input-group">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    className="input-control"
                    id=""
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    className="input-control"
                    id=""
                    required
                  />
                </div>
                <div className="input-group">
                  <textarea
                    name=""
                    className="input-control"
                    id=""
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="btn">
                    send message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>example@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <h3>Phone</h3>
              <p>+63 905 695 2944</p>
            </div>
            <div className="contact-info-item">
              <h3>Follow me</h3>
              <p>panganibanjpup@gmail.com</p>
              <div className="social-links">
                <a href="#" target="_blank">
                  <AiFillFacebook />
                </a>
                <a href="#" target="_blank">
                  <AiFillTwitterCircle />
                </a>
                <a href="#" target="_blank">
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
const ContactContainer = styled(Section)`
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
  button {
    ${Button}
  }
  .contact-form ,
  .contact-info {
    width: 50%;
    padding: 0 15px;
  }
  .input-group {
    width: 100%;
    margin-bottom: 30px;
  }
  .input-control {
    padding: 15px;
    display: block;
    width: 100%;
    border-radius: 25px;
    font-family: inherit;
    font-weight: 400;
    background-color: var(--white-alpha-25);
    font-size: 16px;
    color: var(--blue-dark);
    border: 1px solid transparent;
    transition: border-color: 0.3s ease-in-out;
    &::placeholder {
      color: var(--blue-dark);
      opacity: 0.8;
      font-weight: 300;
    }
    &:focus {
      outline: none;
      border-color: var(--white-alpha-40);
    }
  }
  textarea {
    height: 120px;
    resize: none;
    padding-top: 15px;
  }
  .contact-info-item {
    margin: 0 0 30px;
    padding: 0 0 0 20px;
  }
  .contact-info-item > h3 {
    font-size:1.25rem;
    text-transform: capitalize;
    margin: 0 0 5px;
  }
  .social-links > a {
    margin: 10px 10px 0 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--white-alpha-25);
    border: 1px solid var(--white-alpha-40);
    color: var(--main-color);
    border-radius: 50%;
  }
`;
