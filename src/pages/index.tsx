import type { NextPage } from "next";
import Head from "next/head";
import { About, Hero } from "../components";
import TabGroup from "../components/X";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GSAP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
        <TabGroup/>
      </main>
    </>
  );
};

export default Home;
