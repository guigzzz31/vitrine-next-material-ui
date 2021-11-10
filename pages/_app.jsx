import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/styles";
//import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../styles/theme";
import Header from "../src/components/Header";
import Head from "../src/helpers/Head";
import Footer from "../src/components/Footer";
import Scroll from "../src/helpers/ScrollToTop";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head
        title="Pédicurie-Podologie-Cugnaux"
        description="Page d'accueil"
        url="https://podologue-cugnaux.io/home"
      />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}
        <Header />
        <Component {...pageProps} />
        <Scroll showBelow={1} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
