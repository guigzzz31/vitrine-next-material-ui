import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Title(props) {
  return (
    <Typography color="primary" variant="h5" gutterBottom>
      {props.title}
    </Typography>
  );
}
