import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function Solutions(props) {
  return (
    <Box>
      <Typography variant="h5">Soins Proposés</Typography>
      <Typography variant="body1">{props.solutions}</Typography>
    </Box>
  );
}
