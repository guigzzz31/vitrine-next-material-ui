import { makeStyles } from "@mui/styles";

import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    //display: "flex",
  },
  bold: {
    fontWeight: 500,
    color: theme.palette.primary.main,
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
            fontFamily="Lato"
            color="textPrimary"
            fontSize={["16px", "18px", "20px", "22px"]}
            gutterBottom={!secondary}
          >
            {bold && <strong className={classes.bold}>{bold}&nbsp;</strong>}
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
