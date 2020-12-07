import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Paragraph(props) {
  const { primary, secondary } = props;
  return (
    <>
      {primary ? (
        <Typography color="textPrimary" variant="body1" gutterBottom>
          {props.primary}
        </Typography>
      ) : null}
      {secondary ? (
        <Typography color="textSecondary" variant="body2" paragraph>
          {props.secondary}
        </Typography>
      ) : null}
    </>
  );
}
