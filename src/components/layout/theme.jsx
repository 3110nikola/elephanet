import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  styles: {
    global: {
      body: {
        color: "#444",
      },
    },
  },
});

export default theme;
