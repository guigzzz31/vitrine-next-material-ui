import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      //wintergreen Dream
      main: "#4a8e89",
    },
    secondary: {
      //mint cream
      main: "#EDF7F6",
      light: "#FFF",
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
      main: "#64b5f6",
    },
    //mint cream
    background: {
      default: "#EDF7F6",
    },
    //font families
    typography: {
      fontFamily: [
        "Quicksand",
        "Roboto",
        "Montserrat",
        "Lato",
      ].join(","),
    },
  },
});

export default theme;
