/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
const Hero = () => {
    const ref = useRef(null)
    const tl = gsap.timeline({
        defaults: {
            opacity: 0,
            ease: "back"
        }
    })
    const q = gsap.utils.selector(ref)
    useEffect(() => {
        tl.from(ref.current, {ease: "bounce"} )
        .from(q("#creative"), { x: 80, })
        .from(q("h2"), { x: -80, }, "<")
        .from(q("p"), { y: 30,}, "-=0.2")
        .from(q("button"), { y: 30,}, "-=0.4")
        .from(q("#items > img"), { scale: 0, stagger: 0.1, opacity: 1, 
            transformOrigin: "50% 50%"}, "-=0.5")
        .to(q("p"), {text: "typewriter effect with GSAP 3", ease: "power1.in",
            duration: 2, repeat: -1, yoyo: true, opacity: 1})
        .to(q("#keyframe"), {
            repeat: -1, yoyo: true,
            keyframes: {
                "50%": {y: -100},
                "100%": {x: 320, y: 0, ease: "none"}
            }
        }, "<")
    }, [])
  return (
    <HeroContainer ref={ref}>
      <SectionContainer>
        <h1 id="creative">Creative</h1>
        <h2>Process</h2>
        <p>Learn how to find inspiration in the things you love.</p>
        <button>READ MORE</button>
        <h1 id="keyframe">Move me with keyframes %</h1>
      </SectionContainer>
      <ImagesContainer id="items">
        <img id="1" src="/z (1).svg" alt="z" />
        <img id="2" src="/z (2).svg" alt="z" />
        <img id="3" src="/z (3).svg" alt="z" />
        <img id="4" src="/z (4).svg" alt="z" />
        <img id="5" src="/z (5).svg" alt="z" />
        <h1>test</h1>
      </ImagesContainer>
    </HeroContainer>
  );
};

export default Hero;
const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const SectionContainer = styled.div`
  > h1 {
    line-height: 0;
  }
  > button {
    background-color: pink;
    border-radius: 5px;
    border-width: 0;
    padding: 0.5rem 1rem;
  }
`;
const ImagesContainer = styled.div`
  position: relative;
  > img {
    max-width: 200px;
  }
`;
