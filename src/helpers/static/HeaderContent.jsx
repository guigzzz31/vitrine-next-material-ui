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
  subtitle: {
    fontFamily: "Lato",
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
  tab: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  divider: {
    backgroundColor: theme.palette.error.main,
    height: 3,
    width: "50%",
    marginBottom: 10,
    boxShadow: "rgb(218, 98, 125) 0px 8px 27px 1px",
  },
}));

export default function HeaderContent() {
  const classes = useStyles();
  const { currentTab } = useTabs();

  const tabName = () => {
    switch (currentTab) {
      case "/":
        return "Acceuil";
      case "/contact":
        return "Contact";
      case "/podologie":
        return "Podologie";
      case "/pedicurie":
        return "Pédicurie";
      case "/posturologie":
        return "Posturologie";
      case "/reflexologie":
        return "Réflexologie";
      case "/honoraires":
        return "Honoraires";
      default:
        return "Acceuil";
    }
  };

  return (
    <Box className={classes.container}>
      {/* <Typography
        fontSize={["18px", "22px", "24px", "28px", "32px"]}
        align="center"
        className={classes.title}
      >
        Pédicurie - Podologie
      </Typography>
      {matches ? null : (
        <Typography
          fontSize={["16px", "18px", "20px", "32px"]}
          align="center"
          className={classes.subtitle}
        >
          Cugnaux
        </Typography>
      )} */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography
          fontSize={["24px", "26px", "28px", "32px"]}
          align="center"
          letterSpacing={1.5}
          className={classes.tab}
        >
          {tabName()}
          {/* {!matches ? null : "Cugnaux - "} 05 34 57 10 41 */}
        </Typography>
        <Box className={classes.divider}></Box>
      </Box>
    </Box>
  );
}
