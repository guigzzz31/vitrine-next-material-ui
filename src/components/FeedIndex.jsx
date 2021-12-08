import { makeStyles } from "@mui/styles";

import { Box, Typography, useMediaQuery } from "@mui/material";

import HomeCardGenerator from "../helpers/generators/HomeCardGenerator";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 72,
    marginBottom: 40,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.palette.error.main,
    fontWeight: 600,
    fontFamily: "Lato",
    textAlign: "center",
  },
  subtitle: {
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontFamily: "Lato",
    textAlign: "center",
    wordBreak: "break",
    //width: "80%",
  },
}));
export default function FeedIndex(props) {
  const classes = useStyles();
  const { infoPage } = props;

  const matches = useMediaQuery("(max-width:1060px)");
  const sizeTitle = ["32px", "38px", "44px", "56px", "64px"];

  return (
    <Box className={classes.container}>
      <Box
        //sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        //px={4}
        py={[2, 4, 6, 8]}
        width="100%"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "row"],
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingX: [0, 4, 12, 24, 32],
          }}
        >
          <Typography fontSize={sizeTitle} className={classes.title}>
            Carole Richou
          </Typography>
          <Typography fontSize={sizeTitle} className={classes.title}>
            &
          </Typography>
          <Typography fontSize={sizeTitle} className={classes.title}>
            Carine Da Costa
          </Typography>
        </Box>
        <Typography
          fontSize={["15px", "18px", "22px", "24px", "28px"]}
          className={classes.subtitle}
          sx={{
            paddingX: [4, 12, 16, 20],
            paddingTop: 2,
          }}
        >
          Cabinet de Pédicurie - Podologie à Cugnaux - 05 34 57 10 41
        </Typography>
      </Box>
      {infoPage.images ? <HomeCardGenerator images={infoPage.images} /> : null}
    </Box>
  );
}
