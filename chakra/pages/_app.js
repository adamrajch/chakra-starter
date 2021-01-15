import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Nav from "../components/applayout/Nav";
import Footer from "../components/applayout/Footer";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Flex
        style={{
          minHeight: "100vh",
          height: "100%",
        }}
        direction="column"
        align="center"
        // maxW={{ xl: "1200px" }}
        m="0 auto"
        pb="60px"
      >
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
