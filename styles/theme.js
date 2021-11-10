import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      //wintergreen Dream
      main: "#4a8e89",
    },
    secondary: {
      //mint cream
      light: "#FFF",
      main: "#EDF7F6",
    },
    text: {
      //smokey black
      primary: "#191516",
      //lavanda
      secondary: "#9b9bc4",
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
});

export default theme;
