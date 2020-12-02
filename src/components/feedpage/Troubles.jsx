import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import ListCustom from "../../helpers/ListCustom";

export default function Troubles(props) {
  return (
    <Box>
      <Typography align="center" variant="h5">
        Pourquoi consulter ?
      </Typography>
      <ListCustom items={props.items} />
    </Box>
  );
}
