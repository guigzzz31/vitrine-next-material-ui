import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import CallIcon from "@material-ui/icons/Call";
import LinkIcon from "@material-ui/icons/Link";
import PersonIcon from "@material-ui/icons/Person";
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
          <MuiLink
            color="error"
            underline="hover"
            href="https://www.doctolib.fr/pedicure-podologue/cugnaux/carine-da-costa"
            gutterBottom
          >
            Réservez en ligne sur Doctolib
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
}
