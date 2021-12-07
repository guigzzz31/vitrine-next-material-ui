import { makeStyles } from "@mui/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTabs } from "../../contexts/context";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
}));

export default function HeaderContent() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:1060px)");
  const { currentTab } = useTabs();
  return (
    <Box className={classes.container}>
      <Typography
        fontSize={["20px", "22px", "24px", "28px", "32px"]}
        align="center"
        className={classes.title}
      >
        Pédicurie - Podologie
      </Typography>
      {matches ? null : (
        <Typography
          fontSize={["16px", "18px", "20px", "32px"]}
          align="center"
          className={classes.title}
        >
          Cugnaux
        </Typography>
      )}
      <Typography
        fontSize={["22px", "24px", "28px", "32px"]}
        align="center"
        className={classes.title}
      >
        {/* {currentTab} */}
        {!matches ? null : "Cugnaux - "} 05 34 57 10 41
      </Typography>
    </Box>
  );
}
