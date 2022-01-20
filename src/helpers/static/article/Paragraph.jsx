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
    color: theme.palette.primary.main,
  },
  def: {
    paddingLeft: 12,
    color: theme.palette.text.primary,
  },
}));
export default function Paragraph(props) {
  const { bold, primary, secondary, def, infoTip } = props;
  const classes = useStyles();

  return (
    <Box pl={0.5}>
      {primary ? (
        <Box className={classes.container}>
          <Typography
            fontFamily="Lato"
            color="textPrimary"
            fontSize={
              infoTip
                ? ["14px", "16px", "18px"]
                : ["16px", "18px", "20px", "20px"]
            }
            // fontSize={["16px", "18px", "20px", "22px", "24px"]}
            gutterBottom={!secondary}
          >
            {bold && <strong className={classes.bold}>{bold}&nbsp;</strong>}
            {primary}
          </Typography>
        </Box>
      ) : null}
      {secondary ? (
        <Typography
          className={def ? classes.def : classes.secondary}
          variant="body1"
          gutterBottom
        >
          {secondary}
        </Typography>
      ) : null}
    </Box>
  );
}
