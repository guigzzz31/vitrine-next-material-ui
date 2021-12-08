import { makeStyles } from "@mui/styles";

import { Grid, Box } from "@mui/material";

import Copyright from "../helpers/static/Copyright";
import ScrollToTop from "../helpers/ScrollToTop";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    background: "rgb(255,255,255)",
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,253,247,1) 84%)",
    //backgroundColor: theme.palette.primary.main,
    width: "100%",
    boxShadow: "3px -9px 37px 24px #fffdf7",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Box></Box>
      <Copyright />
      <Box sx={{ justifySelf: "flex-end" }}>
        <ScrollToTop showBelow={1} />
      </Box>
    </Box>
  );
}
