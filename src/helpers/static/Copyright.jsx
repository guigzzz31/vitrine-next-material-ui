import React from "react";
import { makeStyles } from "@mui/styles";

import { Container, Typography, Link } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.secondary.light,
  },
}));

export default function Copyright() {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="body2" className={classes.text} align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/guigzzz31">
          guigzzzo
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}
