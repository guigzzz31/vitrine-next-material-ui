import { makeStyles } from "@mui/styles";

import { Grid, Box } from "@mui/material";

import Copyright from "../helpers/static/Copyright";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    padding: 0,
    width: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Copyright />
    </Box>
  );
}
