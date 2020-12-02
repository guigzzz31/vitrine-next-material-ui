import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Definition(props) {
  return (
    <Typography color="initial" variant="body1" paragraph>
      {props.definition}
    </Typography>
  );
}
