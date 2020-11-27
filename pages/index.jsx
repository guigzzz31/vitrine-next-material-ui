import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Head from "../src/components/Head";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";
import ProTip from "../src/helpers/ProTip";
import Link from "../src/helpers/Link";
import Copyright from "../src/helpers/Copyright";

export default function Index() {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#242829",
      //width: 300,
      //margin: 0
    },
  }));
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Head
        title="home"
        description="Page d'accueil"
        url="https://podologue-cugnaux.io/home"
      />
      <Box my={4}>
        <Typography variant="h6" component="h1" align="center" gutterBottom>
          Carole Richou & Carine Da Costa
        </Typography>{" "}
        <Typography variant="subtitle1" align="center" gutterBottom>
          Pédicure Podologue - Cugnaux
        </Typography>
        <Typography variant="h6" component="h1" align="center" gutterBottom>
          05 34 57 10 41
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
