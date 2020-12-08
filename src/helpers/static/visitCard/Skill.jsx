import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Skill(props) {
  const { skill } = props;
  return (
    <>
      {skill ? (
        <Typography color="textPrimary" variant="body1" gutterBottom>
          {skill}
        </Typography>
      ) : null}
    </>
  );
}
