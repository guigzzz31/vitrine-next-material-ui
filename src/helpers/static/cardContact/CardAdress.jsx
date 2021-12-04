import { makeStyles } from "@mui/styles";

import { Box, Typography, Link } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

import CardContainer from "../../containers/CardContainer";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    //width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
  },
  icon: {
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    width: ["16px", "18px", "20px", "22px"],
  },
  textInfo: {
    fontSize: ["16px", "18px", "20px", "22px"],
  },
  link: {
    fontFamily: "Montserrat",
  },
}));
const linkDoctolib =
  "https://www.google.com/maps/place/LES+COMMERCES+DE+DIANE/@43.5580539,1.3657896,19z/data=!4m5!3m4!1s0x12aeb0a9ef3f14fd:0x1fab75f5b7a37663!8m2!3d43.5583885!4d1.3654248";

export default function CardAdress(props) {
  const { adress } = props;
  const classes = useStyles();
  return (
    <CardContainer>
      <Box className={classes.container} paddingY={2} paddingX={1}>
        <Box>
          <Link underline="hover" href={linkDoctolib}>
            <HomeIcon
              className={classes.icon}
              sx={{ fontSize: ["22px", "34px", "38px", "44px", "52px"] }}
            />
            {/* <ImageMap /> */}
          </Link>
        </Box>
        <Box>
          <Typography
            className={classes.title}
            fontSize={["24px", "24px", "26px", "26px", "28px", "32px"]}
          >
            Adresse
          </Typography>
          <Typography
            fontFamily="Lato"
            fontSize={["16px", "16px", "18px", "20px", "22px"]}
          >
            {adress.name}
          </Typography>
          <Typography
            fontFamily="Lato"
            fontSize={["16px", "16px", "18px", "20px", "22px"]}
          >
            {adress.number}&nbsp;{adress.street}
          </Typography>
          <Typography
            fontFamily="Lato"
            fontSize={["16px", "16px", "18px", "20px", "22px"]}
          >
            {adress.postalCode}&nbsp;{adress.city}
          </Typography>
          <Link
            underline="hover"
            color="error"
            href={linkDoctolib}
            className={classes.link}
            sx={{
              fontSize: ["16px", "16px", "18px", "20px", "22px"],
              fontFamily: "Lato",
            }}
          >
            Voir sur google maps
            {/* <ImageMap /> */}
          </Link>
        </Box>
      </Box>
    </CardContainer>
  );
}
