import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/styles";
//import CssBaseline from "@material-ui/core/CssBaseline";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import theme from "../styles/theme";
import Header from "../src/components/Header";
import Head from "../src/helpers/Head";
import Footer from "../src/components/Footer";
import Scroll from "../src/helpers/ScrollToTop";
import { TabContext } from "../src/contexts/context";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
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
        <Box
          sx={{
            backgroundColor:
              "linear-gradient(0deg, rgba(255,253,247,1) 4%, rgba(255,255,255,1) 100%)",
          }}
        >
          <TabContext>
            <Header />
            <Component {...pageProps} />
            {/* <Scroll showBelow={1} /> */}
            <Footer />
          </TabContext>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  //Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
