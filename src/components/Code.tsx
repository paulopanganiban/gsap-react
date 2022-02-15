/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { useSelector } from "../hooks/useSelector";

const data = [
  { id: 0, color: "#FDEBF7" },
  { id: 1, color: "#FBCAFF" },
  { id: 2, color: "#FFADF0" },
  { id: 3, color: "#FC28FB" },
  { id: 4, color: "red" },
];
const Code = () => {
  const codeContainerRef = useRef(null);
  let q = gsap.utils.selector(codeContainerRef);
  useEffect(() => {
    gsap
      .timeline()
      .from(codeContainerRef.current, { opacity: 0, duration: 1 })
      .from(q("#title"), { opacity: 0, scale: 0, ease: "back" })
      .from(q("#image"), {
        opacity: 0,
        yPercent: 100,
        stagger: 0.1,
        duration: 0.8,
        ease: "back",
      }, "+=2")
      .from(q("#time"), {
        xPercent: 100,
        duration: 0.8,
      }, "<");
  }, []);
  return (
    <CodeContainer ref={codeContainerRef}>
      <h1 id="title">Meet the MirmoNS</h1>
      <h4 id="time">Sundays 9pm</h4>
      <div className="image-container">
        {data.map((item) => (
          <img
            key={item.id}
            id="image"
            src="/assets/1.svg"
            alt="bear"
            style={{ backgroundColor: item.color }}
          />
        ))}
      </div>
    </CodeContainer>
  );
};

export default Code;
const CodeContainer = styled.div`
  margin: 50px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  > h4 {
    background-color: #a6e3e9;
    padding: 5px 8px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
