import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { gsap } from "gsap";

const sections = [
  {
    title: "Title 1",
    subtitle: "Subtitle 1",
  },
  {
    title: "Title 2",
    subtitle: "Subtitle 2",
  },
  {
    title: "Title 3",
    subtitle: "Subtitle 3",
  },
  {
    title: "Title 4",
    subtitle: "Subtitle 4",
  },
];
const Astro = () => {
  const [background, setBackground] = useState("#5a7d95");
  const imageRef = useRef(null);
  const revealRefs = useRef<HTMLDivElement[]>([]);
  revealRefs.current = [];
  useEffect(() => {
    gsap.from(imageRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        { duration: 1, autoAlpha: 1, ease: "none", scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
          markers: true
        } },
      );
    });
  }, []);
  useEffect(() => {
    gsap.to(imageRef.current, {
      duration: 1,
      backgroundColor: background,
      ease: "none",
    });
  }, [background]);
  const toggleBackground = () => {
    const color = background !== "#5a7d95" ? "#5a7d95" : "#262626";
    setBackground(color);
  };
  const addToRefs = (element: HTMLDivElement) => {
    if (element && !revealRefs.current.includes(element)) {
      console.log(element);
      revealRefs.current.push(element);
    }
  };
  return (
    <AstroContainer>
      <div ref={imageRef} className="image-container">
        <Image
          src="/assets/astro.png"
          alt="astro"
          objectFit="contain"
          width={300}
          height={300}
        />
        <button onClick={toggleBackground}>Toggle</button>
      </div>
      <div className="sections-array">
        {sections.map(({ title, subtitle }) => {
          return (
            <div key={title} ref={addToRefs}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          );
        })}
      </div>
    </AstroContainer>
  );
};

export default Astro;
const AstroContainer = styled.div`
  .sections-array {
    > div {
      background-color: skyblue;
      border-radius: 10px;
      margin: 30px;
      padding: 200px;
    }
  }
`;
