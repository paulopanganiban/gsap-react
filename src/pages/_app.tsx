import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { gsap } from "gsap";
import { Layout } from "../components";
import { HeaderContextProvider } from "../context/HeaderContext";

function MyApp({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  return (
    <>
      <GlobalStyles />
      <Layout>
        <HeaderContextProvider>
          <Component {...pageProps} />
        </HeaderContextProvider>
      </Layout>
    </>
  );
}

export default MyApp;
