import React from "react";
import { makeStyles } from "@mui/styles";

import { Container, Typography, Link } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.text.primary,
    fontFamily: "Montserrat",
  },
  link: {
    color: theme.palette.error.main,
  },
}));

export default function Copyright() {
  const classes = useStyles();
  return (
    <Typography
      fontSize={["14px", "14px", "15px", "16px"]}
      className={classes.text}
      align="center"
    >
      {"Copyright © "}
      <Link
        color="inherit"
        className={classes.link}
        href="https://github.com/guigzzz31"
      >
        guigz
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
