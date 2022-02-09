import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Astro from "../components/Astro";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GSAP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
        <Astro />
      </HomeContainer>
    </>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: grid;
  place-items: center;
`;