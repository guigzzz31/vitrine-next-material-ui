import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4a8e89",
    },
    text: {
      primary: "#000",
      secondary: "#FFF",
      disabled: "#bbbbbb",
    },
    secondary: {
      main: "#c6fced",
      light: "#FFF",
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
