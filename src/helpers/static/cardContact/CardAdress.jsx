import { makeStyles } from "@mui/styles";

import { Box, Typography, Link } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

import CardContainer from "../../containers/CardContainer";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  title: {
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
  },
  icon: {
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    width: "90%",
  },
  textInfo: {
    fontSize: ["16px", "18px", "20px", "22px"],
  },
  link: {
    fontFamily: "Montserrat",
  },
}));

export default function CardAdress(props) {
  const { adress } = props;
  const classes = useStyles();
  return (
    <CardContainer>
      <Box className={classes.container}>
        <Box item xs={3}>
          <Link
            underline="hover"
            href="https://www.google.com/maps/place/LES+COMMERCES+DE+DIANE/@43.5580539,1.3657896,19z/data=!4m5!3m4!1s0x12aeb0a9ef3f14fd:0x1fab75f5b7a37663!8m2!3d43.5583885!4d1.3654248"
          >
            <HomeIcon className={classes.icon} fontSize="large" />
            {/* <ImageMap /> */}
          </Link>
        </Box>
        <Grid item>
          <Typography
            className={classes.title}
            fontSize={["16px", "18px", "18px", "22px", "22px", "24px"]}
          >
            Adresse
          </Typography>
          <Typography fontSize={["16px", "18px", "20px", "22px"]}>
            {adress.name}
          </Typography>
          <Typography fontSize={["16px", "18px", "20px", "22px"]}>
            {adress.number}&nbsp;{adress.street}
          </Typography>
          <Typography fontSize={["16px", "18px", "20px", "22px"]}>
            {adress.postalCode}&nbsp;{adress.city}
          </Typography>
          <Link
            underline="hover"
            color="error"
            href="https://www.google.com/maps/place/LES+COMMERCES+DE+DIANE/@43.5580539,1.3657896,19z/data=!4m5!3m4!1s0x12aeb0a9ef3f14fd:0x1fab75f5b7a37663!8m2!3d43.5583885!4d1.3654248"
            className={classes.link}
            sx={{ fontSize: ["16px", "18px", "20px", "20px"] }}
          >
            Voir sur google maps
            {/* <ImageMap /> */}
          </Link>
        </Grid>
      </Box>
    </CardContainer>
  );
}
