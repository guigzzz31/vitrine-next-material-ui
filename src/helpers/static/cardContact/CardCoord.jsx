import { makeStyles } from "@mui/styles";

import { Grid, Box, Typography, Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import CardHeader from "./CardHeader";

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
  cardLine: {
    fontFamily: "Roboto",
    fontWeight: 500,
  },
}));

export default function CardCoord(props) {
  const { contact } = props;
  const classes = useStyles();
  return (
    <Box
      className={classes.container}
      boxShadow={3}
      m={0.5}
      p={1}
      minWidth={280}
    >
      {/* <CardHeader /> */}

      <Grid justify="space-around" alignItems="center" container>
        <Grid item>
          <PersonIcon fontSize="large" color="primary" />
        </Grid>
        <Grid item>
          <Typography
            className={classes.title}
            variant="h5"
            color="primary"
            gutterBottom
          >
            Coordonées
          </Typography>
          <Typography className={classes.cardLine} gutterBottom>
            {contact.num}
          </Typography>
          <Link
            color="error"
            underline="hover"
            href="https://www.doctolib.fr/pedicure-podologue/cugnaux/carine-da-costa"
            gutterBottom
          >
            Réservez en ligne sur Doctolib
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
