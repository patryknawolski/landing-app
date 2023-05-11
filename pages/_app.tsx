import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Container: ComponentStyleConfig = {
  baseStyle: {
    maxW: "1440px",
  },
};

const breakpoints = createBreakpoints({
  xs: "23em",
  sm: "26em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  xxl: "96em",
});

const theme = extendTheme({ breakpoints, components: { Container } });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
