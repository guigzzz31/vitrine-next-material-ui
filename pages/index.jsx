import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Head from "../src/components/Head";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Header from "../src/components/Header";
import ProTip from "../src/helpers/ProTip";
import Link from "../src/helpers/Link";
import Copyright from "../src/helpers/Copyright";

export default function Index() {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: 0,
      //width: 300,
      //margin: 0
    },
    box: {
      padding: 10,
    },
  }));
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Head
        title="home"
        description="Page d'accueil"
        url="https://podologue-cugnaux.io/home"
      />
      <Box my={4} className={classes.box}>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
