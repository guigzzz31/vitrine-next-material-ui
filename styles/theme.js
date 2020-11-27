import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3e978b",
    },
    secondary: {
      main: "#2ec1ac",
    },
    error: {
      main: "#fe7171",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
