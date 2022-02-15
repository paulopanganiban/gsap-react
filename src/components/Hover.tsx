/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { useArrayRef } from "../hooks/useSelector";

const data = [
  { id: 0, text: "Home" },
  { id: 1, text: "About" },
  { id: 2, text: "Portfolio" },
  { id: 3, text: "Contact us" },
  { id: 4, text: "Paulo Panganiban" },
];

const Hover = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);
  revealRefs.current = [];
  const addToRefs = (el: any) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  gsap.defaults({ duration: 0.25 });
  useEffect(() => {
    revealRefs.current.forEach((item, index) => {
      const q = gsap.utils.selector(item);
      const tl = gsap
        .timeline({ paused: true })
        .to(q(`#text`), {
          color: "#71C9CE",
          x: 10,
          scale: 1.3,
          transformOrigin: "left center",
        })
        .to(q(`#dot`), {
            backgroundColor: "#F94892",
            scale: 1.5,
          },
          0
        );
      item.addEventListener("mouseenter", () => tl.play());
      item.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);
  return (
    <HoverContainer>
      {data.map(({ id, text }, index) => (
        <div key={id} ref={addToRefs} id="item">
          <div className="dot" id={`dot`} />
          <h1 id={`text`}>{text}</h1>
        </div>
      ))}
    </HoverContainer>
  );
};

export default Hover;
const HoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    align-items: center;
  }
  .dot {
    height: 25px;
    width: 25px;
    background-color: #808080;
    border-radius: 50%;
    margin-right: 10px;
  }
  > div > h1 {
    cursor: pointer;
    color: #808080;
    text-transform: uppercase;
  }
`;
