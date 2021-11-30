import { makeStyles } from "@mui/styles";

import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  bottom: {
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
    fontSize: "1.1rem",
    fontWeight: 500,
  },
}));

export default function InfoTipFooter(props) {
  const { bottom } = props;
  const classes = useStyles();
  return (
    <Box p={1}>
      <Typography className={classes.bottom}>{bottom}</Typography>
    </Box>
  );
}
