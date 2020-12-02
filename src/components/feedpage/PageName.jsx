import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function PageName(props) {
  return (
    <Box>
      <Typography align="center" color="initial" variant="h4" gutterBottom>
        {props.pageName}
      </Typography>
    </Box>
  );
}
