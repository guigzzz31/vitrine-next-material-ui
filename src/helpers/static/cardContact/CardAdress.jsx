import { makeStyles } from "@mui/styles";

import { Grid, Box, Typography, Link } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

import ImageMap from "../../ImageMap";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.light,
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: theme.spacing(2),
  },
  title: {
    fontFamily: "Montserrat",
  },
}));

export default function CardAdress(props) {
  const { adress } = props;
  const classes = useStyles();
  return (
    <Box
      className={classes.container}
      boxShadow={3}
      m={0.5}
      p={1}
      minWidth={280}
    >
      <Grid justify="space-around" alignItems="center" container>
        <Grid item>
          <Link
            underline="hover"
            href="https://www.google.com/maps/place/LES+COMMERCES+DE+DIANE/@43.5580539,1.3657896,19z/data=!4m5!3m4!1s0x12aeb0a9ef3f14fd:0x1fab75f5b7a37663!8m2!3d43.5583885!4d1.3654248"
          >
            <HomeIcon fontSize="large" color="primary" />
            {/* <ImageMap /> */}
          </Link>
        </Grid>
        <Grid item>
          <Typography
            className={classes.title}
            variant="h5"
            color="primary"
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
          >
            Voir sur google maps
            {/* <ImageMap /> */}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
