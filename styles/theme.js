import { createMuiTheme } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4a8e89",
    },
    text: {
      primary: "#000",
      secondary: "#FFF",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: "#fe7171",
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
