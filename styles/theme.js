import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      //wintergreen Dream
      main: "#43726e",
    },
    secondary: {
      light: "#FFF",
      //cream
      main: "#fffdf7",
      //main: "#d1f4e7",
    },
    text: {
      //smokey black
      primary: "#191516",
      //cinereous
      secondary: "#987D7C",
    },
    error: {
      //blush
      main: "#DA627D",
    },
    info: {
      main: "#4a8e89",
    },
    //mint cream
    background: {
      default: "#EDF7F6",
    },
  },
  typography: {
    fontFamily: ["Quicksand", "Roboto", "Montserrat", "Lato"].join(","),
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export default theme;
