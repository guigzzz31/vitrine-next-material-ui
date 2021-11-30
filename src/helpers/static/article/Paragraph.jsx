import { makeStyles } from "@mui/styles";

import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    //display: "flex",
  },
  bold: {
    fontWeight: 500,
  },
  primary: {
    //flex: 1,
    //height: "22px",
    //width: "auto",
  },
  secondary: {
    paddingLeft: 12,
    color: theme.palette.text.secondary,
  },
}));
export default function Paragraph(props) {
  const { bold, primary, secondary } = props;
  const classes = useStyles();

  return (
    <Box pl={0.5}>
      {primary ? (
        <Box className={classes.container}>
          <Typography
            color="textPrimary"
            variant="body1"
            gutterBottom={!secondary}
          >
            {bold && <strong>{bold}&nbsp;</strong>}
            {primary}
          </Typography>
        </Box>
      ) : null}
      {secondary ? (
        <Typography
          className={classes.secondary}
          color="textPrimary"
          variant="body1"
          gutterBottom
        >
          {secondary}
        </Typography>
      ) : null}
    </Box>
  );
}
