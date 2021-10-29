import React from "react";
import { makeStyles } from "@mui/styles";

import { Container, Typography, Link } from "@mui/material";

export default function Copyright() {
  return (
    <Container>
      <Typography variant="body2" color="secondary" align="center">
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
