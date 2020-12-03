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
    },
    text: {
      //smokey black
      primary: "#191516",
      //lavanda
      secondary: "#BAAEC1",
    },
    error: {
      //blush
      main: "#DA627D",
    },
    info: {
      main: "#64b5f6",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
