import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { Container } from "@material-ui/core";

export default function Copyright() {
  return (
    <Container>
      <Typography variant="body2" color="secondary" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="https://github.com/guigzzz31">
          guigzzzo
        </MuiLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}
