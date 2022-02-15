/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { lorem } from "../utils/data";
import { gsap } from "gsap";

const Parallax = () => {
  const trigger = gsap.timeline({
    defaults: {
      scrollTrigger: { scrub: 1 },
    },
  });
  const tl = gsap.timeline()
  const ref = useRef(null);
  const q = gsap.utils.selector(ref);
  useEffect(() => {
    trigger
      .to(q("#bg"), { scale: 1.5 })
      .to(q("#man"), { scale: 0.5, transformOrigin: "bottom" })
      .to(q("#mountain_left"), { x: -500 })
      .to(q("#mountain_right"), { x: 500 })
      .to(q("#text"), { scale: 10, y: 1000 });
    tl.to(q("#text"), {text: "MOTHA FUCKAH", color: 'red', ease: "power1.in",
    duration: 1, repeat: -1, yoyo: true, opacity: 1})
  }, []);

  return (
    <>
      <ParallaxContainer ref={ref}>
        <img src="/img/parallax/bg.jpg" alt="bg" id="bg" />
        <h2 id="text">FUCK YOU BITCH!!!!!!</h2>
        <img src="/img/parallax/man.png" alt="man" id="man" />
        <img src="/img/parallax/clouds_1.png" alt="clouds" />
        <img src="/img/parallax/clouds_2.png" alt="clouds" />
        <img
          src="/img/parallax/mountain_left.png"
          alt="mountain"
          id="mountain_left"
        />
        <img
          src="/img/parallax/mountain_right.png"
          alt="mountain"
          id="mountain_right"
        />
      </ParallaxContainer>
      <SectionContainer>
        <h2>Trigger scroll is awesome!</h2>
        <p>{lorem}</p>
      </SectionContainer>
    </>
  );
};

export default Parallax;
const ParallaxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center;
  > img {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  #text {
    position: relative;
    color: #fff;
    font-size: 2rem;
  }
  &:after {
    content: "";
    position: absolute;
    background: linear-gradient(to top, var(--bgc), transparent);
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    z-index: 100;
  }
`;
const SectionContainer = styled.section`
  padding: 100px;
  font-size: 3rem;
`;
