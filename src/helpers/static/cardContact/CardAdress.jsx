import { makeStyles } from "@mui/styles";

import { Grid, Typography, Link } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

import CardContainer from "../../containers/CardContainer";

const useStyles = makeStyles((theme) => ({
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
  link: {
    fontFamily: "Montserrat",
    fontSize: 15,
  },
}));

export default function CardAdress(props) {
  const { adress } = props;
  const classes = useStyles();
  return (
    <CardContainer>
      <Grid width="100%" justify="space-around" alignItems="center" container>
        <Grid item xs={3}>
          <Link
            underline="hover"
            href="https://www.google.com/maps/place/LES+COMMERCES+DE+DIANE/@43.5580539,1.3657896,19z/data=!4m5!3m4!1s0x12aeb0a9ef3f14fd:0x1fab75f5b7a37663!8m2!3d43.5583885!4d1.3654248"
          >
            <HomeIcon className={classes.icon} fontSize="large" />
            {/* <ImageMap /> */}
          </Link>
        </Grid>
        <Grid item>
          <Typography
            className={classes.title}
            variant="h5"
            //color="primary"
            gutterBottom
          >
            Adresse
          </Typography>
          <Typography>{adress.name}</Typography>
          <Typography>
            {adress.number}&nbsp;{adress.street}
          </Typography>
          <Typography>
            {adress.postalCode}&nbsp;{adress.city}
          </Typography>
          <Link
            underline="hover"
            color="error"
            href="https://www.google.com/maps/place/LES+COMMERCES+DE+DIANE/@43.5580539,1.3657896,19z/data=!4m5!3m4!1s0x12aeb0a9ef3f14fd:0x1fab75f5b7a37663!8m2!3d43.5583885!4d1.3654248"
            className={classes.link}
          >
            Voir sur google maps
            {/* <ImageMap /> */}
          </Link>
        </Grid>
      </Grid>
    </CardContainer>
  );
}
